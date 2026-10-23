# Ficha local do Supros

Contexto para a próxima sessão de desenvolvimento: [CONTEXTO_E_PROXIMOS_PASSOS.md](CONTEXTO_E_PROXIMOS_PASSOS.md), com o feedback visual mais recente e a ordem de prioridades para 23/10/2026.

Ficha do nível 9 para RPG presencial: controle de vida e cargas, consulta das fórmulas para dados físicos, inventário, diário, combate com turnos manuais, desfazer e backup completo.

## Abrir

Na raiz do projeto:

```bash
./InterctivePlayerSheet/iniciar-ficha.sh
```

Acesse **http://localhost:8765** em um navegador atual. Mantenha o terminal aberto durante o uso; Ctrl+C encerra o servidor. Se a porta estiver ocupada, confira o processo existente em vez de mudar a porta: o armazenamento é vinculado ao endereço e ao perfil do navegador. Nenhum pacote ou acesso à internet é necessário. Python 3 serve os arquivos pelo inicializador local; Node é necessário apenas para os testes. No Windows use `iniciar-ficha.bat` ou `py -3 InterctivePlayerSheet/iniciar-ficha.py`. Para levar a partida ao notebook, consulte [as instruções de transferência](../README.md#levar-sua-partida-para-outro-dispositivo).

## Dados e recuperação

- Estado salvo em IndexedDB após cada operação confirmada. O diário e os lembretes têm botão Salvar explícito.
- Fechar navegador, encerrar servidor ou terminar combate não recupera recursos.
- Exportar backup gera JSON com ficha, partida e histórico (até 200 operações). Guarde esse arquivo fora do navegador.
- Importação valida o arquivo antes de substituir o estado, pede confirmação, guarda o estado anterior em `before-import` e permite desfazer imediatamente.
- A primeira aba mantém o bloqueio de edição; outra aba abre somente para leitura. Após fechar a primeira, recarregue a segunda.
- Os dados ficam no navegador e não nos arquivos do projeto. Não use modo anônimo para guardar sua campanha. Limpar dados do site remove esse armazenamento.
- Nunca abra `index.html` diretamente: utilize o endereço local estável.

## Organização para jogar

A estrutura usa `VascoTemplate.html` como referência de consulta por contexto, adaptada ao Supros e ao uso no computador.

- **Combate:** vida, dano recebido/cura, CA, bônus de ataque, fórmulas das katanas e habilidades ativáveis agrupadas em ações, ações bônus, reações e ações livres. Usos e resumos ficam visíveis; descrições completas são expansíveis.
- **Habilidades:** catálogo completo, passivas, consulta, edição de regras/recursos e descansos com prévia.
- **Ficha:** atributos, salvaguardas, perícias e profissão, com bônus de consulta para os dados físicos.
- **Estado:** registro manual de condições e efeitos em andamento, com resumo no combate e referência das passivas.
- **Inventário:** equipamento e quantidades editáveis.
- **Notas & histórico:** diário e registro de operações.
- **Ajustes & backup:** dados gerais e exportação/importação.

Não há rolagens digitais, registro de dados físicos nem interface de inimigos. As fórmulas e CDs são referências para a mesa. Dano e Cura alteram somente a vida do Supros.

## Combate, identidade e transformações

As regras e a operação detalhada estão em [COMBATE.md](COMBATE.md).

- Katanas mostram só dano, com o modificador de DEX efetivo e destaque de cor. Multi Attack deixa a tela de combate, mantendo seu registro no catálogo.
- Godspeed concede +2 DEX, atualiza os derivados e acompanha três turnos, extensão e exaustão.
- War Lotus tem identidade preta/vermelha, +2 acerto, sacrifício por d100, dívida, registro de dano, cura e resolução do fim de combate. Sua fórmula e bônus próprios são configuráveis em Ajustes.
- Parry, Clone e a canalização do Kirin têm estados próprios.
- Controle destacado e fixo de início/fim do turno individual; todos os efeitos acompanham esse relógio.
- Estado permite registrar exaustão, condições e modificadores temporários com duração.
- Retrato, transformação Godspeed e ícones das técnicas estão integrados. Cada técnica tem uma cena própria; Godspeed e War Lotus mudam retratos/paleta/energia em toda a ficha. Godspeed usa partículas PixiJS com descargas claras; War Lotus usa raios negros; Kirin separa canalização e descida da fera elétrica. Animações e raios persistentes podem ser desligados.

A War Lotus não possui bônus próprio de CA na regra fornecida; o padrão é zero. Godspeed modifica a CA por DEX. O dano base da espada segue inicialmente a descrição detalhada `1d12 + DEX`, com a fórmula divergente do inventário preservada e possibilidade de escolher a fórmula em Ajustes. A recuperação de sacrifícios temporários exige decisão explícita da mesa. Exaustão e condições não importam automaticamente regras de D&D.

Energy Transmutation e o upgrade do Clone estão aprovados. Transmutation começa com quatro usos por descanso curto conforme a tabela; esse valor continua editável.

O endereço e o banco continuam os mesmos. Dados e backups v1/v2 migram para v3 sem reiniciar os recursos, com cópia anterior à migração. Relógios antigos de grupo passam a acompanhar os turnos do Supros, preservando a duração restante. Consulte COMBATE.md para os marcos de duração e decisões mecânicas adotadas.

## Verificação

```bash
cd InterctivePlayerSheet/app
npm test
```

`character.json` preserva os valores importados do CSV original; `core.mjs` contém validação, migração e operações gerais; `battle.mjs` as regras de transformações e turnos; `store.mjs` a persistência; `combat-view.mjs` a organização do catálogo; `app.mjs` a interface; `identity.css` a base visual; `transformations.css` as paletas e cenas; `visuals.mjs` o ciclo visual e os assets; `icons.mjs` os ícones das seções. Os arquivos CSV, Excel e a referência do Vasco são mantidos.

Validação: testes do núcleo, migração, derivados, turnos, efeitos, Godspeed, War Lotus, cura, perdas permanentes e desfazer. No Chromium foram verificados esses fluxos completos, migração real de IndexedDB e backups antigos, persistência após recarregar, animações desligadas, movimento reduzido e as sete seções entre 320 e 1440 pixels.
