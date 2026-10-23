// Somente apresentação: não rola dados nem modifica as regras da ficha.
export const ACTION_GROUPS = [
  {name:'Ação',title:'Ações'},
  {name:'Ação bônus',title:'Ações bônus'},
  {name:'Reação',title:'Reações'},
  {name:'Ação livre',title:'Ações livres'},
];
export function actionType(skill){
  if(skill.group==='Passiva')return 'Passiva';
  return /tipo:\s*(free action|ação livre)/i.test(skill.description)?'Ação livre':skill.group;
}
export function combatGroups(skills){
  return ACTION_GROUPS.map(g=>({...g,skills:skills.filter(s=>s.id!=='skill-53'&&s.name.toLowerCase()!=='multi attack'&&actionType(s)===g.name)})).filter(g=>g.skills.length);
}
export function combatSummary(skill){
  if(typeof skill.combatSummary==='string'&&skill.combatSummary.trim())return skill.combatSummary.trim();
  const lines=skill.description.split('\n').map(s=>s.trim()).filter(Boolean);
  const summary=lines.filter(s=>/^(Dano:|Alcance:|Duração:|Condição:|Limite:|Clina Nublado:|Clima Nublado:|Afeta área|Teste:|Efeito:\s*\S|[+−-]\d|Ganha |Thunder:|Cold:|Fire&Radiant:)|\d+d\d+|ST (de )?(CON|DEX)/i.test(s));
  return [...new Set(summary.length?summary:lines.slice(0,2))].join('\n');
}
export const rechargeLabel = skill => skill.rest==='short'?'Descanso curto':skill.rest==='long'?'Descanso longo':'Recuperação manual';
