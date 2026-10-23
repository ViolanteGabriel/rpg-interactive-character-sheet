// Geometria e tempos da apresentação, sem dependência de DOM ou regras.
export const clamp01=x=>Math.max(0,Math.min(1,x));
export const smooth=x=>{const t=clamp01(x);return t*t*(3-2*t);};
export function seeded(seed){let n=seed>>>0;return ()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};}
export function lightningPath(from,to,seed=1,segments=12,roughness=.12){
 const random=seeded(seed),dx=to.x-from.x,dy=to.y-from.y,length=Math.hypot(dx,dy)||1;
 return Array.from({length:segments+1},(_,i)=>{
  const t=i/segments,offset=(random()-.5)*length*roughness*Math.sin(Math.PI*t);
  return {x:from.x+dx*t-dy/length*offset,y:from.y+dy*t+dx/length*offset};
 });
}
export function kirinFrame(seconds,variant='fire'){
 if(variant==='channel')return {duration:2.2,sky:Math.sin(Math.PI*clamp01(seconds/2.2)),
  beast:smooth((seconds-.85)/.55)*(1-smooth((seconds-1.6)/.55)),drop:0,strike:0,impact:0};
 return {duration:3.2,sky:smooth(seconds/.4)*(1-smooth((seconds-1.65)/.9)),
  beast:smooth((seconds-.35)/.45)*(1-smooth((seconds-1.5)/.18)),
  drop:Math.pow(smooth((seconds-.95)/.62),2),
  strike:smooth((seconds-1.45)/.07)*(1-smooth((seconds-1.67)/.28)),
  impact:smooth((seconds-1.56)/.08)*(1-smooth((seconds-1.8)/1.25))};
}
