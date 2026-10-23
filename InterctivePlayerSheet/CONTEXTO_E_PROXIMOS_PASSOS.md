# Supros — contexto e roteiro de retomada

Atualizado em **22/10/2026**, para retomar em **23/10/2026**.

Este documento reúne o estado atual e o feedback mais recente do jogador. A ordem de trabalho abaixo prevalece sobre as etapas e sugestões históricas do plano original. A solicitação desta rodada foi documentar a continuidade; os refinamentos listados ainda não foram implementados.

## Atualização de 23/10/2026 — ícones e categorias

- Integrados os assets de Black Flash, Multi Attack, Flash Bang e Godspeed; Shunpo atualizado para `Shunpo 2.png`. Cópias locais em `app/assets/skills/`.
- Lightning Veins integrado posteriormente a partir de `externalAssets/Lighning Veins.png` (grafia original preservada na origem).
- Categorias diferenciadas discretamente no combate e catálogo: ação azul, ação bônus verde, reação laranja, passiva dourado e ação livre branco. Bordas, títulos e controles preservam a identificação durante as transformações.
- Passivas na seção Estado também exibem ícones e detalhes dourados.
- Revisão após feedback: URLs de entrada, módulo visual, CSS e ícones versionadas para invalidar cache anterior. Tonalidade das categorias aplicada também a fundos, títulos e cargas.
- Verificação em `http://localhost:8765`: quatro assets apontados pelo jogador idênticos byte a byte aos originais; catálogo revisado em captura do Chromium; estilos computados conferidos em base/Godspeed/War Lotus e após recarga; testes existentes passaram.
- Godspeed recebeu o protótipo descrito abaixo; demais animações, partículas da Guerra e sons continuam pendentes.

## Protótipo Godspeed com PixiJS — 23/10/2026

- Motor em `app/godspeed-fx.mjs`, PixiJS 8.22.0 e licença MIT locais em `app/vendor/pixi/`. Importação sob demanda, sem CDN ou build obrigatório.
- Godspeed ativo aciona 52 partículas com rastros curvos, brilho e conexões elétricas breves, concentradas no banner; presença reduzida sobre o texto. Ativação emite impulso curto em vez da antiga cena com retrato gigante.
- `syncFormVisuals` sincroniza o motor com o estado salvo, sem alterar regras ou cargas. Reabrir Godspeed ativo restaura ambiente sem repetir impulso de ativação.
- War Lotus suspende o protótipo azul; seu efeito foi substituído na rodada descrita abaixo.
- Ticker próprio limitado a 60 fps, resolução limitada a 1,5×, pausa com efeitos desligados, movimento reduzido, aba oculta ou seções sem banner/retrato. Canvas único, sem interceptar cliques, acompanha rolagem e redimensionamento.
- Prévia independente: `http://localhost:8765/godspeed-preview.html`; também acessível em Ajustes & backup. Não lê/grava a partida. Controles de ativação, impulso e desligamento.
- Verificado no Chromium isolado em localhost: ativação real, pausa/retorno entre seções sem duplicação, desativação, movimento reduzido dinâmico, prioridade da Guerra, largura de 390 px e recursos locais. Testes existentes passaram.
- Medição inicial com 64 partículas antes do refinamento para 52: aproximadamente 60 fps, 0,43 ms de atualização por quadro (não inclui renderização). Teste headless com renderização de software, não garantia do desempenho da aba do jogador.
- Godspeed aprovado pelo jogador; adicionadas descargas claras. War Lotus e Kirin implementados na rodada seguinte. Demais habilidades e sons aguardam revisão.

## War Lotus, Kirin e portabilidade — 23/10/2026

