import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {initial} from '../core.mjs';
import {SKILL_VISUALS,formMode,portrait,sceneMarkup} from '../visuals.mjs';
import {combatGroups} from '../combat-view.mjs';
const character=JSON.parse(readFileSync(new URL('../character.json',import.meta.url)));
test('cada técnica ativável tem uma cena própria e assets válidos',()=>{
 const active=combatGroups(character.skills).flatMap(g=>g.skills);
 assert.equal(new Set(active.map(s=>SKILL_VISUALS[s.id]?.kind)).size,active.length);
 for(const s of active){const spec=SKILL_VISUALS[s.id];assert.ok(spec);assert.ok(sceneMarkup(spec.kind).length>20);if(spec.asset)assert.ok(existsSync(new URL(`../assets/skills/${spec.asset}.png`,import.meta.url)));}
});
test('War Lotus domina visualmente Godspeed sem remover seus bônus ou retrato transformado',()=>{
 const s=initial(character);assert.equal(formMode(s),'base');assert.equal(portrait(s),'assets/supros-face.png');s.runtime.godspeed.active=true;assert.equal(formMode(s),'godspeed');assert.equal(portrait(s),'assets/supros-godspeed.png');s.runtime.war.active=true;assert.equal(formMode(s),'war');assert.equal(s.runtime.godspeed.active,true);assert.equal(portrait(s),'assets/supros-godspeed.png');s.runtime.godspeed.active=false;assert.equal(formMode(s),'war');assert.equal(portrait(s),'assets/supros-face.png');
});
test('Kirin distingue invocação da descida e Guerra possui dois traços para os raios',()=>{
 assert.match(sceneMarkup('kirin','channel'),/channeling/);assert.match(sceneMarkup('kirin','fire'),/descending/);assert.match(sceneMarkup('war'),/bolt-border/);assert.match(sceneMarkup('war'),/bolt-core/);
});
