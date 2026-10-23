import test from 'node:test';
import assert from 'node:assert/strict';
import {flowingPath,pointOnPath,slicePath,measurePath} from '../energy-flow.mjs';

test('corrente evolui continuamente sem soltar origem ou destino',()=>{
 const from={x:-40,y:3},to={x:600,y:170};
 const before=flowingPath(from,to,{time:3,seed:42});
 const after=flowingPath(from,to,{time:3+1/60,seed:42});
 assert.deepEqual(before[0],from);assert.deepEqual(before.at(-1),to);
 assert.deepEqual(after[0],from);assert.deepEqual(after.at(-1),to);
 assert.deepEqual(before,flowingPath(from,to,{time:3,seed:42}));
 assert.notDeepEqual(before,after);
 assert.ok(before.every((p,i)=>Math.hypot(p.x-after[i].x,p.y-after[i].y)<2));
 assert.notDeepEqual(before,flowingPath(from,to,{time:4,seed:42}));
});
test('pulsos percorrem a distância real e chegam às extremidades',()=>{
 const points=[{x:0,y:0},{x:90,y:0},{x:90,y:10}];
 assert.deepEqual(pointOnPath(points,.5),{x:50,y:0});
 assert.deepEqual(slicePath(points,.85,.95),[{x:85,y:0},{x:90,y:0},{x:90,y:5}]);
 assert.deepEqual(slicePath(points,-1,2),points);
 assert.deepEqual(slicePath(points,.8,.2),[]);
 assert.deepEqual(pointOnPath(points,1),points.at(-1));
});
test('fontes coincidentes e trilhas vazias não geram coordenadas inválidas',()=>{
 const point={x:10,y:20};
 assert.deepEqual(flowingPath(point,point),[point,point]);
 assert.deepEqual(slicePath([point,point]),[]);
 assert.equal(pointOnPath([],0),null);
 assert.deepEqual(pointOnPath([point],.5),point);
 for(const segments of [0,1,10000]) assert.ok(flowingPath(point,{x:0,y:0},{segments}).length<=97);
});
test('medição compartilhada mantém comprimento e rastros mesmo com vértices repetidos',()=>{
 const points=[{x:0,y:0},{x:0,y:0},{x:30,y:40},{x:30,y:40},{x:60,y:80}];
 const path=measurePath(points);
 assert.equal(path.length,100);
 assert.deepEqual(path.pointAt(.75),{x:45,y:60});
 const trail=path.slice(.51,.75);
 assert.ok(Math.abs(measurePath(trail).length-24)<1e-10);
 assert.deepEqual(path.slice(1,2),[]);
 assert.deepEqual(path.pointAt(-1),points[0]);
 assert.deepEqual(path.pointAt(2),points.at(-1));
 assert.equal(measurePath([]).pointAt(.5),null);
 assert.deepEqual(measurePath([]).slice(),[]);
});
