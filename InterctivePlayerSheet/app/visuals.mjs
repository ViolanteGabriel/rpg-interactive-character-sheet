import {syncCombatEffects,playCombatEffect} from './combat-fx.mjs?v=storm2';
import {syncGodspeedEffects,pulseGodspeedEffects} from './godspeed-fx.mjs?v=storm2';
import {icon} from './icons.mjs';
export const SKILL_VISUALS={
 'skill-54':{kind:'reaver',asset:'reaver',subtitle:'TRÊS CORTES · UMA TEMPESTADE',duration:1400},
 'skill-55':{kind:'spear',asset:'spear',subtitle:'ENERGIA EM UM ÚNICO PONTO',duration:1400},
 'skill-56':{kind:'kirin',asset:'kirin',subtitle:'O CÉU RESPONDE',duration:2600},
 'skill-57':{kind:'transmutation',asset:'transmutation',subtitle:'A ENERGIA MUDA DE FORMA',duration:1600},
 'skill-60':{kind:'shunpo',asset:'shunpo',subtitle:'ALÉM DO ALCANCE DOS OLHOS',duration:1000},
 'skill-61':{kind:'godspeed',asset:'godspeed',subtitle:'LIMITES DO CORPO · ROMPIDOS',duration:2800},
 'skill-62':{kind:'clone',asset:'clone',subtitle:'UM ECO FEITO DE RAIOS',duration:1500},
 'skill-65':{kind:'flash',asset:'flash-bang',subtitle:'A VISÃO SE DESFAZ',duration:1100},
 'skill-66':{kind:'parry',asset:'parry',subtitle:'A LÂMINA ENCONTRA A LÂMINA',duration:1200},
};
const CATALOG_ICONS={'skill-49':'lightning-veins','skill-50':'black-flash','skill-53':'multi-attack'};
export function skillIcon(id){const spec=SKILL_VISUALS[id]||{asset:CATALOG_ICONS[id]};return spec?.asset?`<img class="skill-icon" src="assets/skills/${spec.asset}.png?v=20261023-icons2" alt="" loading="lazy">`:id==='skill-61'?'<img class="skill-icon" src="assets/supros-godspeed.png" alt="" loading="lazy">':`<span class="skill-icon vector-icon">${icon(id==='skill-65'?'flash':'abilities')}</span>`;}
export function formMode(s){return s.runtime.war.active?'war':s.runtime.godspeed.active?'godspeed':'base';}
export function portrait(s){return s.runtime.godspeed.active?'assets/supros-godspeed.png':'assets/supros-face.png';}
// Duas camadas no mesmo traçado: a Guerra mantém o núcleo preto e a borda vermelha.
const boltPaths=['M710 210 650 155 688 146 546 38 572 116 420 46','M730 214 817 137 775 127 908 10 873 104 990 56','M706 229 603 265 635 297 472 389 525 304 351 343','M736 239 804 300 763 304 911 410 865 316 1000 352','M694 216 526 197 557 167 330 118 418 190 85 59','M740 227 853 222 835 253 1000 211'];
function bolts(cls=''){return `<svg class="${cls}" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">${boltPaths.map((d,i)=>`<g class="bolt-branch" style="--branch:${i}"><path class="bolt-border" d="${d}"/><path class="bolt-core" d="${d}"/></g>`).join('')}</svg>`;}
export function bannerEnergy(){return bolts('banner-lightning');}
export function syncFormVisuals(s){
 const mode=formMode(s);document.body.dataset.form=mode;
 syncGodspeedEffects(s);
 syncCombatEffects(s);
 document.documentElement.style.colorScheme='dark';
 document.querySelector('meta[name="theme-color"]').content=mode==='war'?'#200711':mode==='godspeed'?'#092c48':'#070c17';
 for(const img of document.querySelectorAll('.sidebar-portrait img,.portrait-panel img')){
  const src=portrait(s);if(img.getAttribute('src')!==src)img.setAttribute('src',src);
  img.alt=s.runtime.godspeed.active?'Supros em Godspeed, cabelos brancos e energia elétrica':'Supros, retrato em mangá';
 }
}
function particles(count,cls='spark'){return Array.from({length:count},(_,i)=>`<i class="${cls}" style="--i:${i};--angle:${i*360/count}deg;--spread:${130+(i%5)*33}px;--lag:${i%4*.06}s"></i>`).join('');}
const slash=(cls='')=>`<i class="cut ${cls}"></i>`;
export function sceneMarkup(kind,variant='fire'){
 switch(kind){
  case 'godspeed':return `<div class="cinema-vignette"></div><div class="speed-lines"></div><div class="awakening-portrait"><img src="assets/supros-godspeed.png" alt=""></div><div class="awakening-ring ring-one"></div><div class="awakening-ring ring-two"></div>${bolts('scene-bolts')}<div class="particle-origin">${particles(18)}</div>`;
  case 'war':return `<div class="corruption-wash"></div><div class="war-seal"><img src="assets/skills/war-lotus.png" alt=""></div><div class="war-domain"></div><div class="war-domain second"></div>${bolts('scene-bolts')}<div class="ink-fractures">${Array.from({length:9},(_,i)=>`<i style="--i:${i}"></i>`).join('')}</div><div class="particle-origin">${particles(18,'ember')}</div>`;
  case 'kirin':return `<div class="storm-clouds"></div><div class="kirin-sky-ring"></div><div class="kirin-beast ${variant==='channel'?'channeling':'descending'}"><img src="assets/skills/kirin.png" alt=""></div>${bolts('scene-bolts')}<div class="kirin-strike"></div><div class="impact-ring"></div><div class="particle-origin">${particles(20)}</div>`;
  case 'reaver':return `<div class="reaver-cuts">${slash('cut-one')}${slash('cut-two')}${slash('cut-three')}</div><div class="particle-origin">${particles(12)}</div>`;
  case 'spear':return '<div class="spear-charge"></div><div class="spear-beam"></div><div class="spear-tip"></div><div class="impact-ring"></div>';
  case 'shunpo':return `<div class="shunpo-trail"></div>${[0,1,2].map(i=>`<img class="shunpo-echo" style="--i:${i}" src="assets/skills/shunpo.png" alt="">`).join('')}`;
  case 'clone':return `<div class="clone-formation">${[0,1].map(i=>`<img style="--i:${i}" src="assets/skills/clone.png" alt="">`).join('')}</div><div class="clone-ring"></div>`;
  case 'transmutation':return `<div class="energy-core"></div><div class="element-orbit">${['#9be9ff','#bb9aff','#ff9b5c','#72dfff','#fff1ad'].map((c,i)=>`<i style="--i:${i};--element:${c}"></i>`).join('')}</div>`;
  case 'parry':return `<div class="guard-circle"></div><div class="guard-blade blade-one"></div><div class="guard-blade blade-two"></div><div class="particle-origin">${particles(14,'metal-spark')}</div>`;
  case 'flash':return '<div class="flash-iris"></div><div class="flash-iris second"></div><div class="flash-rays"></div>';
  case 'clone-end':return `<div class="clone-dissolve"><img src="assets/skills/clone.png" alt=""></div><div class="particle-origin">${particles(12)}</div>`;
  default:return '<div class="quiet-ring"></div>';
 }
}
export function playScene(s,kind,label,{variant='fire',subtitle='',duration=1300}={}){
 const live=document.querySelector('#live-event');live.textContent=label;
 if(!s.runtime.visuals||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(kind==='godspeed'){pulseGodspeedEffects();return;}
 if(kind==='war'||kind==='kirin'){playCombatEffect(kind,variant);return;}
 const layer=document.querySelector('#fx-layer');layer.replaceChildren();
 const scene=document.createElement('div');scene.className=`ability-scene scene-${kind}`;scene.dataset.variant=variant;
 scene.style.setProperty('--duration',`${duration}ms`);scene.innerHTML=sceneMarkup(kind,variant);
 const caption=document.createElement('div');caption.className='scene-caption';const small=document.createElement('span');small.textContent=subtitle;const title=document.createElement('strong');title.textContent=label;caption.append(small,title);scene.append(caption);layer.append(scene);
 setTimeout(()=>scene.remove(),duration+100);
}
export function playSkill(s,id,label,variant='fire'){
 const spec=SKILL_VISUALS[id]||{kind:'pulse',duration:1100,subtitle:''};
 playScene(s,spec.kind,label,{...spec,variant,subtitle:id==='skill-56'&&variant==='channel'?'CANALIZAÇÃO · O CÉU COMEÇA A RUGIR':spec.subtitle});
 const card=[...document.querySelectorAll('.combat-skill')].find(c=>c.querySelector('[data-id]')?.dataset.id===id);
 if(card&&s.runtime.visuals&&!matchMedia('(prefers-reduced-motion: reduce)').matches){card.classList.add('just-activated');setTimeout(()=>card.classList.remove('just-activated'),700);}
}
