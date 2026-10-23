import test from 'node:test';
import assert from 'node:assert/strict';
import {lightningPath,kirinFrame} from '../fx-geometry.mjs';
test('descargas preservam os pontos de origem e impacto em qualquer direção',()=>{
 for(const end of [{x:350,y:40},{x:-40,y:500},{x:0,y:0}]){
  const start={x:0,y:0},path=lightningPath(start,end,123);
  assert.deepEqual(path[0],start);
  assert.ok(Math.abs(path.at(-1).x-end.x)<1e-9&&Math.abs(path.at(-1).y-end.y)<1e-9);
  assert.ok(path.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)));
  assert.deepEqual(path,lightningPath(start,end,123));
 }
});
test('Kirin canaliza sem disparar e organiza a descida antes do impacto',()=>{
 for(const time of [0,.4,.8,1.2,1.8,3]){const f=kirinFrame(time,'channel');assert.equal(f.strike,0);assert.equal(f.impact,0);assert.equal(f.drop,0);}
 assert.equal(kirinFrame(.3).drop,0);assert.equal(kirinFrame(.8).impact,0);
 assert.ok(kirinFrame(.9).drop>0);assert.ok(kirinFrame(1.07).strike>.5);
 assert.ok(kirinFrame(1.2).impact>.5);assert.equal(kirinFrame(2.6).beast,0);
 assert.equal(kirinFrame(2.6).strike,0);assert.equal(kirinFrame(2.6).impact,0);
});
