export const VERSION = 3;
export function runtimeDefaults(){return {
  exhaustion:0,effects:[],godspeed:{active:false,remaining:0,overload:0,pending:false},
  war:{active:false,drawn:false,rolls:[],debt:0,damage:0,tempLoss:0,permanentLoss:0,bonus:0,sacrifice:0,settled:false},
  warConfig:{attackBonus:2,acBonus:0,damageFormula:'1d12 + DEX',rounding:'floor'},
  clone:false,kirin:false,visuals:true
};}
export const effectiveMaxHp=s=>Math.max(1,s.character.maxHp-(s.runtime?.war.tempLoss||0)-(s.runtime?.war.permanentLoss||0));
export function upgrade(s){
  const n=copy(s);
  if(n.version===1){
    n.version=2;n.runtime=runtimeDefaults();
    Object.assign(n.combat,{phase:n.combat.active?'acting':'waiting',groupTurn:1,groupPhase:'waiting',godspeedUsed:false});
    const g=n.character.skills.find(a=>a.id==='skill-61');
    if(g){g.description=g.description.replace(/\+1 DEX/g,'+2 DEX');if(g.combatSummary)g.combatSummary=g.combatSummary.replace(/\+1 DEX/g,'+2 DEX');}
  }
  if(n.version===2){
    n.version=VERSION;
    for(const e of n.runtime.effects)if(e.clock==='group')e.clock='self';
    delete n.combat.groupTurn;delete n.combat.groupPhase;
  }
  return n;
}
export const copy = value => structuredClone(value);
export function initial(character) {
  return {version:VERSION,character:copy(character),runtime:runtimeDefaults(),combat:{active:false,turn:1,phase:'waiting',godspeedUsed:false},notes:'',conditions:'',history:[],updatedAt:new Date().toISOString()};
}
const finite = n => typeof n === 'number' && Number.isFinite(n);
export function validate(s) {
  if (!s || ![1,2,VERSION].includes(s.version) || !s.character || !Array.isArray(s.history) || s.history.length>200) throw Error('Formato ou versão de backup incompatível.');
  const c=s.character;
  if(typeof c.name!=='string'||c.name.length>200 || !['hp','maxHp','ac','level','attack'].every(k=>finite(c[k])) || c.hp<0 || c.maxHp<1 || c.hp>(s.version>=2?effectiveMaxHp(s):c.maxHp) || c.level<1) throw Error('Valores de personagem inválidos.');
  if(!s.combat || typeof s.combat.active!=='boolean'||!Number.isInteger(s.combat.turn)||s.combat.turn<1 || typeof s.notes!=='string'||typeof s.conditions!=='string') throw Error('Estado de sessão inválido.');
  for(const list of ['skills','items','stats','checks']) if(!Array.isArray(c[list])||c[list].length>500) throw Error('Catálogo inválido.');
  const ids=new Set();
  for(const a of c.skills){
    if(typeof a.id!=='string'||ids.has(a.id)||typeof a.name!=='string'||typeof a.description!=='string'||!['Passiva','Ação','Ação bônus','Reação','Ação livre'].includes(a.group)||![null,'short','long'].includes(a.rest)) throw Error('Habilidade inválida.');
    ids.add(a.id);
    if(a.combatSummary!==undefined&&typeof a.combatSummary!=='string')throw Error('Resumo de combate inválido.');
    if(a.max!==null && (!Number.isInteger(a.max)||a.max<0||!Number.isInteger(a.current)||a.current<0||a.current>a.max)) throw Error('Cargas inválidas.');
    if(a.max===null && a.current!==null) throw Error('Cargas ilimitadas inválidas.');
  }
  for(const a of c.items) if(typeof a.id!=='string'||typeof a.name!=='string'||typeof a.quantity!=='string'||typeof a.description!=='string') throw Error('Item inválido.');
  for(const a of c.stats) if(typeof a.name!=='string'||!['value','modifier','save'].every(k=>finite(a[k]))) throw Error('Atributo inválido.');
  for(const a of c.checks) if(typeof a.name!=='string'||!finite(a.bonus)) throw Error('Perícia inválida.');
  if(typeof c.warLotus!=='string'||typeof c.profession!=='string'||typeof c.hitDice!=='string') throw Error('Ficha incompleta.');
  if(s.version>=2){
    const r=s.runtime;
    if(!r||!Number.isInteger(r.exhaustion)||r.exhaustion<0||r.exhaustion>99||!Array.isArray(r.effects)||r.effects.length>100||typeof r.visuals!=='boolean'||typeof r.clone!=='boolean'||typeof r.kirin!=='boolean')throw Error('Estado de efeitos inválido.');
    if(!['waiting','acting','between'].includes(s.combat.phase)||(s.version===2&&(!['waiting','acting','between'].includes(s.combat.groupPhase)||!Number.isInteger(s.combat.groupTurn)||s.combat.groupTurn<1))||typeof s.combat.godspeedUsed!=='boolean')throw Error('Fase de turno inválida.');
    const g=r.godspeed,w=r.war,q=r.warConfig;
    if(!g||typeof g.active!=='boolean'||typeof g.pending!=='boolean'||!Number.isInteger(g.remaining)||g.remaining<0||!Number.isInteger(g.overload)||g.overload<0)throw Error('Godspeed inválido.');
    if((g.active&&!s.combat.active)||(!g.active&&(g.remaining!==0||g.overload!==0||g.pending)))throw Error('Transformação fora de combate inválida.');
    if(g.pending&&(!g.active||g.remaining!==0))throw Error('Godspeed pendente inválido.');
    if(!w||!['active','drawn','settled'].every(k=>typeof w[k]==='boolean')||!['debt','damage','tempLoss','permanentLoss','bonus','sacrifice'].every(k=>finite(w[k])&&w[k]>=0)||!Array.isArray(w.rolls)||w.rolls.length>3||w.rolls.some(x=>!Number.isInteger(x)||x<1||x>100)||w.tempLoss+w.permanentLoss>=c.maxHp)throw Error('War Lotus inválida.');
    if(w.active&&(!w.drawn||w.settled||!s.combat.active))throw Error('War Lotus fora de combate inválida.');
    if(!q||!finite(q.attackBonus)||!finite(q.acBonus)||typeof q.damageFormula!=='string'||!q.damageFormula.trim()||q.damageFormula.length>200||!['floor','ceil'].includes(q.rounding))throw Error('Configuração da War Lotus inválida.');
    const effectIds=new Set();
    for(const e of r.effects){
      if(!e||typeof e.id!=='string'||effectIds.has(e.id)||!['name','target','origin','details'].every(k=>typeof e[k]==='string')||!(s.version===2?['self','group']:['self']).includes(e.clock)||!['start','end','manual'].includes(e.end)||!(e.remaining===null||(Number.isInteger(e.remaining)&&e.remaining>=1))||!['ac','attack','damage'].every(k=>finite(e[k])))throw Error('Efeito registrado inválido.');
      effectIds.add(e.id);
    }
  }
  return s;
}
function snapshot(s){const {history,...rest}=s;return copy(rest);}
export function change(state,label,fn){
  const next=copy(state);fn(next);validate(next);
  next.history=[{label,time:new Date().toISOString(),before:snapshot(state)},...state.history].slice(0,200);
  next.updatedAt=new Date().toISOString();return next;
}
export function undo(s){
  if(!s.history.length)return s;
  const [last,...history]=s.history;return validate({...copy(last.before),history,updatedAt:new Date().toISOString()});
}
export function adjustHp(s,delta){if(!finite(delta))throw Error('Valor inválido.');return change(s,delta<0?`Dano recebido: ${-delta}`:`Cura recebida: ${delta}`,n=>{n.character.hp=Math.max(0,Math.min(effectiveMaxHp(n),n.character.hp+delta));});}
export function useSkill(s,id){return change(s,'Habilidade utilizada',n=>{const a=n.character.skills.find(a=>a.id===id);if(!a||a.group==='Passiva')throw Error('Habilidade indisponível.');if(a.max!==null){if(a.current<1)throw Error('Sem usos restantes.');a.current--; }});}
export function rest(s,type){if(!['short','long'].includes(type))throw Error('Descanso inválido.');return change(s,type==='long'?'Recargas de descanso longo':'Recargas de descanso curto',n=>{for(const a of n.character.skills)if(a.max!==null&&(a.rest===type||(type==='long'&&a.rest==='short')))a.current=a.max;});}
export function importBackup(text){
 if(text.length>8_000_000)throw Error('Backup muito grande.');
 const original=validate(JSON.parse(text));
 const s=upgrade(original);
 s.history=s.history.map(h=>{
  if(typeof h.label!=='string'||typeof h.time!=='string')throw Error('Histórico inválido.');
  const before=upgrade(validate({...h.before,history:[]}));
  validate(before);delete before.history;return {...h,before};
 });return validate(s);
}
