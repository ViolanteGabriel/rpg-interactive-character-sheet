import {clamp01,smooth,kirinFrame} from './fx-geometry.mjs?v=flow2';
import {flowingPath,slicePath,pointOnPath} from './energy-flow.mjs?v=flow2';
import {focusGodspeedScene} from './godspeed-fx.mjs?v=flow2';

// Apresentação apenas. Uma cena nasce após a ação confirmada, nunca altera recursos.
let engine,loading,current={visuals:false,war:false,kirin:false},pending=null;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const permitted=()=>current.visuals&&!reduced()&&!document.hidden&&!!document.querySelector('main');
export function syncCombatEffects(state){
 current={visuals:!!state.runtime.visuals,war:!!state.runtime.war.active,kirin:!!state.runtime.kirin};
 reconcile();
}
export function playCombatEffect(kind,variant='fire'){
 if(!permitted()||!['war','kirin'].includes(kind))return;
 pending={kind,variant};reconcile();
}
export function cancelCombatEffect(){
 pending=null;engine?.cancelScene();focusGodspeedScene(false);
}
function reconcile(){
 if(!permitted()){pending=null;engine?.stop(true);return;}
 if(engine){engine.sync(current);if(pending){engine.play(pending);pending=null;}return;}
 if(!current.war&&!current.kirin&&!pending)return;
 if(!loading)loading=createEngine().then(value=>{engine=value;reconcile();}).catch(error=>{
  pending=null;document.body.dataset.combatFx='unavailable';console.warn('Efeitos War Lotus/Kirin indisponíveis.',error);
 });
}

