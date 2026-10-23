# Ficha interativa — Kozuki D Supros

Plano inicial baseado no CSV, nas fórmulas do XLSX e nos trechos de identidade, poderes e equipamento do `TZPG_RAG_CONTEXTO.md`. O nome de apresentação segue o pedido atual do jogador; a planilha registra Kozuki Supros.

## Objetivo e limites

Criar uma aplicação web pessoal, executada localmente, para consultar e operar a ficha durante a sessão. A aplicação deve lembrar exatamente onde a partida parou: fechar o navegador não encerra combate, recupera vida, remove condições nem devolve usos.

Prioridades: confiabilidade dos dados, agilidade em mesa, liberdade para ajustar regras e identidade audiovisual. O sistema é próprio da campanha: não importar automaticamente regras de D&D, inclusive descanso, críticos, exaustão e economia de ações.

O primeiro produto atende um personagem, um jogador e um computador. Multiplayer, sincronização em nuvem, mapas táticos e um motor completo de regras ficam fora do escopo inicial. O RAG serve como referência editorial; não precisamos incorporar busca com IA nem enviar a ficha a serviços externos.

## 1. Preparação: transformar a ficha em dados confiáveis

### Entregas

- Modelo estruturado com identidade, atributos, perícias, profissão, equipamentos, habilidades e fórmulas.
- Separação entre definição da ficha e estado da partida. Alterar o texto de uma habilidade não deve restaurar suas cargas.
- Registro da origem dos valores: célula da planilha, texto da habilidade ou ajuste do jogador.
- Lista de pendências mecânicas; Energy Transmutation e o upgrade do Clone estão aprovados, conforme confirmação do jogador em 22/10/2026.
- Estado inicial importado e revisável: nível 9, HP 49/94, CA 19, DEX 22 e os usos atuais efetivamente registrados. Não iniciar automaticamente com recursos cheios.

### Pontos a resolver durante a implementação

| Tema | O que consta nas fontes | Tratamento previsto |
| --- | --- | --- |
| Proficiência | Há bônus 3 em salvaguardas e 4 em várias perícias | Preservar valores por campo até esclarecer a regra; não substituir tudo por um único bônus |
| Energy Transmutation | Texto PB/descanso longo; tabela 4/descanso curto; marcada proposta | Habilidade aprovada; recarga e quantidade configuráveis |
| Clone | Upgrade de nível 9 marcado proposta | Upgrade aprovado e incluído na ficha vigente |
| Godspeed | Uma ativação por combate e dois usos por descanso longo; +1 DEX | Modelar ambos os limites; esclarecer teto, arredondamento e efeitos derivados da DEX temporária |
| War Lotus | Inventário e descrição detalhada divergem no dano | Fórmula explicitamente escolhida; nenhuma soma automática entre versões |
| Sacrifício adicional | Até 20 HP máximos, sem escala explícita de conversão | Registro manual até definição da regra |
| Dívida da War Lotus | Meta por soma de d100, punição permanente e perda temporária | Esclarecer quais danos contam, quando as perdas temporárias retornam e como a punição substitui ou acumula perdas |
| Cura da War Lotus | 50% do dano causado; outras curas com metade do efeito | Esclarecer arredondamento, duração da restrição e interação com cada fonte |
| Descanso e condições | Não há descrição completa das regras atuais | Ações de recuperação configuráveis; exibir previamente o que muda |
| Movimento | Botas +15 ft, Shunpo PB × 20 e Godspeed +15 ft | Não inventar deslocamento base nem unidade ausente |
| Inventário | Duas linhas de Gold, 5 e 2500; Estus 1/3 no CSV | Preservar entradas e revisar saldo/cargas; não somar ouro por suposição |
| Bonificações | Armadura +5 HP, campo bônus HP 9, anel +3 em Carisma | Conferir o que já está incluído nos totais para evitar dupla contagem |

O XLSX contém fórmulas e o CSV preserva textos como 9/9 e 1/3 que o RAG relata como números de data em outra extração. A importação deve confrontar os arquivos, conservar os textos e evitar conversões automáticas de datas.