- Godspeed recebeu descargas branco-azuladas breves adicionais; preservado o fluxo aprovado pelo jogador.
- `app/combat-fx.mjs`: segundo canvas PixiJS compartilhado entre War Lotus e Kirin, carregado sob demanda. Descargas negras em mistura normal com contorno escuro e halo cinza discreto; sem raio vermelho. Ramificações surgem do banner e do painel da espada. Impulso ao empunhar/alimentar.
- Kirin tem canalização de 1,8 s, ambiente discreto de céu durante o estado canalizado, e disparo de 2,6 s com aparição/descida da fera, descarga vertical e impacto. Sprite próprio transparente em `assets/fx/kirin-beast.png`, gerado com imagegen a partir da referência fornecida; procedência documentada na pasta.
- `app/fx-geometry.mjs`: caminhos ramificados determinísticos e cronologia visual, com testes. Nenhuma mudança nas regras ou recursos.
- `app/combat-preview.html`: prévia sem acesso à partida, com War Lotus, Godspeed e as duas etapas de Kirin. Acesso também por Ajustes & backup.
- Verificado no Chromium isolado: pacto real da War Lotus, prioridade visual, canalizar/disparar Kirin consumindo carga uma única vez, embainhar restaurando Godspeed, navegação, efeitos desligados, movimento reduzido, largura de 390 px e recarga. Sem erros de execução e sem recursos externos.
- Medição do ambiente War Lotus no teste headless: aproximadamente 60 fps e 0,10–0,12 ms de atualização por quadro, sem incluir renderização. Não é garantia de desempenho em outro dispositivo.
- Inicializador Python multiplataforma, wrappers shell e Windows; README da raiz explica instalação e transferência da partida por exportar/importar JSON. Código no GitHub não sincroniza o IndexedDB.
- `.gitignore` exclui credenciais, dependências, caches e backups. Git inicializado na raiz. Publicação depende de autenticação no GitHub CLI.

## 1. Objetivo do projeto

Ficha web local, customizável e interativa de **Kozuki D Supros**, nível 9, para acompanhar um RPG presencial no computador do jogador.

A aplicação deve facilitar a gameplay e preservar recursos entre sessões. Os dados são rolados fisicamente: fórmulas, CDs e bônus ficam visíveis, mas não queremos rolagens digitais ou uma interface para operar inimigos.

Referências principais:

- Excel e CSV em `InterctivePlayerSheet/`: base mecânica do personagem.
- `VascoTemplate.html`, na raiz: referência de organização por contexto de uso.
- `TZPG_RAG_CONTEXTO.md`, na raiz: apoio de identidade, história e contexto da campanha. Não substitui regras atuais ou decisões do jogador/mestre.
- `externalAssets/`, na raiz: imagens e ícones fornecidos pelo jogador.

## 2. O que já foi implementado

### Organização e gameplay

- **Combate:** tela inicial, vida, dano recebido/cura, CA, acerto, dano das katanas, técnicas ativáveis por categoria e painel da War Lotus.
- **Habilidades:** catálogo, passivas, consulta, edição e descansos com prévia.
- **Ficha:** atributos, salvaguardas, perícias e profissão.
- **Estado:** exaustão, efeitos recebidos e lembretes livres.
- **Inventário:** equipamentos e quantidades editáveis.
- **Notas & histórico:** diário e registro de operações.
- **Ajustes & backup:** valores base, configurações, exportação/importação e preferência de animações.

O combate usa **somente o turno individual**. Iniciar/Finalizar turno fica em uma barra destacada e fixa durante a rolagem da página. O controle de turnos do grupo foi removido. Efeitos antigos desse relógio são convertidos para o turno do Supros, preservando suas ocorrências restantes.

Katanas mostram apenas dano, destacado por cor. Multi Attack saiu do painel de combate, mas permanece no catálogo. Energy Transmutation e o upgrade do Clone estão **aprovados**, não são propostas pendentes.

### Mecânicas conectadas

