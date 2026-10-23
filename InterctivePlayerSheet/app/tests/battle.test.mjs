import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {initial,change,undo,importBackup,adjustHp} from '../core.mjs';
import {totals,beginCombat,turnBoundary,activate,deactivateSpeed,extendSpeed,drawWar,toggleWar,warDamage,warPenalty,endCombat,recoverWar,externalHeal,addEffect,weaponDamage} from '../battle.mjs';
const character=JSON.parse(readFileSync(new URL('../character.json',import.meta.url)));
const fresh=()=>initial(character);
const playing=()=>turnBoundary(beginCombat(fresh()),'self','start');
const end=s=>turnBoundary(s,'self','end');const start=s=>turnBoundary(s,'self','start');
const effect=(x={})=>({id:'effect-test',name:'Proteção',target:'Supros',origin:'Aliado',details:'Proteção recebida',ac:2,attack:1,damage:3,clock:'self',end:'end',remaining:1,...x});
test('Godspeed +2 DEX altera derivados, não modifica base nem permite acumular',()=>{
 const base=playing(),s=activate(base,'skill-61'),t=totals(s);
 assert.equal(t.dex,24);assert.equal(t.dexMod,7);assert.equal(t.ac,20);assert.equal(t.attack,11);assert.equal(s.character.ac,19);assert.equal(s.character.attack,10);
 assert.equal(weaponDamage(s,s.character.items[0+1]),'1d12 + 7');assert.throws(()=>activate(s,'skill-61'));
 assert.equal(totals(deactivateSpeed(s)).ac,19);assert.throws(()=>activate(deactivateSpeed(s),'skill-61'),/uma vez/);
 assert.equal(undo(s).runtime.godspeed.active,false);
});
test('Godspeed dura três fins de turno, decide extensão e cobra exaustão ao desativar',()=>{
 let s=activate(playing(),'skill-61');s=end(s);assert.equal(s.runtime.godspeed.remaining,2);assert.throws(()=>end(s));
 s=end(start(s));s=end(start(s));assert.equal(s.runtime.godspeed.pending,true);assert.throws(()=>start(s),/estenda/);
 s=extendSpeed(s);assert.equal(s.runtime.exhaustion,0);assert.equal(s.runtime.godspeed.overload,1);s=end(start(s));s=deactivateSpeed(s);
 assert.equal(s.runtime.exhaustion,1);assert.equal(totals(s).ac,19);assert.equal(s.runtime.godspeed.active,false);
});
test('turno individual avança uma vez e não aceita marcos de grupo',()=>{
 let s=addEffect(playing(),effect());assert.throws(()=>turnBoundary(s,'group','end'));
 s=end(s);assert.equal(s.runtime.effects.length,0);assert.match(s.history[0].label,/Expirou: Proteção/);assert.throws(()=>end(s));
 const undone=undo(s);assert.equal(undone.runtime.effects[0].remaining,1);assert.equal(undone.combat.phase,'acting');
});
test('efeitos expiram no marco escolhido, grupo inclui Supros, aliado não altera os totais',()=>{
 let s=addEffect(playing(),effect({target:'Grupo',end:'start'}));assert.equal(totals(s).ac,21);s=end(s);assert.equal(s.runtime.effects.length,1);s=start(s);assert.equal(totals(s).ac,19);
 s=addEffect(s,effect({target:'Aliado'}));assert.equal(totals(s).ac,19);
});
test('Parry acumula com Godspeed e War Lotus sem duplicar a reação',()=>{
 let s=drawWar(activate(playing(),'skill-61'),[10]);s=activate(s,'skill-66');assert.equal(totals(s).ac,23);assert.equal(totals(s).attack,13);assert.throws(()=>activate(s,'skill-66'));
 assert.equal(undo(s).runtime.effects.length,0);assert.equal(totals(undo(s)).ac,20);
});
test('saque da War Lotus registra números físicos, dívida, HP máximo e dano fixo',()=>{
 let s=drawWar(playing(),[15,30]);assert.equal(totals(s).maxHp,86);assert.equal(totals(s).attack,12);assert.equal(s.runtime.war.debt,45);assert.equal(s.runtime.war.bonus,8);
 const item=s.character.items.find(a=>a.name==='Katana War Lotus');assert.equal(weaponDamage(s,item),'1d12 + 6 + 8');assert.throws(()=>drawWar(s,[1]));
 s=toggleWar(s);assert.equal(totals(s).attack,10);assert.equal(s.runtime.war.debt,45);assert.equal(totals(s).maxHp,86);
 assert.throws(()=>drawWar(playing(),[101]));assert.throws(()=>drawWar(playing(),[]));
});
test('vida roubada usa dano confirmado e não recebe redução de cura externa',()=>{
 let s=drawWar(playing(),[20]);s=adjustHp(s,-20);assert.equal(s.character.hp,29);s=warDamage(s,10);assert.equal(s.character.hp,34);assert.equal(s.runtime.war.damage,10);
 s=externalHeal(s,9);assert.equal(s.character.hp,38);assert.equal(undo(s).character.hp,34);
 assert.equal(externalHeal(toggleWar(s),9).character.hp,47);
});
test('punição permanente substitui metade do sacrifício e recuperação temporária é explícita',()=>{
 const s=drawWar(playing(),[90,90]);assert.equal(warPenalty(s),4);const done=endCombat(s);assert.equal(done.runtime.war.permanentLoss,4);assert.equal(done.runtime.war.tempLoss,4);assert.equal(totals(done).maxHp,86);
 const recovered=recoverWar(done);assert.equal(totals(recovered).maxHp,90);assert.equal(recovered.character.hp,s.character.hp);
 const explicit=endCombat(s,true);assert.equal(totals(explicit).maxHp,90);assert.equal(explicit.runtime.war.tempLoss,0);assert.equal(undo(explicit).runtime.war.active,true);
});
test('dívida cumprida não gera perda permanente e finalizar duas vezes é inválido',()=>{
 let s=warDamage(drawWar(playing(),[10]),10);assert.equal(warPenalty(s),0);s=endCombat(s,true);assert.equal(s.runtime.war.permanentLoss,0);assert.equal(totals(s).maxHp,94);assert.throws(()=>endCombat(s));
});
test('persistência preserva transformações e efeitos ainda não expirados',()=>{
 let s=drawWar(activate(playing(),'skill-61'),[12]);s=addEffect(s,effect({remaining:2}));s=end(s);const loaded=importBackup(JSON.stringify(s));assert.deepEqual(loaded,s);assert.equal(totals(loaded).attack,14);assert.equal(totals(loaded).ac,22);assert.equal(loaded.runtime.godspeed.remaining,2);
});
test('Kirin consome carga na canalização e dispara sem segundo consumo; clone único',()=>{
 let s=activate(playing(),'skill-56');assert.equal(s.runtime.kirin,true);assert.equal(s.character.skills.find(a=>a.id==='skill-56').current,0);s=activate(s,'skill-56');assert.equal(s.runtime.kirin,false);assert.equal(s.character.skills.find(a=>a.id==='skill-56').current,0);
 s=activate(s,'skill-62');assert.throws(()=>activate(s,'skill-62'));s=endCombat(s);assert.equal(s.runtime.clone,false);
});
test('migração de backups v1 preserva HP, notas e histórico; corrige Godspeed sem recarregar',()=>{
 let old=adjustHp(fresh(),-7);old.version=1;delete old.runtime;delete old.combat.phase;delete old.combat.groupTurn;delete old.combat.groupPhase;delete old.combat.godspeedUsed;
 for(const h of old.history){h.before.version=1;delete h.before.runtime;}
 old.character.skills.find(a=>a.id==='skill-61').description='+1 DEX';
 const loaded=importBackup(JSON.stringify(old));assert.equal(loaded.version,3);assert.equal(loaded.character.hp,42);assert.equal(loaded.runtime.exhaustion,0);assert.equal(loaded.character.skills.find(a=>a.id==='skill-61').current,1);assert.match(loaded.character.skills.find(a=>a.id==='skill-61').description,/\+2 DEX/);assert.equal(undo(loaded).character.hp,49);
});
test('estado de runtime inválido em backup é rejeitado sem modificar o original',()=>{
 const s=playing(),bad=structuredClone(s);bad.runtime.effects=[effect({remaining:-1})];assert.throws(()=>importBackup(JSON.stringify(bad)));bad.runtime.effects=[];bad.runtime.exhaustion=-1;assert.throws(()=>importBackup(JSON.stringify(bad)));assert.equal(s.runtime.exhaustion,0);
});

test('migração v2 converte relógios de grupo e histórico sem perder duração ou transformações',()=>{
 let s=activate(playing(),'skill-61');s=addEffect(s,effect({remaining:3}));
 const legacy=structuredClone(s);legacy.version=2;legacy.combat.groupTurn=5;legacy.combat.groupPhase='acting';legacy.runtime.effects[0].clock='group';
 for(const h of legacy.history){h.before.version=2;h.before.combat.groupTurn=5;h.before.combat.groupPhase='acting';for(const e of h.before.runtime.effects)e.clock='group';}
 const loaded=importBackup(JSON.stringify(legacy));assert.equal(loaded.version,3);assert.equal(loaded.runtime.effects[0].clock,'self');assert.equal(loaded.runtime.effects[0].remaining,3);assert.equal(loaded.runtime.godspeed.active,true);assert.equal('groupTurn' in loaded.combat,false);
 const next=end(loaded);assert.equal(next.runtime.effects[0].remaining,2);assert.equal(next.runtime.godspeed.remaining,2);
 const undone=undo(next);assert.equal(undone.runtime.effects[0].clock,'self');assert.equal(undone.runtime.effects[0].remaining,3);
});