**Concluído quando:** os dados podem ser comparados com a ficha original, e toda divergência tem uma decisão registrada ou um campo manual visível. Pendências específicas não bloqueiam o restante do aplicativo.

## 2. Construção da ficha web e persistência local

### Organização da interface

Layout prioritário para notebook/desktop, ajustável a janelas menores:

- Cabeçalho: nome, nível, retrato, sessão e indicação de salvamento.
- Faixa sempre visível: vida atual/máxima efetiva, CA, deslocamento, arma, condições e modo de combate.
- Área central: habilidades organizadas em ações, ações bônus, reações e passivas. Cada cartão mostra custo, usos restantes, alcance, teste e dano sem exigir abrir a descrição completa.
- Painel contextual: detalhes da habilidade selecionada, rolagens e efeitos ativos.
- Histórico recolhível: resultados e mudanças recentes, com desfazer.
- Seções complementares: atributos/perícias, inventário, diário e edição da ficha.

### Persistência

Usar uma base estruturada local no navegador, com IndexedDB como opção de implementação. Manter uma origem local estável, incluindo a porta: mudar de endereço pode fazer o navegador acessar outro armazenamento.

Salvar cada alteração relevante antes de indicar sucesso. Uma ação composta, como ativar uma habilidade e consumir uma carga, deve ser salva por inteiro. Persistir versão do formato de dados, estado atual e histórico de operações; criar snapshots antes de importações e migrações.

Exportar e importar um backup JSON versionado contendo ficha, partida, preferências e histórico. Recursos visuais personalizados precisam de exportação própria ou inclusão em um pacote de backup. Mostrar claramente que armazenamento do navegador pode ser apagado e fornecer um caminho simples de recuperação por arquivo.

Evitar duas abas sobrescrevendo a partida: detectar edição simultânea e manter uma única aba editora. Falhas de gravação devem produzir aviso visível e permitir exportar o estado ainda em memória.

### Personalização inicial

Editar valores, descrições, fórmulas simples de dados, cargas e recargas. Permitir bônus manuais com rótulo e origem, organizar habilidades favoritas e ajustar densidade da interface. O editor inicial atende o Supros; um construtor genérico de fichas pode vir depois.

**Concluído quando:** editar HP e cargas, recarregar ou fechar e abrir a página preserva o estado; exportar e importar em um perfil limpo recupera os mesmos dados. A ficha funciona sem conexão depois que seus recursos locais estão disponíveis.

## 3. Funcionalidades principais para jogar

### Vida, rolagens e recursos

- Aplicar dano, cura e alterações de HP máximo, distinguindo perdas temporárias e permanentes. HP temporário só recebe regras automáticas se a campanha usar essa mecânica.
- Mostrar a composição dos totais e a fórmula de cada rolagem.
- Rolar ataques, dano, perícias e salvaguardas; permitir inserir resultados de dados físicos e ajustes do mestre.
- Oferecer vantagem/desvantagem e críticos como opções configuradas para a campanha.
- Separar dano rolado de dano efetivamente aplicado após defesas do alvo. Cura e dívida da War Lotus dependem do valor relevante confirmado.
- Consumir e recuperar cargas segundo a configuração da habilidade. Descanso curto/longo apresenta uma prévia dos recursos afetados.
- Registrar ações com valores anteriores e posteriores e permitir desfazer, incluindo cura, cargas e mudanças compostas.

### Combate e durações

- Iniciar, pausar, retomar e encerrar combate explicitamente.
- Acompanhar turno do Supros e marcadores de rodada quando úteis; tempo real não avança a mecânica.
- Acompanhar ação, ação bônus e reação como lembretes, com correção manual.
- Condições com origem, alvo e gatilho de expiração. Diferenciar fim do próximo turno do alvo de fim do turno do Supros; efeitos de inimigos podem exigir marcação manual.
- Não exigir cadastro completo de inimigos para usar uma habilidade.
- Encerrar sessão preserva combate e recursos; encerrar combate mostra consequências antes de aplicá-las.

### Mecânicas próprias

