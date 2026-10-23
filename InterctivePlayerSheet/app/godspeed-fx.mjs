import {flowingPath,slicePath,measurePath} from './energy-flow.mjs?v=flow2';
// Apresentação independente: nenhuma carga, turno ou dado da partida passa pelo motor.
let engine,loading,current={enabled:false},pendingPulse=false,sceneFocused=false;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
export function syncGodspeedEffects(state){
 current={enabled:!!(state.runtime.visuals&&state.runtime.godspeed.active&&!state.runtime.war.active)};
 reconcile();
}
export function pulseGodspeedEffects(){pendingPulse=true;reconcile();}
export function cancelGodspeedPulse(){pendingPulse=false;engine?.endPulse();}
export function focusGodspeedScene(focused){sceneFocused=focused;}
function allowed(){return current.enabled&&!reduced()&&!document.hidden&&!!document.querySelector('main');}
function reconcile(){
 if(!allowed()){pendingPulse=false;engine?.pause();return;}
 if(engine){engine.resume();if(pendingPulse){engine.pulse();pendingPulse=false;}return;}
 if(!loading)loading=createEngine().then(value=>{engine=value;reconcile();}).catch(error=>{
  document.body.dataset.godspeedFx='unavailable';
  console.warn('Godspeed: camada de energia indisponível.',error);
 });
}
async function createEngine(){
 const {Application,Container,Graphics,Sprite,Texture}=await import('./vendor/pixi/pixi.min.mjs');
 const app=new Application();
 await app.init({preference:'webgl',backgroundAlpha:0,antialias:true,autoStart:false,sharedTicker:false,
  resolution:Math.min(devicePixelRatio||1,1.5),autoDensity:true,width:innerWidth,height:innerHeight,powerPreference:'low-power'});
 const canvas=app.canvas;
 canvas.className='godspeed-canvas';canvas.setAttribute('aria-hidden','true');canvas.hidden=true;
 canvas.dataset.engine='flow2';document.body.append(canvas);
 const field=new Container();field.eventMode='none';app.stage.addChild(field);
 const haze=new Container(),currents=new Graphics(),sparks=new Graphics();
 currents.blendMode=sparks.blendMode='add';field.addChild(haze,currents,sparks);
 const textureCanvas=document.createElement('canvas');textureCanvas.width=textureCanvas.height=96;
 const ctx=textureCanvas.getContext('2d');
 const gradient=ctx.createRadialGradient(48,48,0,48,48,48);
 gradient.addColorStop(0,'#f4ffff');gradient.addColorStop(.08,'#bbf6ff');
 gradient.addColorStop(.24,'#3aafff70');gradient.addColorStop(.54,'#1679ed20');gradient.addColorStop(1,'#0966eb00');
 ctx.fillStyle=gradient;ctx.fillRect(0,0,96,96);
 const texture=Texture.from(textureCanvas);
 const makeGlow=(container)=>{const sprite=new Sprite(texture);sprite.anchor.set(.5);sprite.blendMode='add';container.addChild(sprite);return sprite;};
 const aura=Array.from({length:3},()=>makeGlow(haze));
 const motes=Array.from({length:48},(_,i)=>({sprite:makeGlow(field),seed:i*13.17+4,age:0,life:1,stream:i%6}));
 let time=0,burst=0,running=false,dirty=true,rect=null,mainRect=null,heroVisible=false;
 let frameLeft=10,frameRight=innerWidth-10,frameTop=20,frames=0,cost=0,streamPaths=[],streams=[];
 const stroke=(g,points,width,color,alpha)=>{
  if(points.length<2||alpha<=.001)return;
  g.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++)g.lineTo(points[i].x,points[i].y);
  g.stroke({width,color,alpha,cap:'round',join:'round'});
 };
 const currentStroke=(points,alpha=1,width=1)=>{
  // Halo largo, corpo ciano e núcleo branco: clareza sem filtros de tela inteira.
  stroke(currents,points,19*width,0x248dff,alpha*.11);
  stroke(currents,points,5.5*width,0x60ceff,alpha*.38);
  stroke(currents,points,1.7*width,0xe9ffff,alpha*.95);
 };
 function measure(){
  if(!dirty)return;
  mainRect=document.querySelector('main')?.getBoundingClientRect();
  const anchor=document.querySelector('.character-banner')||document.querySelector('.portrait-panel');
  const nextRect=anchor?.getBoundingClientRect()||null;
  const nextVisible=!!(nextRect&&nextRect.bottom>20&&nextRect.top<innerHeight-20);
  rect=nextRect;heroVisible=nextVisible;
  frameLeft=Math.max(7,(mainRect?.left||0)+10);
  frameRight=Math.min(innerWidth-7,(mainRect?.right||innerWidth)-10);
  frameTop=Math.max(8,Math.min(mainRect?.top||0,innerHeight*.2)+12);
  dirty=false;
 }
 function reset(p,prewarm=false){
  p.life=1.2+(p.seed%1)*1.9;p.age=prewarm?Math.random()*p.life:0;
 }
 function buildStreams(){
  const boost=burst>0?1+burst*.3:1;
  const span=innerHeight-frameTop;
  streamPaths=[
   flowingPath({x:frameLeft,y:frameTop-50},{x:frameLeft+2,y:innerHeight+55},{time,seed:31,segments:40,amplitude:23,bend:9*Math.sin(time*.7),speed:1.15}),
   flowingPath({x:frameRight,y:innerHeight+55},{x:frameRight-2,y:frameTop-50},{time,seed:73,segments:40,amplitude:23,bend:9*Math.sin(time*.6+2),speed:1.05}),
  ];
  if(heroVisible){
   const cx=rect.left+rect.width*.74,cy=rect.top+Math.min(rect.height,330)*.5;
   const scale=Math.min(1,rect.width/700),rise=Math.min(rect.height*.45,75);
   // As correntes rodeiam o retrato e deixam o banner pelas margens.
   const routes=[
    [{x:cx+26*scale,y:cy-rise},{x:rect.left+rect.width*.12,y:rect.top-8},27*scale,17],
    [{x:cx-12*scale,y:cy+rise},{x:rect.left+rect.width*.2,y:rect.bottom+10},-42*scale,83],
    [{x:cx-32*scale,y:rect.top+7},{x:rect.right-12,y:rect.bottom+5},-50*scale,151],
    [{x:cx+24*scale,y:rect.bottom-2},{x:rect.right-6,y:rect.top-16},45*scale,211],
   ];
   routes.forEach(([from,to,bend,seed])=>streamPaths.push(flowingPath(from,to,{time,seed,segments:32,amplitude:42*scale*boost,bend:bend+Math.sin(time*1.1+seed)*22*scale,speed:1.75})));
   aura[0].position.set(cx+Math.sin(time*.4)*12,cy);
   aura[0].width=Math.min(rect.width*.7,440);aura[0].height=Math.min(rect.height*2.8,340);
   aura[0].alpha=.28+Math.sin(time*1.7)*.045+burst*.2;
  }else aura[0].alpha=0;
  for(let i=1;i<3;i++){
   aura[i].position.set(i===1?frameLeft:frameRight,frameTop+span*(.5+.35*Math.sin(time*.4+i*2)));
   aura[i].width=100;aura[i].height=Math.min(420,span*.7);aura[i].alpha=.14+burst*.035;
  }
  streams=streamPaths.map(measurePath);
 }
 function drawCurrents(){
  currents.clear();
  for(let i=0;i<streamPaths.length;i++){
   const path=streamPaths[i],stream=streams[i],edge=i<2;
   const strength=edge?.6:.9;
   // O caminho muda continuamente; as regiões brilhantes viajam sobre ele.
   stroke(currents,path,edge?12:17,0x277cf0,strength*.035);
   stroke(currents,path,edge?.65:.8,0x68cfff,strength*.17);
   for(let pulse=0;pulse<(edge?2:1);pulse++){
    const phase=(time*(edge?.28:.43)+(i*.213)+pulse*.48)%1;
    const head=phase*1.4,tail=head-(edge?.23:.31);
    const alpha=Math.min(1,phase*10,(1-phase)*8)*(burst>0?1.4:1)*strength;
    currentStroke(stream.slice(tail,head),alpha,edge?.8:1);
    // Duas bifurcações seguem o pulso; as pontas também se dobram com a corrente.
    if(!edge&&phase>.14&&phase<.84){
     for(let fork=0;fork<2;fork++){
      const u=Math.min(.9,Math.max(.05,head-.07-fork*.13)),origin=stream.pointAt(u);
      if(origin.x<rect.left+rect.width*.52)continue;
      const next=stream.pointAt(Math.min(.99,u+.06));
      const length=(fork?30:47)+24*Math.sin(phase*Math.PI),dx=next.x-origin.x,dy=next.y-origin.y,d=Math.hypot(dx,dy)||1;
      const direction=(i+fork)%2?1:-1;
      const end={x:origin.x-dy/d*length*direction+dx/d*16,y:origin.y+dx/d*length*direction+dy/d*16};
      const branch=flowingPath(origin,end,{time:time*1.2,seed:i*31+fork*71,segments:14,amplitude:19,bend:14*direction,speed:2});
      const reveal=Math.min(1,(phase-.14)*5);
      currentStroke(slicePath(branch,0,reveal),alpha*(fork?.5:.8),fork?.45:.65);
     }
    }
   }
  }
  if(burst>0&&heroVisible){
   const progress=1-burst/1.7,x=rect.left+rect.width*.74,y=rect.top+rect.height*.5;
   const radius=30+progress*Math.min(rect.width*.68,390),alpha=Math.sin(Math.PI*progress)*.38;
   currents.ellipse(x,y,radius,radius*.45).stroke({width:9*(1-progress)+1,color:0x3aafff,alpha:alpha*.14});
   currents.ellipse(x,y,radius,radius*.45).stroke({width:1.3,color:0xc0f8ff,alpha});
   for(let i=0;i<7;i++){
    const angle=i*2.39996+time*.25,reach=40+progress*210;
    const from={x:x+Math.cos(angle)*22,y:y+Math.sin(angle)*15};
    const to={x:x+Math.cos(angle)*reach,y:y+Math.sin(angle)*reach*.57};
    const bolt=flowingPath(from,to,{time,seed:600+i*17,segments:22,amplitude:28,bend:18*Math.sin(angle),speed:2.1});
    currentStroke(slicePath(bolt,Math.max(0,progress-.35),Math.min(1,progress*2.4)),Math.sin(Math.PI*progress)*.9,.85);
   }
  }
 }
 function drawMotes(dt){
  sparks.clear();
  const count=innerWidth<600?32:motes.length;
  for(let i=0;i<motes.length;i++){
   const p=motes[i];
   if(i>=count){p.sprite.alpha=0;continue;}
   p.age+=dt*(burst>0?1.35:1);if(p.age>=p.life)reset(p);
   const stream=streams[p.stream%streams.length];
   const u=p.age/p.life,position=stream.pointAt(u),x=position.x,y=position.y;
   const alpha=Math.pow(Math.sin(Math.PI*u),.8)*(.48+(p.seed%1)*.4);
   // Rastro por distância, estável em telas lentas e durante rolagem/redimensionamento.
   const trail=stream.slice(u-(24+(p.seed%1)*24)/Math.max(1,stream.length),u);
   stroke(sparks,trail,3.2,0x49bfff,alpha*.14);
   stroke(sparks,trail,.8,0xc8faff,alpha*.58);
   p.sprite.position.set(x,y);p.sprite.alpha=alpha;
   p.sprite.width=p.sprite.height=6+(p.seed%1)*6+(burst>0?3:0);
  }
 }
 function draw(ticker){
  const start=performance.now(),dt=Math.min(ticker.deltaMS/1000,.04);
  time+=dt;burst=Math.max(0,burst-dt);
  field.alpha+=((sceneFocused?.18:1)-field.alpha)*(1-Math.exp(-dt*9));
  measure();buildStreams();drawCurrents();drawMotes(dt);
  frames++;cost+=performance.now()-start;
  if(frames%60===0){canvas.dataset.updateMs=(cost/60).toFixed(2);canvas.dataset.frames=String(frames);cost=0;}
  canvas.dataset.phase=burst>0?'surge':'flow';
 }
 app.ticker.maxFPS=60;app.ticker.add(draw);
 function invalidate(){dirty=true;}
 const observer=new ResizeObserver(invalidate);observer.observe(document.querySelector('main'));
 addEventListener('scroll',invalidate,{passive:true});
 addEventListener('resize',()=>{app.renderer.resize(innerWidth,innerHeight);dirty=true;});
 addEventListener('pagehide',()=>pause());addEventListener('pageshow',reconcile);
 function pause(){
  burst=0;app.stop();running=false;canvas.hidden=true;canvas.dataset.running='false';
 }
 document.body.dataset.godspeedFx='ready';
 return {
  resume(){dirty=true;if(!running){measure();motes.forEach(p=>reset(p,true));canvas.hidden=false;canvas.dataset.running='true';app.start();running=true;}},
  pause,
  endPulse(){burst=0;},
  pulse(){burst=1.7;for(const p of motes.slice(0,24))reset(p);},
 };
}
if(typeof document!=='undefined'){
 document.addEventListener('visibilitychange',reconcile);
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',reconcile);
}
