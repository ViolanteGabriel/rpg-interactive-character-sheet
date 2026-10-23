// Geometria determinística: o tempo deforma a corrente de forma contínua.
// Sem DOM, Pixi ou estado da partida. Extremos permanecem presos à sua fonte.
const clamp = value => Math.max(0, Math.min(1, value));
const fade = value => value * value * (3 - 2 * value);
function hash(x, y, seed) {
 let n = Math.imul(x ^ seed, 374761393) ^ Math.imul(y, 668265263);
 n = Math.imul(n ^ n >>> 13, 1274126177);
 return ((n ^ n >>> 16) >>> 0) / 4294967295 * 2 - 1;
}
function noise(x, time, seed) {
 const ix = Math.floor(x), iy = Math.floor(time), u = fade(x - ix), v = fade(time - iy);
 const a = hash(ix, iy, seed), b = hash(ix + 1, iy, seed);
 const c = hash(ix, iy + 1, seed), d = hash(ix + 1, iy + 1, seed);
 return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
}
export function flowingPath(from, to, {time = 0, seed = 1, segments = 32, amplitude = 16, bend = 0, speed = 1} = {}) {
 segments = Math.max(2, Math.min(96, Math.floor(segments)));
 const dx = to.x - from.x, dy = to.y - from.y, length = Math.hypot(dx, dy);
 if (!length) return [{...from}, {...to}];
 const nx = -dy / length, ny = dx / length, clock = time * speed;
 const path = [{...from}];
 for (let i = 1; i < segments; i++) {
  const u = i / segments, envelope = Math.sin(Math.PI * u);
  // Três escalas: corrente larga, bifurcações angulares e filamentos finos.
  const drift = noise(u * 5 - clock * .65, clock * .8, seed);
  const branches = noise(u * 15 - clock * 1.7, clock * 1.6, seed + 31);
  const filament = noise(u * 37 - clock * 2.5, clock * 2.4, seed + 71);
  const offset = envelope * (bend + amplitude * (drift * .54 + branches * .28 + filament * .18));
  path.push({x:from.x + dx * u + nx * offset, y:from.y + dy * u + ny * offset});
 }
 path.push({...to});
 return path;
}
function distancesAlong(points) {
 const distances = [0];
 for (let i = 1; i < points.length; i++) distances.push(distances[i-1] + Math.hypot(points[i].x-points[i-1].x, points[i].y-points[i-1].y));
 return distances;
}
function atDistance(points, distances, distance) {
 if (!points.length) return null;
 for (let i = 1; i < points.length; i++) {
  if (distances[i] < distance) continue;
  const span = distances[i]-distances[i-1], t = span ? (distance-distances[i-1])/span : 0;
  return {x:points[i-1].x + (points[i].x-points[i-1].x)*t, y:points[i-1].y + (points[i].y-points[i-1].y)*t};
 }
 return {...points.at(-1)};
}
export function pointOnPath(points, position) {
 return measurePath(points).pointAt(position);
}
export function slicePath(points, start = 0, end = 1) {
 return measurePath(points).slice(start,end);
}
// Uma medição por corrente/quadro, compartilhada pelos pulsos e partículas.
export function measurePath(points) {
 const distances = distancesAlong(points), length = distances.at(-1) || 0;
 return {
  length,
  pointAt(position) { return atDistance(points,distances,length*clamp(position)); },
  slice(start=0,end=1) {
   const from=clamp(start)*length,to=clamp(end)*length;
   if(to<=from)return [];
   const result=[atDistance(points,distances,from)];
   for(let i=1;i<points.length-1;i++)if(distances[i]>from&&distances[i]<to)result.push({...points[i]});
   result.push(atDistance(points,distances,to));
   return result;
  },
 };
}
