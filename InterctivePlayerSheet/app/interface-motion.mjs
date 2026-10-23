// Feedback visual acompanha o estado confirmado; nunca executa regras de jogo.
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const running = new Set();
let previous;
export function motionAllowed() {
 return !reduced.matches && !document.body.classList.contains('effects-off');
}
function animate(element, frames, options) {
 if (!element || !motionAllowed()) return;
 const animation = element.animate(frames, options);
 running.add(animation);
 animation.finished.catch(() => {}).finally(() => running.delete(animation));
}
function stopMotion() {
 for (const animation of running) animation.cancel();
 running.clear();
 document.querySelector('#fx-layer')?.replaceChildren();
}
reduced.addEventListener('change', () => { if (reduced.matches) stopMotion(); });
export function syncInterfaceMotion(state, tab, totals) {
 const next = {tab, hp:state.character.hp, ac:totals.ac, attack:totals.attack,
  turn:`${state.combat.active}/${state.combat.turn}/${state.combat.phase}`};
 if (!motionAllowed()) stopMotion();
 const health = document.querySelector('.health');
 health.dataset.vitality = next.hp <= totals.maxHp * .25 ? 'critical' : next.hp <= totals.maxHp * .5 ? 'wounded' : 'steady';
 if (previous) {
  if (previous.tab !== tab) {
   animate(document.querySelector('#view'), [{opacity:.25,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}], {duration:220,easing:'cubic-bezier(.2,.7,.2,1)'});
  }
  for (const key of ['hp','ac','attack']) {
   if (next[key] === previous[key]) continue;
   const color = next[key] < previous[key] ? '#f28a9f' : '#92e5ca';
   animate(document.querySelector(`#${key}`), [{color,transform:'translateY(-3px)'},{transform:'translateY(0)'}], {duration:460,easing:'ease-out'});
   if (key === 'hp') {
    const delta = document.createElement('span');
    delta.className = 'resource-delta';delta.textContent = `${next.hp > previous.hp ? '+' : '−'}${Math.abs(next.hp-previous.hp)} HP`;delta.style.color=color;
    health.querySelector('.resource-delta')?.remove();health.append(delta);
    if (motionAllowed()) { animate(delta,[{opacity:0,transform:'translateY(5px)'},{opacity:1,offset:.18},{opacity:1,offset:.7},{opacity:0,transform:'translateY(-12px)'}],{duration:1100}); }
    else delta.remove();
    setTimeout(()=>delta.remove(),1150);
   }
  }
  if (previous.turn !== next.turn) animate(document.querySelector('#turn-dock'),[{boxShadow:'0 0 0 1px var(--blue)'},{boxShadow:'0 0 0 1px transparent'}],{duration:550});
 }
 previous=next;
}
// Delegação mantém o feedback nos cartões que são reconstruídos após salvar.
document.addEventListener('click', event => {
 const summary=event.target.closest('summary');
 if (!summary) return;
 const details=summary.parentElement;
 requestAnimationFrame(()=>{if(details.open) for(const child of details.children) if(child!==summary) animate(child,[{opacity:.2,transform:'translateY(-3px)'},{opacity:1,transform:'translateY(0)'}],{duration:180});});
});