- **Godspeed:** +2 DEX, +1 no modificador e nos derivados implementados; três fins de turno, extensão e exaustão ao desativar. Uma ativação por combate, além das cargas por descanso longo.
- **War Lotus:** empunhar/embainhar, +2 acerto por padrão, sacrifício por d100 físicos, dívida de dano, cura, redução de cura externa e resolução confirmada das perdas máximas.
- **Parry:** +3 CA contra o ataque atual, encerrado explicitamente após a defesa.
- **Kirin:** canalizar e disparar, sem consumir uma segunda carga ao disparar.
- **Clone:** marcador de clone ativo, limite de um e encerramento manual.
- **Efeitos recebidos:** origem, alvo, descrição, modificadores de CA/acerto/dano e duração por início/fim do turno individual ou encerramento manual.
- **Exaustão:** campo próprio, incluindo aumento pela sobrecarga de Godspeed. Não foi importada uma tabela automática de exaustão de D&D.

Não tratar todas as condições ou passivas como completamente automatizadas. Resultados de testes e efeitos sobre inimigos continuam sendo resolvidos na mesa.

### Identidade visual existente

- Base preta/azul escuro.
- Godspeed troca o retrato e energiza a paleta de todas as seções.
- War Lotus domina a paleta em preto/vermelho e mantém os bônus de Godspeed quando ambas estão ativas.
- Embainhar a espada com Godspeed ativo restaura a apresentação de Godspeed; desativar ambas restaura a apresentação base.
- Ícones nas seções e nas habilidades, usando os assets disponíveis e substitutos vetoriais quando necessário.
- Cenas de ativação distintas, incluindo etapas separadas para canalização/disparo do Kirin.
- Raios persistentes emanando do banner, com núcleo preto e contorno vermelho durante a War Lotus.
- Opção de desligar animações e respeito a movimento reduzido.

**Implementado não significa aprovado visualmente.** As cenas e os raios persistentes são o principal alvo da próxima revisão.

### Persistência e verificação

- IndexedDB `supros-sheet`, armazenamento `state`, estado principal na chave `current`.
- Formato atual de dados: **v3**, com migração de v1/v2 e dos snapshots usados por desfazer.
- Cópia anterior à migração mais recente: `before-upgrade-v3`.
- Backup JSON, validação de importação, histórico/desfazer e bloqueio de edição simultânea entre abas.
- Fechar a ficha não cura, recupera cargas ou avança turnos.
- Diário e lembretes livres ainda possuem botão Salvar explícito.
- Na última entrega, **26 testes passaram**, além de verificações no Chromium sobre transformações, cenas, turnos, migração, responsividade e movimento reduzido.
- **Efeitos sonoros ainda não foram implementados.**

## 3. Feedback do jogador — direção para amanhã

O jogador quer animações **mais minimalistas**, com boa execução e relação clara com o conceito da técnica e com a identidade do Supros.

- **Lightning Reaver ficou muito boa:** usar como referência positiva de clareza, ritmo e economia visual. Preservar sua direção ao revisar o conjunto.
- **Kirin ficou extremamente confusa:** prioridade alta de revisão das cenas. Muitos elementos simultâneos prejudicaram a leitura.
- Algumas outras animações pareceram apenas o ícone ampliado/repetido sobre a tela, acompanhado de riscos estáticos de raio. Essa abordagem não atende à direção desejada.
- Os efeitos permanentes também precisam ser refeitos: o problema é o aspecto de traçados estáticos repetindo, sem fluidez.
- Desejo para a energia ambiente: **pequenas partículas elétricas fluidas percorrendo a interface, principalmente o banner**, com aparência mais moderna.
- Novas tecnologias, frameworks ou bibliotecas podem ser considerados para melhorar a execução. Ainda não foi escolhida uma solução, nem foi solicitada uma migração integral da aplicação.

Os assets de ícones servem para identificar habilidades na interface. Não devem ser usados automaticamente como a peça principal de uma animação de tela inteira.

## 4. Ordem de trabalho acordada

### Prioridade 1 — novos assets dos ícones restantes

- [ ] Receber/conferir os novos arquivos que o jogador providenciar.
- [ ] Mapear os arquivos às habilidades pelos nomes e identificadores estáveis.
- [ ] Integrar os ícones que faltam e revisar consistência de tamanho, recorte e legibilidade.

