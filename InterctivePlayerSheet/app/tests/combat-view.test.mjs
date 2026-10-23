import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {combatGroups,combatSummary} from '../combat-view.mjs';
const c=JSON.parse(readFileSync(new URL('../character.json',import.meta.url)));
test('combate contém as técnicas úteis, sem Multi Attack, passivas ou duplicação',()=>{
 const groups=combatGroups(c.skills),active=groups.flatMap(g=>g.skills);
 assert.equal(active.length,9);assert.equal(new Set(active.map(a=>a.id)).size,9);
 assert.ok(active.every(a=>a.group!=='Passiva'));
 assert.deepEqual(groups.map(g=>[g.name,g.skills.length]),[['Ação',3],['Ação bônus',3],['Reação',2],['Ação livre',1]]);
});
test('resumos preservam dano e a variante nublada do Kirin',()=>{
 const kirin=combatSummary(c.skills.find(a=>a.name==='Lightning Beast Kirin'));
 assert.match(kirin,/8d10 \+ DEX/);assert.match(kirin,/10d10 \+ DEX/);assert.match(kirin,/Céu aberto/);
 const spear=combatSummary(c.skills.find(a=>a.name==='Lightning Spear'));
 assert.match(spear,/8d8/);assert.match(spear,/90 ft/);assert.match(spear,/DC 15/);
});
test('resumos respeitam edição e são derivados de backups anteriores',()=>{
 const skill=c.skills.find(a=>a.name==='Lightning Spear');
 assert.equal(combatSummary({...skill,combatSummary:'Nova fórmula da mesa'}),'Nova fórmula da mesa');
 assert.match(combatSummary({...skill,description:'Dano: 12d8 + DEX'}),/12d8/);
});