| Mecânica | Interação prevista |
| --- | --- |
| Multi Attack | Duas rolagens vinculadas à ação, sem gastar duas ações |
| Lightning Reaver | Sequência de até três alvos distintos, dano por alvo e lembrete de distância |
| Lightning Spear | Dano, DC 15, resultado do teste e lembrete de paralisia |
| Kirin | Estados de canalização e disparo; céu aberto, clima, alvo ferido e variante nublada explícitos |
| Godspeed | Contador de três turnos, modificadores temporários, extensão e exaustão pendente ao desativar |
| Clone | Um clone ativo, redirecionamento por d4, ataque e explosão como operações distintas |
| Black Flash | Gatilho por crítico corpo a corpo, faixa 19–20 até fim do combate e lembrete CON 17 |
| Parry | +3 CA vinculado ao ataque recebido; não alterar a CA permanentemente |
| Flash Bang | Uso de reação, teste CON 15 e duração da cegueira |
| Transmutation | Escolha do elemento e efeitos associados conforme versão aprovada |
| Hyorimaru | Ação bônus e lembrete de terreno difícil, sem precisar de mapa |
| War Lotus | Saque com 1–3d100, sacrifício, bônus, meta de dano, progresso, cura e resolução ao encerrar combate |

War Lotus deve possuir painel próprio: HP máximo original, perdas permanentes, perdas temporárias, máximo efetivo, dívida e dano contabilizado. O jogador pode corrigir valores com justificativa no histórico. Nenhuma consequência permanente deve surgir de um simples fechamento da página.

**Concluído quando:** um combate de exemplo atravessa ativação, rolagens, consumo de recursos, troca de turno, pausa entre sessões e encerramento sem depender de cálculo externo para as regras já definidas.

## 4. Funcionalidades secundárias importantes

- Inventário com quantidades, consumíveis, moedas e equipamento equipado. Consumir uma poção conecta quantidade, cura e restrições vigentes.
- Diário por sessão, com notas livres, objetivos e resumo de recursos ao começar/terminar. Notas não precisam armazenar o RAG inteiro.
- Histórico consultável por sessão e combate; snapshots nomeados antes de encontros importantes.
- Evolução de nível com revisão de diferenças, preservando versões anteriores da ficha.
- Busca por habilidades e itens; atalhos de teclado documentados; uso integral com teclado e foco visível.
- Modo de mesa compacto, com boa legibilidade e menor quantidade de painéis.
- Exportação de uma ficha legível para consulta/impressão como complemento ao backup completo.
- Tratamento de erros de importação, arquivo incompatível e armazenamento indisponível sem destruir os dados atuais.

**Concluído quando:** preparar a sessão, consumir um item, fazer uma anotação e recuperar um backup são operações simples e verificáveis.

## 5. Identidade visual e audiovisual

A direção final vem após validar as interações, mas contraste, tipografia, espaçamento e componentes consistentes começam na primeira tela.

### Direção artística proposta

Um espadachim de tempestade marcado pela Guerra: grafite/preto, branco de haori e azul elétrico como base. Formas inspiradas em cortes de katana, pinceladas e energia contida. A carpa e elementos do clã podem aparecer como marcas discretas. A War Lotus ganha uma linguagem de tensão própria, com vermelho profundo como proposta artística a validar, sem estabelecer uma cor canônica para a espada.

Retrato e referências devem preservar cabelo longo preso, cicatriz e vestimentas documentadas. As imagens descritas pelo RAG não estão presentes nesta árvore do projeto; o primeiro layout usa espaços reservados e recursos abstratos até termos os arquivos visuais.

Não expor segredos de backstory em mensagens automáticas. Nome, títulos e textos de interface devem refletir o que o jogador deseja apresentar na mesa.

### Efeitos orientados por eventos