Inventário atual:

| Habilidade / elemento | Situação atual |
| --- | --- |
| Lightning Reaver | Ícone fornecido: `LightningReaver.png` |
| Lightning Spear | Ícone fornecido: `LighningSpear.png` — manter atenção ao nome original com essa grafia |
| Kirin | Ícone fornecido: `Kirin.png` |
| Energy Transmutation | Ícone fornecido: `EnergyTransmutation.png` |
| Shunpo | Ícone fornecido: `Shunpo.png` |
| Clone | Ícone fornecido: `Clone.png` |
| Parry | Ícone fornecido: `Parry.png` |
| War Lotus | Asset fornecido: `War Lotus.png` |
| Godspeed | Usa o retrato `GodspeedSuprosTrue.png`; avaliar ícone dedicado entre os novos arquivos |
| Flash Bang | Representação vetorial provisória; não há asset raster próprio no diretório atual |
| Lightning Veins / Black Flash | Sem ícones dedicados fornecidos no diretório atual; conferir cobertura desejada do catálogo/passivas |

Não presumir quais arquivos novos chegarão. Reexaminar `externalAssets/` na retomada.

### Prioridade 2 — revisar animações das habilidades

- [ ] Revisar cada cena existente, preservando Lightning Reaver como referência de direção.
- [ ] Começar a correção pelo Kirin, pela avaliação negativa explícita.
- [ ] Definir uma intenção visual curta por técnica antes de implementar.
- [ ] Separar claramente canalização e disparo do Kirin, evitando elementos concorrentes.
- [ ] Reduzir ícones ampliados, repetições, excesso de camadas e raios meramente decorativos.
- [ ] Refinar Godspeed e War Lotus com identidade forte e composição simples.
- [ ] Validar exemplos visuais antes de aplicar a mesma linguagem a todas as técnicas.

Critérios de revisão propostos:

- A ação deve ser reconhecível por movimento, ritmo e forma, sem depender de um ícone gigante ou do nome na tela.
- Cada cena deve ter um foco principal e terminar de forma limpa.
- Minimalismo não significa pouca qualidade: priorizar timing, trajetória, transição e acabamento.
- Preservar acesso aos controles e a consulta aos números durante a gameplay.
- A cena acompanha uma ação já confirmada; não consome recursos ou executa regras por conta própria.

Não há storyboard novo aprovado. As próximas propostas devem partir desse feedback, sem considerar a encenação atual do Kirin uma referência a conservar.

### Prioridade 3 — refazer energia e partículas permanentes

- [ ] Substituir a aparência de riscos estáticos repetidos por movimento elétrico contínuo e orgânico.
- [ ] Concentrar a presença visual no banner, com partículas discretas percorrendo outras regiões da ficha.
- [ ] Diferenciar Godspeed e Guerra pela energia: azul energizado versus preto com contorno vermelho.
- [ ] Preservar a transformação global de paleta e retratos já conectada ao estado do personagem.
- [ ] Avaliar a tecnologia adequada por meio de um protótipo pequeno e revisável.
- [ ] Conferir fluidez, custo de processamento, legibilidade e ausência de bloqueio aos cliques.
- [ ] Manter desligamento de efeitos e movimento reduzido.

A implementação atual usa CSS/SVG. Avaliar se uma camada de partículas em Canvas 2D ou WebGL, eventualmente apoiada por uma biblioteca, atende melhor ao objetivo. Isso é uma **investigação pendente**, não uma escolha tecnológica já feita. Consultar documentação atual ao selecionar a solução.

Uma eventual ferramenta de build ou biblioteca não deve obrigar o usuário a perder os dados locais, trocar de endereço sem migração ou depender da internet para jogar.

### Prioridade 4 — efeitos sonoros em habilidades selecionadas

