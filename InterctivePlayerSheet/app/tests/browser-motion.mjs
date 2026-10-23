// Chromium real + CDP, sem dependências npm. Perfil e servidor exclusivos do teste.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {readFile,mkdtemp,rm,mkdir,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,extname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
const screenshotOption=process.argv.indexOf('--screenshots');
const screenshots=process.env.MOTION_SCREENSHOTS||(screenshotOption<0?undefined:process.argv[screenshotOption+1]);
const profile=await mkdtemp(resolve(tmpdir(),'supros-motion-'));
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const mime={'.html':'text/html','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png'};
const server=createServer(async(request,response)=>{
 try{
  const path=resolve(root,'.'+decodeURIComponent(new URL(request.url,'http://localhost').pathname));
  if(path!==root.slice(0,-1)&&!path.startsWith(root))throw Error('Caminho inválido');
  const file=path===root.slice(0,-1)?resolve(root,'index.html'):path;
  const data=await readFile(file);response.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream'});response.end(data);
 }catch{response.writeHead(404);response.end();}
});
let chrome,ws;
try{
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
 const origin=`http://127.0.0.1:${server.address().port}`;
 let launchError;
 chrome=spawn(process.env.CHROMIUM_PATH||'chromium',['--headless','--disable-gpu-sandbox','--enable-unsafe-swiftshader','--no-first-run','--no-default-browser-check',`--user-data-dir=${profile}`,'--remote-debugging-port=0','about:blank'],{stdio:['ignore','ignore','pipe']});
 chrome.on('error',error=>{launchError=error;});
 let browserLog='';chrome.stderr.on('data',chunk=>{browserLog=(browserLog+chunk).slice(-4000);});
 let port;
 for(let i=0;i<100;i++){
  if(launchError)throw launchError;
  if(chrome.exitCode!==null)throw Error(`Chromium encerrou: ${browserLog}`);
  try{port=Number((await readFile(resolve(profile,'DevToolsActivePort'),'utf8')).split('\n')[0]);break;}catch{await sleep(100);}
 }
 assert.ok(port,`Chromium não iniciou: ${browserLog}`);
 const pages=await(await fetch(`http://127.0.0.1:${port}/json`)).json();
 ws=new WebSocket(pages.find(page=>page.type==='page').webSocketDebuggerUrl);
 await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
 let id=0;const pending=new Map(),errors=[],requests=[];
 ws.addEventListener('message',event=>{
  const message=JSON.parse(event.data);
  if(message.id){const task=pending.get(message.id);if(!task)return;clearTimeout(task.timer);pending.delete(message.id);message.error?task.reject(message.error):task.resolve(message.result);}
  if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails);
  if(message.method==='Network.requestWillBeSent')requests.push(message.params.request.url);
  if(message.method==='Network.responseReceived'&&message.params.response.status>=400&&!message.params.response.url.endsWith('/favicon.ico'))errors.push(message.params.response);
 });
 const send=(method,params={})=>new Promise((resolve,reject)=>{
  const request=++id,timer=setTimeout(()=>{pending.delete(request);reject(Error(`CDP expirou: ${method}`));},20000);
  pending.set(request,{resolve,reject,timer});ws.send(JSON.stringify({id:request,method,params}));
 });
 const evaluate=async expression=>{
  const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
  if(result.exceptionDetails)throw Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
 };
 async function waitFor(expression,label=expression){
  for(let i=0;i<100;i++){if(await evaluate(expression))return;await sleep(100);}
  throw Error(`Não ocorreu: ${label}. Erros: ${JSON.stringify(errors)}`);
 }
 async function click(selector){
  await waitFor(`document.querySelector(${JSON.stringify(selector)})&&!document.querySelector(${JSON.stringify(selector)}).disabled`);
  await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
 }
 async function go(path){await send('Page.navigate',{url:origin+'/'+path});await waitFor(`location.href===${JSON.stringify(origin+'/'+path)}&&document.readyState==='complete'`);}
 const viewport=async width=>send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
 const reduced=async value=>send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:value?'reduce':'no-preference'}]});
 const screenshot=async name=>{
  if(!screenshots)return;
  const directory=resolve(screenshots);await mkdir(directory,{recursive:true});
  const shot=await send('Page.captureScreenshot',{format:'png'});await writeFile(resolve(directory,name+'.png'),Buffer.from(shot.data,'base64'));
 };
 const allStopped="[...document.querySelectorAll('canvas')].every(c=>c.hidden&&c.dataset.running==='false')";
 const speedRunning="document.querySelector('.godspeed-canvas')?.dataset.running==='true'";
 const combatRunning="document.querySelector('.combat-effects-canvas')?.dataset.running==='true'";
 const phase=value=>`document.querySelector('.combat-effects-canvas')?.dataset.kirinPhase===${JSON.stringify(value)}`;
 await send('Page.enable');await send('Runtime.enable');await send('Network.enable');
 await viewport(1440);await reduced(true);await go('combat-preview.html');
 await waitFor("document.querySelector('#status')?.textContent.includes('reduzido')");
 assert.equal(await evaluate("document.querySelectorAll('canvas').length"),0);
 await reduced(false);await waitFor(speedRunning);
 assert.equal(await evaluate("getComputedStyle(document.querySelector('canvas')).pointerEvents"),'none');
 await sleep(600);await screenshot('godspeed');
 await click('#war');await waitFor(combatRunning);
 assert.equal(await evaluate(speedRunning),false);
 await screenshot('war-lotus');
 await click('#channel');await waitFor(phase('channel'));
 await click('#fire');await waitFor(phase('descent'));await screenshot('kirin-descent');
 await waitFor(phase('impact'));await screenshot('kirin-impact');
 await waitFor("!document.querySelector('.combat-effects-canvas').dataset.kirinPhase");
 await click('#war');await waitFor(speedRunning);
 await click('#effects');await waitFor(allStopped);
 await click('#effects');await waitFor(speedRunning);
 await click('#channel');await waitFor(phase('channel'));
 await reduced(true);await waitFor(allStopped);
 await reduced(false);await waitFor(combatRunning);
 assert.equal(await evaluate("document.querySelector('.combat-effects-canvas').dataset.kirinPhase"),undefined);
 for(const width of [320,390,1440]){
  await viewport(width);await sleep(150);
  assert.ok(await evaluate('document.documentElement.scrollWidth<=innerWidth'),`Prévia transborda em ${width}px`);
  await screenshot(`preview-${width}`);
 }
 assert.equal(await evaluate('document.querySelectorAll("canvas").length'),2);
 assert.equal(await evaluate('indexedDB.databases().then(databases=>databases.length)'),0,'Prévias não devem abrir a partida');
 console.log('✓ Prévias: carga local, prioridade, etapas do Kirin, pausa, responsividade e isolamento.');

 await go('');await waitFor("document.querySelector('#save-status').textContent.includes('Salvo')");
 const stored=()=>evaluate("new Promise((resolve,reject)=>{const r=indexedDB.open('supros-sheet',1);r.onsuccess=()=>{const db=r.result,q=db.transaction('state').objectStore('state').get('current');q.onsuccess=()=>{db.close();resolve(q.result);};q.onerror=()=>reject(q.error);};})");
 async function savedClick(selector){
  const before=(await stored()).updatedAt;await click(selector);
  for(let i=0;i<100;i++){if((await stored()).updatedAt!==before)return;await sleep(100);}
  throw Error(`Estado não foi salvo: ${selector}`);
 }
 const initial=await stored();
 await savedClick('#toggle-combat');await savedClick('#next-turn');
 await savedClick('[data-action="use"][data-id="skill-61"]');await waitFor(speedRunning);
 const transformed=await stored();
 await send('Page.reload');await waitFor("document.querySelector('.godspeed-canvas')?.dataset.phase==='flow'");
 assert.deepEqual(await stored(),transformed,'Reabrir a ficha não altera recursos');
 assert.equal(await evaluate("document.querySelector('.godspeed-canvas').dataset.phase"),'flow');
 await screenshot('combat-godspeed');
 await savedClick('[data-action="use"][data-id="skill-56"]');await waitFor(phase('channel'));
 const channelled=await stored(),charge=s=>s.character.skills.find(skill=>skill.id==='skill-56').current;
 assert.equal(charge(channelled),charge(initial)-1);
 await savedClick('[data-action="use"][data-id="skill-56"]');await waitFor(phase('descent'));
 assert.equal(charge(await stored()),charge(channelled),'Disparo não consome segunda carga');
 await savedClick('#undo');
 assert.equal(await evaluate("document.querySelector('.combat-effects-canvas').dataset.kirinPhase"),undefined);
 assert.equal((await stored()).runtime.kirin,true);
 await savedClick('[data-action="use"][data-id="skill-56"]');await waitFor(phase('gather'));
 await click('[data-tab="abilities"]');
 assert.equal(await evaluate("document.querySelector('.combat-effects-canvas').dataset.kirinPhase"),undefined);
 await click('[data-tab="combat"]');
 await savedClick('[data-action="use"][data-id="skill-60"]');
 assert.equal(await evaluate("document.querySelector('#fx-layer').children.length"),1);
 await click('[data-action="draw-war"]');
 assert.equal(await evaluate("document.querySelector('#fx-layer').children.length"),0);
 await evaluate("document.querySelector('[name=roll1]').value='15';document.querySelector('#draw-war-form').requestSubmit()");
 await waitFor("document.body.dataset.form==='war'");await waitFor(combatRunning);
 assert.equal(await evaluate(speedRunning),false);
 await savedClick('[data-action="toggle-war"]');await waitFor(speedRunning);
 const beforeSettings=await stored();
 await click('[data-tab="settings"]');await savedClick('[data-action="toggle-visuals"]');await waitFor(allStopped);
 assert.equal(await evaluate("document.getAnimations().filter(a=>a.playState==='running').length"),0);
 await savedClick('[data-action="toggle-visuals"]');await click('[data-tab="combat"]');
 await waitFor(speedRunning);
 assert.deepEqual((await stored()).character,beforeSettings.character);
 await savedClick('[data-action="use"][data-id="skill-62"]');
 await reduced(true);await waitFor(allStopped);
 assert.equal(await evaluate("document.querySelector('#fx-layer').children.length"),0);
 await reduced(false);await waitFor(speedRunning);
 assert.equal(await evaluate("document.querySelector('#fx-layer').children.length"),0,'Cena cancelada não reaparece');
 await savedClick('[data-action="use"][data-id="skill-55"]');
 const background=await send('Target.createTarget',{url:'about:blank'});
 try{
  await waitFor('document.hidden');await waitFor(allStopped);
  assert.equal(await evaluate("document.querySelector('#fx-layer').children.length"),0);
  await send('Page.bringToFront');await waitFor(speedRunning);
  assert.equal(await evaluate("document.querySelector('#fx-layer').children.length"),0);
 }finally{await send('Target.closeTarget',{targetId:background.targetId});}
 for(const width of [320,390,1440]){
  await viewport(width);await sleep(150);
  assert.ok(await evaluate('document.documentElement.scrollWidth<=innerWidth'),`Ficha transborda em ${width}px`);
  await screenshot(`combat-${width}`);
 }
 assert.equal(await evaluate('document.querySelectorAll("canvas").length'),2);
 console.log('✓ Ficha: persistência, cargas, prioridade de formas, desfazer, navegação, diálogos e movimento reduzido.');
 await go('motion-preview.html');
 for(const name of ['Shunpo','Clone','Lightning Reaver','Lightning Spear','Energy Transmutation','Parry','Flash Bang','Dissipar Clone']){
  await evaluate(`[...document.querySelectorAll('#techniques button')].find(b=>b.textContent===${JSON.stringify(name)}).click()`);
  assert.equal(await evaluate('document.querySelectorAll(".ability-scene").length'),1);
 }
 await reduced(true);await waitFor('document.querySelectorAll(".ability-scene").length===0');
 assert.deepEqual(errors,[],'Erros do navegador');
 assert.deepEqual(requests.filter(url=>/^https?:/.test(url)&&!url.startsWith(origin+'/')),[],'Recursos devem funcionar offline');
 console.log('✓ Técnicas CSS: substituição de cena e cancelamento. Nenhuma exceção ou requisição externa.');
}finally{
 ws?.close();
 if(chrome&&chrome.exitCode===null&&!chrome.killed){const exited=once(chrome,'exit');chrome.kill();await exited;}
 await new Promise(resolve=>server.close(resolve));
 await rm(profile,{recursive:true,force:true,maxRetries:4,retryDelay:250});
}
