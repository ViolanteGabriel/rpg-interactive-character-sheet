import {clamp01,smooth,lightningPath,kirinFrame} from './fx-geometry.mjs';
let engine,loading,current={visuals:false,war:false,kirin:false},pending=null;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function anchor(){return document.querySelector('.character-banner,.portrait-panel');}
function permitted(){return current.visuals&&!reduced()&&!document.hidden&&!!anchor();}
export function syncCombatEffects(state){
 current={visuals:!!state.runtime.visuals,war:!!state.runtime.war.active,kirin:!!state.runtime.kirin};
 if(!permitted())pending=null;
 reconcile();
}
export function playCombatEffect(kind,variant='fire'){
 if(!permitted())return;
 pending={kind,variant};reconcile();
}
function reconcile(){
 if(!permitted()){pending=null;engine?.stop(true);return;}
 if(engine){
  engine.sync(current);
  if(pending){engine.play(pending);pending=null;}
  return;
 }
 if(!current.war&&!current.kirin&&!pending)return;
 if(!loading)loading=createEngine().then(value=>{engine=value;reconcile();}).catch(error=>{
  document.body.dataset.combatFx='unavailable';console.warn('Efeitos War Lotus/Kirin indisponíveis.',error);
 });
}
async function createEngine(){
 const {Application,Container,Graphics,Sprite,Texture,Assets}=await import('./vendor/pixi/pixi.min.mjs');
 const app=new Application();
 await app.init({preference:'webgl',backgroundAlpha:0,antialias:true,autoStart:false,sharedTicker:false,
  width:innerWidth,height:innerHeight,resolution:Math.min(devicePixelRatio||1,1.5),autoDensity:true,powerPreference:'low-power'});
 const canvas=app.canvas;canvas.className='combat-effects-canvas';canvas.setAttribute('aria-hidden','true');canvas.hidden=true;document.body.append(canvas);
 const warField=new Container(),skyField=new Container(),sceneField=new Container();
 app.stage.eventMode='none';app.stage.addChild(warField,skyField,sceneField);
 const shadow=new Graphics(),warLines=new Graphics();warField.addChild(shadow,warLines);
 const sky=new Graphics();skyField.addChild(sky);
 const glow=new Graphics(),lines=new Graphics();sceneField.addChild(glow);
 const beast=new Sprite(Texture.EMPTY);beast.anchor.set(.5,.83);beast.alpha=0;beast.blendMode='normal';sceneField.addChild(beast,lines);
 // A descarga continua funcionando se a ilustração não puder ser decodificada.
 Assets.load('assets/fx/kirin-beast.png?v=storm2').then(texture=>{beast.texture=texture;}).catch(error=>console.warn('Kirin: illustration indisponible.',error));
 let ambient={war:false,kirin:false},scene=null,time=0,running=false,dirty=true,rect=null,box=null,arcs=[],nextArc=0,frames=0,cost=0;
 const stroke=(g,points,width,color,alpha)=>{
  if(alpha<=0||points.length<2)return;
  g.moveTo(points[0].x,points[0].y);for(let i=1;i<points.length;i++)g.lineTo(points[i].x,points[i].y);
  g.stroke({width,color,alpha});
 };
 function measure(){if(!dirty)return;rect=anchor()?.getBoundingClientRect();box=document.querySelector('.war-panel')?.getBoundingClientRect();dirty=false;}
 function start(){if(!running){canvas.hidden=false;app.start();running=true;}dirty=true;}
 function stop(clear=false){app.stop();canvas.hidden=true;running=false;if(clear){scene=null;arcs=[];beast.alpha=0;}}
 function newArc(burst=false){
  const fromPanel=box&&Math.random()<.3;
  const source=fromPanel?{x:box.left+box.width*.28,y:box.top+35}:{x:rect.left+rect.width*(.65+Math.random()*.18),y:rect.top+rect.height*.5};
  const angle=Math.random()*Math.PI*2,reach=(burst?210:90)+Math.random()*(burst?350:220);
  const end={x:source.x+Math.cos(angle)*reach,y:source.y+Math.sin(angle)*reach*.65};
  const seed=Math.random()*1e6|0,points=lightningPath(source,end,seed,13,.32);
  arcs.push({born:time,life:.48+Math.random()*.55,points,seed,width:(burst?3.5:1.6)+Math.random()*2});
 }
 function drawWar(dt){
  shadow.clear();warLines.clear();
  const visible=rect&&rect.bottom>0&&rect.top<innerHeight;
  if(!ambient.war||!visible){arcs=[];return;}
  const burst=scene?.kind==='war'&&scene.age<.9;
  if(time>nextArc){newArc(burst);nextArc=time+(burst?.055:.18+Math.random()*.22);}
  arcs=arcs.filter(a=>time-a.born<a.life);
  for(const a of arcs){
   const age=(time-a.born)/a.life,reveal=smooth(age/.18),fade=smooth((1-age)/.5);
   const points=a.points.slice(0,Math.max(2,Math.ceil(reveal*a.points.length))).map((p,i)=>({x:p.x+Math.sin(time*9+i*.9+a.seed)*Math.sin(i/13*Math.PI)*2,y:p.y+Math.cos(time*8+i+a.seed)*2}));
   // Mistura normal preserva os raios negros sobre a interface.
   stroke(shadow,points,a.width+8,0xd8c8dc,fade*.085);
   stroke(warLines,points,a.width+3,0x17121c,fade*.9);
   stroke(warLines,points,a.width,0x010104,fade);
   if(points.length>7){const p=points[6],end={x:p.x+(a.seed%2?1:-1)*35,y:p.y-38};const branch=lightningPath(p,end,a.seed,5,.3);stroke(shadow,branch,4,0xb3a4ba,fade*.1);stroke(warLines,branch,1.5,0x030205,fade);}
  }
  if(burst){const u=scene.age/.9,radius=50+u*340;shadow.ellipse(rect.left+rect.width*.74,rect.top+rect.height*.5,radius,radius*.35).stroke({width:2,color:0x9d8fa9,alpha:(1-u)*.13});}
 }
 function drawSky(){
  sky.clear();if(!rect)return;
  const sceneSky=scene?.kind==='kirin'?kirinFrame(scene.age,scene.variant).sky:0;
  if(!ambient.kirin&&!sceneSky)return;
  const y=Math.max(12,rect.top-24),x=rect.left+rect.width*.7,width=Math.min(rect.width*.55,500);
  const strength=sceneSky*.55+(ambient.kirin?.18:0);
  for(let i=0;i<3;i++){
   const points=Array.from({length:25},(_,j)=>{const u=j/24;return {x:x-width*.5+u*width,y:y+Math.sin(u*7+time*.4+i)*7+i*5};});
   stroke(sky,points,18-i*4,0x234767,strength*.08);
  }
  if(time%2.1<.18||sceneSky>.5){const seed=Math.floor(time*3),points=lightningPath({x:x-width*.35,y},{x:x+width*.35,y:y+9},seed,12,.09);stroke(sky,points,3,0x278dcc,strength*.3);stroke(sky,points,.8,0xc3f6ff,strength*.9);}
 }
 function drawKirin(){
  glow.clear();lines.clear();beast.alpha=0;
  if(scene?.kind!=='kirin')return;
  const t=scene.age,f=kirinFrame(t,scene.variant),w=innerWidth,h=innerHeight;
  const x=w<700?w*.5:Math.max(w*.5,(rect?.left||0)+(rect?.width||w)*.57),top=Math.max(20,Math.min(rect?.top||100,h*.2));
  const targetY=Math.min(h*.79,Math.max(top+260,h*.65)),channel=scene.variant==='channel';
  const size=Math.min(w*.72,490)*(channel?.7:.82+f.drop*.25),beastY=channel?top+90:top+65+f.drop*(targetY-top-65);
  beast.position.set(x,beastY);beast.width=size;beast.height=size*beast.texture.height/beast.texture.width;
  beast.rotation=channel?-.12:-.18+f.drop*.28;beast.alpha=f.beast*(channel?.44:.95);
  // Um eixo visual: céu, fera elétrica, descarga e impacto.
  if(!channel&&f.beast>0){
   for(let i=0;i<3;i++){
    const path=lightningPath({x:x-80+i*75,y:top-90},{x:x+(i-1)*55,y:beastY-30},scene.seed+i,15,.25);
    stroke(glow,path,13,0x2a8af3,f.beast*.035);stroke(lines,path,1.2,0x9cecff,f.beast*.35);
   }
  }
  if(f.strike>0){
   const path=lightningPath({x:x-35,y:-30},{x,y:targetY},scene.seed,20,.08);
   stroke(glow,path,64,0x268eff,f.strike*.08);stroke(glow,path,24,0x77cfff,f.strike*.2);stroke(lines,path,5,0xd9fdff,f.strike);stroke(lines,path,1.5,0xffffff,f.strike);
   for(let i=0;i<4;i++){const p=path[4+i*3];const branch=lightningPath(p,{x:p.x+(i%2?-1:1)*(60+i*25),y:p.y+80},scene.seed+i+5,7,.25);stroke(glow,branch,8,0x3abaff,f.strike*.13);stroke(lines,branch,1,0xb9f7ff,f.strike*.8);}
  }
  if(f.impact>0){
   const u=clamp01((t-1.1)/1.3),radius=16+smooth(u)*Math.min(w*.4,270);
   glow.ellipse(x,targetY,radius*1.15,radius*.28).stroke({width:18*(1-u)+1,color:0x4fbaff,alpha:f.impact*.08});
   lines.ellipse(x,targetY,radius,radius*.25).stroke({width:1.4,color:0xa9efff,alpha:f.impact*.6});
   for(let i=0;i<24;i++){const angle=i*2.39996,reach=(35+(i%5)*19)*u;const px=x+Math.cos(angle)*reach*2,py=targetY+Math.sin(angle)*reach*.7-u*35;lines.circle(px,py,(1-u)*1.7+.3).fill({color:0xd9fbff,alpha:f.impact*(1-u)});}
  }
  canvas.dataset.kirinPhase=channel?'channel':f.strike>.1?'strike':f.impact>.1?'impact':f.drop>.05?'descent':'gather';
 }
 function draw(ticker){
  const begin=performance.now(),dt=Math.min(ticker.deltaMS/1000,.05);time+=dt;measure();
  if(scene){scene.age+=dt;if(scene.age>(scene.kind==='war'?1.2:kirinFrame(0,scene.variant).duration))scene=null;}
  drawWar(dt);drawSky();drawKirin();
  if(!scene&&!ambient.war&&!ambient.kirin)stop();
  frames++;cost+=performance.now()-begin;if(frames%120===0){canvas.dataset.updateMs=(cost/120).toFixed(2);cost=0;}
 }
 app.ticker.maxFPS=60;app.ticker.add(draw);
 addEventListener('scroll',()=>{dirty=true;},{passive:true});
 addEventListener('resize',()=>{app.renderer.resize(innerWidth,innerHeight);arcs=[];dirty=true;});
 new ResizeObserver(()=>{dirty=true;}).observe(document.querySelector('#view')||document.body);
 document.addEventListener('visibilitychange',reconcile);matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',reconcile);
 addEventListener('pagehide',()=>stop(true));addEventListener('pageshow',reconcile);
 document.body.dataset.combatFx='ready';
 return {stop,sync(value){ambient=value;dirty=true;if(value.war||value.kirin||scene)start();else stop();},
  play(value){measure();scene={...value,age:0,seed:Math.random()*1e6|0};arcs=[];nextArc=0;start();}};
}
if(typeof document!=='undefined'){
 document.addEventListener('visibilitychange',()=>{if(!engine)reconcile();});
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{if(!engine)reconcile();});
}
