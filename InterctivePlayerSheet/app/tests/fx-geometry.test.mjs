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
test('Kirin canaliza sem disparar e organiza preparação, descida, descarga e dissipação',()=>{
 for(const time of [0,.4,.8,1.2,1.8,2.2,3]){const f=kirinFrame(time,'channel');assert.equal(f.strike,0);assert.equal(f.impact,0);assert.equal(f.drop,0);}
 assert.equal(kirinFrame(.8).drop,0);assert.equal(kirinFrame(1.3).impact,0);
 assert.ok(kirinFrame(1.3).drop>0);assert.ok(kirinFrame(1.55).strike>.5);
 assert.ok(kirinFrame(1.7).impact>.5);assert.equal(kirinFrame(3.2).beast,0);
 assert.equal(kirinFrame(3.2).strike,0);assert.equal(kirinFrame(3.2).impact,0);
 for(let t=0;t<4;t+=.01){
  for(const variant of ['fire','channel']){
   const {duration,...frame}=kirinFrame(t,variant);
   assert.ok(duration>0);
   for(const amount of Object.values(frame))assert.ok(amount>=0&&amount<=1);
  }
 }
});