| Evento | Visual proposto | Som proposto |
| --- | --- | --- |
| Ataque de katana | Corte breve junto ao resultado | Saque/corte curto |
| Shunpo | Rastro e deslocamento visual do retrato | Passagem rápida de ar |
| Lightning Reaver | Arcos em sequência entre resultados | Descargas encadeadas |
| Lightning Spear | Traço elétrico concentrado | Carga curta e descarga |
| Kirin: canalizar | Céu estilizado e energia crescente | Trovão distante, sem loop obrigatório |
| Kirin: disparar | Silhueta energética e impacto breve | Trovão em camadas |
| Godspeed | Aura persistente discreta e contador aceso | Pulso de ativação; ambiente opcional |
| Clone | Silhueta elétrica com estado próprio | Estalo na criação e ruptura na explosão |
| Black Flash | Contraste e corte de impacto localizado | Impacto grave e seco |
| War Lotus | Alteração gradual de bordas e painel de dívida | Saque metálico e textura grave opcional |

As animações reagem a eventos mecânicos já confirmados. Um efeito não consome carga, altera dano nem bloqueia botões; interrompê-lo não desfaz a ação. Reabrir a aplicação restaura a aura de Godspeed ativo sem repetir seu som de ativação.

Controles: volume geral e por categoria, mudo, intensidade visual, movimento reduzido, desligar flashes/tremor e duração curta de efeitos. Habilitar áudio após interação explícita com a página. Evitar sons longos ou sobreposição que atrapalhem a conversa da mesa; música temática fica opcional e posterior.

Recursos de áudio e imagem devem funcionar localmente. Registrar autoria/licença ou origem dos materiais usados.

**Concluído quando:** cada efeito comunica uma ação ou estado, a interface continua rápida, e todas as mecânicas funcionam com áudio e animações desligados.

## Arquitetura e organização propostas

Separar interface, regras e armazenamento. O núcleo de regras recebe comandos como aplicar dano, ativar habilidade e finalizar turno; produz novo estado e eventos. A interface apresenta o estado, a persistência grava a mudança e a camada audiovisual interpreta os eventos.

Modelo mínimo: definição do personagem, configuração de regras, estado de recursos, combate, efeitos ativos, inventário, sessões, histórico e preferências. Habilidades possuem identificadores estáveis para sobreviver a mudanças de nome e descrição. Fórmulas aceitam operações e dados suportados por um interpretador limitado, sem executar código arbitrário.

Começar com aplicação web e servidor local de desenvolvimento. Escolher bibliotecas e versões no início da implementação. Um atalho de inicialização e um pacote local de execução devem fazer parte da entrega utilizável; instalação como aplicativo pode ser avaliada depois. Não há necessidade inicial de contas, servidor remoto ou banco em nuvem.

## Sequência de entregas e validação

1. **Base e protótipo:** catálogo de dados, pendências e tela navegável com estado importado.
2. **MVP para mesa:** HP, habilidades, cargas, dados, edição básica, persistência, backup e desfazer. Já serve como ficha operacional com registros manuais para regras complexas.
3. **Combate do Supros:** durações, Kirin, Godspeed, Clone, Black Flash e War Lotus; validar casos difíceis antes de automatizar consequências permanentes.
4. **Rotina de campanha:** inventário, diário, snapshots, evolução e atalhos.
5. **Identidade final:** arte, animações, sons e ajustes após uso real.

Não estimar calendário antes de fechar as regras ambíguas e experimentar o protótipo. Cada entrega precisa poder ser usada e revisada individualmente.

Testes prioritários: operações de HP e cargas; dano aplicado versus rolado; efeitos e fim de turno; exaustão de Godspeed; dívida e perdas da War Lotus; desfazer de ações compostas; salvar/reabrir; backup/restauração e migrações. Verificar também ausência de recargas involuntárias ao fechar combate ou sessão.

Roteiro de aceitação: começar em 49/94 e com usos parciais; ativar Godspeed; usar uma habilidade; registrar dano efetivo; fechar em combate; reabrir e conferir todos os recursos; finalizar durações; concluir um combate com War Lotus; desfazer a resolução; exportar e restaurar em ambiente limpo. Uma sessão real de jogo deve orientar o refinamento da disposição dos controles e da intensidade dos efeitos.

## Estado de implementação — 22/10/2026

Entregas 1 e 2 iniciadas com versão utilizável em `app/`: catálogo do nível 9, interface responsiva, HP, cargas, rolagens, edição de personagem/atributos/perícias/habilidades/itens, diário, condições manuais, combate com contador de turnos, IndexedDB, bloqueio entre abas, desfazer e backup JSON com restauração validada.

