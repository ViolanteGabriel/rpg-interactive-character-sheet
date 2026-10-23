import {lightningPath} from './fx-geometry.mjs';
// Camada de apresentação isolada: nunca lê ou grava recursos da partida.
let engine, loading, current={enabled:false}, pendingPulse=false;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
export function syncGodspeedEffects(state){
 current={enabled:!!(state.runtime.visuals&&state.runtime.godspeed.active&&!state.runtime.war.active)};
 reconcile();
}
export function pulseGodspeedEffects(){pendingPulse=true;reconcile();}
function allowed(){return current.enabled&&!reduced()&&!document.hidden&&!!document.querySelector('.character-banner,.portrait-panel');}
function reconcile(){
 if(!allowed()){pendingPulse=false;engine?.pause();return;}
 if(engine){engine.resume();if(pendingPulse){engine.pulse();pendingPulse=false;}return;}
 if(!loading)loading=createEngine().then(value=>{engine=value;reconcile();}).catch(error=>{
  document.body.dataset.godspeedFx='unavailable';
  console.warn('Godspeed: camada de partículas indisponível.',error);
 });
}
async function createEngine(){
 const {Application,Container,Graphics,Sprite,Texture}=await import('./vendor/pixi/pixi.min.mjs');
 const app=new Application();
 await app.init({preference:'webgl',backgroundAlpha:0,antialias:true,autoStart:false,
  resolution:Math.min(devicePixelRatio||1,1.5),autoDensity:true,width:innerWidth,height:innerHeight,
  powerPreference:'low-power',sharedTicker:false});
 const canvas=app.canvas;canvas.className='godspeed-canvas';canvas.setAttribute('aria-hidden','true');
 document.body.append(canvas);
 const field=new Container();field.eventMode='none';app.stage.addChild(field);
 const trails=new Graphics();trails.blendMode='add';field.addChild(trails);
 const highlights=new Graphics();highlights.blendMode='add';field.addChild(highlights);
 let brightArcs=[],nextBright=0;
 const textureCanvas=document.createElement('canvas');textureCanvas.width=textureCanvas.height=64;
 const ctx=textureCanvas.getContext('2d'),gradient=ctx.createRadialGradient(32,32,0,32,32,32);
 gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.08,'#d9faff');gradient.addColorStop(.22,'#58cfff99');gradient.addColorStop(1,'#169aff00');
 ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);
 const texture=Texture.from(textureCanvas);
 const make=()=>{const sprite=new Sprite(texture);sprite.anchor.set(.5);sprite.blendMode='add';field.addChild(sprite);return {sprite,age:0,life:1,history:[],seed:Math.random()*100,spill:false};};
 const motes=Array.from({length:52},make);
 let width=800,height=120,time=0,burst=0,running=false,anchor=null,rect=null,dirty=true,frames=0,cost=0;
 const reset=(p,prewarm=false)=>{
  p.life=1.5+Math.random()*2.6;p.age=prewarm?Math.random()*p.life:0;p.seed=Math.random()*100;
  p.spill=Math.random()<.32;p.direction=Math.random()<.78?-1:1;
  p.origin=.65+Math.random()*.2;p.lane=(Math.random()-.5)*height*.85;
  p.reach=p.direction<0?width*(.35+Math.random()*.65):width*(.12+Math.random()*.25);
  p.lift=(Math.random()<.5?-1:1)*(p.spill?65+Math.random()*100:10+Math.random()*25);
  p.history.length=0;
 };
 const measure=()=>{
  const next=document.querySelector('.character-banner')||document.querySelector('.portrait-panel');
  if(next!==anchor){anchor=next;dirty=true;}
  if(dirty){rect=anchor?.getBoundingClientRect();dirty=false;
   if(rect){width=rect.width;height=Math.min(rect.height,250);}}
  return rect&&rect.bottom>0&&rect.top<innerHeight;
 };
 function draw(ticker){
  const start=performance.now(),dt=Math.min(ticker.deltaMS/1000,.04);time+=dt;burst=Math.max(0,burst-dt);
  if(!measure()){canvas.style.visibility='hidden';return;}
  canvas.style.visibility='visible';field.position.set(rect.left,rect.top);
  trails.clear();
  for(const p of motes){
   p.age+=dt*(burst>0?1.35:1);if(p.age>=p.life)reset(p);
   const u=p.age/p.life,envelope=Math.sin(Math.PI*u),speed=1-Math.pow(1-u,1.4);
   const x=width*p.origin+p.direction*p.reach*speed;
   const y=height*.48+p.lane+p.lift*u*u+Math.sin(u*9+time*.7+p.seed)*envelope*(p.spill?30:20);
   const textZone=x<width*.48&&y>height*.1&&y<height*.85;
   const alpha=envelope*(p.spill?.48:.8)*(burst>0?1.3:1)*(textZone?.16:1);
   p.history.push({x,y});if(p.history.length>20)p.history.shift();
   if(!p.spill&&p.history.length>2){
    // Le même sillage en trois épaisseurs, sans filtre plein écran.
    for(const [strokeWidth,opacity,color] of [[7,.045,0x278dff],[2.2,.22,0x57cfff],[.7,.65,0xd7f9ff]]){
     const h=p.history;trails.moveTo(h[0].x,h[0].y);
     for(let j=1;j<h.length;j++)trails.lineTo(h[j].x,h[j].y);
     trails.stroke({width:strokeWidth,color,alpha:alpha*opacity});
    }
   }
   p.sprite.position.set(x,y);p.sprite.alpha=alpha;
   const size=(p.spill?6:10)+(burst>0?5:0);p.sprite.width=p.sprite.height=size;
  }
  // Quelques connexions brèves et mobiles entre les courants proches.
  const phase=time%1.8;
  if(phase<.13){const a=motes[Math.floor(time/1.8)%40],b=motes[(Math.floor(time/1.8)+7)%40];
   const dx=b.sprite.x-a.sprite.x,dy=b.sprite.y-a.sprite.y;
   if(Math.hypot(dx,dy)<110){trails.moveTo(a.sprite.x,a.sprite.y).lineTo(a.sprite.x+dx*.4,a.sprite.y+dy*.5-7).lineTo(a.sprite.x+dx*.65,a.sprite.y+dy*.5+4).lineTo(b.sprite.x,b.sprite.y).stroke({width:.8,color:0xb9f5ff,alpha:(1-phase/.13)*.65});}}
  // Descargas branco-azuladas curtas, mais claras que os rastros do ambiente.
  highlights.clear();
  if(time>nextBright){
   const from={x:width*(.55+Math.random()*.38),y:Math.random()<.5?-8:height+8};
   const to={x:from.x+(Math.random()-.5)*150,y:from.y+(Math.random()-.5)*75};
   brightArcs.push({points:lightningPath(from,to,Math.random()*1e6|0,9,.3),born:time,life:.3+Math.random()*.22});
   nextBright=time+.24+Math.random()*.5;
  }
  brightArcs=brightArcs.filter(a=>time-a.born<a.life);
  for(const arc of brightArcs){const alpha=Math.sin(Math.PI*(time-arc.born)/arc.life);
   for(const [width,color,opacity] of [[7,0x67d7ff,.1],[2,0xc4f8ff,.65],[.8,0xffffff,1]]){
    highlights.moveTo(arc.points[0].x,arc.points[0].y);for(const p of arc.points.slice(1))highlights.lineTo(p.x,p.y);
    highlights.stroke({width,color,alpha:alpha*opacity});
   }
  }
  frames++;cost+=performance.now()-start;
  if(frames%120===0){canvas.dataset.updateMs=(cost/120).toFixed(2);cost=0;}
 }
 app.ticker.maxFPS=60;app.ticker.add(draw);
 function invalidate(){dirty=true;}
 const observer=new ResizeObserver(invalidate);observer.observe(document.querySelector('#view')||document.body);
 addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',()=>{
  app.renderer.resize(innerWidth,innerHeight);dirty=true;
 });
 document.addEventListener('visibilitychange',reconcile);
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',reconcile);
 addEventListener('pagehide',()=>{app.stop();running=false;canvas.hidden=true;});addEventListener('pageshow',reconcile);
 document.body.dataset.godspeedFx='ready';
 return {
  resume(){dirty=true;if(!running){measure();motes.forEach(p=>reset(p,true));canvas.hidden=false;app.start();running=true;}},
  pause(){brightArcs=[];if(running){app.stop();canvas.hidden=true;running=false;}},
  pulse(){burst=1.4;for(const p of motes.slice(0,24))reset(p);},
 };
}
// Preferências são observadas também antes do carregamento do motor.
if(typeof document!=='undefined'){
 document.addEventListener('visibilitychange',()=>{if(!engine)reconcile();});
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{if(!engine)reconcile();});
}