- [ ] Definir com o jogador quais habilidades receberão som e a identidade sonora desejada.
- [ ] Selecionar/providenciar os arquivos de áudio e mantê-los disponíveis localmente.
- [ ] Sincronizar sons com os momentos relevantes das animações revisadas.
- [ ] Incluir volume, mudo e controle de sobreposição, considerando a conversa da mesa presencial.
- [ ] Garantir que reabrir a ficha não repita sons de ativação de transformações já ativas.

Não há lista final de habilidades sonorizadas ou assets de áudio escolhidos. Não presumir trilha contínua ou som em todos os cliques.

### Prioridade 5 — ajustes a gosto nas outras seções

Somente depois das etapas anteriores, revisar com o jogador:

1. Habilidades.
2. Ficha.
3. Estado.
4. Inventário.
5. Notas & histórico.

- [ ] Levantar os ajustes específicos de cada seção.
- [ ] Priorizar clareza, consulta rápida e personalização conforme o uso real.
- [ ] Evitar redesenhar essas áreas antecipadamente: as preferências pontuais ainda serão fornecidas.

## 5. Mapa técnico para retomar

Aplicação em `InterctivePlayerSheet/app/`, sem framework ou dependências de execução externas atualmente.

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura, navegação, métricas e controle fixo do turno |
| `app.mjs` | Renderização, formulários, eventos e ligação entre regras, salvamento e apresentação |
| `core.mjs` | Estrutura dos dados, validação, migrações, histórico e operações gerais |
| `battle.mjs` | Derivados, turnos, Godspeed, War Lotus, efeitos e estados das técnicas |
| `combat-view.mjs` | Agrupamento de técnicas e resumo de consulta |
| `store.mjs` | IndexedDB |
| `visuals.mjs` | Mapeamento de assets, cenas, retratos e estado visual das transformações |
| `icons.mjs` | Ícones vetoriais da navegação e substitutos |
| `style.css` | Estilos estruturais iniciais |
| `identity.css` | Base de identidade, layouts e efeitos da entrega anterior |
| `transformations.css` | Paletas globais, energia do banner e cenas mais recentes |
| `assets/` | Cópias locais das imagens e dos ícones usados pela aplicação |
| `tests/` | Testes de regras, migrações, agrupamento e apresentação |

Há estilos e efeitos de entregas anteriores nos arquivos CSS. Ao substituir uma animação, conferir seletores antigos e a ordem das folhas para evitar sobreposição involuntária. Não alterar regras de combate para tentar resolver um problema apenas visual.

Identificadores úteis: Reaver `skill-54`, Spear `skill-55`, Kirin `skill-56`, Transmutation `skill-57`, Shunpo `skill-60`, Godspeed `skill-61`, Clone `skill-62`, Flash Bang `skill-65`, Parry `skill-66`. War Lotus tem fluxo próprio, separado do catálogo de técnicas.

## 6. Execução e cuidados de continuidade

Na raiz do projeto:

```bash
./InterctivePlayerSheet/iniciar-ficha.sh
```

Endereço habitual: **http://localhost:8765**. Manter essa origem e o mesmo perfil do navegador para acessar a partida existente.

Testes:

```bash
cd InterctivePlayerSheet/app
npm test
```

Preservar o banco, os recursos consumidos, as transformações, as durações restantes e o histórico. Se uma mudança tecnológica exigir outra origem ou outro formato, preparar exportação/migração antes. Não limpar dados do navegador para testar efeitos visuais; usar um perfil/ambiente de teste separado.

A War Lotus possui pontos de regra que foram explicitados em `COMBATE.md`: fórmula base configurável, CA própria zero por padrão, arredondamento de cura e recuperação explícita dos sacrifícios temporários. Os refinamentos visuais não são autorização para mudar essas regras silenciosamente.

## 7. Primeira ação na retomada

**Conferir os novos ícones em `externalAssets/`. Depois, propor uma versão minimalista do Kirin, usando Lightning Reaver como referência positiva de clareza e acabamento.** A escolha de tecnologia para partículas vem na etapa seguinte; a inclusão de sons e o refinamento das demais seções vêm depois.