Energy Transmutation e o upgrade do Clone são aprovados, conforme confirmação do jogador. A recarga inicial de Transmutation usa a tabela (4 por descanso curto) e permanece editável.

Validação: sete testes do núcleo; teste em Chromium de dano, carga, recarga, rolagem, diário, turno, persistência após recarregar, importação real de arquivo, desfazer restauração, edição de perícia e segunda aba somente leitura. Layout conferido em 1440 e 390 pixels, sem transbordamento horizontal.

## Próximo passo

Revisar esta primeira ficha em uso e iniciar a entrega 3. Antes de automatizar a War Lotus, definir sua fórmula de dano e resolução das perdas máximas. Implementar durações de Godspeed, ciclo do Kirin e estados do Clone; automatizações ainda ausentes estão explicitadas na interface e no README.


## Revisão de fluxo para RPG presencial — 22/10/2026

Direção atualizada pelo jogador após consultar `VascoTemplate.html`: priorizar simplificação e estrutura antes da identidade visual. A tela inicial é exclusivamente de combate. Rolagens digitais e registro de resultados físicos foram removidos; fórmulas, CDs e bônus permanecem como referência para os dados de mesa.

Seções implementadas: Combate, Habilidades, Ficha, Estado, Inventário, Notas & histórico e Ajustes & backup. Habilidades ativáveis estão agrupadas por ação, ação bônus, reação e ação livre. Passivas e edição ficam no catálogo; descansos ficam em Habilidades; condições são registradas em Estado e resumidas no combate. Histórico e backup deixam a tela de combate.

A reorganização mantém o banco, o endereço local e a compatibilidade com backups anteriores. O resumo de combate pode ser personalizado no editor de cada habilidade. Automações de regras e identidade audiovisual seguem como próximas entregas.


## Transformações, turnos e identidade — 22/10/2026

Godspeed corrigido para +2 DEX conforme instrução atual: +1 modificador, CA, acerto e dano baseado em DEX, com contador de três turnos e sobrecarga. War Lotus implementada como empunhadura, pacto por d100 físicos, sacrifício, dívida, cura e resolução confirmada de perdas máximas; sua fórmula e bônus são configuráveis. Parry, Clone e Kirin têm estados próprios. Efeitos recebidos avançam por marcos independentes de início/fim de turno pessoal ou de grupo. Exaustão possui registro próprio.

Identidade iniciada com as duas imagens fornecidas, base preta/azul escuro, dano destacado e presença preta/vermelha da War Lotus. Animações reagem a eventos confirmados; não executam regras e respeitam movimento reduzido. Em desktop, o painel do pacto acompanha as técnicas lateralmente. Multi Attack foi retirado do painel de combate.

Formato de dados atualizado para v2 com migração de estado e histórico v1. Regras, decisões em pontos ambíguos e limites estão documentados em `COMBATE.md`. Não foram adicionadas rolagens digitais ou ficha de inimigos.


## Refinamento de transformações e cenas — 22/10/2026

Direção atual: somente turno individual, com botão grande fixo durante a rolagem. Relógios de grupo foram retirados e migrados para o relógio do Supros sem perder a duração dos efeitos. O formato v3 migra também os snapshots do histórico e guarda uma cópia do estado anterior.

Assets de `externalAssets/` integrados com nomes estáveis. Há ícones para todas as seções e técnicas; Flash Bang recebe representação vetorial. As nove técnicas ativáveis têm cenas próprias. Godspeed, Kirin e War Lotus recebem cenas com múltiplas etapas. Godspeed transforma retratos e a paleta completa, com raios emanando do banner; War Lotus domina a paleta, corrompe os retratos e substitui o núcleo elétrico por preto com contorno vermelho. A forma visual respeita a combinação das duas habilidades, a persistência e o desfazer.

A especificação atual de operação está em `COMBATE.md`; as referências antigas a turnos independentes de grupo neste plano são históricas e foram substituídas por esta decisão.
