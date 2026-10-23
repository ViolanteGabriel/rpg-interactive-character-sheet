import {change,effectiveMaxHp} from './core.mjs';
const integer=(n,min=0,max=1e7)=>Number.isInteger(n)&&n>=min&&n<=max;
export function totals(s){
 const r=s.runtime,c=s.character,dex=c.stats.find(a=>a.name==='DEXTERITY'),speed=r.godspeed.active?1:0;
 const personal=r.effects.filter(e=>['Supros','Grupo'].includes(e.target));
 const sum=k=>personal.reduce((n,e)=>n+e[k],0);
 return {maxHp:effectiveMaxHp(s),dex:(dex?.value||0)+speed*2,dexMod:(dex?.modifier||0)+speed,
  ac:c.ac+speed+(r.war.active?r.warConfig.acBonus:0)+sum('ac'),
  attack:c.attack+speed+(r.war.active?r.warConfig.attackBonus:0)+sum('attack'),
  damageBonus:sum('damage'),critical:personal.some(e=>e.origin==='Black Flash')?'19–20':'20'};
}
function round(s,n){return Math[s.runtime.warConfig.rounding](n);}
function consume(n,id){const a=n.character.skills.find(a=>a.id===id);if(!a||a.group==='Passiva')throw Error('Habilidade indisponível.');if(a.max!==null){if(a.current<1)throw Error('Sem usos restantes.');a.current--;}return a;}
function requireTurn(s){if(!s.combat.active||s.combat.phase!=='acting')throw Error('Inicie o turno do Supros antes de ativar esta transformação.');}
function stopSpeed(n){const g=n.runtime.godspeed;n.runtime.exhaustion=Math.min(99,n.runtime.exhaustion+g.overload);Object.assign(g,{active:false,remaining:0,overload:0,pending:false});}
export function beginCombat(s){if(s.combat.active)throw Error('O combate já está em andamento.');return change(s,'Combate iniciado',n=>{
 Object.assign(n.combat,{active:true,turn:1,phase:'waiting',godspeedUsed:false});
 const w=n.runtime.war;Object.assign(w,{active:false,drawn:false,rolls:[],debt:0,damage:0,bonus:0,sacrifice:0,settled:false});
});}
function tick(n,clock,marker){
 const expired=[];
 n.runtime.effects=n.runtime.effects.filter(e=>{
  if(e.clock!==clock||e.end!==marker||e.remaining===null)return true;
  e.remaining--;if(e.remaining===0){expired.push(e.name);return false;}return true;
 });return expired;
}
export function turnBoundary(s,clock,marker){
 if(!s.combat.active||clock!=='self'||!['start','end'].includes(marker))throw Error('Marco de turno individual inválido.');
 if(marker==='start'&&s.combat.phase==='acting')throw Error('O turno já está em andamento.');
 if(marker==='end'&&s.combat.phase!=='acting')throw Error('Inicie o turno antes de finalizá-lo.');
 if(marker==='start'&&s.runtime.godspeed.pending)throw Error('Desative ou estenda Godspeed antes de iniciar o próximo turno.');
 let expired=[];
 const next=change(s,`${marker==='start'?'Início':'Fim'} do turno do Supros`,n=>{
  if(marker==='start'){if(n.combat.phase==='between')n.combat.turn++;n.combat.phase='acting';}else n.combat.phase='between';
  expired=tick(n,'self',marker);
  if(marker==='end'&&n.runtime.godspeed.active){const g=n.runtime.godspeed;if(g.remaining>0)g.remaining--;if(g.remaining===0)g.pending=true;}
 });
 next.history[0].label+=` ${next.combat.turn}`+(expired.length?` · Expirou: ${expired.join(', ')}`:'');return next;
}
export function activate(s,id){
 if(id==='skill-61'){requireTurn(s);if(s.runtime.godspeed.active||s.combat.godspeedUsed)throw Error('Godspeed só pode ser ativado uma vez por combate.');}
 if(id==='skill-62'&&s.runtime.clone)throw Error('Já existe um clone ativo.');
 if(id==='skill-56'&&s.runtime.kirin)return change(s,'Kirin disparado',n=>n.runtime.kirin=false);
 return change(s,`Usou ${s.character.skills.find(a=>a.id===id)?.name||'habilidade'}`,n=>{
  consume(n,id);
  if(id==='skill-61'){Object.assign(n.runtime.godspeed,{active:true,remaining:3,overload:0,pending:false});n.combat.godspeedUsed=true;}
  if(id==='skill-62')n.runtime.clone=true;
  if(id==='skill-56')n.runtime.kirin=true;
  if(id==='skill-66'){
   if(n.runtime.effects.some(e=>e.origin==='Parry'))throw Error('Encerre a defesa anterior antes de usar Parry novamente.');
   n.runtime.effects.push({id:'parry',name:'Parry · ataque atual',target:'Supros',origin:'Parry',details:'+3 CA somente contra este ataque. Encerre a defesa após resolver o ataque.',ac:3,attack:0,damage:0,clock:'self',end:'manual',remaining:null});
  }
 });
}
export function deactivateSpeed(s){if(!s.runtime.godspeed.active)throw Error('Godspeed não está ativo.');const pending=s.runtime.godspeed.overload;return change(s,`Godspeed desativado${pending?` · +${pending} exaustão`:''}`,stopSpeed);}
export function extendSpeed(s){if(!s.runtime.godspeed.pending||!s.runtime.godspeed.active)throw Error('Godspeed ainda tem turnos restantes.');return change(s,'Godspeed estendido · +1 exaustão ao desativar',n=>{n.runtime.godspeed.pending=false;n.runtime.godspeed.remaining=1;n.runtime.godspeed.overload++;});}
export function externalHeal(s,amount){if(!integer(amount,1))throw Error('Informe uma cura inteira positiva.');const heal=s.runtime.war.active?round(s,amount/2):amount;return change(s,`Cura externa: ${amount}${s.runtime.war.active?` × 50% = ${heal}`:''}`,n=>{n.character.hp=Math.min(effectiveMaxHp(n),n.character.hp+heal);});}
export function drawWar(s,rolls){
 if(!s.combat.active)throw Error('Inicie um combate para registrar o saque da War Lotus.');
 if(s.runtime.war.drawn)throw Error('A War Lotus já foi sacada neste combate.');
 if(!Array.isArray(rolls)||rolls.length<1||rolls.length>3||rolls.some(x=>!integer(x,1,100)))throw Error('Informe de um a três resultados de d100, entre 1 e 100.');
 const cost=rolls.length*4;if(effectiveMaxHp(s)<=cost)throw Error('Vida máxima insuficiente para este sacrifício.');
 return change(s,`War Lotus empunhada · −${cost} HP máximo · dívida ${rolls.reduce((a,b)=>a+b,0)}`,n=>{
  const w=n.runtime.war;Object.assign(w,{active:true,drawn:true,rolls:[...rolls],debt:rolls.reduce((a,b)=>a+b,0),damage:0,bonus:cost,sacrifice:cost,settled:false});w.tempLoss+=cost;n.character.hp=Math.min(n.character.hp,effectiveMaxHp(n));
 });
}
export function toggleWar(s){if(!s.runtime.war.drawn||s.runtime.war.settled)throw Error('Registre o saque primeiro.');return change(s,s.runtime.war.active?'War Lotus embainhada; dívida preservada':'War Lotus empunhada novamente',n=>n.runtime.war.active=!n.runtime.war.active);}
export function warDamage(s,amount){if(!s.runtime.war.active||!integer(amount,1))throw Error('Empunhe a War Lotus e informe dano efetivamente causado, inteiro e positivo.');const heal=round(s,amount/2);return change(s,`War Lotus: ${amount} dano causado · cura ${heal}`,n=>{n.runtime.war.damage+=amount;n.character.hp=Math.min(effectiveMaxHp(n),n.character.hp+heal);});}
export function warPenalty(s){const w=s.runtime.war;return w.drawn&&!w.settled&&w.damage<w.debt?w.sacrifice/2:0;}
export function endCombat(s,restoreTemporary=false){
 if(!s.combat.active)throw Error('Nenhum combate em andamento.');
 const penalty=warPenalty(s),overload=s.runtime.godspeed.overload;
 return change(s,`Combate encerrado · perda permanente ${penalty} HP${overload?` · +${overload} exaustão`:''}`,n=>{
  if(n.runtime.godspeed.active)stopSpeed(n);
  const w=n.runtime.war;if(w.drawn&&!w.settled){w.permanentLoss+=penalty;w.tempLoss-=penalty;w.settled=true;}
  if(restoreTemporary)w.tempLoss=0;
  w.active=false;w.bonus=0;n.runtime.clone=false;n.runtime.kirin=false;
  n.runtime.effects=n.runtime.effects.filter(e=>!['Parry','Black Flash'].includes(e.origin));
  n.combat.active=false;n.combat.phase='waiting';n.character.hp=Math.min(n.character.hp,effectiveMaxHp(n));
 });
}
export function recoverWar(s){if(s.combat.active||s.runtime.war.active)throw Error('Resolva o combate antes de recuperar a vida máxima temporária.');return change(s,'Sacrifício temporário recuperado por decisão da mesa',n=>n.runtime.war.tempLoss=0);}
export function addEffect(s,e){return change(s,`Efeito recebido: ${e.name} → ${e.target}`,n=>n.runtime.effects.push(e));}
export function removeEffect(s,id){return change(s,'Efeito encerrado',n=>n.runtime.effects=n.runtime.effects.filter(e=>e.id!==id));}
export function weaponDamage(s,item){
 const t=totals(s);let formula;
 if(/War Lotus/i.test(item.name))formula=s.runtime.warConfig.damageFormula;else formula=item.description.split(/\.\s/)[0].trim();
 formula=formula.replace(/\bDEX\b/gi,String(t.dexMod));
 const bonus=t.damageBonus+(/War Lotus/i.test(item.name)&&s.runtime.war.active?s.runtime.war.bonus:0);
 return formula+(bonus?` ${bonus>0?'+':'−'} ${Math.abs(bonus)}`:'');
}