async function createEngine(){
 const {Application,Container,Graphics,Sprite,Texture,Assets}=await import('./vendor/pixi/pixi.min.mjs');
 const app=new Application();
 await app.init({preference:'webgl',backgroundAlpha:0,antialias:true,autoStart:false,sharedTicker:false,
  width:innerWidth,height:innerHeight,resolution:Math.min(devicePixelRatio||1,1.5),autoDensity:true,powerPreference:'low-power'});
 const canvas=app.canvas;canvas.className='combat-effects-canvas';canvas.setAttribute('aria-hidden','true');
 canvas.hidden=true;canvas.dataset.motionVersion='flow2';document.body.append(canvas);
 app.stage.eventMode='none';
 const warField=new Container(),skyField=new Container(),sceneField=new Container();
 app.stage.addChild(warField,skyField,sceneField);
 const shadow=new Graphics(),warLines=new Graphics(),dust=new Graphics();warField.addChild(shadow,warLines,dust);
 const skyGlow=new Graphics(),sky=new Graphics();skyGlow.blendMode=sky.blendMode='add';skyField.addChild(skyGlow,sky);
 const glow=new Graphics();glow.blendMode='add';
 const lines=new Graphics();lines.blendMode='add';
 const textureCanvas=document.createElement('canvas');textureCanvas.width=textureCanvas.height=128;
 const context=textureCanvas.getContext('2d'),gradient=context.createRadialGradient(64,64,0,64,64,64);
 gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.13,'#ffffff99');gradient.addColorStop(.45,'#ffffff28');gradient.addColorStop(1,'#ffffff00');
 context.fillStyle=gradient;context.fillRect(0,0,128,128);
 const softTexture=Texture.from(textureCanvas);
 const aura=new Sprite(softTexture),charge=new Sprite(softTexture),impactGlow=new Sprite(softTexture);
 for(const sprite of [aura,charge,impactGlow]){sprite.anchor.set(.5);sprite.blendMode='add';sprite.alpha=0;}
 aura.tint=0x195cbd;charge.tint=0x8de5ff;impactGlow.tint=0x5fcfff;
 sceneField.addChild(aura,charge,glow);
 const echoes=[new Sprite(Texture.EMPTY),new Sprite(Texture.EMPTY)];
 const beast=new Sprite(Texture.EMPTY);
 for(const sprite of [...echoes,beast]){sprite.anchor.set(.5,.87);sprite.alpha=0;sceneField.addChild(sprite);}
 echoes.forEach(sprite=>{sprite.blendMode='add';sprite.tint=0x5ab8ff;});
 sceneField.addChild(impactGlow,lines);
 // A descarga é procedural e continua se a textura não puder ser carregada.
 Assets.load('assets/fx/kirin-beast.png?v=storm2').then(texture=>{
  for(const sprite of [...echoes,beast])sprite.texture=texture;
 }).catch(error=>console.warn('Kirin: ilustração indisponível.',error));
 let ambient={war:false,kirin:false},scene=null,time=0,running=false,dirty=true;
 let rect=null,box=null,frame={left:12,right:innerWidth-12,top:10,bottom:innerHeight-10};
 let frames=0,cost=0;
 const stroke=(graphics,points,width,color,alpha)=>{
  if(alpha<.002||points.length<2)return;
  graphics.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++)graphics.lineTo(points[i].x,points[i].y);
  graphics.stroke({width,color,alpha,cap:'round',join:'round'});
 };
 const visible=r=>r&&r.bottom>0&&r.top<innerHeight&&r.width>0;
 function measure(){
  if(!dirty)return;
  const hero=document.querySelector('.character-banner,.portrait-panel');
  const bounds=hero?.getBoundingClientRect();rect=visible(bounds)?bounds:null;
  const panel=document.querySelector('.war-panel')?.getBoundingClientRect();box=visible(panel)?panel:null;
  const main=document.querySelector('main')?.getBoundingClientRect();
  frame={left:Math.max(9,(main?.left||0)+8),right:Math.min(innerWidth-9,(main?.right||innerWidth)-8),top:12,bottom:innerHeight-12};
  dirty=false;
 }
 function start(){dirty=true;if(!running){canvas.hidden=false;canvas.dataset.running='true';app.start();running=true;}}
 function stop(clear=false){
  app.stop();canvas.hidden=true;canvas.dataset.running='false';running=false;
  if(clear)clearScene();
 }
 function clearScene(){
  scene=null;glow.clear();lines.clear();
  beast.alpha=aura.alpha=charge.alpha=impactGlow.alpha=0;
  echoes.forEach(sprite=>sprite.alpha=0);delete canvas.dataset.kirinPhase;
  focusGodspeedScene(false);
 }
 function origin(){return rect?{x:rect.left+rect.width*.74,y:rect.top+rect.height*.5}:{x:frame.right-45,y:Math.min(innerHeight*.3,180)};}
 function blackCurrent(points,width,alpha){
  // A borda revela o núcleo negro; não se usa mistura aditiva nos raios da Guerra.
  stroke(shadow,points,width+22,0x806d87,alpha*.055);
  stroke(shadow,points,width+10,0x806d87,alpha*.10);
  stroke(warLines,points,width+3.4,0xa399ad,alpha*.4);
  stroke(warLines,points,width+2,0x2a2030,alpha*.95);
  stroke(warLines,points,width,0x010106,alpha);
 }
 function electric(points,width,alpha){
  stroke(glow,points,width+42,0x2479ed,alpha*.025);
  stroke(glow,points,width+22,0x2479ed,alpha*.065);
  stroke(glow,points,width+8,0x59c9ff,alpha*.18);
  stroke(lines,points,width,0xb5f5ff,alpha*.9);
  stroke(lines,points,Math.max(.7,width*.3),0xf0ffff,alpha);
 }
 function drawWar(){
  shadow.clear();warLines.clear();dust.clear();
  if(!ambient.war)return;
  const source=origin(),burst=scene?.kind==='war'?Math.sin(Math.PI*clamp01(scene.age/1.5)):0;
  const h=innerHeight,mobile=innerWidth<700;
  // Correntes viajam pelas margens da ficha mesmo quando o banner sai da tela.
  for(let i=0;i<4;i++){
   const side=i%2,edge=side?frame.right:frame.left,direction=side?-1:1;
   const phase=(time*(.19+i*.014)+i*.29)%1;
   const from={x:edge,y:side?h+70:-70},to={x:edge+direction*8,y:side?-70:h+70};
   const path=flowingPath(from,to,{time,seed:91+i*31,segments:40,amplitude:mobile?25:52,bend:direction*4,speed:.8});
   const head=clamp01(phase*1.28),tail=Math.max(0,head-.37);
   const alpha=Math.sin(Math.PI*phase)*(.6+burst*.3),section=slicePath(path,tail,head);
   blackCurrent(section,3.5+burst*2.3,alpha);
   const tip=pointOnPath(path,head),root=pointOnPath(path,Math.max(tail,head-.13));
   if(tip){
    const pulse=slicePath(path,Math.max(tail,head-.055),head);
    stroke(warLines,pulse,1,0xc4b6cb,alpha*.5);
   }
   if(root&&head>.2){
    const branch=flowingPath(root,{x:edge+direction*(mobile?26:48),y:root.y+direction*68},{time,seed:301+i,segments:13,amplitude:12,bend:direction*12,speed:1.25});
    blackCurrent(slicePath(branch,0,smooth((head-tail)/.25)),1.3,alpha*.6);
   }
  }
  // Arcos largos junto ao retrato se enrolam e abrem, em vez de repetir um traçado.
  if(rect){
   const reach=Math.min(rect.width*.25,230),height=Math.min(rect.height*.65,95);
   for(let i=0;i<3;i++){
    const phase=(time*.25+i*.33)%1,alpha=Math.sin(Math.PI*phase)*(.65+burst*.3);
    const from={x:source.x+Math.sin(time*.8+i*2)*25,y:source.y-height*(i%2?1:-1)};
    const to={x:source.x+Math.cos(time*.55+i*2.1)*reach,y:source.y+Math.sin(time*.7+i*2.1)*height*1.4};
    const path=flowingPath(from,to,{time,seed:770+i*41,segments:27,amplitude:65,bend:Math.sin(time*.85+i)*64,speed:1.5});
    blackCurrent(slicePath(path,Math.max(0,phase*1.5-.65),Math.min(1,phase*1.5)),3.2+burst*2,alpha);
   }
  }
  if(box){
   const path=flowingPath({x:box.right-9,y:box.top+18},{x:box.right-9,y:Math.min(box.bottom-12,h+30)},{time,seed:916,segments:25,amplitude:10,bend:6,speed:1.05});
   const phase=(time*.28)%1;blackCurrent(slicePath(path,Math.max(0,phase-.4),phase),2.5,Math.sin(Math.PI*phase)*.8);
  }
  // Poeira escura com rastros discretos: deriva contínua, sem piscar o fundo.
  for(let i=0;i<(mobile?16:26);i++){
   const phase=(time*(.1+(i%4)*.014)+i*.618033)%1,side=i%2,edge=side?frame.right:frame.left;
   const x=edge+Math.sin(time*.9+i*1.8)*(mobile?12:22),y=h*(1-phase);
   const alpha=Math.sin(Math.PI*phase)*.65,length=9+(i%4)*4;
   stroke(dust,[{x:x-2,y:y+length},{x,y}],2.3,0x09050e,alpha);
   dust.circle(x,y,1.1+(i%3)*.3).fill({color:0x9f8ca8,alpha:alpha*.55});
  }
  if(burst>0){
   const u=clamp01(scene.age/1.5),radius=18+(1-Math.pow(1-u,3))*Math.min(innerWidth*.43,420);
   const ellipse=Array.from({length:49},(_,i)=>{const a=i/48*Math.PI*2;return {x:source.x+Math.cos(a)*radius,y:source.y+Math.sin(a)*radius*.35};});
   blackCurrent(ellipse,5*(1-u)+1,burst*.7);
   for(let i=0;i<4;i++){
    const angle=i*Math.PI*.5+.5,reach=110+u*180;
    const path=flowingPath(source,{x:source.x+Math.cos(angle)*reach,y:source.y+Math.sin(angle)*reach*.5},{time,seed:871+i,segments:28,amplitude:23,bend:28,speed:1.8});
    blackCurrent(slicePath(path,Math.max(0,u-.4),Math.min(1,u*2.2)),4,burst*.8);
   }
  }
 }
 function sceneLayout(){
  const width=frame.right-frame.left;
  return {x:frame.left+width*(innerWidth<700?.5:.59),top:Math.max(65,Math.min(rect?.top||innerHeight*.2,innerHeight*.24)),targetY:innerHeight*.76,width};
 }
 function vortex(graphics,halo,x,y,radius,amount,seed=0){
  for(let i=0;i<3;i++){
   const angle=time*(.65+i*.15)+i*2.094+seed,points=[];
   for(let j=0;j<=32;j++){
    const u=j/32,a=angle+u*Math.PI*1.4,r=radius*(.48+u*.52);
    points.push({x:x+Math.cos(a)*r,y:y+Math.sin(a)*r*.24+Math.sin(u*14+time*2+i)*3});
   }
   stroke(halo,points,12,0x2278b9,amount*.09);
   stroke(graphics,points,1.3,0x8bd9ff,amount*.55);
   const pulse=slicePath(points,(time*.45+i*.3)% .6,Math.min(1,(time*.45+i*.3)%.6+.22));
   stroke(graphics,pulse,.8,0xd9faff,amount*.7);
  }
 }
 function drawSky(){
  skyGlow.clear();sky.clear();
  if(!ambient.kirin||scene?.kind==='kirin')return;
  const source=origin(),x=rect?source.x:frame.left+(frame.right-frame.left)*.6,y=rect?Math.max(22,rect.top-13):70;
  vortex(sky,skyGlow,x,y,Math.min((rect?.width||innerWidth)*.22,160),.38);
  for(let i=0;i<10;i++){
   const angle=time*.45+i*2.39996,radius=55+(i%4)*20;
   sky.circle(x+Math.cos(angle)*radius,y+Math.sin(angle)*radius*.22,1).fill({color:0xaff1ff,alpha:.2});
  }
 }
 function drawKirin(){
  glow.clear();lines.clear();beast.alpha=aura.alpha=charge.alpha=impactGlow.alpha=0;
  echoes.forEach(sprite=>sprite.alpha=0);
  if(scene?.kind!=='kirin'){delete canvas.dataset.kirinPhase;return;}
  const t=scene.age,f=kirinFrame(t,scene.variant),channel=scene.variant==='channel';
  const {x,top,targetY,width}=sceneLayout(),mobile=innerWidth<700;
  const skyY=top+18,orbit=Math.min(width*.31,250)*(channel?.75+f.sky*.25:1-f.drop*.35);
  const gathering=f.sky*(1-f.drop*.9);
  aura.position.set(x,top+70);aura.width=orbit*3.2;aura.height=orbit*1.7;aura.alpha=gathering*.3;
  charge.position.set(x,skyY);charge.width=90+f.sky*90;charge.height=charge.width*.5;charge.alpha=gathering*.55;
  vortex(lines,glow,x,skyY,orbit,gathering,scene.seed%7);
  // Partículas espiralam para o centro da tempestade durante a preparação.
  const preparation=channel?f.sky:f.sky*(1-f.drop);
  for(let i=0;i<(mobile?12:22)&&preparation>.001;i++){
   const phase=(time*.42+i*.618)%1,angle=time*1.5+i*2.39996,radius=orbit*(1-phase);
   const px=x+Math.cos(angle)*radius,py=skyY+Math.sin(angle)*radius*.3;
   const trail=[{x:x+Math.cos(angle-.2)*(radius+9),y:skyY+Math.sin(angle-.2)*(radius+9)*.3},{x:px,y:py}];
   stroke(glow,trail,5,0x469cfa,preparation*.12);
   stroke(lines,trail,1,0xc4f8ff,preparation*Math.sin(Math.PI*phase)*.8);
  }
  const baseSize=Math.min(width*.67,mobile?330:490);
  function pose(sprite,age,alpha){
   const poseFrame=kirinFrame(age,scene.variant),drop=poseFrame.drop;
   const size=baseSize*(channel?.55:.62+drop*.25),ratio=beast.texture.height/beast.texture.width;
   sprite.position.set(x+Math.sin(age*3)*4*(1-drop),channel?top+130:top+115+drop*(targetY-top-115));
   sprite.width=size;sprite.height=size*ratio*(1+drop*.12);
   sprite.rotation=channel?-.08:-.12+drop*.14;sprite.alpha=alpha;
  }
  if(beast.texture!==Texture.EMPTY){
   pose(beast,t,f.beast*(channel?.25:1));
   if(!channel&&f.drop>.025){
    echoes.forEach((sprite,i)=>pose(sprite,Math.max(0,t-.045*(i+1)),f.beast*f.drop*(i?.055:.12)));
   }
  }
  if(!channel&&f.beast>.01){
   const head={x:beast.x||x,y:top+115+f.drop*(targetY-top-115)};
   // Filamentos acompanham a descida e mudam de forma continuamente.
   for(let i=0;i<2;i++){
    const side=i%2?-1:1,offset=38+(i>>1)*55;
    const from={x:x+side*(offset+30),y:skyY-10},to={x:head.x+side*offset*(1-f.drop*.6),y:head.y-45};
    const path=flowingPath(from,to,{time:time*1.1,seed:scene.seed+i*17,segments:30,amplitude:35+f.drop*35,bend:side*24,speed:1.8});
    electric(path,1.4,f.beast*(.35+f.drop*.3));
    const phase=(time*1.5+i*.25)%1;electric(slicePath(path,Math.max(0,phase-.14),phase),2,f.beast*.65);
   }
  }
  if(f.strike>.001){
   const strike=flowingPath({x:x-20,y:-45},{x,y:targetY},{time,seed:scene.seed,segments:48,amplitude:110,bend:20,speed:3});
   const reveal=smooth((t-1.45)/.13),section=slicePath(strike,0,reveal);
   electric(section,6+f.strike*2,f.strike);
   const pulse=(t*3.1)%1;
   electric(slicePath(section,Math.max(0,pulse-.2),pulse),3.5,f.strike);
   for(let i=0;i<(mobile?3:5);i++){
    const at=.2+i*.14;if(at>reveal)continue;
    const root=pointOnPath(strike,at),side=i%2?-1:1;
    const branch=flowingPath(root,{x:root.x+side*Math.min(width*.23,75+i*15),y:root.y+55+i*8},{time,seed:scene.seed+80+i,segments:17,amplitude:38,bend:side*24,speed:2.4});
    electric(slicePath(branch,0,smooth((reveal-at)/.18)),1.8,f.strike*.85);
    if(i%2===0){
     const split=pointOnPath(branch,.56),tip={x:split.x+side*30,y:split.y-46};
     electric(flowingPath(split,tip,{time,seed:scene.seed+160+i,segments:10,amplitude:20,speed:2}),.8,f.strike*.55);
    }
   }
  }
  if(f.impact>.001){
   const u=clamp01((t-1.56)/1.55),radius=(1-Math.pow(1-u,3))*Math.min(width*.48,340);
   impactGlow.position.set(x,targetY);impactGlow.width=100+radius*1.5;impactGlow.height=impactGlow.width*.38;impactGlow.alpha=f.impact*.65*(1-u);
   const ring=Array.from({length:65},(_,i)=>{const a=i/64*Math.PI*2,r=radius+Math.sin(a*7-time*6)*4*(1-u);return {x:x+Math.cos(a)*r,y:targetY+Math.sin(a)*r*.26};});
   electric(ring,1.6,f.impact*.65);
   if(u>.08){const wake=ring.map(p=>({x:x+(p.x-x)*.79,y:targetY+(p.y-targetY)*.79}));stroke(glow,wake,8,0x328ed5,f.impact*.12);}
   for(let i=0;i<(mobile?26:42);i++){
    const angle=i*2.39996,speed=95+(i%7)*28,age=t-1.56,gravity=20;
    const position=age=>({x:x+Math.cos(angle)*speed*age,y:targetY+Math.sin(angle)*speed*age*.42-age*55+gravity*age*age});
    const now=position(age),before=position(Math.max(0,age-.045));
    stroke(glow,[before,now],5,0x399df7,f.impact*.17);
    stroke(lines,[before,now],i%3===0?1.8:.9,0xc2f7ff,f.impact*(1-u));
   }
  }
  canvas.dataset.kirinPhase=channel?'channel':f.strike>.1?'strike':f.impact>.1?'impact':f.drop>=.99?'dissipate':f.drop>.02?'descent':'gather';
 }
 function draw(ticker){
  const begin=performance.now(),dt=Math.min(ticker.deltaMS/1000,.05);time+=dt;measure();
  if(scene){scene.age+=dt;if(scene.age>(scene.kind==='war'?1.5:kirinFrame(0,scene.variant).duration))clearScene();}
  // O ambiente cede espaço à cena e retorna depois do impacto.
  warField.alpha+=((scene?.kind==='kirin'?.2:1)-warField.alpha)*(1-Math.exp(-dt*9));
  drawWar();drawSky();drawKirin();
  if(!scene&&!ambient.war&&!ambient.kirin)stop();
  frames++;cost+=performance.now()-begin;
  if(frames%120===0){canvas.dataset.updateMs=(cost/120).toFixed(2);cost=0;}
 }
 app.ticker.maxFPS=60;app.ticker.add(draw);
 addEventListener('scroll',()=>{dirty=true;},{passive:true});
 addEventListener('resize',()=>{app.renderer.resize(innerWidth,innerHeight);dirty=true;});
 const resizeObserver=new ResizeObserver(()=>{dirty=true;});resizeObserver.observe(document.querySelector('main'));
 document.addEventListener('visibilitychange',reconcile);matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',reconcile);
 addEventListener('pagehide',()=>stop(true));addEventListener('pageshow',reconcile);
 document.body.dataset.combatFx='ready';
 return {stop,sync(value){ambient=value;dirty=true;if(scene?.kind==='war'&&!value.war)clearScene();if(value.war||value.kirin||scene)start();else stop();},
  cancelScene(){clearScene();if(!ambient.war&&!ambient.kirin)stop();},
  play(value){measure();scene={...value,age:0,seed:Math.random()*1e6|0};focusGodspeedScene(value.kind==='kirin');start();}};
}
if(typeof document!=='undefined'){
 document.addEventListener('visibilitychange',()=>{if(!engine)reconcile();});
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{if(!engine)reconcile();});
}
