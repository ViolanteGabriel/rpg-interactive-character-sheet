---
title: "TZPG | Base de contexto para recuperação (RAG)"
project: "GABRIEL | TZPG"
version: "1.0"
compiled_at: "2026-10-11"
language: "pt-BR"
source_scope: "Prompts antigos com Gemini.md; WhatsApp Chat with Tzpg.txt; Backstory Supros.docx; Kozuki Supros - tzpg.xlsx; 15 imagens"
privacy: "Privado. Campanha de RPG e material autoral dos participantes. Não republicar."
retrieval_mode: "Usar seções CHUNK-ID e referências de fonte; separar conhecimento do personagem, do jogador, do mestre e propostas."
---

# TZPG | ARQUIVO-MESTRE DE CONTEXTO RAG

**Finalidade:** oferecer a qualquer conversa futura deste projeto uma base consultável sobre o universo de fantasia TZPG, a campanha, as organizações, os arcos, os integrantes da party, a ficha, o passado, a evolução psicológica e o visual de **Kozuki Supros**. Este arquivo foi compilado somente a partir dos materiais acessíveis entregues neste projeto em 11/10/2026. **Não é uma reescrita autoritativa das decisões do mestre**.

## [CHUNK-001] Regras de leitura, precedência e integridade

1. **Sempre diferencie fonte e status:** `MESTRE` é informação explicitamente dita pelo mestre no WhatsApp; `FICHA` é o estado da planilha no momento da entrega; `BACKSTORY` é um texto narrativo entregue pelo jogador; `PROMPT_ANTIGO` é uma descrição anterior, potencialmente desatualizada; `JOGADOR` é uma fala/proposta de jogador; `NÃO CONFIRMADO` é um ponto em aberto; `HIPÓTESE` é interpretação ou planejamento, não fato de jogo.
2. **Conflitos de fonte não são corrigidos silenciosamente.** Nomes parecidos podem se referir a personagens distintos. A versão mais recente da ficha tem prioridade para números atuais, mas NÃO comprova a aprovação de marcações identificadas como proposta. Para lore, priorizar declarações específicas do mestre sobre especulações de jogadores; materiais de backstory não precisam ter sido revelados aos personagens em mesa.
3. **O que Supros sabe em cena não é igual ao que o jogador escreveu em backstory.** O texto da backstory inclui um segredo sobre a descarga da infância, a sobrevivência de alguns moradores e informações sobre Yumi. Ao sugerir falas ou ações em primeira pessoa, evitar revelar ao próprio Supros aquilo de que ele ainda não tomou conhecimento na campanha.
4. **Nunca criar estatísticas ou conteúdo canônico ausente.** Se não houver fonte de determinado poder, episódio, identidade, descendência, parentesco ou posição política, declarar a lacuna. Não confundir personagens que inspiraram a mesa com personagens do universo TZPG.
5. **Cronologia:** datas do WhatsApp são datas das mensagens, não necessariamente datas dentro do universo do RPG. A sequência de 19 acontecimentos apresentada pelo mestre em 10/08/2024 é uma ordem narrativa, mas não especifica datas, duração nem acontecimentos intermediários.
6. **Privacidade:** conversas pessoais, ofensas, endereços, detalhes financeiros, agendamento, apostas e outros assuntos sem vínculo com a ficção foram deliberadamente excluídos deste RAG; mensagens de IA inseridas no grupo também foram excluídas como fonte de cânone.
7. **Referências verificáveis:** `WA:L123` é a linha 123 do arquivo original `WhatsApp Chat with Tzpg.txt`; `PROMPT:Lxx` refere-se à linha no arquivo `Prompts antigos com Gemini.md`; `BACKSTORY:§II` aponta para a seção do DOCX; `FICHA:Planilha1!A98` identifica a célula. O anexo final traz transcrições selecionadas com autores e linhas.
8. **Atualizações futuras:** novas sessões devem acrescentar seções com data real, participantes, relato, mudanças de ficha, revelações, dúvidas e consequências. Não apagar versões antigas. O registro mais recente, quando confiável, orienta a resposta factual atual.

**Ordem recomendada de busca:** índice de entidades e perguntas-chave → chunks temáticos → fontes rastreáveis → anexo de mensagens → anexo fiel da ficha. Se as fontes divergirem, mostrar a diferença.

## [CHUNK-002] Resumo executivo do cenário

**Tipo de jogo:** fantasia heroica com forte inspiração em mangás, animes, jogos e obras de fantasia. Sistema **próprio** com referências de Dungeons & Dragons e discussões de Pathfinder 2. Não converter automaticamente para uma edição oficial de D&D. O mundo usa heróis, guildas, rankings, reinos, facções, raças e criaturas sobrenaturais. O poder sobrenatural é chamado **Chaos**, com expressões individuais diferentes. Pessoas sem Chaos existem; mesmo combatentes de nível/rank baixo com Chaos tendem a superar pessoas comuns. Há graus de ranking de **F- a S** conforme uma explicação do jogador. O mestre explicitou que a classificação por rank é baseada sobretudo em força, capacidade destrutiva e combate 1 contra 1, não exclusivamente em prestígio, inteligência ou importância histórica. Fontes: PROMPT:L25-L37; WA:L9269-L9281; WA:L23586.

**Passado remoto narrado pelo jogador:** dragões governavam a humanidade e eram vistos como deuses praticamente imortais. Há cerca de mil anos um grupo de humanos excepcionalmente poderosos, entre eles **Charles Legion** segundo um relato, derrotou o domínio dracônico e abriu a era humana. Os dragões atualmente estariam restritos às **Skylands**. Uma mensagem posterior do mestre cita explicitamente **Thomas Legion** em conexão com acontecimentos mil anos atrás. **Não igualar Charles a Thomas sem confirmação.** Fontes: PROMPT:L25-L37; WA:L24260-L24261.

**Ponto de partida da party:** os personagens acordaram confusos num laboratório, aparentemente submetidos a experimentos de uma facção criminosa chamada **Ordem**. Passaram a integrar a **Legião**, grande guilda cuja fundação é atribuída à figura histórica Legion no relato do jogador. A Ordem apresenta forte estética de *Kingdom Hearts* e seu líder controla ilusões muito poderosas, segundo a comparação do jogador com Kyōka Suigetsu de *Bleach*. O mestre e os jogadores usam os nomes **Xen**, **Xemnas** e, em material posterior do jogador, **Shein**; ver conflito nominal específico em CHUNK-011. Fonte: PROMPT:L25-L37; WA:L5726; WA:L23744-L23745.

**Situação bélica descrita no prompt antigo:** o mundo estaria em guerra contra a Ordem após um ataque de grande escala à reunião/conselho anual das nações. Tratar como *estado de campanha reportado no momento daquele prompt*, não atualização comprovada em outubro de 2026. Fonte: PROMPT:L37.

**Longa duração:** jogador relata aproximadamente quatro anos de campanha. O mesmo prompt menciona nível **8**, ao passo que a ficha mais recentemente enviada registra **Supros nível 9**. Fonte: PROMPT:L38; FICHA:Planilha1!C2.

## [CHUNK-003] Referências culturais e tom narrativo

Inspirações citadas pelo jogador e/ou mesa: **Bleach, Saint Seiya/Cavaleiros do Zodíaco, Berserk, Katekyo Hitman Reborn!, Naruto, Chainsaw Man, Pokémon, Fullmetal Alchemist: Brotherhood, Attack on Titan, One Piece, Rurouni Kenshin/Samurai X, Peaky Blinders, World of Warcraft, League of Legends, Black Sails, Merlin, Halo, O Senhor dos Anéis, Kingdom Hearts, Dota, Dark Souls.** Esse repertório informa clima, arquétipos e linguagem visual, mas não demonstra que as regras, histórias ou desfechos das obras citadas sejam cânone de TZPG. Fonte: PROMPT:L3-L24; WA:L24366-L24486.

Supros foi idealizado com referências em Sasuke, Zoro, Yasuo, Yoriichi, Zenitsu, Tanjiro e, para dilemas morais, Nagato/Pain e Thorfinn. A trajetória desejada é uma luta entre vingança, controle, proteção, redenção e a tentação de impor paz mediante o terror. Fonte: PROMPT:L39-L47; BACKSTORY:§V.

## [CHUNK-004] Cosmos e geografia, visão geral

**Continentes e regiões** identificados explicitamente pelo mestre em um comentário sobre um mapa (a imagem do mapa em si NÃO foi fornecida):

- **Kástia / Kastia:** o maior continente. Localiza o Deserto de Kalahar e a República Militar de Canon, segundo outras mensagens.
- **Soulce Marochi:** continente ou formação geológica dos anéis, com dois anéis externos e pináculo central; aldeias e tribos no anel exterior; interior pouco explorado.
- **Frostearth:** continente gelado; terras vastas e frequentemente inexploradas; sede da guilda Fenrir.
- **Hueco:** continente abaixo de Kástia na representação referida pelo mestre; está conectado geograficamente ao Canal da Serpente.
- **Canal da Serpente:** braço d'água entre Kástia e Hueco; região de pirataria, comércio clandestino e tensões sociais.
- **Dragulf:** ilha no meio do Canal da Serpente, com base da Legião para monitorar e combater contrabando.
- **Alária:** continente central cuja forma no mapa lembra um bico de falcão.
- **Arquipélago de Helhein:** conjunto de ilhas ao sul/abaixo de Alária; fauna exótica, grande interesse de caçadores e aventureiros.
- **Skylands:** domínio associado aos dragões, considerado fora do alcance da party quando apresentado como destino em abril de 2023.

Referências: WA:L669-L691; WA:L13656; PROMPT:L37. A descrição do mapa é textual. **Não pressupor fronteiras precisas nem coordenadas, porque a imagem citada no grupo foi omitida no export do WhatsApp.**

**Cores e reinos de um mapa citado em 20/03/2024**, fornecidas pelo mestre: rosa = Hakkumai; verde-claro = Dalaran; vermelho = Dragonfall; cinza = Anak Halow; roxo = Forerunner; azul = Seagate; amarelo = Nippon; branco = Três Reinos do Norte; preto = Birmingham. Outra legenda escrita pelo jogador antigo empregava cores diferentes. Não harmonizar legendas de imagens que não estão presentes. Fonte: WA:L13672-L13675; PROMPT:L26-L36.

## [CHUNK-005] Regiões e culturas descritas pelo mestre, abril de 2023

**Hueco, Canal da Serpente e Seagate:** corredor regional de pirataria. O mestre atribui parte da atividade pirata a comunidades pobres, violentas e tribais em Hueco e a forte desigualdade social em Seagate. Lei e criminalidade se entrelaçam; a base da Legião em Dragulf vigia o contrabando. A cidade independente de **Nassau** é polo pirata; o mestre mencionou **quatro capitães influentes** e imagens de aparência enviadas no WhatsApp, mas as imagens desses capitães estão marcadas `<Media omitted>` no export e não estão disponíveis aqui. Fontes: WA:L669-L671; WA:L1155-L1168.

**Soulce Marochi:** dois anéis exteriores e um pináculo; existe habitação humana no anel exterior, mas áreas internas ainda escondem rotas e criaturas únicas. Fonte: WA:L673.

**Arquipélago de Helhein:** ilhas próximas a Alária; exploração intensa, criaturas marinhas e anfíbias exóticas, algumas de alto valor comercial. Fonte: WA:L674.

**Deserto de Kalahar:** a leste de montanhas em Kástia. Nome traduzido para 'pó de ossos', associado à areia branca de certos trechos. No centro, única civilização humana importante, cuja cidade principal seria a **Cidade Dourada de Shangri-la**. Cultura comparada a antigos reinos egípcios; forças locais dispõem de armamento avançado para conflitos contra uma raça inteligente não identificada nessa descrição. Região perigosa por fauna e clima. Há menção a um **cemitério dos restos**, onde se enterram fragmentos de corpos impossíveis de identificar. Fontes: WA:L676; WA:L2796.

**República Militar de Canon (RMC):** reino no litoral leste de Kástia, além do deserto. Governado por **King Bradley, o Führer**, descrito em abril de 2023 como ex-militar Classe S, dirigente rigoroso e popular por realizações militares e gestão. Sua política inclui expulsar outros povos humanoides inteligentes na disputa territorial do continente. Um catálogo de outubro de 2023 o identifica como líder de **MFD**, designação divergente, sem explicação sobre relação com RMC. Fontes: WA:L689; WA:L5726.

**Frostearth:** continente congelado, base da guilda **Fenrir**, liderada pelo classe S **Ragnus Lothar**. Meio ambiente extremo e pouco explorado; criaturas adaptadas ao frio severo. O mestre disse em março de 2024 que havia uma menina fã da party nessa região. Fontes: WA:L690; WA:L9281.

**Floresta dos Elementais:** anotação de novembro de 2023 enviada por Fabrício descreve estações próprias chamadas **Heavenly**, **Disturbed**, **Purgatory**, **Infernum**, em ordem geral crescente de periculosidade, hostilidade de criaturas e expansão física da floresta. Durações imprevisíveis; ocasionalmente há saltos de uma estação a outra. Na data daquela mensagem a floresta estaria em Heavenly. Classificar como exposição de jogador não expressamente ratificada pelo mestre. Fonte: WA:L6186.

**Outros lugares:** Dalaran é chamada 'cidade do Sol'; Dragonfall 'primeiro Reino Humano'; Nippon fica na porção norte e inclui fronteira militar com territórios Oni; Três Reinos do Norte são posteriormente descritos como Reinos Unidos do Norte; **Birmingham** fica em Alária e é ligada a Thomas Shelby. Fonte: WA:L5726; BACKSTORY:§I.

## [CHUNK-006] Organização mundial, facções e instituições

- **Legião:** guilda central para a campanha e os protagonistas; descrita pelo jogador como a maior do mundo, fundada há mil anos por Charles Legion. **Kaname Tosen** era apontado como líder da Legião em outubro de 2023. O mestre em setembro de 2025 diz que Tosen era então reconhecido como o homem mais forte do mundo, embora tivesse sido humilhado em duelo contra Xen. **Ace** é membro associado à Legião e possui Chaos de fogo/fênix. Fontes: PROMPT:L37; WA:L5726; WA:L20857; WA:L23744-L23745.
**Juramento associado à fundação da Legião, conforme anotado por João em 18/04/2025:** defender os fracos, controlar os fortes e preservar a honra por meio da unidade. Trata-se de um registro de jogador e não de proclamação oficial do mestre no trecho disponível. Fonte: WA:L20757.

- **Ordem:** facção antagonista/criminal responsável pelos experimentos no laboratório e relacionada a grandes ataques. O rol de outubro de 2023 a denomina 'Facção dos Ackerman'. Inclui nomes como **Thanatos**, **Mímico** e **Nemesis**. O líder aparece nas fontes como **Xen/Xemnas** e nos prompts como **Shein**. Não assumir por conta própria que são três personagens diferentes nem unificá-los sem ressalva. Fontes: PROMPT:L25-L37; WA:L5726; WA:L1107; WA:L13740.
- **Fenrir:** guilda sedeada em Frostearth, liderada por Ragnus Lothar 'o Trovão'. Fonte: WA:L690; WA:L5726.
- **Amazonas:** guilda, liderada pela Classe S **Scar a Salamandra** segundo a relação de outubro de 2023. Fonte: WA:L5726.
- **Constelación:** guilda com membros classe S associados a signos, incluindo **Aiolos (Sagitário)** e **Asmita (Virgem)**; **Dohko (Libra)** e **Degel (Aquário)** também aparecem como figuras relevantes. Fonte: WA:L5726.
- **Estrela Negra**, **Mão Negra:** facções mencionadas no catálogo do mestre, sem objetivos detalhados no material acessível. Fonte: WA:L5726.
- **Novo Sol:** movimento/exército revolucionário liderado por **Bellegher** no catálogo; relacionado ao arco de piratas e exército revolucionário na cronologia. Fonte: WA:L5726; WA:L16383.
- **Guarda Real de Dalaran:** exército de Dalaran. **Conselho:** grupo de figuras poderosas e influentes que decide questões mundiais, segundo o catálogo. **Igreja do Santo Chaos:** religião descrita como muito popular e influente em várias capitais. Fonte: WA:L5726.
- **Blackhole:** prisão lendária/folclórica, que teria sido invadida por Xen. Fonte: WA:L5726.
- **Filhos de Godrick:** programa de Seagate para acolhimento de órfãos. Fonte: WA:L5726.
- **Schutz:** família de combatentes de elite de Dragonfall. **Trolls de Nyashira:** povo humanoide, relacionado à guerra descrita na cronologia. **Demônios puros:** seres associados aos Três Reinos do Norte. Fontes: WA:L5726; WA:L16383.

## [CHUNK-007] Ordem dos acontecimentos e sagas

Em **10/08/2024**, o mestre listou explicitamente, nesta ordem, **21 marcos de campanha**. São títulos resumidos. Não elaborar resultados ou encontros além do que se encontra documentado:

1. Laboratório.
2. Reunião do Conselho.
3. Coliseu.
4. Dragão pequeno.
5. Onis em Nowa.
6. Guerra contra os trolls de Nyashira.
7. Coroação do Rei Arthur, o Último.
8. Batalha contra Musashi.
9. Onis em Nippon.
10. Fuga do Gashadokuro.
11. Demônios e Femto.
12. 'Protejam Moesley'.
13. Piratas e Exército Revolucionário.
14. Extermínio de Praeglacius.
15. Lissandra, 'Dragon's Pain'.
16. A morte de Chronos.
17. Invasão ao Vaticano.
18. Batalha contra Nemesis.
19. Batalha contra Kimimaru.
20. O Palhaço e a Menina.
21. Os Apóstolos de Femto.

**Contagem verificada:** a mensagem do mestre contém **21 marcos**. Fonte principal: WA:L16383 (mensagem completa). O resumo abreviado de um jogador inclui 'Julgamento' e 'Arthur aventure-se', mas não substitui essa lista: WA:L16375.

**Antecedentes até 2023:** a mesa escolheu o Canal da Serpente como destino em enquete de abril de 2023; o mestre confirmou a próxima sessão como rumo ao Canal. Após essa sessão, descreveu quatro piratas importantes de Nassau, cujas figuras não sobreviveram ao export. Fontes: WA:L702-L709; WA:L732; WA:L1160-L1168.

**Relato da Floresta dos Gigantes e do Monte Legion (22/09/2023):** o mestre narrou que Ace conduz o grupo por árvores enormes até uma clareira circular de aproximadamente um quilômetro de diâmetro. Há no centro um monumento em forma de martelo cravado no chão. Ace apresenta o explorador e escritor **Américo**, autor de relatos de viagem; um trecho do último livro descreve o encontro de 11 exploradores com um gigante anormalmente inteligente, veloz e regenerativo. Quando restavam seis sobreviventes, um jovem desarmado de armadura, com um martelo, derrotou o monstro em um golpe de imenso poder que também destruiu uma montanha. Américo tratou o jovem como a visão mais extraordinária da vida. **O relato não nomeia explicitamente o portador do martelo no trecho disponível.** Fonte: WA:L5222.

**Acontecimento em torno de Chronos:** em março de 2024, Huedro forneceu uma explicação de jogador segundo a qual Chronos estaria condenado em todas as linhas do tempo de determinado combate, mas teria aproveitado um intervalo/ausência de 'selos' após sua morte para roubar tempo de universos prestes a acabar e continuar lutando. O próprio tempo então teria corrigido a anomalia, fazendo Chronos desaparecer. **É uma interpretação de jogador, não confirmação do mestre sobre a mecânica cosmológica.** Fonte: WA:L14189. A cronologia do mestre lista 'A morte de chronos' como marco e mensagens posteriores mostram Chronos ainda na party, sem que a natureza do retorno esteja documentada aqui: WA:L16383; BACKSTORY:§V.

**Relato específico da party (janeiro de 2024):** Gabriel informou no grupo que os protagonistas haviam contado à Legião que mataram um dragão adulto e quatro trolls de gelo. O documento não permite distinguir com segurança se o feito foi visto e reconhecido pela guilda ou apenas alegado a ela; o título posterior de Supros é "O homem que feriu o dragão". Fonte: WA:L8654; BACKSTORY:preâmbulo.

**Revelações posteriores:** em outubro de 2025, o mestre afirmou que uma sessão apresentou segredos sobre as ações de **Thomas Legion** mil anos antes e o **plano da Ordem**, mas não descreveu esses segredos no texto acessível. Houve também referência a uma estátua de homenagem a um guerreiro homem-leão de **Ioania**, que morreu combatendo a Legião há mil anos, após matar **Kenshin**, e teria sido morto por **Arturo**, aprendiz de Kenshin. Fontes: WA:L24255-L24261. **O conteúdo exato do plano da Ordem segue não documentado**, apesar da menção.

**Situação da party em setembro de 2025:** o mestre se referiu ao grupo como rank D, mas socialmente próximo de pessoas rank A/S e excepcional para essa classificação. Fonte: WA:L23586.

## [CHUNK-008] Registro de quadros e iconografia ligados à Ordem

Em 22/04/2023 o mestre postou uma lista de pinturas, repetida em 08/06/2023. São imagens **descritas em texto**, não necessariamente retratos literais dos personagens. Não atribuir automaticamente um quadro a um membro da Ordem se isso não for confirmado:

- **O Artista:** figura de costas com longos cabelos pretos, paleta apenas de tinta preta e pincel; a tela branca não recebe a cor.
- **O Fardo do Samurai:** criança encolhida e adormecida na floresta, perseguida por homens com cães e tochas, abraçada a katana com dois dragões no cabo.
- **Thanatos:** rosas de azul muito específico sob chuva de sangue.
- **A Preguiça:** homem enorme, exausto, rastejando num campo de cadáveres.
- **O Mímico:** gesto de disparar arma invisível contra a própria cabeça, com resultado físico real.
- **A Marionete:** boneco preso a fios, com lágrimas e coração arrancado do peito.
- **Nemesis:** figura encapuzada rezando com mãos ensanguentadas e pingente da Igreja do Chaos.
- **O Oráculo:** tela preta.
- **Midas:** barras de ouro ignoradas pelos transeuntes.
- **Hitman:** criança fetal protegida/escondida no centro de um furacão de lâminas.
- **A Vespa:** vespa com dois ferrões com marcas de caveira.
- **Naga:** serpente deixando rastro de sangue ao sair de um prostíbulo.
- **Líder:** homem numa sala de paredes cobertas pelos quadros anteriores.
- **O Vazio:** tela preta, com figura branca amorfa.

Fonte: WA:L1107-L1150, reproduzido em WA:L1995. **Pistas visuais não são confirmações de poderes, mortes, alianças ou identidades.** Em discussão de março de 2024, o mestre negou expressamente a existência de um "Pesadelo da Ordem" (WA:L13954), embora tenha falado de outro pesadelo ligado à espada (WA:L13945).

## [CHUNK-009] Catálogo de personagens do mestre (10/10 a 11/10/2023)

Transcrição catalogada do elenco significativo fornecido pelo mestre em 11/10/2023, com os atributos registrados naquele momento. **Estados como 'morto', 'vivo?' ou 'líder' são históricos, não garantia do estado atual**.

**Nova geração / Coliseu:** Reishi Schutz (Quincy); Danagorn (escudos); Jura Neekis (espíritos); Crystal (maga de gelo); Caitlyn (necromancer); Lee Hang (bastão extensível); Kakuzou (zumbi).

**Classe S:** Kaname Tosen (líder da Legião); Ragnus Lothar, o Trovão (Fenrir); Scar, a Salamandra (Amazonas); Aiolos, o Sagitário (Constelación); Asmita, a Virgem (Constelación); Perséfone, a Corrupta; Hirako Shinji, o Vadio; King Bradley, o Führer (líder de MFD na relação); Lancelot (Dragonfall); Merlin (Dragonfall); Morgans (veneno, **morto** segundo a lista).

**Aliados e conhecidos da party:** Portgas D. Ace (Fênix da Legião); Trulkin (líder de tribo de trolls em Nyashira); Thomas Shelby (Sr. Moesley, relação nominal deixada como aparece no texto); Lille Barro Schutz (Quincy de Nippon); Katrina (ex-líder da Legião, 'viva/morta?' na fonte); Kyoshiro (daimyō de Nippon).

**Outros nomes:** Luna (princesa de Dalaran); Rei Arthur, o Último (Dragonfall); Dohko de Libra; Degel de Aquário; Jack Rackham (pirata influente de Nassau); Alynn Ackerman (contramestre da tripulação de Jack); Ned Low (pirata influente de Nassau); Griffith (ex-Femto); Bellegher (Novo Sol); Thanatos (Ordem); Mímico (Ordem); Xen ou Xemnas (líder da Ordem); Estrela Maior (pequeno dragão das Skylands); Don Quixote (Dragonfall); Aníbal Barca (Legião); Américo Cruzado Jr. (Radamanthis); Nemesis (membro religioso da Ordem); Vazio (criatura branca amorfa, identificação incerta); Kalameet (arqueólogo especialista em armas únicas).

**Outras figuras registradas como apontamentos de jogador em abril de 2025:** Thomas Legion; Netherus, "pai da morte"; Golias, o Gigante; Christopher Canan; Instard de Sabre; Calabine Hawkeye; Cosmo, o Abençoado; Ashley, a Valíria; Khan, Imperador do Fogo; Kaizer, Braço de Fogo; Katrina Valerion; Kaname Tosen, Anjo da Morte. As idades escritas ao lado de alguns nomes são apontamentos não confirmados pelo mestre e por isso não foram adotadas aqui como fatos. Fonte: WA:L20760.

**Observações que exigem cuidado:** 'Thomas Shelby (Sr Moesley)' não prova identidade entre os nomes; o catálogo apresenta esses termos juntos. 'Américo' narrado no Monte Legion e 'Américo Cruzado Jr.' no rol tampouco precisam ser a mesma pessoa. 'Jura' e 'Yura' são variantes usadas no chat. Fonte: WA:L5726-L5780; WA:L5222; WA:L9279.

## [CHUNK-010] Os protagonistas / party

Lista fornecida em junho de 2023: **Vasco da Gama**, **Billy Boa Sorte**, **Supros Repros** (forma cômica de nome), **Cronos Wattson**, **Gunn**, **Sarah**. A backstory posterior nomeia o núcleo de convívio de Supros como **Chronos, Vasco, Billy, Gunn e Sara**, grafias a preservar conforme a fonte. A party se torna família encontrada de Supros. Fontes: WA:L2308; BACKSTORY:§V.

- **Kozuki Supros:** personagem do usuário, espadachim, fonte central deste arquivo; combate com katanas, energia/raios, velocidade, grande dilema moral. Ver CHUNK-013 em diante.
- **Chronos/Cronos Wattson:** manipulação temporal, uso de adaga, velocidade e defesa temporal. O jogador Huedro descreve a si próprio como manipulador do tempo e não simplesmente 'assassino'. O arco envolve morte/desaparecimento e posterior presença; seu passado envolve irmã não salva (nome não confirmado no trecho), uma amiga **Valery Vongola**, supostamente morta havia vinte anos sob o Führer, mencionada como presente com o Gigante da Colina. Skill 'Time's Domain / Chronosphere' discutida como PROPOSTA de nível 8 em setembro de 2025. Fontes: WA:L14189; WA:L21751; WA:L22667; WA:L23701.
- **Vasco da Gama:** figura voltada ao combate físico/socos; o mestre descreveu seu Chaos como superioridade física que reduz fortemente danos físicos recebidos (WA:L20920), com desenvolvimento em torno de estilos de pugilismo e transformações; no WhatsApp há proposta de golpe **Meteoro Vascajyin**, salto com chute duplo em área. Diferentes versões de vida e habilidades aparecem nas discussões. NÃO atribuir a proposta atualidade mecânica sem ficha do Vasco. Fontes: WA:L23726; WA:L23792; WA:L21409; WA:L22519.
- **Billy Boa Sorte:** integrante da party; o mestre menciona cena na qual Billy e rangers se infiltram numa vila em Nippon. Seu Chaos e estatísticas não estão disponíveis nas fontes principais. Fonte: WA:L12808.
- **Gunn:** companheiro; debate de regras o associa à profissão de domador e à criatura **Lyon**; em discussão posterior há referência a druid. Não há ficha completa verificável no material entregue. Fontes: WA:L9773; WA:L20875.
- **Sara/Sarah:** integrante da party; em discussão sobre fichas foi descrita com diversos usos de habilidades, mas o comentário não constitui ficha atual. Fonte: WA:L21290.

**Funções de viagem atribuídas em conversa de setembro de 2024 (históricas):** Guia = Liza; Scout = Supros; Hunter = Gunn/Vasco; Lookout = Billy/Sarah. O mestre relatou que, em Nippon, Chronos usou arqueologia para determinar a idade de pinturas. Esses registros não substituem perícias atuais nas fichas. Fontes: WA:L17942; WA:L9150.

**Jogadores e personagens:** a associação Gabriel Violante ↔ Supros está apoiada em mensagens em primeira pessoa e envio de ficha, mas não derivar automaticamente todas as outras associações usuário/personagem sem confirmação. Huedro ↔ Chronos aparece de forma explícita; Jn ↔ proposta de Vasco em set/2025. Fonte: WA:L23757; WA:L22539; WA:L23701; WA:L23792.

## [CHUNK-011] Ordem, Xen, Xemnas e Shein: não forçar equivalência

`PROMPT_ANTIGO`: usuário chama **Shein** de líder da Ordem e compara seu Chaos ao Kyōka Suigetsu, poder de ilusão total de Aizen; sugere que ele é antagonista principal. `MESTRE`: em catálogo de outubro de 2023 consta **'Xen ou Xemnas (Líder da Ordem)'**, também conhecido por ilusões. Em setembro de 2025 o mestre diz que **Xen** era perseguido no mundo inteiro, que Tosen perdera um x1 para Xen, e que as ilusões de Xen são totalmente convincentes: Chronos não poderia negar com sua skill um evento que desconhece ou não consegue perceber. Fontes: PROMPT:L25-L37; WA:L5726; WA:L20857; WA:L23714-L23745.

**Conclusão operacional:** existe forte associação contextual entre os nomes e os poderes descritos, mas **não há uma declaração explícita neste corpus confirmando que Shein = Xen = Xemnas**. Formular com ressalva: 'líder da Ordem, nomeado Xen/Xemnas no chat e Shein no prompt antigo'.

## [CHUNK-012] Chaos e sistema: princípios e revisões históricas

**Natureza do Chaos:** fonte de poderes singulares, variável entre usuários. Em junho de 2025 o mestre sublinha que **'os poderes dos seus personagens são conceitos, e não as palavras e números nas suas fichas'**. As fichas limitam mecanicamente o acesso e a progressão, mas não encerram possibilidades narrativas. Fonte: WA:L21943-L21944.

**Discussões históricas do sistema:**
- O mestre separou em certos momentos **Chaos do Corpo, da Mente e do Espírito**. Em 10/10/2023 houve rebalanceamento oficial naquele momento: remoção de um atributo separado 'Controle' e transformação em *ability check* de Inteligência; retorno aos seis atributos clássicos; point buy anunciado de 27 pontos; mana mantida e calculada com atributos mentais; modificações em saves, AC, profissões. A fórmula de DC dessa mensagem foi **9 + spellcasting + 2** em 2023. Fonte: WA:L5515.
- Em março de 2024 discutiram-se fortemente revisão das profissões, bônus e classes, com divergências e propostas contraditórias. **Não tratar cada sugestão como regra final.** A ficha atual mantém Controle como perícia com valor próprio, e Supros tem profissão Ferreiro nível 3. Fonte: WA:L9337-L9535; FICHA:Planilha1!B15:B19.
- Em 18/07/2025, o mestre corrigiu explicitamente uma DC anunciada pelo jogador: DC = **10 + proficiência (3) + modificador de spellcasting**, baseado num atributo mental. Mais tarde a ficha registra DC 15 em várias habilidades, DC 17 em Black Flash, e outros valores. Interpretar cada habilidade pelo texto de sua versão atual, não impor uma regra histórica a todo o sistema. Fonte: WA:L22539; FICHA:Planilha1!A49:B66.
- Rankings são principalmente força destrutiva/duelos; relações privilegiadas da party com elite não equivalem a rank elevado por si só. Fonte: WA:L9271-L9281; WA:L23586.
- Há registro histórico de trauma por dano superior à soma da vida atual com a vida máxima ou quatro quedas a 0 HP sem descanso longo, em julho de 2023; não há confirmação de regra ainda válida em outubro de 2026. Fonte: WA:L2736.
- Algumas regras de viagem, recompensas, profissões e uso de mana sofreram revisões; ver transcrições no anexo se necessário.

## [CHUNK-013] Ficha de identidade e visual de Kozuki Supros

**Nome:** Kozuki Supros. **Alcunha:** 'O homem que feriu o dragão'. **Origem:** fronteira norte de Nippon. **Clã:** Kozuki. **Papel dramático:** guerreiro, espadachim, sobrevivente de massacre, herói de reputação crescente e possível futuro pacificador ou tirano. Fontes: BACKSTORY:preâmbulo; PROMPT:L39-L47.

**Descrição do usuário em prompt antigo:** cabelo preto longo amarrado em rabo/coque alto, com mechas soltas; inspirações em Yoriichi, Kokushibo e Yasuo; cicatriz de corte sobre um olho, que não utiliza; corpo atlético, não exageradamente musculoso; altura escrita literalmente '1,75cm', provavelmente pretendendo 1,75 m, mas não corrigida como cânone; marca/cicatriz azul de carpa no peito, concedida após feitos heroicos. O mestre comentou também que Supros possuía tatuagem no peito reservada a heróis de guerra do povo de Nippon (WA:L10558). No relato antigo, 'carrega 4 katanas'; na ficha atual há **3 katanas nominalmente listadas**. Uma coleção de arte mostra distintos trajes, cabelo e expressão. Fontes: PROMPT:L40-L41; FICHA:Planilha1!A70:A74; imagens referidas em CHUNK-020.

**Traços visuais recorrentes nas imagens disponíveis:** homem jovem de cabelo preto muito comprido, amarrado alto e esvoaçante; rosto de expressão fechada, sinais de corte/cicatriz na área de um olho; físico atlético/musculoso; combinação de traje preto justo com alternativa de quimono/haori branco sobre vestes escuras, faixas e sandálias; imagens variam entre render de anime colorido, alto contraste preto e branco de mangá e pintura digital. A aparência específica **não se limita à imagem enviada nesta conversa**. As ilustrações são referências artísticas e não comprovam por si só as propriedades de itens ou poderes.

## [CHUNK-014] História do clã Kozuki e vínculos de infância

**Versão detalhada da backstory do jogador**: Clã Kozuki vivia isolado nas montanhas frias da fronteira entre Nippon e os territórios Oni. O clã era conhecido por linhagem ligada a tempestades/manifestação elétrica. Pais e mestre **Rengoku** treinavam Supros desde pequeno para **supressão e controle**, porque seus picos de energia eram perigosos. Máxima do treinamento: não sentir, não deixar sair, segurar a carga. Fonte: BACKSTORY:§I-II.

**Kozuki Kaito:** irmão mais velho; espadachim disciplinado, excelente tecnicamente, considerado deficiente para uma família de poderes elementais porque, até os doze anos, não demonstrara Chaos. Ao nascer Supros e apresentar atividade elétrica desde bebê, Kaito foi preterido. Kaito desapareceu numa nevasca levando somente espada de treino. Motivos, paradeiro e eventual despertar de Chaos **estão totalmente em aberto para o mestre**. Fonte: BACKSTORY:§I.

**Yumi:** amiga e vizinha de infância; detém Chaos **Rewind**, capaz de fazer o estado físico de seres e objetos recuar a momento anterior. Para Supros, segurava suas mãos e revertia sobrecargas a carga zero. Era seu raro momento de paz corporal. Sua habilidade não equivale necessariamente a 'cura convencional'. Na história escrita, foi capturada pelos Onis antes da descarga fatal, e passou a ser usada como recurso estratégico de guerra; esse destino pode não ser conhecido por Supros em cena nem confirmado pelo mestre. Fonte: BACKSTORY:§II, §IV.

**Ren:** melhor amigo de infância; teria presenciado a descarga, sofrido queimaduras ramificadas de eletricidade em parte do rosto e braço; alimenta ressentimento contra Supros e o julga responsável/omisso diante da catástrofe. É um **sobrevivente segundo a backstory**, cuja trajetória futura não foi fornecida. Fonte: BACKSTORY:§IV.

**Rengoku:** mentor de Supros; a backstory informa que sobreviveu com perda de um braço e da visão; conhece o risco da energia de Supros e recusa ensinar técnicas letais antes de maior estabilidade emocional. Fonte: BACKSTORY:§IV.

## [CHUNK-015] Massacre da vila: duas versões, um segredo

**PROMPT_ANTIGO, relato original:** Supros nasceu numa pequena vila militar de elite que funcionava como primeira defesa do norte de Nippon contra Onis. Profecia sobre uma criança marcada amedrontava os Onis, prevendo ódio e destruição, e motivou uma ofensiva que arrasou a vila. Com 13 anos, Supros presenciou a morte de todos que amava e se considerou o último sobrevivente. Fonte: PROMPT:L44-L45.

**BACKSTORY, versão detalhada posterior:** o ataque foi uma incursão brutal sob chuva torrencial para obter **suprimentos e escravos**, não uma ofensiva declaradamente motivada por profecia. Supros, aos 13 anos, viu um general Oni perfurar seu pai e sua mãe ser morta ao proteger a passagem. O trauma rompeu sua supressão; a energia acumulada eclodiu em descarga elétrica azul conduzida pela chuva e matou inimigos e outras pessoas que estavam no pátio. Supros desmaiou. **Ele NÃO sabe que sua descarga foi responsável pela morte de todos atingidos no pátio**, e atribui o desfecho à ação dos Onis mais algum acontecimento desconhecido. A explosão não matou toda a vila: Ren e Rengoku sobreviveram; Yumi fora capturada antes. Fonte: BACKSTORY:§III-IV.

**Divergência a esclarecer com o jogador/mestre:** profecia vs. saque e captura como motivação do ataque; último sobrevivente vs. sobreviventes nomeados; percepção de culpa de Supros vs. segredo da energia. O RAG registra a versão detalhada como **roteiro de backstory posterior**, mas não presume que todos os elementos já foram aceitos pelo mestre ou revelados na campanha. A história do personagem não deve ser alterada sem autorização.

## [CHUNK-016] Natureza do Chaos de Supros e manifestação elétrica

**Visão inicial do jogador e do personagem:** controle, geração e manipulação de raios; comparado ao estilo de Sasuke. Fonte: PROMPT:L42-L43.

**Explicação elaborada na backstory:** o poder verdadeiro seria **Manipulação de Energia**, não apenas elemento elétrico. Supros absorve energia **cinética, térmica, radiante e eletrostática** e a armazena. Os raios seriam mecanismo violento de escoamento do excesso e não a totalidade do Chaos. O corpo é metaforicamente descrito como um buraco negro de energia. A educação focada na supressão refletiria o risco de não controlar o acúmulo. **Essa abrangência é proposta narrativa em texto de backstory; não conceder automaticamente poderes adicionais como absorção irrestrita, reversão temporal ou imunidade elétrica sem aprovação mecânica.** Fonte: BACKSTORY:§II.

**Ficha presente:** conjunto de poderes elétricos, transmutação de tipos de dano (marcada PROPOSTA), Kirin, Lightning Spear, Lightning Reaver, Godspeed, clone e reações. O prompt antigo mencionava resistência a dano elétrico tendendo à imunidade no futuro; **a ficha atualmente enviada não lista explicitamente uma passiva geral de resistência/imunidade elétrica**. Não presumir esse benefício em combate. Fonte: PROMPT:L42-L43; FICHA:Planilha1!A47:B66.

## [CHUNK-017] Espadas e o Pesadelo da Guerra

**War Lotus / Lótus da Guerra:** katana relacionada ao **Pesadelo da Guerra**, entidade nascida do medo da humanidade à guerra. O personagem enfrenta corrupção gradativa e ambivalência entre usar o poder e rejeitar a própria Guerra. A versão do prompt antigo afirma que ela não permite utilizar o Chaos pessoal quando empunhada. Fonte: PROMPT:L44-L45.

**Versão de outubro de 2023 postada no grupo:** War Lotus empunhada com duas mãos, bônus de acerto +3, dano 1d12; ignoraria resistências e imunidades; proibia Chaos alheio à espada; fornecia defesa situacional, 'Battle Cry', dano por sacrifício de HP máximo, Fear em críticos, vantagens contra inimigos com Fear, resistência a Fear/mind control, análise de habilidades em combate, recuperação temporária de HP ao matar. Esse é um registro **histórico**, não o estado da ficha em 2026. Fonte: WA:L5909.

**Versão da ficha atual, célula A98:** dano base 1d12 e +2 para acerto; pode sacar a espada a qualquer momento **sem bloquear habilidades do usuário**; na retirada pode escolher rolar de um a três d100, perdendo 4 de HP máximo e ganhando +4 de dano fixo **por cada d100**; até o fim do combate deve causar dano equivalente à soma dos valores obtidos nesses d100, caso contrário perde permanentemente metade do HP sacrificado no saque. Cura-se em 50% do dano causado com a espada, mas curas de outras fontes valem 50% do normal para seu portador; pode sacrificar até 20 HP máximos para aumentar dano de um ataque; é imune a Fear. Fonte: FICHA:Planilha1!A98. **A ficha não explica detalhadamente a escala da conversão da vida máxima em dano para esse sacrifício de até 20 pontos**, nem se os campos de 'meta de dano' e perdas permanentes estão atualizados. Pedir confirmação para cálculos ambíguos.

**Outras katanas registradas:**
- **Peace Lotus:** 1d12 + DEX, possui efeito especial contra War Lotus, mas sem detalhamento no inventário. FICHA:Planilha1!A71:D71.
- **Hyorimaru:** 2d6 + 2d4 + DEX. Como ação bônus, pode congelar área ao redor de 15 ft, criando terreno difícil. FICHA:Planilha1!A72:D72.
- **War Lotus, linha de inventário:** 1d12 + 1d12 fixo + DEX, número que não coincide literalmente com A98. **Há discrepância interna na própria planilha; não somar as duas fórmulas automaticamente.** FICHA:Planilha1!A73:D73.

**Nota importante:** a backstory chama a entidade de 'Guerra' e fala que ela vive na bainha; isso não significa que o mestre tenha confirmado a ontologia exata do pesadelo. **Não equiparar Peace Lotus ao pacifismo final de Supros sem fonte que estabeleça essa ligação temática**.

## [CHUNK-018] Desenvolvimento moral de Supros, dilemas e planos futuros

**Da vingança contra os Onis ao combate ao próprio conceito de guerra:** após o massacre, Supros acredita ser amaldiçoado, marcado por destruição e perda. Sua meta começou como vingança; a convivência com os companheiros amoleceu o isolamento. Seu pensamento posterior identifica **a guerra como verdadeira causa da perda**, e passa a desejar um mundo sem guerras. O paradoxo é que planeja **usar poder absoluto, medo e extermínio** para impedir a violência, repetindo precisamente aquilo que condena. Fontes: PROMPT:L44-L47; BACKSTORY:§V.

**Proteção:** Chronos, Vasco, Billy, Gunn e Sara representam nova família. A dor central é a possibilidade de vê-los terminar como sua primeira família. Sua violência é simultaneamente instrumento de vingança e escudo para pessoas que ama. Fonte: BACKSTORY:§V.

**Conflito da espada com a Ordem:** no documento de backstory, Supros percebe que a entidade Guerra odeia instintivamente a Ordem. Daí nasce uma dúvida especulativa: se a Guerra teme/odeia tanto a Ordem, será que a Ordem busca uma paz distorcida? Essa é **suspeita do personagem, NÃO uma verdade confirmada sobre os objetivos da Ordem**. Fonte: BACKSTORY:§V.

**Caminhos planejados pelo jogador, NÃO ocorridos em sessão:** (A) preferência declarada por arco de redenção e pacifismo, com referência a Thorfinn; (B) em eventual morte, possibilidade de negociar com o mestre um recurso extremo para vender a alma à Guerra e se tornar emissário/antagonista, na linha de Pain/Nagato. O segundo caminho é estritamente hipotético, dependendo do mestre. Fonte: PROMPT:L46-L47.

**Questões fecundas para interpretação sem inventar lore:** o preço humano do pacifismo imposto; até onde proteger amigos justifica brutalidade; o contraste entre controlar energia e controlar a própria raiva; limites da justiça contra Onis; culpa desconhecida pela infância; influência da espada; como agir se Ren, Kaito ou Yumi reaparecerem; o que fazer se a Ordem realmente desejar extinguir a guerra. Todas são **questões**, não predições ou revelações.

## [CHUNK-019] Supros: resumo dos números e combate em ficha atual

Registro extraído da planilha entregue em 11/10/2026, sem assumir que o arquivo foi atualizado nessa data: **nível 9**, **hit die 10**, **HP máximo 94**, **HP no campo atual 49**, **AC 19**, **bônus de HP 9**. **DEX 22 (modificador +6)**, **CON 16 (+3)**, **INT 14 (+2)**, **STR 8 (-1)**, **WIS 8 (-1)**, **CHA 10 (0)**. Proficiência global listada como 3 para parte dos atributos e perícias. Ataque base na seção de AC: 10. Profissão **BlackSmith/Ferreiro nível 3**. Fontes: FICHA:Planilha1!A1:H18; FICHA:Planilha1!A24:E44.

**Passivas:** Lightning Veins (+1 DEX e limite 22); Black Flash (após crítico corpo a corpo, críticos 19–20 até o fim do combate; alvo CON ST 17 ou Stunned até fim do próximo turno). Fonte: FICHA:Planilha1!A49:E50.

**Ações:** Multi Attack (dois rolamentos de ataque por ação de ataque); Lightning Reaver (até três ataques consecutivos, hit básico +1d8 cada, alvos diferentes, próximos, até 25 ft, teste DEX DC 15, 3 usos por long rest); Lightning Spear (linha 90 ft, 8d8 + DEX elétrico, DEX DC15, paralisia na falha, 2 usos/long rest); Lightning Beast Kirin (céu aberto, canaliza com bônus e libera com ação, 8d10+DEX, falha paralisa; com clima nublado 10d10+DEX e área de 10 ft, 1 uso/long rest); Energy Transmutation (ação livre, tipos Lightning/Thunder/Fire/Cold/Radiant, **marcada PROPOSTA SKILL LEVEL 9**, com inconsistência entre a frase usos por PB/long rest e coluna que indica 4 usos/short rest). Fontes: FICHA:Planilha1!A51:H57.

**Concepção histórica das skills:** em abril de 2025, o jogador solicitou comentários sobre "Kirin", "ThunderStep Waltz" e revisão de "Godspeed Supros". Como ThunderStep Waltz não consta na ficha atual, não deve ser tratado como habilidade disponível. Fonte: WA:L21065.

**Ações bônus:** Shunpo (Blink `PB * 20`, 3 usos/short rest); Godspeed Supros (+1 DEX, Evasion, +15 ft por três turnos, extensão com níveis de exaustão, 'ativação 1x por combate' na descrição, mas dois usos/long rest na coluna); Clone elétrico (alvo rola 1d4, resultados pares redirecionam ao clone; após contato corpo a corpo, explode causando 2d8; **upgrade marcado PROPOSTA nível 9**). Fonte: FICHA:Planilha1!A58:H62.

**Reações:** Flash Bang (contra atacante visível, CON DC15 ou cego, 3 usos/long rest); Parry (+3 AC contra ataque em questão, 3 usos/short rest). Fonte: FICHA:Planilha1!A63:G66.

**Equipamentos importantes:** botas +15 ft, três katanas, armadura Dragon's Scale (`AC 13+DEX` e +5 HP), The Hawk's Eye (passive perception 18), roupas de frio, ganchos de escalada, corda de 75 m, paraquedas com duas utilizações remanescentes, camuflagem para neve e deserto, anel Beholder (+3 em testes de Carisma), frasco Estus (10d6+15 por long rest, embora a coluna de quantidade contenha o número **46025**, incompatível com uma contagem literal de frascos). Há **duas linhas 'Gold'**, com valores 5 e 2500, não resolvidas como saldo final. Fonte: FICHA:Planilha1!A68:G93. O anexo reproduz os valores literais.

**IMPORTANTE para simulações:** o campo HP atual 49 pode refletir estado pontual do arquivo; recharge, cargas consumidas e propostas exigem conferência com jogador e mestre antes de declarar disponibilidade em combate. A entrada numérica solta 46274 em B3 e a quantidade numérica 46025 de Estus não são interpretadas como fatos de jogo.

## [CHUNK-020] Índice e caracterização das 15 referências visuais

Arquivos na pasta original do projeto. **São descrições visuais, não provas de acontecimentos de sessão.** Imagens de rosto, corpo inteiro, traje e coliseu parecem retratar um design consistente do mesmo personagem, mas cenas estilizadas podem variar acessórios e quantidade de espadas.

1. `Supros Rosto Manga.png`: retrato vertical em preto e branco, traço detalhado de mangá, cabelo preto amarrado ao alto e solto ao vento, expressão severa, cicatriz/marca na região de um olho, parte superior do traje negro. **Esta é a referência de rosto em mangá enviada na mensagem atual.**
2. `Supros Rosto.png`: correspondente colorida em close frontal, olhos de cores contrastantes ou sombreados, cabelo longo preto preso, roupa escura justa e expressão séria.
3. `Supros Full Body.png`: meio corpo/corpo ampliado colorido, físico atlético marcante, postura confiante/sorriso desafiador, camisa preta justa e faixa clara na cintura.
4. `Supros Outfit.png`: figura de corpo inteiro em traço preto e branco, haori branco volumoso sobre roupa preta, calça hakama clara, faixa, sandálias e cabelo muito comprido amarrado.
5. `Supros Coliseu 1.png`: Supros no coliseu, usando haori branco, traje preto e calças claras, composição vertical.
6. `Supros Coliseu 2.png`: coliseu visto de cima, Supros sozinho no centro da arena, cabelos ao vento, trajes pretos e brancos, cores quentes de areia e pedra.
7. `Supros Coliseu 2 Manga.png`: composição equivalente em preto e branco, câmera elevada, arena circular.
8. `Supros Casting Kirin.png`: Supros em traço de mangá dentro do coliseu com um braço erguido apontando ao alto, gesto de conjurar o Kirin.
9. `Kirin.png`: céu dramático vermelho/alaranjado, manifestação colossal de entidade ou dragão de energia acima de arquibancadas do coliseu. Cores **da imagem**, não regra de que eletricidade de Supros seja vermelha.
10. `Kirin Manga.png`: versão em preto e branco da gigantesca manifestação serpentina/dragônica sobre arena.
11. `Supros toji.png`: imagem preto e branco de espadachim com cabelo longo em movimento e postura de ataque/defesa, fortes contrastes.
12. `menthorius_A_close-up_of_Supros_gripping_the_War_Lotus_tightly__6da7ec98-efed-4f6c-9cc2-27c923d4df3f.webp`: pintura digital estilizada de espadachim com katana desembainhada, tons quentes, capa e tensão dramática; filename liga a War Lotus, sem confirmar desenho definitivo.
13. `menthorius_A_samurai_in_a_combat_pose_with_several_wounds_acros_4565a4b3-676d-4472-8dd6-1974500d0c08.png`: pintura digital de samurai em combate, efeitos de energia roxa/escura e movimento; imagem conceitual.
14. `menthorius_Bleach_anime_style._A_illustration_of_a_young_samura_3b2e49ad-e371-482a-86a8-8d69bf8b606c.png`: ilustração dinâmica de samurai com arma e luzes vívidas em fundo escuro.
15. `menthorius_A_stunning_fantasy_Anime-Bleach_style._An_illustrati_bf696c00-615e-4d2c-8d29-7dfcd2899efa.png`: samurai de cabelos longos com vestes em preto/branco e detalhes de energia azulada, pintura ilustrativa.

**Recomendações de uso de imagem em chats futuros:** para retrato manga consultar `Supros Rosto Manga.png`; para design colorido consultar `Supros Rosto.png`; para roupa consultar `Supros Outfit.png` e `Supros Coliseu 1.png`; para encenação do golpe consultar `Supros Casting Kirin.png`, `Kirin.png` e `Kirin Manga.png`; para War Lotus utilizar a referência cujo nome menciona War Lotus. Não mudar automaticamente cicatriz, número de olhos, cabelo, trajes ou armamento sem solicitação.

## [CHUNK-021] Dúvidas documentadas, conflitos e fatos ainda NÃO conhecidos

| Tema | Conflito ou lacuna | Como responder corretamente |
|---|---|---|
| Fundador histórico da Legião | Charles Legion no prompt; Thomas Legion em menção posterior do mestre | Não igualar nomes; pedir confirmação se necessário |
| Líder da Ordem | Shein no prompt; Xen/Xemnas nas mensagens do mestre | Indicar a variação de nomes e forte convergência contextual, sem garantir equivalência |
| Nível do personagem | Nível 8 no prompt antigo, 9 na ficha enviada | Usar nível 9 para ficha atual |
| Chaos de Supros | Elemental elétrico no prompt; manipulação energética na backstory | Distinguir fenômeno elétrico de interpretação ampla posterior; verificar aprovação |
| Sobrevivência ao massacre | 'Último sobrevivente' no prompt vs. Ren/Rengoku/Yumi/Kaito na backstory | Priorizar versão detalhada como planejamento autoral, sem assumir revelação in-game |
| Causa do massacre | Profecia contra criança marcada vs. ataque Oni por suprimentos/escravos | Há duas motivações escritas, ainda não conciliadas |
| Número de katanas | Quatro no prompt; três nomeadas no inventário | Inventário lista Peace Lotus, Hyorimaru, War Lotus |
| War Lotus e Chaos | Bloqueia o Chaos pessoal em 2023; ficha atual diz que não bloqueia habilidades | Para regras atuais, apontar ficha A98, registrar mudança |
| War Lotus dano | Inventário 1d12+1d12 fixo+DEX vs. descrição A98 1d12 e modificador de HP | Sinalizar ambiguidade, nunca escolher cálculo sem esclarecimento |
| DC e novas habilidades | Posts do jogador em 2025 apontam DC17 em clone/flash; ficha atual usa outros valores | Priorizar ficha por habilidade e tratar rascunhos como históricos |
| Propostas de nível 9 | Energy Transmutation e upgrade do Clone explicitamente marcados como proposta | Não assumir aceitação em mesa |
| HP, Ouro, Estus | HP atual 49, duas linhas Gold (5/2500), Estus quantidade 46025 | Descrever campos literais; confirmar uso/significado |
| Plano completo da Ordem | Mestre disse que foi revelado, mas não transcreveu os detalhes | Não inventar estratégia da facção |
| Yumi, Ren, Kaito e Rengoku | Destinos detalhados na backstory, mas sem cenas confirmadas | Preservar segredo e status de backstory |
| RMC x MFD | King Bradley ligado a ambos em mensagens de 2023 | Identificar a variação de organização sem presumir equivalência |
| Dragulf, Nassau, mapa | Localização textual, mídias omitidas | Não inventar mapa preciso nem imagens ausentes |
| Estado pós-outubro 2025 | WhatsApp fornecido termina em 06/01/2026, com poucas mensagens em 2026 | Não assumir história posterior sem atualização do jogador |

## [CHUNK-022] Perguntas-chave de consulta rápida

- **Quem é Supros?** Ver CHUNK-013 a CHUNK-019. Espadachim de Nippon do clã Kozuki, trauma com os Onis, Chaos energético/raios, War Lotus e conflito entre vingança e paz.
- **Como funciona o Chaos?** CHUNK-002, CHUNK-012 e CHUNK-016. Poder conceitual singular, limitado por regras próprias da ficha e mesa.
- **O que aconteceu na campanha?** CHUNK-007 para linha do tempo de 21 marcos nomeados pelo mestre, com demais acontecimentos pontuais.
- **Quem compõe a party?** CHUNK-010. Chronos, Vasco, Billy, Gunn, Sara e Supros.
- **Quais são as grandes organizações?** CHUNK-006, CHUNK-009, CHUNK-011.
- **Como é o mundo e onde estão os reinos?** CHUNK-004 e CHUNK-005.
- **Quem é Xen/Shein?** CHUNK-011 com aviso de identificação incerta.
- **Quais são os ataques de Supros?** CHUNK-019, anexo exato da ficha, especialmente células 49 a 66 e 98.
- **A War Lotus ainda impede o Chaos?** Versão antiga diz sim; FICHA atual A98 diz não. Ver CHUNK-017.
- **Supros sabe que matou pessoas com sua descarga?** Na backstory, não. CHUNK-015.
- **Qual o plano de transformação moral?** Redenção preferida pelo jogador, antagonismo como alternativa hipotética: CHUNK-018.
- **Quais imagens preservar?** CHUNK-020.
- **O que foi de fato estabelecido pelo mestre vs. um rascunho?** CHUNK-001 e CHUNK-021.

## [CHUNK-023] Fontes inventariadas e cobertura

**Texto e planilha entregues:** `Prompts antigos com Gemini.md` (48 linhas, autorrelato contextual/intenções); `WhatsApp Chat with Tzpg.txt` (~27.417 linhas, mensagens de 2023 a 06/01/2026, com mídias omitidas no export); `Backstory Supros.docx` (seções I a V, versão elaborada de personagem); `Kozuki Supros - tzpg.xlsx` (Planilha1, A1:L98, ficha atualmente entregue). Todos os documentos foram lidos ou inspecionados. **Não há um arquivo de lore mundial independente anexado além desses materiais**.

**Imagens examinadas:** as 15 listadas em CHUNK-020. Não houve acesso às mídias do WhatsApp omitidas pelo export, ao mapa mencionado nas conversas, nem aos links de Google Docs/Drive que aparecem no histórico, tais como uma wiki de Supros de março de 2024 e uma pasta de anotações compartilhada em janeiro de 2026. Esses documentos não foram fornecidos como arquivos locais e portanto **não são declarados como consultados**. Fonte: WA:L13999; WA:L27417.

**Incorporação ao projeto:** anexar este `.md` ao projeto. O arquivo opcional `.jsonl` gerado junto é indicado para sistemas que indexam blocos individuais. A falta de acesso futuro aos arquivos binários não impede consultar as descrições textuais, mas limita a verificação visual detalhada e o uso de estatísticas posteriores à data deste snapshot.




---

## [CHUNK-024] Anexo A. Extratos selecionados do WhatsApp, em ordem cronológica

Foram selecionadas automaticamente e revisadas por critérios temáticos **238 mensagens** de 24984 registros de mensagens (2023–2026), preservando trechos com cenário, acontecimentos, worldbuilding, propostas de habilidades, personagens e regras. Este anexo não transcreve o grupo integralmente. Mensagens logísticas, financeiras, pessoais, conteúdos impróprios e grande parte da conversa fora de jogo foram omitidos. O número `WA:L...` aponta para a posição no arquivo exportado. **Nem tudo aqui é cânone:** opiniões, dúvidas, propostas e mensagens do mestre em debates antigos mantêm seu caráter histórico.


### Arquivo de 2023

#### [WA:L669-L671] 4/18/23 09:39 | Tz Magnata

```text
Vou lança um resumin de locais q vcs ainda não foram

Hueco/Canal da Serpente/ reino de Seagate = coloquei juntos pois provavelmente em uma saga nessa região vocês estarão constantemente transitando. A região é dominada pela atividade pirata no canal da serpente. A atividade é fruto de comunidades violentas, tribais e pobres que existem em Hueco e um reino de grande desigualdado social em Seagate. Na região existe também *Dragulf* uma ilha localizada no meio do canal da serpente em que existe uma base da legião, usada com o objetivo de monitorar e combater o contrabando de mercadorias na região. Essa região é um local onde o crime e a lei se confundem onde o policial e o bandido anoite bebem no mesmo bar.
```

#### [WA:L673-L673] 4/18/23 09:42 | Tz Magnata

```text
Soulce Marochi =uma formação geologica misteriosa formada por 2 aneis externos e um Pináculo centralizado. É um local pouco explorado onde existem civilizacoes apenas no anel exterior formadas por vilarejos e tribos. Repleto de criaturas unicas e passagens nunca antes desbravadas.
```

#### [WA:L674-L674] 4/18/23 09:45 | Tz Magnata

```text
Arquipélago de Helhein = um conjunto de ilhas próximas à Alária. Local de forte exploraçao e de grande interesse de aventureiros e caçadores ao redor do mundo. Milhares de espécies exóticas, tanto marinhas quanto anfibias existem na região. Determinadas criaturas da região possuem alto valor no mercado. Dizem que após um homem ver Helhein à poucas coisas que podem impressioná-lo.
```

#### [WA:L676-L676] 4/18/23 09:51 | Tz Magnata

```text
Deserto de Kalahar = do outro lado das montanhas ao leste do continente de Kástia existe um enorme deserto. O nome Kalahar faz menção à areia extremamente branca em algumas partes desse deserto e em língua comum kalahar significa pó de ossos. No centro do deserto à apenas 1 civilização humana em que sua principal cidade é a Cidade Dourada de Shangri-la. Possuem uma cultura semelhante à antigos reinos egípcios, com a exceção de que tropas do reino possuem acesso à armamento de alta tecnologia em função do constante conflito contra uma raça inteligente que assola a região. O deserto de kalahar não recebe seu nome atoa. É uma aventura desafiadora tanto por sua variedade de criaturas adaptadas a viver e caçar na região quanto pelas condiçoes climáticas adversas
```

#### [WA:L689-L689] 4/18/23 10:32 | Tz Magnata

```text
República Militar de Canon(RMC)= Reino ao litoral leste do continente de Kástia, após o deserto de Kalahar. RMC é atualmente governada por um ex militar da classe S conhecido como King Bradley the Fuher. Bradley é um governate rigoroso porém efetivo e que possui popularidade tanto pelos seus feitos em guerra quanto pela sua gerência como governante. RMC disputa territorio com outros povos inteligentes humanoides e atualmente, sobre o comando de Bradley, promove uma cruzada contra esses povos os expulsando do continente.
```

#### [WA:L690-L690] 4/18/23 10:37 | Tz Magnata

```text
Frostearth= um continente congelado. Sede da guilda Fenrir cujo lider é o classe S Ragnus. Frostearth é enorme e em funcao de sua condiçao climática violenta existem enormes porçoes do territorio muito pouco ou nada exploradas. Assim como no deserto de Kalahar e em outros lugares no mundo, climas intensos pediram que as criaturas da região tivessem soluçoes criativas para se manterem vivas, logo é sempre necessário se considerar um passo atrás de seus inimigos quando se esta em frostearth.
```

#### [WA:L845-L849] 4/20/23 12:46 | Tz Magnata

```text
O tz, tava pensando no kit do supros mano, e percebi que a skill ativa do raio não faz muito sentido pro meu estado atual de boneco não. Pega visão da skill que eu tava pensando que combina com meu estilo mais tank atual:

Empunhadura Tripla Vingança total:
Habilidade Ativa da postura da morte(50 de mana - action)
Supros consegue usar a espada amaldiçoada mais as suas outras duas para realizar um golpe poderoso, ele utiliza uma magia que causa todo o dano recebido e absorvido por ele durante o combate (inclui o dano negado pelas passivas) de dano tipo [vc decide isso] + Dano das três espadas(incluindo a amaldiçoada [vc decide isso]. Caso o inimigo passe no ST(13) o dano é causado pela metade.
```

#### [WA:L1107-L1150] 4/22/23 20:09 | Tz Magnata

```text
Os quadros

O artista
Um homem de cabelos longos e pretos de costas. Em uma mão ele carrega uma daquelas plaquetas em que os pintores colocam as tintas, apenas com tintas pretas. Na outra mão ele carrega um pincel molhado na tinta preta e passa ele por uma tela em branco, que não fica preta com o pincel

O fardo do samurai
Uma criança dorme encolhida sozinha em uma floresta. Ao fundo, vários homens com cachorros e tochas procuram por ela. A criança dorme abraçada em uma katana com o desenho de 2 dragões em seu cabo que vão desde o guarda mão até a ponta

Thanatos
Um campo coberto de rosas azuis. Um azul bastante específico e familiar. Porém nesse campo está chuviscando sangue. As gotas caem e escorrem sob as pétalas azúis. 

A preguiça
Um homem grande se rasteja, completamente abatido pelo cansaço, por um campo de corpos. O homem se agarra às pernas e aos braços dos corpos para se mover sob o campo.

O mímico 
Um homem aponta uma arma invisível para propria cabeça, porém do outra lado voa sangue como se ele realmente tivesse se
 dado um tiro

A marionete
Um boneco preso a linhas como uma marionete. Seus olhos choram e seu coração está exposto ao chão fora do seu corpo, no peito do boneco ha apenas um buraco ensanguentado

Nemesis
Um homem ajoelhado rezando com as mãos sujas de sangue. Seu rosto está coberto por um capus que esconde a maior parte de sua face. A exceção de um colar com o pingente da igreja do chaos e um sorriso por tras das mãos em reza.

O oráculo 
Uma tela preta.

Midas
Uma pilha de barras de ouro abandonadas no meio de uma avenida. A avenida está repleta de pessoas andando em todas as direções, nenhuma delas pega ou sequer olha para as barras de ouro.

Hitman
Uma criança sentada em posição fetal se esconcendo. A criança esta exatamente no meio de um furacão feito de facas, espadas e outros tipos de objetos cortantes.

A vespa
Uma vespa com dois ferrões, ambos com uma caveira pintada neles.

Naga
Uma serpente rastejando para fora de um prostíbulo. Ela deixa um rastro de sangue por onde passa

Líder 
Um homem sentado em uma sala com todas as pinturas anteriores na parede.

O vazio
Uma tela preta com uma figura branca desforme.
```

#### [WA:L1168-L1168] 4/23/23 14:41 | Tz Magnata

```text
Esses são os 4 principais capitães piratas de Nassau atualmente
```

#### [WA:L1995-L2038] 6/8/23 12:55 | Tz Magnata

```text
Os quadros

O artista
Um homem de cabelos longos e pretos de costas. Em uma mão ele carrega uma daquelas plaquetas em que os pintores colocam as tintas, apenas com tintas pretas. Na outra mão ele carrega um pincel molhado na tinta preta e passa ele por uma tela em branco, que não fica preta com o pincel

O fardo do samurai
Uma criança dorme encolhida sozinha em uma floresta. Ao fundo, vários homens com cachorros e tochas procuram por ela. A criança dorme abraçada em uma katana com o desenho de 2 dragões em seu cabo que vão desde o guarda mão até a ponta

Thanatos
Um campo coberto de rosas azuis. Um azul bastante específico e familiar. Porém nesse campo está chuviscando sangue. As gotas caem e escorrem sob as pétalas azúis. 

A preguiça
Um homem grande se rasteja, completamente abatido pelo cansaço, por um campo de corpos. O homem se agarra às pernas e aos braços dos corpos para se mover sob o campo.

O mímico 
Um homem aponta uma arma invisível para propria cabeça, porém do outra lado voa sangue como se ele realmente tivesse se
 dado um tiro

A mationete
Um boneco preso a linhas como uma marionete. Seus olhs choram e seu coração está exposto ao chão fora do seu corpo, no peito do homem ha apenas um buraco ensanguentado

Nemesis
Um homem ajoelhado rezando com as mãos sujas de sangue. Seu rosto está coberto por um capus que esconde a maior parte de sua face. A exceção de um sorriso por tras das mãos em reza.

O oráculo 
Uma tela preta.

Midas
Uma pilha de barras de ouro abandonadas no meio de uma avenida. A avenida está repleta de pessoas andando em todas as direções, nenhuma delas pega ou sequer olha para as barras de ouro.

Hitman
Uma criança sentada em posição fetal se esconcendo. A criança esta exatamente no meio de um furacão feito de facas, espadas e outros tipos de objetos cortantes.

A vespa
Uma vespa com dois ferrões, ambos com uma caveira pintada neles.

Naga
Uma serpente rastejando para fora de um prostíbulo. Ela deixa um rastro de sangue por onde passa

Líder 
Um homem sentado em uma sala com todas as pinturas anteriores na parede.

O vazio
Uma tela preta com uma figura branca desforme.
```

#### [WA:L2193-L2193] 6/12/23 16:18 | Maia

```text
Sara e Supros conseguem fazer alguma coisa contra eles
```

#### [WA:L2215-L2219] 6/12/23 16:24 | Huedro

```text
- Counter atualmente parece muito punitivo
- Duas ACs é ainda desnecessário... mas além disso, acho que estamos meio baixos em AC? 
- Acho que crítico tá muito forte... Será que não é melhor manter só no 20 mesmo e quem quiser cria especializações?
- O jogo tá meio lento em combate por causa do número de pessoas e inimigos. Vale a pena tentar acelerar nossas mecânicas? Talvez tornando mana algo diferente?
- Mana
```

#### [WA:L2237-L2239] 6/12/23 16:39 | Tz Magnata

```text
E sobre a mana, q mexe tanto no topico dos combates demorados quanto no topico "mana" 
N entendi perfeitamente como a mana é responsavel pela duração dos combates ou como uma mudança nela iria acelerar eles.
Pensei na mana por ser um conceito familiar pra todos nós alem de uma forma de balancear mais livremente a criação de skills. Seria mt complicado adaptar as fichas de vcs para spellslots como acontece em outros sistemas mas se tiverem boas ideias podem dar
```

#### [WA:L2243-L2243] 6/12/23 16:43 | Tz Magnata

```text
O controle serve pra basicamente, alem de influenciar mana e a dc das suas skills, como uma forma de vcs usarem suas habilidades para além das suas fichas. Como o conceito é q vcs sejam pessoas com poderes e não com magias vcs podem usar seus poderes de infinitas formas. Como por exemplo quando o suprus quis usar a habilidade dele de controlar fogo para aumentar as chamas q ele jogaria na vela do navio inimigo. "Aumentar chamas" n esta na ficha dele, mas faz sentido q alguem com os poderes dele possa tentar fazer isso logo ele fez um teste de controle.
```

#### [WA:L2262-L2262] 6/12/23 16:49 | Huedro

```text
Se você for mais forte que seu inimigo (tipo o boss) ele pode e vai spammar counter contra você. O supros dizima minion por causa disso, especificamente
```

#### [WA:L2308-L2313] 6/12/23 17:34 | Huedro

```text
- Vasco da Gama
- Billy Boa Sorte
- Supros Repros
- Cronos Wattson
- Gunn 
- Sarah
```

#### [WA:L2462-L2462] 6/12/23 22:27 | Gabriel Violante

```text
Ou, mas e o supros guys, foi de hars nerf junto com o counter inteiro ou eu ganho um vale hotfix com a aprovação do mestre? @⁨Tz Magnata⁩
```

#### [WA:L2736-L2736] 7/4/23 15:15 | Tz Magnata

```text
Basicamente se vcs sofrerem um dano que seja superior a *sua vida atual + sua vida máxima* ou atingirem 0hp 4vezes sem uma long rest. Vcs receberão um _*trauma*_
```

#### [WA:L2745-L2745] 7/4/23 15:18 | Tz Magnata

```text
Pra mim vai funcionar basicamente como uma ferramenta pra que um personagem q acabou de experenciar uma semi morte n seja curado em 3 de hp 6 segundos depois e esteja em plena forma física
```

#### [WA:L2796-L2796] 7/4/23 16:04 | Tz Magnata

```text
Mas no deserto de Kalahar tem o cemitério dos restos que é o cemitério onde enterram pedaços de corpos q n sao grandes o suficiente pra reconhecer o dono
```

#### [WA:L2805-L2822] 7/4/23 16:05 | Tz Magnata

```text
Resultados possiveis

A party se depara com algo típico da região. A party pode ter encontrado algum item perdido, animal exotico ou até ouro em sua viagem e o trouxe consigo para avaliar seu valor.

Caso tenha um Arqueólogo ele pode fazer um teste de Investigation para tentar descobrir ou perceber algo de estranho com a região. Caso ele passe e não exista nenhuma lore a ser descoberta ele terá encontrado um pequeno artefato antigo que possa ser vendido.

O Look Out pode fazer um teste de perception para detectar uma conexão da área com que passaram com algum outro ambiente. Identificar alguma ruina ou caverna que possa ser explorada depois.

Caso tenha um ferreiro ou um alquimista eles podem fazer um teste influenciado pelo modificador de suas respectivas profissões para conseguir coletar algum material que a party tenha deixado passar durante a viagem.

Os membros da party deverão fazer um st de cons. Caso falhem devem permanecer 3 dias em repouso para cada nível de exaustão que adiquiriram pela viagem.

O guia deve fazer um roll de Wisdom. Caso passe ele terá tido grande exito em mapear a área por onde passaram, isso irá facilitar bastante futuras viagens pela regiao alem de o tornar apto à vender informações para outros aventureiros que planejem fazer esse percurso.

O guia deve fazer um st de wisdow. Caso falhe ele se torna incapaz de ser o guia em outra viagem por um numero de semanas igual ao nivel de exaustão que ele acumulou durante a viagem.


Todos os membros da party devem fazer um teste de charisma. Caso passem ganham uma inspiração
```

#### [WA:L4077-L4077] 9/20/23 11:57 | Gabriel Violante

```text
Ent o supros descobre o nome do pesadelo
```

#### [WA:L4087-L4087] 9/20/23 12:09 | Tz Magnata

```text
Minha sugestão pra isso sempre foi: tenham em mente um conceito claro para o personagem de vcs. Saibam qual é o poder dele para não ficarem perdidos. Caso estejam perdidos, procurem em outros sistemas(que as habilidades ja vem prontas) habilidades wue vcs gostem e repliquem pro personagem de vcs
```

#### [WA:L4521-L4521] 9/20/23 15:34 | Tz Magnata

```text
Por mim nós podemos fechar em o controle se tornar um skill check da inteligencia. Assim ele ainda poderia ser usado como mecanica para utilizar equipamentos fodas e algumas outras situaçoes específicas
```

#### [WA:L5070-L5074] 9/21/23 17:12 | Huedro

```text
•	Chaos do corpo: (soma de 2 entre INT/WIS/CHA + prof) * 10 + 100 
•	Chaos do Espírito: (soma de 2 entre INT/WIS/CHA + prof) * 10 + 120
•	Chaos da Mente: (soma de 2 entre INT/WIS/CHA + prof) * 10 + 140

@⁨Tz Magnata⁩ sugestão de novo cálculo pras manas <This message was edited>
```

#### [WA:L5222-L5235] 9/22/23 23:46 | Tz Magnata

```text
Vocês caminham bastante por dentro dessa floresta até que de repente ace se vira para Vocês e diz
    Finalmente chegamos
Ao ouvir essas palavras voces terminam de contornar mais uma das infinitas e enormes arvores que lhes cercam e ganham visao de algo completamente inusitado
Por uma área razoavelmente circular com cerca de 1km de diâmetro, não existem arvores. Nem mesmo o mato, que no resto da floresta alcança até 2 metros de altura, cresce mais de poucos centimetros. Até mesmo o chão, acidentado durante todo o trajeto,se mantem perfeitamente plano. O tal monte legion é a região de menor inclinaçao que vocês encontraram até agora.
No meio desse enorme circulo voces conseguem ver algumas pessoas reunidas e poucos e pequenos grupos. Elas estão ao redor do que parece ser uma placa bem grande porem em funçao do sol forte e da distancia voces não identificam muito bem. Antes que voces consigam esclarecer suas duvidas com Ace ele começa a dizer enquanto anda em direçao ao centro

   Ace- Sabem, à muitos anos viveu um aventureiro muito famoso chamado de Américo. Ele não era especialmente forte ou coisa do tipo, a sua fama se deve aos varios livros que ele escreveu nos quais relatava suas aventuras. É bem possível que vocês ja tenham lido um livro dele algum dia. Desde sua primeira obra Américo sempre disse ter o sonho de conhecer a criatura ou o lugar mais magnífico que esse mundo pudesse oferecer. E que era sempre com esse objetivo que ele começava uma nova viagem. Seu último livro, quando já era bem velho, narra sua passagem por essa mesma floresta.

Nesse momento vocês já estão no centro do círculo e percebem que aquilo que acreditavam ser uma placa era na verdade uma estatua de um enorme martelo de pouco mais de 2metros cravado no chão pelo seu cabo. Na cabeça do martelo é possível perceber alguns escritos. 
Ace aponta para o martelo e diz
- o ultimo trecho desse livro está escrito no martelo, leiam por vocês mesmos.

Trecho retirado do livro de Américo- Éramos um grupo de 11 exploradores experientes, homens e mulheres com os quais eu mesmo ja havia viajado no passado. Caminhávamos pela floresta dos gigantes quando nos deparamos com uma criatura que acreditávamos ser um titan. Um monstro desafiador, humanoide com mais de 15 metros de altura e o cerebro de uma galinha. Nos preparamos para um combate que não deveria durar tanto.
Nao demorou e percebemos nosso engano. Aquele gigante nao era um titan como tantos outros, seus movimentos eram ágeis e rapidos como os de um pássaro, pareciam tambem ser planejados, a criatura certamente não era estúpida. Sua força e regeneração tambem se destacavam da de qualquer titan que já havia enfrentado. Nossos números foram se reduzindo e em pouco tempo 11 se tornaram 6. A besta não demonstrava cansaço algum até um ponto em que nosso destino se tornava eminente. Talvez, se ainda estivesse em minha juventude poderia tentar fugir com alguns de meus companheiros, ou teríamos pelo menos oferecido um desafio maior ao nosso algoz. Lutávamos apenas por vergonha de nos entregarmos à morte. Em algum momento, quando a besta se preparava para mais uma de suas investidas algo lhe chamou a atenção e à fez hesitar. Um jovem, não muito alem de seus 20 anos, sem qualquer tipo de armadura se aproximou daquele massacre. O monstro percebia o mesmo que nós. Aquele homem não era comum. A besta assumiu ums postura defensiva. Em vão. O homem que se atirou em sua direção muito mais rapido do que meus olhos cansados poderiam ver rapidamente furou seu bloqueio. A criatura não teve a chance de experimentar o desespero que nos proporcionara. Com um unico golpe de martelo nao sobrou partes de onde o monstro pudesse se regenerar. Aquele que deveria ser o ser mais forte entre os mais fortes da região, não era nada mais, como se nunca tivesse existido. O golpe emitiu uma luz forte e enviou energia brilhante como a de uma estrela cadente por entre as arvores da floresta. A estrela se chocou com uma montanha ao fundo que compartilhou o mesmo destino do titã. Aquele homem fez muito mais que salvar a minha vida, com essa breve apresentaçao ele me concedeu paz na morte. Estava, sem duvida alguma, diante da encarnaçao de um sonho. Mais estupendo q qualquer dragao ou ser marinho. De presença mais marcante que qualquer demônio ou monstruosidade. Aquele ser era sem duvidas o mais impressionante que este mundo pode me oferecer. E a extinta montanha, apenas como prova de sua força, já se revela o lugar mais interessante que já visitei. Eu e a montanha, somos eternas testemunhas de sua existência.
```

#### [WA:L5515-L5552] 10/10/23 11:58 | Tz Magnata

```text
*TROPA*
*AVISOS IMPORTANTES DE REBALANCEAMENTO.*

*SAVING THROWS*
CHAOS DO CORPO. =+2 para SAVINGS de 2 stats entre força, destreza e constituição.

CHAOS DA MENTE= +2 para SAVINGS de 2 stats entre inteligência, sabedoria e carisma.

CHAOS DO ESPIRITO= +2 para SAVINGS  de 2 stats A SUA ESCOLHA.

*STAT CONTROLE*
STAT ANULADO.
Controle se torna um ABILITY CHECK de inteligência. 
CONTROLE PODE SER USADO PARA: resistir a determinados efeitos de ambiente, utilizar seus poderes de formas que não estejam nas fichas e ativar itens feitos a partir de cristais de chaos.

*REDISTRIBUIÇÃO DE PONTOS*
Com a anulaçao de um stat vcs retornam aos 6 originais de dnd. O limite de pontos agora é de 27PONTOS (ANTES 31) e o MÁXIMO que um stats pode alcançar é 17 caso vc upe ele até 15 e dps some o +2 do seu tipo de chaos.

*MANA* 
O sistema de mana sera MANTIDO. porém adaptado à extinção do controle.
CHAOS DO CORPO= utilize 2 stats entre inteligência, sabedoria e carisma para calcular mana.
CHAOS DO ESPIRITO= utilize os 3 stats inteligência, sabedoria e carisma 
CHAOS DA MENTE=utilize os 3 stats inteligência, sabedoria e carisma.

*SPELL CASTING*
Sem o controle o spell casting deve ser calculado novamente.
Todos os personagens continuarão escolhendo um stats para spellcasting entre inteligência, sabedoria e carisma de forma livre. 
PARA CALCULO DE DC DE SUAS HABILIDADES SOMEM= 9 + spellcasting + 2(proficiencia)

*ACS BLOCK DODGE E COUNTER*
A princípio o sistema de acs CONTINUA O MESMO.

*PROFISSÕES*
O sistema de profissões será EXPANDIDO. Para aqueles que forem PREGUIÇOSOS e não quiserem ter o desafio de desenvolver ou exercer uma profissão e não querem perder os bonus que elas fornecem devem ESCOLHER dentre a lista de BACKGROUNDS DE DND 1 para que seu personagem possua. O BACKGROUND, tal qual a profissão, DEVE ESTAR ESCRITO NA FICHA. CASO NÃO ESTEJA COM SEUS EFEITOS EXPLICADOS NÃO SERÁ VALIDADO. 
Para os que quiserem testar outras profissões, podem criar profissões de suas cabeças. Seguem algumas RECOMENDAÇOES que iram facilitar q a profissao que vc crie seja aceita. 
_ SEJA ÚNICA, com mecanicas e recompensas diferentes das outras.
- Não seja voltada apenas para farm de gold, e sim para exploração.
- Sejam praticaveis de forma natural em uma campanha focada em aventura.
```

#### [WA:L5717-L5718] 10/11/23 15:00 | Huedro

```text
ao meu ver, nós conhecemos gente pra caramba, mas ainda não temos muitas relações formadas com eles 
as relações da party mais desenvolvidas eu vejo atualmente e são com: a Legião e o Ace, mais ou menos o Tohsen, Anibble, Pérsefone e um pouquinho de nada com uma outra galera que a gente já encontrou
```

#### [WA:L5726-L5805] 10/11/23 15:37 | Tz Magnata

```text
*Lista de personagens Relevantes*

*Membros da nova geração (Coliseu)*

Reishi Schutz (Quincy)
Danagorn (Escudos)
Jura Neekis (espiritos)
Crystal (maga de gelo)
Caitlyn (Necromancer)
Lee Hang (Bastão que estica)
Kakuzou (zumbi)

*Membros da classe S*

Kaname Tosen (Lider da Legião)
Ragnus Lothar o Trovão ( Líder da Fenrir)
Scar a Salamandra (Líder da Amazonas)
Aiolos o Sargitário (Signo da Constelación)
Asmita a Virgem (Signo da Constelación)
Perséfone a Corrupta 
Hirako Shinji o Vadio 
King Bradley the Fuhrer (Líder de MFD)
Lancelot (Dragonfall)
Merlin (Dragonfall)
Morgans (Veneno/morto)

*Personagens amigos dos protagonistas*
Portgas D Ace (Fênix da Legião)
Trulkin (Líder de uma tribo de Trolls de Nyashira)
Thomas Shelby (Sr Moesley)
Lille Barro Schutz (Quincy de Nippon)
Katrina ex Líder da Legião(viva/morta?)
Kyoshiro (Daimyo de Nippon)

*Outros personagens relevantes encontrados*
Luna (princesa de Dalaran)
Rei Arthur o Último (Rei de Dragonfall)
Dohko a Libra (signo da constelación)
Degel o Aquário (signo da constelación)
Jack Rackaham (pirata influente de Nassau)
Alynn Ackerman (contramestre da tripulação de Jack)
Ned Low ( pirata influente de Nassau)
Griffith (ex Femto)
Bellegher (Líder do Novo Sol)
Thanatos (um dos membros da Ordem)
Mímico (um dos membros da Ordem)
Xen ou Xemnas (Líder da Ordem)
Estrela Maior (Dragão pequeno de Skylands)
Don Quixote (Dragonfall)
Aníbal Barca (Legião)
Américo Cruzado Jr ( Radamanthis)
Nemesis (Religioso membro da Ordem)
Vazio(?) (Criatura desforme e branca)
Kalameet (Arqueólogo especialista em armas únicas )

*Organizações ou instituições relevantes*

Dalaran, a cidade do Sol.
Dragonfall, o primeiro Reino Humano
Nippon (reino asiático ao norte)
Reinos Unidos do Norte (antigos três reinos do Norte)
Seagate (Reino no Canal da Serpente)
Nassau (cidade independente de piratas)
Legião  (guilda)
Fehnrir (Guilda)
Amazonas (guilda)
Constelación (guilda)
Estrela Negra (Facção)
Mão Negra (Facção)
Ordem (Facção dos Ackerman)
Birmigham( cidade de Alaria dominada por Thomas Shelby)
Guarda Real de Dalaran(exército de dalaran)
Trolls de Nyashira (raça humanoide)
Exército Revolucionário do Novo Sol
Demônios puros ( aqueles que estavam nos 3 reinos do norte)
Conselho (grupo formado por pessoas fortes e influentes que tomam decisões sobre o mundo)
Blackhole (Prisão folclórica invadida por Xen)
Schutz (família de exímios combatentes de Dragonfall)
Igreja do Santo Chaos ( Religião mais popular no mundo, presente e influente em várias capitais)
Filhos de Godrick (programa de Seagate para acolhimento de Órfãos)
```

#### [WA:L5892-L5899] 10/13/23 14:57 | Tz Magnata

```text
Não cometo a injustiça
Nem me acovardo diante dela
Não odeio o inimigo
Nem adoro o tirano
Não fraquejo contra o poderoso
Nem cresço encima do fraco
Sigo aquilo que creio certo
Não aquilo que creio fácil.
```

#### [WA:L5909-L5934] 10/13/23 18:49 | Gabriel Violante

```text
War lotus
O pesadelo da guerra é orgulhoso e não permite que seu portador use qualquer chaos que não seja proveniente dela.

Ataques feitos com a war lotus ignoram qualquer resistencia e imunidade.

Ataques feitos com a War Lotus recebem +3 para bonus de acerto e causam 1d12 de dano. (Deve ser empunhada com as duas mãos)

O portador ganha +2 para ambas as suas acs se estiver cercado por mais de 1 inimigo e +1 para ambas caso esteja contra apenas 1 oponente.

Qualquer escudo de baixo nível se quebra ao ser atingido pela primeira vez pela war lotus.

Battle cry: ao sacar a war lotus role 1d12, o numero rolado sera adicionado a qualquer dano causado por ela e é também retirado da vida máxima do seu portador até q ele tenha uma long rest.

O portador pode sacrificar pontos de vida maxima para somar o dano de um ataque da war lotus.

Inimigos que recebam um ataque critico de war lotus devem fazer um st de charisma dc 18. Caso falhem recebem fear.

Run cowards: inimigos que estejam com Fear recebem menos 2 de ac contra ataques da war lotus. 

O seu portador possui resistencia a testes contra fear ou mind control.

War lotus não causa danos não letais.

Instinct of battle: voce tem vantagem para testes de percepção para determinar os efeitos ou armadilhas de qualquer habilidade que um inimigo esteja usando na batalha, tal qual suas fraquezas.

Blood bond: matar um inimigo aumenta em 5 o seu hp maximo temporariamente. No fim da batalha todos os pontos de hp ganhados nessa habilidade são perdidos instantaneamente.
```

#### [WA:L5972-L5972] 10/20/23 13:14 | Tz Magnata

```text
Lâmina preta, com o mesmo detalhe do dragao, porém fosco e cinza. Quando empunhada o Dragão da lamina brilha vermelho
```

#### [WA:L6186-L6192] 11/27/23 11:22 | Fabrício

```text
A floresta dos elementais funciona de forma mt singular dentro do mundo. Diferente da maioria dele que respeita razoavelmente as 4 estações do ano esse sistema funciona diferente dentro da floresta. A floresta dos elementais se divide em 4 estações diferentes
Heavenly
Disturbed
Purgatory
Infernum
As estações variam de acordo com a violenta mudança climática, surgimento de mais criaturas hostis e mais criaturas poderosas. Em suas estações mais perigosas o próprio tamanho da floresta dos elementais aumenta consideravelmente. Todos os itens citados acima variam de menor para maior na passagem de heavenly para infernum. A duração das estações é completamente imprevisível, podendo durar anos ou poucas semanas. Elas geralmente respeitam à ordem citada acima, porém, existem raros casos na história em que etapas foram puladas e de heavenly a floresta repentinamente entrou em infernum. 
Atualmente a floresta está em heavenly
```

#### [WA:L6314-L6324] 12/2/23 00:14 | Huedro

```text
🔴-Dalaran
😀- Nippon
🔵- anak halow
🟠- Hakkumai
💜- Praeglacius
🟡- Seasgate
⚪- STT 1044M
⚫- dragonfall
🟣- birmgham
😅- forruner
🥹- 3 reinos do norte (Goldage)
```

#### [WA:L6626-L6626] 12/10/23 15:21 | Paulo Oliveira

```text
Fiz o Vasco dar 94 de dano em um turno
```

#### [WA:L7190-L7190] 12/15/23 21:44 | Huedro

```text
Chronos, Zoio e Vasco não estão presentes...
```


### Arquivo de 2024

#### [WA:L7258-L7258] 1/2/24 18:09 | Tz Magnata

```text
Na ultima sessao nossos camaradas quase encontraram a morte após uma dinamica de batalha complexa e com a ajuda de um homem misterioso conseguiram sair em segurança
```

#### [WA:L7278-L7278] 1/5/24 11:03 | Tz Magnata

```text
Vou colocar arcos e sagas em ordem de td q aconteceu até agr e um breve resumo com as principais informações e acontecimentos
```

#### [WA:L8291-L8291] 1/23/24 11:59 | Gabriel Violante

```text
supros vai pra ordem
```

#### [WA:L8654-L8654] 1/29/24 17:05 | Gabriel Violante

```text
Nos contamos a legião q matamos um dragão adulto e 4 trols de gelo
```

#### [WA:L8834-L8834] 2/22/24 22:50 | Tz Magnata

```text
Vc falou q queria merecer o revive no chronos, a única forma de isso acontecer seria se o chronos tivesse a chance de lutar mais um dia
```

#### [WA:L8835-L8835] 2/22/24 22:51 | Tz Magnata

```text
Porém ao mesmo tmp, houve um roubo no revive do chronos, roubo esse que não irá se repetir futuramente na campanha
```

#### [WA:L9146-L9146] 3/5/24 13:37 | Tz Magnata

```text
Até agora senti que as profissões são só títulos, eventualmente cria alguma situação de identificação com outros personagens da hora do roleplay mas nada além disso. Tirando o ranger, que na verdade a única utilidade que via nele era os bônus de skill dele, nunca ví mais ninguém usar, explorar ou ter vantagem em algo por ser de determinada profissão
```

#### [WA:L9150-L9150] 3/5/24 13:38 | Tz Magnata

```text
Em nippon foi a arqueologia do chronos que determinou a idade das pinturas
```

#### [WA:L9165-L9165] 3/5/24 13:41 | Maia

```text
O lion eu achava que era até skill do gunn
```

#### [WA:L9271-L9271] 3/5/24 14:10 | Tz Magnata

```text
Primeiro, o sistema de ranks é baseado em força, poder de destruiçao, combate 1v1. Não é baseado em inteligencia, estratégia, ou mesmo no quão importantes vcs foram ou são
```

#### [WA:L9279-L9279] 3/5/24 14:14 | Tz Magnata

```text
E em relacao aos outros personagens que vcs conhecem, ou eles são personagens no topo do mundo. Tosen, ragnus Ace. Ou são personagens que no futuro estarão no topo do mundo com vcs, Reishi, Yura, Crystal. Por isso q sinto q vcs tem uma ideia de que possuem uma reputacao menor doq vcs tem de fato, pq todos ao redor de vcs são incríveis, tanto quanto vcs.
```

#### [WA:L9281-L9281] 3/5/24 14:15 | Tz Magnata

```text
Por exemplo, vcs tinham uma menina q era fã de vcs em Frostearth, aos poucos irão ocorrer mais situações como essas.
```

#### [WA:L9283-L9283] 3/5/24 16:11 | Fabrício

```text
@⁨Tz Magnata⁩ eu vou te pedir um favor meu mano, no documento existem 10 pontos, e no decimo ainda existem subpontos. Eu quero pedir para que nós discorramos sobre os pontos na ordem que eles aparecem
```

#### [WA:L9285-L9285] 3/5/24 16:14 | Fabrício

```text
Então vamo fazer a parada direito, que dure dias, não importa, mas vamos discutir cada ponto individualmente e em ordem, começando então, pelo sistema de AC
```

#### [WA:L9320-L9323] 3/5/24 17:08 | Fabrício

```text
Mano é o seguinte, seu foco tá equivocado, pelo seguinte motivo. 
Primeiro, "No DnD as classes te guiam" - Sim, elas te guiam, mas absolutamente NADA te impede de ser um mago que dropa INT e foca em CON e STR, só vai ser "Inútil".
Segundo, "Um cara full DEX geralmente nao é o mais tank da Party" - Isso é definido pela armadura que o cara ta usando, ele tiver +11 de DEX e a armadura tiver um cap de 1 de DEX na AC, os 11 nao fazem eles ser inacertável, isto É balanceado no DnD através do cap da armadura, você nao precisa forçar o cara a pegar um caos com menos HP pra "Nerfar" isso, até porque, se o cara pegolu DEX, ele provavelmente dropou CON, logo ele tem menos vida, e CASO ele pegue DEX e CON ao mesmo tempo, ele dropou outras coisas, aí cabe a você como mestre explorar as fraquezas e forças dos personagens para construir uma narrativa dahora.
Terceiro, limitar a proficiência de saves aos 3 tipos de chaos - Os jogadores acham que seria melhor ter liberdade total na hora de escolher suas saves no inicio do jogo, toda classe em DnD ganha 2 e elas são predefinidas, mas como em TZPG a ideia é ter liberdade, o ideal seria escolher as 2 que quiser. <This message was edited>
```

#### [WA:L9337-L9337] 3/5/24 17:22 | Tz Magnata

```text
Eu n gosto mt disse pq tp, diferente do dnd, no tzpg n existem "classes" vc ser chaos do corpo, mente ou espirito era só um mini norte pra vcs no começo do game, assim como aqla lista de oq vcs ganham por nivel. Dentro do mundo n existe chaos do corpo ou mente ou espirito, existem humanos com e sem chaos, apenas
```

#### [WA:L9360-L9360] 3/5/24 17:53 | Tz Magnata

```text
Contrariado pois entendo que para que seja dessa forma é indispensável limitar o acesso a itens de acordo com uma "classe" que na minha cabeça não deveria existir.
```

#### [WA:L9368-L9368] 3/5/24 18:14 | Fabrício

```text
Os jogadores acreditam que deveria ser livre assim como os Saves, por exemplo "Um personagem lvl 1 pode escolher 3 skills" e é isto, simples e pratico, dessa forma tem liberdade total nas mãos dos jogadores para buildarem como quiserem, e entra o mesmo argumento, escolher 1 significa nao escolher outro e isso cria uma fraqueza que pode ser explorada, ficou claro?
```

#### [WA:L9458-L9462] 3/7/24 10:55 | Tz Magnata

```text
Os pontos de vcs são:
- atualmente o sistema de profissões só serve para decidir quais skills vc tem.
- as profissões não dão vantagens aos players.
- as profissões não funcionam como mecanica de customização dos personagens.
- a forma como as profissões progridem não é boa. Opções são fazer as profissões n evoluirem ou fazer com que evoluir se torne mais interessante
```

#### [WA:L9493-L9506] 3/7/24 11:34 | Gabriel Violante

```text
A opinião de todos sobre o Sistema de profissões:

- Profissão não deveria controlar a quantidade do bônus de proficiência.
- Profissão deveria dar 2 skills e uma passiva de profissão, apenas.
- Profissão não deveria bloquear jogadores de tentar coisas, como lembrar de coisas de história.
- Profissão não deveria ter que evoluir. Não tem necessidade.
- Nós simplesmente só achamos o Sistema de profissão atual chato, ele limita coisas que qualquer um deveria poder fazer, por isso não damos sugestões.

Exemplo:
[ Ferreiro ]
Você ganha proficiência em Athletics e Sleigh of Hand. 

{ Na minha mão é mais barato }
Você tem vantagem para fabricar equipamentos e consegue fazer isso por metade do preço original.
```

#### [WA:L9508-L9508] 3/7/24 11:36 | Tz Magnata

```text
É, basicamente foi decidido q as profissoes não vao dar bonus pra skill nenhuma. Ent esse exemplo do ferreiro estaria errado de acordo com oq agt mesmo ja vem discutindo
```

#### [WA:L9509-L9509] 3/7/24 11:38 | Tz Magnata

```text
Não escalar as profissões tbm é um problema, pq ou elas vão se tornar inuteis ou extremamente quebradas em determinado ponto. Se o gunn for capaz de fazer oq um domador extremamente experiente faz seria impossível balancear qualquer combate, e se ele ficasse eternamrnte sendo capaz de fazer só oq ele faz agora a profissao dele ficaria inutil
```

#### [WA:L9522-L9524] 3/7/24 11:47 | Tz Magnata

```text
Por exemplo: a flor que receberam da lissandra. É um item extremamente raro. Um item q só existe em um lugar especifico do mundo ao qual nenhum de vcs foram antes. É um item dado por uma pessoa de uma civilizaçao à qual vcs pouco conhecem.

Em circunstâncias normais, como foram, vcs n teriam qualquer forma de entender o valor daquele item. Porém, caso houvesse um joalheiro entre vcs, eu deixaria ele fazer testes para tentar identificar o item.
```

#### [WA:L9525-L9525] 3/7/24 11:49 | Tz Magnata

```text
Não havia nenhum joalheiro. Então vcs teriam que procurar alguma pessoa capacitada e de confiança que pudesse fazer uma avaliaçao doq vcs tinham. No caso, eu resolvi o problema pra vcs jogando o ragnus lá. Caso nao fizesse isso, vcs teriam que procurar por sí mesmos, apenas
```

#### [WA:L9536-L9559] 3/7/24 12:29 | Tz Magnata

```text
*Tamer*
Nv1- +2 para testes de animal handling;nature e survival. 
Capacidade de domar uma criatura dc 1/4 ou inferior com comportamento friendly.

Nv2- +3 em testes de animal handling, nature e survival.
Capacidade de domar criaturas de dc1 ou inferior.

Nv3- +4 em testes de animal handling nature e survival.

Especificação: _matilha_ capacidade de domar 2 criaturas friendly de dc1 ou inferior 
*OU* 
_strong bond_ 
capacidade de domar 1 criatura de dc3 ou inferior (com ou sem comportamento friendly)

Nv4- +5 nos testes.

_matilha_
Capacidade de domar 2 criaturas de dc3 ou inferior de comportamento friendly.

_strong bond_ capacidade de domar 1 criatura não friendly dc6 ou inferior. 

Nv5 mestre- 
_matilha_ capacidade de domar 2 cristuras friendly de dc 5 ou inferior.
_strong bond_ capacidade de domar 1 criatura de dc13 ou inferior nao friendly.
```

#### [WA:L9563-L9598] 3/7/24 14:57 | Tz Magnata

```text
*Arqueólogo*
Nv1- +2 para testes de historia, natureza, society, investigation, religion e arcana

Nv2 +3 para testes.
Vantagem para se lembrar de conhecimentos à respeito de alguma lore especifica, a escolha do player.

Nv3- +4 para testes.
_pesquisador_
Vantagem para rolls de determinado ability check: historia;nature;investigation;arcana;religion;society.

_explorador_
Diminui em 1 a dificuldade de viagens feitas a um lugar sobre o qual tenha conhecimento prévio. Vantagem em testes de investigation para encontrar armadilhas em ruínas&masmorras.
Vantagem em testes de stealth quando explorando ruínas&masmorras.

Nv4-+5 em testes.
_pesquisador_
Não precisa mais rolar um investigation quando estiver pesquisando ou estudando algo, irá assimilar todo o conhecimento disponível.
Capaz de traduzir qualquer linguagem, ainda que falhe nos testes, desde que tenha tempo suficiente.
Proteção de 1lvl de Exaustão quando explorando ruínas&masmorras.
_explorador_
Proteção de 2lvs de Exaustão quando explorando ruinas&masmorras.
Vantagem em testes para desfazer selos ou fechaduras mágicas ou mecânicas.
Vantagem em testes contra efeitos de ilusão&mind control.

Nv5-mestre.
_pesquisador_
Pode se auto infligir pontos de Exaustão para assimilar grande quantidade de informação em curto espaço de tempo.
Vantagem em testes com objetivo de se lembrar de qualquer informação.
Reduz em 1 a dificuldade de qualquer viagem que já tenha feito ao menos 1 vez.
Capaz de determinar a função ou forma de uso de artefatos ou itens raros desconhecidos.
Leveis de Exaustão não causam desvantagem em testes de historia;arcana;nature;society;investigation.
_explorador_ 
Reduz em 2 a dificuldade de qualquer viagem sobre a qual tenha pesquisado anteriormente.
Está enquanto em viagem ou exploração o personagem está constantemente fazendo testes de arcana e investigation para identificar ou perceber qualquer coisa que pareça estar fora do lugar.
Percepção passiva mínima de 18.
Vantagem contra testes de manipulação mental ou emocional: ilusões, charm, frightened, mind control, taunt.
```

#### [WA:L9704-L9704] 3/7/24 17:24 | Fabrício

```text
Enquanto o supros vai rolar pra domar o hellhound com -1 por exemplo, ou seja só em 20 ele consegue, esse cara do exemplo vai rolar com +9, aí os 25 já requerem um 16
```

#### [WA:L9734-L9734] 3/7/24 18:02 | Tz Magnata

```text
Eu simplesmente n iria permitir q todos vcs saissem fazendo testes de animal handling ate cada um de vcs ter seu lyon particular
```

#### [WA:L9773-L9773] 3/7/24 18:30 | Fabrício

```text
O nosso draft é esse, e aí você fala que o gunn não poderia ter o Lyon por exemplo... Mas sim, ele poderia SIM, isso pode fazer parte da passiva dele. E mesmo que não fosse o caso, ele teria liberdade de criar uma skill que o permite fazer isso
```

#### [WA:L9853-L9853] 3/8/24 13:13 | Tz Magnata

```text
O comentário do @⁨Huedro⁩ diz q os chaos deveriam ter mais habilidades especificas para que se diferenciassem entre si e tornasse os personagens mais unicos
```

#### [WA:L9855-L9855] 3/8/24 13:15 | Tz Magnata

```text
Qlqr coisa q vcs queiram que um "tipo" de chaos dê para vocês pode ser adicionado na ficha de vcs pelas suas skills
```

#### [WA:L9859-L9859] 3/8/24 15:00 | Fabrício

```text
O ponto de os chaos terem "Tipos" é pra fazer sentido dentro de um sistema de RPG de mesa, pra os jogadores terem uma progressão clara, e coisas que cada um vai ou não vai ganhar, e pra ficar mais organizado
```

#### [WA:L9863-L9863] 3/8/24 15:02 | Fabrício

```text
Os chaos terem diferenças também ajuda no scaling de mana
```

#### [WA:L9864-L9864] 3/8/24 15:02 | Fabrício

```text
Porque o chaos da mente poderia ganhar por exemplo +30 de mana por nível, enquanto o do corpo ganha +10 de mana por nível
```

#### [WA:L9865-L9865] 3/8/24 15:03 | Fabrício

```text
Ou os chaos tem que ser coisas bem definidas, ou você faz todos os personagens terem exatamente os mesmos status iniciais e chaos não ser uma coisa que existe
```

#### [WA:L9870-L9870] 3/8/24 15:11 | Fabrício

```text
Tipo assim, se nenhum desses dois "Conceitos" existem, por que que o jogador tem que acatar a eles? Se mana não existe, por que que eu posso comprar um líquido que se eu beber a minha MANA regenera? Se chaos como conceito não existe, por que que eu tenho menos HP e menos mana que o meu coleguinha? Bota fezes?
```

#### [WA:L9875-L9875] 3/8/24 15:16 | Maia

```text
mas se ele é um chaos da mente ele quer alguma coisa que otimize a mana, e ai se ele biuldar esquisito, ai sim ele pega nas skills o multiattack
```

#### [WA:L9959-L9959] 3/8/24 18:06 | Maia

```text
Btf que vc ta achando que a gente quer a skill mata boss, e o efeito dela é causar uma quantidade de dano massivo que mata qualquer bicho que vc mandar.
```

#### [WA:L10003-L10003] 3/8/24 21:32 | Tz Magnata

```text
Vcs decidem se ou como vai ser a reformulaçao dos tipos de chaos. Vcs decidem se vai acabar com os tipos de chaos, vcs decidem quais os valores fixos que seriam colocados caso quiserem acabar com os tipos de chaos, eu n preciso nem estar envolvido nesse processo, vcs só precisam me apresentar novas fichas no final.
```

#### [WA:L10118-L10118] 3/11/24 08:41 | Tz Magnata

```text
Vcs decidem se vai manter os 3 tipos de chaos ou não, se vai criar uma previsão do lvl 1 ao 20 pra cada um deles ou não.
```

#### [WA:L10167-L10167] 3/11/24 09:20 | Maia

```text
o meu ponto, tentando explicar melhor, é que alguns pontos mais pra frente discutem o nosso nível de força, nada contra terem personagem muito mais fortes que a gente só pra deixar claro, mas ele busca melhorar essa nossa relação de "Quão forte nos somos?" e se você simplesmente continua mantendo distante dos players o que os inimigos são capazes de fazer, creio eu que os jogadores não chegaram no serenei da nossa questão. Um paralelo a isso é o que o Fabricio disse sobre o balnce de mana, que se cada kit precisa de um sustain de mana próprio e específico, é irrelevante a quantidade de mana já que todos tem que ter um máximo de usos.
```

#### [WA:L10330-L10330] 3/11/24 10:44 | Tz Magnata

```text
Se bem me lembro vcs tiveram que passar por essa decisão durante o arco de nippon q vcs tomaram gap pro frio
```

#### [WA:L10338-L10338] 3/11/24 10:47 | Maia

```text
mas é o que mais drena recurso porque ai a gente tem que tomar as poções antes de um combate que seja eminente e não tenhamos tempo de descansar, e na maioria das vezes a gente só vai tentar passar dias tentando tirar os níveis de exaustão, porque nível de exaustão aumenta exponencialmente o risco de morrer, é uma forma de punição que afeta todo o ritmo do jogo dps.
```

#### [WA:L10342-L10344] 3/11/24 10:50 | Tz Magnata

```text
1: eles tomam Exaustão.
2: eles são colocados em um combate contra a escolha deles ou em um combate desvantajoso.
3: eles recebem um ponto de shadow
```

#### [WA:L10356-L10356] 3/11/24 10:54 | Tz Magnata

```text
Inclusive o combate com os onis nessa viagem se encaixa na segunda categoria aqui
```

#### [WA:L10367-L10367] 3/11/24 10:58 | Jn

```text
Man no Dragon ball z o vegeta conseguia criar uma lua artificial tlgd, o Vasco acabou de ganhar uma habilidade canônica tipo
```

#### [WA:L10383-L10383] 3/11/24 11:14 | Tz Magnata

```text
Ou sempre que vocês se tomam posse de algum tesouro amaldiçoado ou tomam posse de algum tesouro por meios ruins
```

#### [WA:L10436-L10443] 3/11/24 12:00 | Tz Magnata

```text
Man, meu insight é, agt poderia explorar algo nesse sentido, se todos vcs gostarem do conceito assim como o lukeu gostou.Mas:
1- o sistema de shadow original é MUITO grande e complexo. Nao acho q justifica trazer tudo para tzpg.

2- as penalidades tem que ser graduais. Não acho que funciona bem uma hora o seu personagem estar 100% e na outra o seu personagem ter disvantagem em todo atack roll.

3- tem que decidir se o shadow vai ser incorporado em toda a campanha ou se vai ser uma mecanica exclusiva da viagem.

4- tem q definir quais são as penalidades de quem recebe shadow.
```

#### [WA:L10558-L10558] 3/11/24 14:07 | Tz Magnata

```text
O suprus tem uma tatuagem no peito dada apenas para herois de guerra do povo de nippon
```

#### [WA:L10563-L10563] 3/11/24 14:09 | Huedro

```text
Imagino que a carpa do supros seja útil em Nipon e afiliados
```

#### [WA:L10606-L10607] 3/11/24 14:30 | Huedro

```text
Perfeito. Acho que o problema tem sido a gente não reconhecer as recompensas, talvez
Pra mim um exemplo disso seria no arco do barco / Dungeon da Legião, que foi difícil, então acho que esperávamos mais coisas no fim de tudo
```

#### [WA:L10644-L10644] 3/11/24 14:53 | Huedro

```text
O geral é também da Dungeon da Legião, quando os meninos não puderam voltar pra pegar a espada. Tipo, da forma que foi feito, ficou parecendo que tudo começou a desmoronar só pra impedir eles e no dia você até deixou claro que eles absolutamente morreriam. Mas se eles quisessem muito... não podia ter um jeito? Mesmo que extremamente difícil?
```

#### [WA:L10645-L10645] 3/11/24 14:55 | Huedro

```text
O particular eu diria que foi na última sessão, sobre carregar a Charlotte pro hospital imediatamente ou lutar primeiro. Acho que não ficou claro o que isso mudaria no resultado final ou se sequer mudaria ele. Teve alguma vantagem por fazer isso? Porque de fato, eu como jogador preferiria ter lutado antes. Não participar de um combate, ainda mais um plot-point absurdo desses, foi bem triste. Eu até pensei em ficar, mas eu senti que eu estaria quebrando o que o personagem desejaria
```

#### [WA:L10646-L10650] 3/11/24 14:59 | Tz Magnata

```text
Man, o desmoronamento da dungeon já estava previsto. Aquela estrutura só estava de pé por causa do poder do netherus, e inclusive tem um foreshadowing pra isso na sala que vcs enfrentam os espiritos e ela começa a desabar.

Outro ponto, eu queria que vocês tivessem mais uma interação com os membros da ordem antes de Praeglacius, e o mímico e o hitman surgem como forma de tirarem vcs de lá de baixo.

Por último eu queria separar vocês do bellegher para que a dissolução do exército revolucionário do novo sol fosse uma surpresa pra vcs e q vcs n soubessem oq o bellegher vai fazer agora.
```

#### [WA:L10651-L10652] 3/11/24 14:59 | Huedro

```text
Ainda aqui, eu acho que idealmente, esse tipo de situação não deveria acontecer. Porque o jogador que ficar fora do combate está oficialmente fora da sessão por ~30-40 minutos e as vezes pode até perder interações especiais. 
Naquele caso talvez fosse até melhor "me impedir" de fazer essa decisão, ou usar isso pra estender o combate. Tipo, o homem é mal e cruel, então ele vai perseguir X personagem pra impedir o sucesso dele, ai o combate se torna um protect the carry até o hospital. Fazendo com que todo mundo participe e ainda influencie o combate com um objetivo maneiro
```

#### [WA:L10653-L10653] 3/11/24 15:01 | Tz Magnata

```text
Porém, mesmo que não fosse planejada, eu provavelmente inventaria na hora para previnir que vcs pegassem a espada. Eu tinha acabado de colocar dois itens consideravelmente fortes na mão de vcs e não queria colocar outro
```

#### [WA:L10673-L10673] 3/11/24 15:10 | Huedro

```text
Especificamente nesse caso eu gostaria de ouvir do @⁨Paulo Oliveira⁩, porque isso é de fato um problema. Se pegamos o demônio da espada, o supros tem dois deles, mas naquele situação, era totalmente possível conseguir ela
```

#### [WA:L10698-L10702] 3/11/24 15:21 | Huedro

```text
Tá, vamo lá

Eu acho que você não vai concordar comigo, mas eu acho errado você considerar que certas coisas vão 100% acontecer em determinada situação. Falo isso porque nós players somos imprevisíveis, no nível que o Vasco poderia só ir comprar queijo no meio de uma quest super importante e isso seria perfeitamente plausível. Naquela sessão eu fui até negligente, porque a habilidade de ver o futuro da Liza é diferente da do Chronos, ela conseguiria ver tudo que acontecesse entre "agora" e tipo "5 minutos no futuro", então eu definitivamente saberia que no momento que ele pegasse o coração ele comeria ele.

Nossa reação durante os acontecimentos finais foi extremamente plausível, ele começou a comer o coração, nós instantaneamente sabiamos o que aconteceria e reagimos de acordo. Se um item desses tem um poder regenerativo que consegue trazer de volta até um cara que tá na borda da vida e da morte, mastigando ele, impedir ele de comer tudo e ter entregue isso pra Charlotte logicamente mudaria a situação. Tanto que eu esperava algum teste pra retirar o item dele ou qualquer outra coisa, porque isso MUDARIA DE FATO a situação.
```

#### [WA:L10704-L10704] 3/11/24 15:23 | Huedro

```text
Se a Charlotte vai morrer ou não, isso é uma decisão que tá além de qualquer um de nós. Isso depende tanto de você, quanto de mim, quanto da party, quanto do nosso deus absoluto d20
```

#### [WA:L10730-L10730] 3/11/24 15:29 | Huedro

```text
Mano, que fosse forçar os médicos a fazerem isso ilegalmente, que fosse ajudar a Sarah nesse processo arriscado ou qualquer outra coisa. Por mim Charles Legion pode aparecer igual Jesus e me ajudar tlg
```

#### [WA:L10739-L10739] 3/11/24 15:35 | Huedro

```text
E eu te falo, mesmo que a Charlotte morresse ali, você pode ter certeza que eu ficaria o jogo inteiro não só atrás de reviver o Chronos, mas de dar um jeito de trazer ela de volta também
```

#### [WA:L10742-L10742] 3/11/24 15:37 | Huedro

```text
O demônio da espada quebraria o jogo? Talvez. Mas se o supros *realmente* quisesse aquilo, com certeza você como o deus desse mundo teria uma ideia de como entregar aquilo pra ele e ainda manter o status quo da parada
```

#### [WA:L10763-L10763] 3/11/24 15:44 | Tz Magnata

```text
Acontece q por causa de uma situação que eu n previ vc n participou da morte do nemesis
```

#### [WA:L10764-L10765] 3/11/24 15:45 | Huedro

```text
Ai que tá, eu volto naquele ponto. Você quer que a gente odeie eles, você apresenta essas situações e espera que nossa reação seja dentro do seu esperado. Isso *não vai acontecer*. 
É possível que algum dia, nós simplesmente tomaremos a decisão de nos juntar a ordem.
```

#### [WA:L10766-L10766] 3/11/24 15:45 | Tz Magnata

```text
Mas a batalha contra o nemesis teria um peso completamente diferente pra vc se a charlotte não estivesse envolvida no meio
```

#### [WA:L10804-L10804] 3/11/24 17:24 | Maia

```text
Eu não tava, mas tiltei com o pesadelo da viagem, odeio cena em que eu tenho que te escutar falar varias coisas que acontecem com o personagem e ser inútil eu pensar em qualquer coisa na cena. Seja mudar de posição, me preparar de alguma forma ou evitar algo.
```

#### [WA:L10807-L10808] 3/11/24 17:30 | Maia

```text
é diferente de ter alguma coisa acontecendo seja aonde eu for, a sensação é que só tem alguma coisa acontecendo onde vc quer que a gente vá. 
Mesmo que vc diga que Aquiles e Ace foram para um campanha não sei aonde. Não é algo que me pareça um lugar que eu poderia ir, além do que, é bem comum a gente ser o sidkick do momento, Alguém forte com a gente vai enfrentar alguém forte deles e a gente fica com os aliados mais fracos. Nessas situações geralmente é uma missão do cara forte que a gente esta junto e nosso combate é so pra gente não ficar atoa, e o que realmente vai fazer a diferença é essa luta que aconteceu na sua cabeça e a gente vai saber o resultado dela dps que terminar a nossa
```

#### [WA:L10813-L10813] 3/12/24 08:44 | Tz Magnata

```text
Eu só removi a agência de vcs para o início da cena pq mais importante doq vcs tentarem fugir dela era vcs entenderem ela e conseguirem descobri que bixo é aquele. Por isso dei mais foco pra narração naquele momento
```

#### [WA:L10822-L10822] 3/12/24 08:50 | Tz Magnata

```text
São coisas que eu queria adiantar, parte pq a história precisa andar pra frente e parte por ansiedade de querer colocar vocês no meio de grandes eventos
```

#### [WA:L10852-L10852] 3/12/24 09:07 | Tz Magnata

```text
Se vc quiser dar um golpe de estado em dalaran
```

#### [WA:L10853-L10853] 3/12/24 09:07 | Tz Magnata

```text
Ter um relacionamento homoafetivo e virar rei de dragonfall
```

#### [WA:L10856-L10857] 3/12/24 09:21 | Maia

```text
Acho que você não está pegando o ponto chave da discussão, ele se traduz em você criar sim os desafios mas não em questão de enxergar o fim da linha. Pra vc tinha salvar ou não salvar a irmã do Choronos, e vamos ser sinceros, vc já tinha decidido decidido na hora que estávamos no porão com ele já, Pq mesmo que ele não pegue o coração, não tem como ninguém transplantar o coração. Mas no momento que o Huedro CONSEGUE pegar de volta, alguem CONSEGUE impedir ele a tempo de comer o resto e ele dar pra irmã dele, ELE não ficou full, mas você descreve uma melhora significativa. POR QUE a outra metade do coração não pode melhorar o quadro da irmã? Nem que fosse pra ter o combate sem a punição dela morrer?
Se seu objetivo era matar pra causar um impacto como vc mencionou, isso é vc definindo roteiro e sem levar em consideração que tipo de jogo seus jogadores querem ter. O impacto de aversão ao personagem pareceu bem claro na luta, ele já tinha sido construído antes, foi escalado pela frustração de termos levado ela lá atoa.
```

#### [WA:L10859-L10859] 3/12/24 09:31 | Tz Magnata

```text
Pq a situação da irmã do chronos e do nemesis eram diferentes
```

#### [WA:L10877-L10877] 3/12/24 09:34 | Tz Magnata

```text
No arco de nippon.
```

#### [WA:L10967-L10969] 3/12/24 09:52 | Tz Magnata

```text
Um personagem querido pra um membro da party fico fudido e ia morrer. 
Ele deixou claro pra mim que queria salvar esse personagem.
Na minha cabeça eu imaginei cenários onde eles salvavam o personagem e cenários onde eles não salvavam, dependendo de ações DELES. Além disso, eu me mantive aberto para que acontecessem cenarios q eu n tinha previsto. O jn chegou a pensar em uma solução q eu não tinha previsto e que eu acharia formas de exacutar caso eles perseguissem ela. Afinal, eles não são forçados a lidar com os problemas da forma q eu imaginei q eles fossem lidar, eles são livres para encontrar outras soluções desde que elas façam sentido e sejam possíveis.
```

#### [WA:L10970-L10970] 3/12/24 09:58 | Tz Magnata

```text
Porém, eles não seguiram um dos caminhos que eu imaginei no qual eles conzeguiriam salvar o npc, eles não seguiram outra ideia alternativa na qual eles salvavam o npc. Eles seguiram exatamente o caminho no qual o npc morria. Nesse caminho, eles entregavam um item que era um coração que deveria ser *transplantado* (e isso foi dito de forma clara) no peito do npc para um inimigo da party. O inimigo da party, que estava consideravelmente menos ferido do que o npc, comeu o coração e conseguiu se curar razoavelmente com ele. Um dos meninos pegou o coração todo mordido da mão do vilão e enfiou na boca do npc que precisava de um transplante.
```

#### [WA:L10978-L10978] 3/12/24 10:05 | Tz Magnata

```text
Mesmo que por algum motivo q só deus sabe pq na cabeça do maia faça sentido q comer o coração fosse curar o npc
```

#### [WA:L10992-L10992] 3/12/24 10:16 | Tz Magnata

```text
A previsao do cenario onde o inimigo da party comia o coração era: a npc aliada morre, a party luta contra o vilão. Eles insistiam em curar o npc enfiando um coração mastigado na boca dele. O huedro me pergunta se da pra correr com o npc de volta pro hospital onde ele já estava internado. Eu digo que dá, pois mesmo planejando q ele fosse morrer ali, resolvi dar mais alguns momentos de vida pra ele em funçao de ter comido o coração. O huedro pega o npc e sai correndo de volta pro hospital.
```

#### [WA:L10998-L10998] 3/12/24 10:20 | Tz Magnata

```text
Eu acredito q isso acontece pelo mesmo motivo que quando vcs tavam tomando gap na dungeon da legiao a reação foi fica puto achando q eu estava fazendo alguma coisa errada
```

#### [WA:L10999-L10999] 3/12/24 10:21 | Tz Magnata

```text
Eu acho q vcs, alguns mais que outros, nao confiam em mim como mestre e questionam todas as minhas decisões que terminem em algo que nao seja exatamente oq vcs querem
```

#### [WA:L11003-L11003] 3/12/24 10:22 | Tz Magnata

```text
E eu acredito q essa, assim como a situacao da dungeon da legião, é uma situação em q vcs estão errados
```

#### [WA:L11213-L11213] 3/12/24 11:08 | Tz Magnata

```text
Man, uma decisão bem simples como verificar a historia que um npc completo estranho está contando para vocês antes de cometer um crime a pedido dele
```

#### [WA:L11285-L11285] 3/12/24 11:34 | Tz Magnata

```text
"Tz, tudo bem agt n ter conseguido salvar a irmã do chronos, mas achei paia q o chronos n jogou mais na sessão, vc poderia ter criadoformas de ele participar"
```

#### [WA:L11292-L11299] 3/12/24 11:37 | Tz Magnata

```text
Eu só discordo que:
1: eu tenha q fazer as coisas darem certo para vocês independente doq vcs façam 

2: eu tenha retirado a agência de vcs.

3: eu seja responsável por convencer o huedro de que da tempo de participar do combate sem que ele faça algo pra conseguir esse tipo de informação.

Eu concordo que: o huedro escolhendo participar do combate ou corre com a irma dele pro inferno eu deveria achar maneiras de manter ele participativo.
```

#### [WA:L11352-L11352] 3/12/24 12:36 | Tz Magnata

```text
Era eles verificarem a historia de um npc que apareceu do nada convencendo eles a invadirem o vaticano pra roubar um item q supostamente nem deveria existir
```

#### [WA:L11356-L11362] 3/12/24 12:41 | Tz Magnata

```text
Oq eu penso sobre escolhas basicamente é, imaginar e possibilitar caminhos nos quais os players vao conseguir cumprir seus objetivos.

Imaginar caminhos nos quais os players não vão conseguir cumprir seus objetivos

Fazer com que nenhum desses dois pareça impossível ou inimaginável.

Aceitar novas escolhas feitas pelos players que n tenham sido previstas, caso elas façam sentido no mundo
```

#### [WA:L11406-L11406] 3/12/24 13:27 | Tz Magnata

```text
Se me permite um chute eu diria que isso está mais na forma como os jogadores se relacionam com o mestre nas duas campanhas doq a forma como elas são mestradas em sí
```

#### [WA:L11408-L11408] 3/12/24 13:29 | Tz Magnata

```text
Mas tp, eu acho q essa mesma situação da irmã do chronos, n teria se tornado um problema se ocorresse em uma campanha mestrada pelo masir
```

#### [WA:L11410-L11410] 3/12/24 13:30 | Tz Magnata

```text
Os players iriam naturalmente acreditar que devem ter deixado alguma oportunidade passar ou que deram mole em algum momento pq o ninito n iria simplesmente forçar eles a perderem o npc
```

#### [WA:L11507-L11507] 3/12/24 14:06 | Maia

```text
que o supros passou a parede com a espada, eu quebrei uma
```

#### [WA:L11523-L11523] 3/12/24 14:09 | Tz Magnata

```text
O da dungeon da legião era razoável
```

#### [WA:L11549-L11549] 3/12/24 14:13 | Tz Magnata

```text
Eu pedi um teste de historia do chronos para que ele determinasse a idade daquelas coisas
```

#### [WA:L11550-L11550] 3/12/24 14:14 | Tz Magnata

```text
Quando vcs encontraram os corpos destroçados no meio da dungeon da legião
```

#### [WA:L11623-L11626] 3/12/24 15:16 | Maia

```text
e. Uma redução significante na frequência de situações potencialmente letais;
     f. Um aumento na presença e participação de elementos da backstory dos personagens dos jogadores;
     g. Um aumento nas oportunidades de explorar o mundo, e a remoção do conceito de ‘nivelamento’ de regiões;
    h. Um rework da Sarah, lhe dando personalidade, ambições, e propósito, ou a remoção da Sarah como um membro da party.
```

#### [WA:L11681-L11681] 3/12/24 15:34 | Tz Magnata

```text
E eu honestamente nem levo esse rank tanto em consideração, só skylands e o pinaculo de soulce marochi que eu tenho em mente como lugares q se vcs pisarem agr vcs vao ter q se virar de cabuloso
```

#### [WA:L11690-L11690] 3/12/24 15:38 | Tz Magnata

```text
Hoje a Sarah quer vingança. O Xen matou a mãe dela, sequestou ela ainda criança,  tratou ela como um ratinho de laboratório e dps largo ela
```

#### [WA:L11852-L11862] 3/13/24 10:04 | Jn

```text
Ficha do Vasco Aatrox: 

Tinha 3 habilidades inutilizadas por não fazerem sentido com o kit que eu queria jogar

Vasco Sayajin:

Troquei essas três habilidades que não faziam sentido pra coisas que entram na build e introduzi de novo a transformação

Vasco sayajin ajustado:

Ajustei APENAS a transformação para ficar de mais fácil uso e fazer sentido com o resto do kit
```

#### [WA:L11868-L11876] 3/13/24 10:10 | Tz Magnata

```text
Vc n entendeu o problema para eu não upar vcs. O problema n é pq vcs n estão "balanceados" o problema é pq vcs não estão *estaveis*.

Eu particularmente acredito que o sistema estava razoavelmente balanceado com todos os membros da party tendo desempenho semelhante nos combates. Não era o momento mais balanceado que já tivemos mas tbm estava muito longe de ser um dos piores.

E eu tbm acredito q n é dificil de alcançar um balanceamento, basta realizar ajustes finos nas fichas de vcs.(pois nesse momento n havia nenhum ponto mt fora da curva.)

Porem independente de balanceado ou não, as fichas não são constantes. Personagens balanceados, com grande participacao e protagonismo nos combates, como o proprio suprus, constantemente passam por ajustes finos ou mudanças de skills solicitadas pelos players. E quando esse ajuste parte de um de vcs eu preciso ver ele em jogo antes de ter certeza sobre oq vai acontecer. 

Como essas mudanças acontecem frequentemente eu estou frequentemente precisando verificar se a ficha de determinado personagem não está muito fora da curva.
```

#### [WA:L11891-L11891] 3/13/24 10:13 | Maia

```text
tirando o supros e o gunn
```

#### [WA:L12216-L12238] 3/13/24 11:43 | Tz Magnata

```text
Ficha classe s
Hp: 320
Mana: 7.5k
ACx:20
ACy:17

Speed 45

Skill1 70mana --teletransporta-se para um local em até 100 ft, se houver um inimigo próximo pode realizar um ataque. Se tiver se movido para as costas de um inimigo que anteriormente o estava encarando o inimigo é considerado flanqueado.

Skill2 250/500 mana-- efeito= todos os inimigos em uma area circular que varia um raio de 500 para 1km ficam blind. Essa área não afeta 50ft acima da superfície. A movimentação do personagem é dobrada e não gera sons ou ataques de oportunidade.

Skill3 200mana-- inimigos em um meio círculo de raio 25ft fazem um st Dex dc21. Os que falharem recebem 6d6 da dano , os que passarem recebem metade. O personagem se cura em metade do dano total causado.

Skill4 300 mana 1vez por longrest: avança 60ft. Todos em uma area de um cone formado de forma crescente entre o ponto de chegada e o ponto de partida devem fazer um st cons dc 17 ou sofrer 5d8 dano de gelo, o terreno se torna terreno difícil. Caso haja um inimigo na frente do personagem quando ele terminar o avanço, o personagem pode fazer um ataque roll contra ele com +3 bonus para acerto causando 7d8 de dano.  O ataque tem dano duplicado contra estruturas.

Skill5 150 mana por turno: o personagem se torna oniciente em uma área circular de até 500m raio. Ganha vantagem em todos os savings throws. Imunidade a charmed frightened flatfooted blind deaf. Ataques contra ele possuem desvantagem. 

Skill6 50mana: anula o dano recebido em um ataque.

Skill7 200 mana recarregar6: anula o dano recebido em um turno.

Skill8 300 mana turno: todos inimigos num raio de 50ft devem fazer um st força dc 24 ou serem empurrados para fora da área. Todo personagem que comece o turno na área deve repetir o save. Todo personagem dentro da area recebe 3d8 dano necrotico por turno. Todo projétil atirado contra o personagem é bloqueado no momento em que entra na área. Qualquer personagem presente na area no momento de ativaçao deve fazer um st de cha dc 20 ou estará frightened.  Todo o dano causado durante o uso dessa habilidade é convertido em vida.
```

#### [WA:L12340-L12340] 3/13/24 12:04 | Maia

```text
se o Gunn tivesse 1800 de mana agr nesse lv
```

#### [WA:L12542-L12557] 3/13/24 17:41 | Maia

```text
Fighter

HP: 216
Dano: (8~29) por ataque (ele ataca 4 vezes por turno)
Recursos: 
Atacar 8 vezes em 1 turno (2 usos até uma short rest)
Recuperar 1d10 + 20 hp (Uma vez até short)
3x pode repetir save
Manobras: (pode usar 6x e vc sabe 9 manobras)
DC das manobras = 19
ataca com vantagem
desarma inimigo
fear
derruba inimigo prone
ataque de oportunidade
exemplos....
```

#### [WA:L12673-L12673] 3/14/24 10:40 | Maia

```text
dito isso, o spoiler que posso te dar é, já que mana e tipo de chaos não existe
```

#### [WA:L12761-L12766] 3/15/24 11:01 | Maia

```text
e ai amigo, o sistema é isso.
Sem mana então não tem mais uma poção com um liquido estranho.
Sem tipos de chaos, já que não existe isso tb. 

O restante, calculo de AC, DC, HP, Spell Slot, Action economy, Status de buff e debuff, proficiências, armaduras, armas, skills, etc....
Tudo isso é D&D 5e.
```

#### [WA:L12808-L12810] 3/15/24 11:13 | Tz Magnata

```text
*as músicas temas dos seus personagens vão tocar sempre que eles fizerem algo extraordinário dentro da obra, seja em exploraçao, combate ou roleplay.*

Ex: quando billy sai junto com os rangers em nippon e se infiltra na base inimiga; quando vasco ficou trocando atk critico com o zumbi no coliseu e saiu deitando todo mundo e assim por diante
```

#### [WA:L12813-L12813] 3/15/24 12:25 | Gabriel Violante

```text
Billy tomou gap pro new supros
```

#### [WA:L12842-L12888] 3/15/24 12:33 | Maia

```text
HP: 67
AC: 17

str 18
dex 14
com 18
int 8
wis 12
cha 8

Lv1:
Unarmed attack (One, Two):
Meu soco rápido pode acertar no mesmo time, causo 2d6 + str de dano unarmed.

Fighting Style (Pugilista):
sempre que eu rolar 1 ou 2 no meu dano de ataque, posso rerolar o dado de dano

Lv2:
Combination:
ganho mais uma ação

Unarmed defence (Guarda alta)
minha Ac sem armadura é minha Dex + Con

Usar o quadril:
O balanço do corpo e a distribuição de peso nas pernas é a chave do golpe, adiciona meu mod de Con no dano 

Lv3:
Manobras de Boxe: (4d8) (DC: 16)

Finta. 
You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature this turn. If that attack hits, add the superiority die to the attack's damage roll.

Contra golpe. 
When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.

Parry. 
When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.

Lv4:
ASI = +2 con

Lv5:
Extra attack

Lv6:
ASI = +2 str
```

#### [WA:L12950-L12950] 3/15/24 13:29 | Gabriel Violante

```text
Falta a ficha do vasco e do gunn ainda
```

#### [WA:L12954-L12956] 3/15/24 13:31 | Tz Magnata

```text
Oq eu acho q deveria acontecer tendo em vista a diferença entre vcs no mundo e na lore: gap grande, sensação de q o combate poderia acontecer 1milhao de vezes sem q em nenhuma dela vcs ganhassem.

Oq eu acho q vai acontecer: gap pequeno. Vcs poderiam ganhar com alguma sorte nos dados ou uma boa estratégia
```

#### [WA:L13353-L13353] 3/15/24 16:41 | Tz Magnata

```text
Vcs chegaram chei de item de dragao
```

#### [WA:L13413-L13413] 3/15/24 23:22 | Gabriel Violante

```text
tentamo fzr o pesadelo da guerra
```

#### [WA:L13414-L13414] 3/15/24 23:23 | Gabriel Violante

```text
mas o bglh nao entende q tem q por o dragao e tirar a guarda da katana
```

#### [WA:L13626-L13626] 3/20/24 20:11 | Tz Magnata

```text
Decidam se querem continuar em frostearth, se querem voltar pra algum lugar que já foram ou se querem explorar um lugar novo
```

#### [WA:L13637-L13637] 3/20/24 20:23 | Gabriel Violante

```text
O supros quer fazer missões que envolva confronto direto com a ordem
```

#### [WA:L13656-L13670] 3/20/24 21:03 | Tz Magnata

```text
Maior continente de todos =Kastia

Continente com os anéis =Soulce Marochi

Continente congelado no canto de baixo= Frostearth

Continente abaixo de Kastia= Hueco

Parte com água entre Kastia e Hueco= Canal da serpente

Ilha no meio do canal da serpente= Dragulf

Continente no meio com um bico de Falcão= Alaria

Ilhas embaixo de alaria= Arquipélago de Helhein.
```

#### [WA:L13675-L13683] 3/20/24 21:07 | Tz Magnata

```text
Rosa= hakkumai
Verde claro= Dalaran
Vermelho=dragonfall
Cinza= Anak Halow
Roxo=forerunner
Azul=seagate
Amarelo=nippon
Branco= três reinos do norte
Preto=birmgham
```

#### [WA:L13740-L13744] 3/21/24 09:29 | Maia

```text
No inicio da campanha com o Xen e o mano das facas
Dps acho que foi o Xen dnv que a gente só conversou 
Mimico e o mano da espada do Gabe
A gente so cruzou com o vladimir e o preguiça voltando da cidade lá
Dps disso só lembro dos eventos mais atuais em que a gente viu basicamente todos
```

#### [WA:L13870-L13870] 3/22/24 13:23 | Gabriel Violante

```text
Ent existe o pesadelo da ordem
```

#### [WA:L13896-L13896] 3/22/24 14:01 | Tz Magnata

```text
É man, eu acho q a ordem em sí nao causa medo suficiente para que tenha um pesadelo da ordem
```

#### [WA:L13900-L13900] 3/22/24 14:02 | Tz Magnata

```text
Um dia va nascer um pesadelo da ordem
```

#### [WA:L13941-L13941] 3/22/24 15:00 | Tz Magnata

```text
N existe o pesadelo de morrer pela espada
```

#### [WA:L13942-L13942] 3/22/24 15:00 | Tz Magnata

```text
Existe o pesadelo da morte
```

#### [WA:L13945-L13945] 3/22/24 15:00 | Tz Magnata

```text
O pesadelo da espada existe
```

#### [WA:L13954-L13954] 3/22/24 15:01 | Tz Magnata

```text
O pesadelo da ordem não existe
```

#### [WA:L13999-L14008] 3/25/24 10:35 | Gabriel Violante

```text
certo, dito isso @⁨Tz Magnata⁩ 
por recomendação do huedro, RECEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
[URL externo existente apenas no arquivo original]

Está Wiki contém o seguinte Conteúdo:
-Explicação do Chaos do personagem.
-Lore do Chaos do personagem. ->(foda)
-Lore do Personagem com pequenos ajustes.
-Banco de Imagens do personagem.
-Soundtracks Theme do personagem.
```

#### [WA:L14189-L14191] 3/27/24 17:38 | Huedro

```text
Sobre Chronos:

A party iria morrer naquele combate em todas as timelines, começando pela morte do Chronos. Porque ele morreu, os "selos" pararam de existir e ele conseguiu roubar um pouco de tempo de outros universos que estavam prestes a acabar e ele usou isso pra seguir lutando e finalizar o combate, assim criando uma continuação não existente. O "tempo" detectou essa interferência não permitida e "eliminou" o causador, no caso o Chronos e é por isso que ele desapareceu.
```

#### [WA:L14222-L14222] 3/28/24 11:00 | Gabriel Violante

```text
Inclusive meu mano, se você tiver tempo lê o chaos e a lore do meu boneco e fã o fedbeckas
```

#### [WA:L14445-L14445] 4/9/24 10:14 | Tz Magnata

```text
Mostram como líderes religiosos da época ajudavam os dragões à manterem controle sobre os humanos, sendo alguns dos documentos cartas escritas por padres que delatavam quem eram os humanos com chaos em alguma vila, e quem os escondia
```

#### [WA:L14452-L14452] 4/9/24 12:47 | Gabriel Violante

```text
Dito isso leia a lore do chaos do supros
```

#### [WA:L14658-L14687] 5/2/24 11:47 | Tz Magnata

```text
*ALCHEMIST*
lv1
+2 para testes de medicina, nature e para fazer poções.
Capaz de fazer poções simples(poçao de vida menor/coquetel molotov/pequenos ácidos) dc12

Lvl2
+3 para testes.
Capaz de fazer poções simples dc 12
Capaz de fazer poções médias(poções de cura média/ pequenos venenos/exaustão) dc 14

Lv3
+4 para testes.
Resistência contra venenos.
Sucesso automático em poções simples
Capaz de fazer poções medias dc 14.
Capaz de fazer poções complexas(cura maior/ resistências/respirar na água/ácidos fortes/cura de doenças específicas) dc 16

Lv4
+5 em testes
Capaz de fazer poções médias.
Capaz de fazer poções complexas.
Capaz de fazer poções especiais (poções de prevenção à efeitos/ venenos fortes/transparência/movimento/ poções de cura superiores) dc18

Lv5
+6 em testes pars fazer poções.
Imunidade a venenos não mágicos ou venenos mágicos muito mais fracos que você.
Suceso automático em poções médias. 
Dc de poções complexas =14
Dc de poções especiais =17
Capaz de fazer poções lendárias( cura absoluta/ invisibilidade/super força/mudança de tamanho/ poções que deem habilidades) dc20
```

#### [WA:L14688-L14712] 5/2/24 15:43 | Tz Magnata

```text
*Ferreiro*

Lv1

+2para 2 ability checks da sua escolha
+2 para craftar armas e armaduras
Capaz de craftar armas e armaduras comuns DC 14

Lv2
+3para testes 
Capaz de craftar armas e armaduras incomuns. Dc 16

Lv3
+4 para testes
Sucesso automático ao craftar armaduras comuns
Capaz de craftar armas e armaduras raras dc 18

Lv4
+5 para testes
dc de todos os crafts cai em 2

Lv5
+6 para craft
Sucesso automatico em armas e armaduras incomuns
Capaz de craftar armas e armaduras lendárias dc 20
```

#### [WA:L15486-L15486] 5/24/24 13:07 | Gabriel Violante

```text
@⁨Tz Magnata⁩ mano le a lore do meu chaos antes da sessao ai xereca
```

#### [WA:L15559-L15559] 5/24/24 15:14 | Gabriel Violante

```text
acabar desenrrolando até um arco (Consequências do revive do Chronos)
```

#### [WA:L16375-L16380] 8/10/24 13:12 | Gabriel Violante

```text
Laboratório
Julgamento
Coliseu
Onis e continente filler
Dragonfall Arthur aventure-se
...
```

#### [WA:L16383-L16403] 8/10/24 13:25 | Tz Magnata

```text
Laboratório
Reunião do conselho
Coliseu
Dragão pequeno
Onis em Nowa
Guerra contra os trolls de Nyashira.
Coroação Rei Arthur o Último
Batalha contra Musashi.
Onis em Nippon.
Fuga do gashadokuro.
Demonios e Femto.
Protejam Moesley.
Piratas e o exército revolucionário.
O extermínio de Praeglacius.
Lissandra dragon's pain.
A morte de chronos.
Invasão ao vaticano.
Batalha contra nemesis.
Batalha contra Kimimaru.
O palhaço e a menina.
Os apóstolos de Femto.
```

#### [WA:L16763-L16763] 8/31/24 14:26 | Gabriel Violante

```text
o Thanatos e o Shein ficaram do caralho ja
```

#### [WA:L16924-L16924] 9/2/24 14:34 | Gabriel Violante

```text
O arco de revive do chronos começa na vida real
```

#### [WA:L17580-L17603] 9/6/24 11:59 | Tz Magnata

```text
Tzpg Shopping:
(Preços são dinamicos)

Minor healing potion 2d4+2 =50g

Coquetel molotov 2d4 de dano em 4 quadrados = 50g

Corda= 1g por Metro

Healing potion 4d4 +4 = 100g

Bigger healing potion 4d6 +6 = 150g

Poção contra venenos simples = 100g

Comida e bebida para 1 dia = 0,5g

Estadia por 1 dia = 0,5g

Beber em tavernas = 5g

Greater healing potion 6d6 + 10 = 200g

Aprender profissões = 150g e 1 mês. <This message was edited>
```

#### [WA:L17906-L17931] 9/7/24 16:13 | Tz Magnata

```text
Tzpg Shopping:
(Preços são dinamicos)

Minor healing potion 2d4+2 =50g

Coquetel molotov 2d4 de dano em 4 quadrados = 50g

Corda= 1g por Metro

Healing potion 4d4 +4 = 100g

Bigger healing potion 4d6 +6 = 150g

Poção contra venenos simples = 100g

Comida e bebida para 1 dia = 0,5g

Estadia por 1 dia = 0,5g

Beber em tavernas = 5g

Greater healing potion 6d6 + 10 = 200g

Aprender profissões = 150g e 1 mês.

Superior healing potion 10d6 + 15 = 500g
```

#### [WA:L17942-L17945] 9/7/24 21:09 | Huedro

```text
Guia - Liza
Scout - Supros
Hunter - Gun / Vasco
Look out - Billy / Sarah
```

#### [WA:L18025-L18025] 9/17/24 21:01 | Maia

```text
O chaos do Billy vai mudar dnv
```

#### [WA:L18034-L18034] 9/17/24 21:53 | João

```text
O gunn vai ganhar uma habilidade que td vez q o caos do Billy mudar ele ganhar +1 em atack rolls
```


### Arquivo de 2025

#### [WA:L20757-L20759] 4/18/25 20:10 | João

```text
Juramento de valores de fundação da Legião.

Defender os mais fracos, controlar os mais fortes e sempre manter a honra, pois nesse mundo injusto nós só podemos resistir como unidade.
```

#### [WA:L20760-L20771] 4/18/25 20:10 | João

```text
Thomas Legion (? anos)
Netherus o pai da morte(? anos)
Golias o gigante(234 anos)
Christopher Canan (26 anos)
Instard de Sabre (31 anos)
Calabine hawkeye (19 anos)
Cosmo o abençoado(434 anos)
Ashley a Valíria(74 anos)
Khan o imperador do fogo(30 anos)
Kaizer o Braço de fogo
Katrina Valerion (23anos 
Kaname Tosen o anjo da morte(16 anos)
```

#### [WA:L20777-L20788] 4/20/25 15:37 | Tz Magnata

```text
Fala tropa, troca uma ideia com vcs.

No sabado antes de vazar ja cheguei a comentar com o Huedro e o Gab mas queria falar com tds e qq pega:

Vcs falaram pra mim um tempo atras q nao concordavam com a balanceamento sendo com base nas minhas decisões disseram que iriam começar a fazer fichas baseadas em dnd e fiscalizar uns aos outros sobre balanceamento das fichas de lá em diante. Na época disse que nao achava q isso fosse funcionar mas no sabado acho que tivemos uma confirmaçao tp.

Eu entendo voces cometerem erros de balsnceamento como por exemplo colocar mts ou poucos dados de dano em uma habilidade. Mas vcs estao cometendo erros simples como no calculo dos pontos de vida, erros no point buy, erros na quantidade de itens consumíveis que vcs possuem ou até mesmo nos modificadores dos dados que vocês tem que rolar ou quantos usos de determinadas habilidades vocês tem.

Na sessão de sabado, o vasco possuia 2 passivas de dnd que reduzem danos pela metade, além de uma reaçao de usos infinitos que reduz o dano de 8 a 18. Uma dessas passivas é dada ao barbaro lvl4 e outra ao monge lvl7, para ter essas fuas passivas em 1 persinagem vcs precisariam estar no minimo lvl 11 sem comentar que multiclassing costuma ser algo conversado com o mestre justamente para evitar esse tipo de coisa. Além disso, mesmo tendo habilidades de um monge lvl7, vasco *parecia* usar 1d12 de vida como barbaro, mas eu sinceramente nao sei oq ele fez. Lembro q estava considerando ter 89 pontos de vida nem com 1d12 de hit dice e +3 de cons ele conseguiria chegar perto desse numero de pts de vida, nao faco ideia de qual dado ele considerou ou qual calculo ele fez, e nem vcs sabem.
Alem de uma quantidade de pontos de vida MUITO alterada, habilidades puxadas aleatoriamente de classes diferentes de dnd ele possuia vantagem em tds os saving throws que rolou no combate (força, cons e destreza) um bonus de +9 pro sucesso de ataque alem de um multi attack de de 5 por turno todos os turnos infinitamente. Isso sem mencionar que na ficha do vasco todas as poçoes que foram usadas continuam lá, e imagino que tbm estejam nas de varios de vcs e na proxima sessao, obviamente nao vao se lembrar que ja usaram.

Enfim, uma habilidade que deveria causar 70 de dano, era reduzida para 35, depois para 18, depois era reduzida mais 1d10+7 e no fim nao dava dano algum, sendo que caso o calculo de pontos de vida estivesse correto, ela deveria dar ik. Sla, peguei pra dar uma olhada mais perto na ficha hj e honestamente nao da pra entender como isso foi pra mesa
```

#### [WA:L20799-L20799] 4/20/25 15:48 | Tz Magnata

```text
Ninguem nem percebe e eu ja assuminuma postura de aceitar, ate as potions de vcs q eu comecei a menternum mapa de cabeça eu tive que aceitar vcs usando varias vzs a mesma potion
```

#### [WA:L20839-L20839] 4/20/25 18:39 | Gabriel Violante

```text
Mano, realmente a única skill que não é coerente com o meu chaos é o super supros
```

#### [WA:L20854-L20854] 4/20/25 19:02 | Tz Magnata

```text
A orihime, o poder dela é negar/rejeitar coisas. Isso da origem a algumas das habilidades de cura que ela tem na ficha e o poder dela de negar algumas açoes de vcs
```

#### [WA:L20857-L20862] 4/20/25 19:06 | Tz Magnata

```text
Bradley - sete pecados
Tosen - fases da lua
Persefone - caçadora de demonios/meio demonio
Ace - fogo
Xen - ilusões
Ragnus - raio
```

#### [WA:L20872-L20872] 4/20/25 19:11 | Tz Magnata

```text
Acho q o processo de criaçao de personagem meu passa por uma "power fantasy" de tp "eu acho q determinado poder é interessante e legal, agora oq a eu posso fazer com ele"
```

#### [WA:L20886-L20890] 4/20/25 19:32 | Tz Magnata

```text
E isso muitas vezes vai passar por 
1: quantas vzs vc consegue fazer isso
2: o quão desafiador vai ser pra você usar/controlar o poder
3: os dados de dano.
4:o alcance.
```

#### [WA:L20920-L20920] 4/20/25 19:46 | Tz Magnata

```text
Ent por exemplo, o chaos do vasco é ser fisicamente superior e por isso ele quase nao sofre danos fisicos
```

#### [WA:L20982-L20983] 4/22/25 14:04 | Tz Magnata

```text
Exemplo: sarah é proficiente em perception, medicine e controle.
Como ela é uma alquemista de segundo nivel, ela tem +3 para medicina e nature
```

#### [WA:L21065-L21065] 4/24/25 23:28 | Gabriel Violante

```text
peço que opinem nas duas nova habilidades: "Kirin" e "ThunderStep Waltz", também reformulei o super supros "Godspeed Supros"
```

#### [WA:L21099-L21099] 4/25/25 14:59 | Huedro

```text
Ei amigos, e falando nisso. Foi decidido como a história vai continuar? Se o evento Vasco vs Orihime foi canon ou não
```

#### [WA:L21290-L21299] 4/29/25 17:40 | Maia

```text
Temos a Sara com 11 skill
3 passivas
4 action
2 Bônus action 
2 reaction

Sem contar passivas e uma skill que é o hit básico dela.
Somando tudo ela tem um total de 17 usos caso ela gaste absolutamente todos os recursos dela.

Isso são números que me dão um norte pro que pode ser uma média do meu nível?
```

#### [WA:L21318-L21324] 4/29/25 17:54 | Tz Magnata

```text
Objetivos:

Mais facil track de recursos e habilidades, atualizados direto na fichs impressa.

Menos tempo perdido procurando skills ou abrindo a ficha durante o combate

Menos uso do celular de forma geral durante o combate
```

#### [WA:L21409-L21423] 4/30/25 16:35 | Huedro

```text
Minha avaliação sobre o Gigante da Colina é:

Pros
- Eu acho que tá sólido. Muito bom em combate, ganha dano e resistências a medida que transforma.
- HP alto
- Bom dano 👍 
- Bate 3x no Vasc1 e 4x no Vasc2
- Agarra inimigos e ganha vantagem em ataques 

Cons
- Pouca flexibilidade de ações, mas acho que isso é bom pro personagem. Equilibra ele.
- Stats mentais frágeis. Novamente, balance.

Sugestão de mudança
Ele TER que virar Vasc1 pra ir pro Vasc2 faz sentido mas é ruim... Tipo, ele tem 3 usos de transformação por causa disso e no TZPG isso tende a ser pouco. Eu acho que poderiamos permitir o Vascadyin 2 sem entrar no 1 com o teste DC18 e se ele estiver no Vascadyin 1 ele precisa de um DC14 de controle.
```

#### [WA:L21603-L21603] 5/1/25 16:12 | Tz Magnata

```text
E no meio disso o vasco acabou com o combate
```

#### [WA:L21637-L21637] 5/1/25 16:23 | Gabriel Violante

```text
mano, mas vc tem que considerar que o chronos base é muito mais fraco do que o super supros, e o super vasco, por exemplo
```

#### [WA:L21653-L21653] 5/1/25 16:25 | Gabriel Violante

```text
considerando q ele tem 40 de hp e um assasino, é até sólido não? Seria problemático se o vasco com 90 de hp com redução de dano ter isso de AC n?
```

#### [WA:L21659-L21659] 5/1/25 16:26 | Tz Magnata

```text
Eu nao dei 40 de dano no vasco n
```

#### [WA:L21722-L21722] 5/1/25 16:45 | Tz Magnata

```text
E isos aqui nao faz sentido carai. Um assassino é um boneco que da dano e é fragil. O dele tem 1 skill de dano e nao é fragil
```

#### [WA:L21735-L21738] 5/1/25 16:55 | Huedro

```text
Sobre eu não ter caído nas últimas sessões, você ficou maluco.
Eu cai 2 vezes sessão passada e usei 2 Bigger Healings pra me manter em pé. Sem contar o uso do item que regenera 10 HP.
Na viagem eu não lembro, honestamente.
No palácio eu cai múltiplas vezes também, porque eu só conseguia halfar 1 ataque e ela me dava 2-3. TANTO QUE EU RODEI UM DEATH SAVING THROW e eu já tinha um fail, então se eu tivesse falhado eu ia morrer. Isso aconteceu nessa bossfight.
```

#### [WA:L21739-L21739] 5/1/25 16:57 | Huedro

```text
De fato eu posso reduzir 1/4 de dano. UMA vez por turno e obrigatoriamente TEM que ser num teste de dex. E depois de usar isso, se o inimigo continuar me focando, não tem nada que eu possa fazer, o dano entra full.
```

#### [WA:L21751-L21757] 5/1/25 17:04 | Huedro

```text
Tudo que tá escrito tá diretamente relacionado ao poder do meu personagem. Eu não sou um "assassino", eu sou um homem que manipula o tempo e usa uma adaga como arma. Eu sou mais rápido que a pessoa média e junto com isso eu controlo o flow do tempo. É por isso que eu tenho uma AC mais alta que a média e por isso que em testes de destreza eu sou um monstro. Que aliás, adiciona minha INT, que eu gastei 2 ASIs pra aumentar. 

Dex é meu ponto forte, em compensação eu tenho:
- -1 em força
- 0 em constituição
- 2 em wisdom
- -1 em carisma
```

#### [WA:L21787-L21790] 5/1/25 17:33 | Huedro

```text
Boto fé. Então é aqui que nós temos que atacar. Atualmente nossa filosofia de design difere COMPLETAMENTE
Porque enquanto eu, lucas e moya tentamos "adaptar" d&d por assim dizer, você espera algo mais LoL. Até por isso eu acho teve a questão de usar mana e agora você pensa na quantidade de usos que uma skill pode ter. 

Até por isso eu acho que o zoião tem mais facilidade, já que ele não conhece D&D tanto, então ele pensa diferente da gente
```

#### [WA:L21798-L21799] 5/1/25 17:43 | Huedro

```text
Habilidade com uso infinito, não encaixa. Porque não faz parte do design. 
Existem exceções, claro, mas ai isso tem que ser discutido com o mestre. Porque no fim do dia, o mestre é o único que tem noção de como os inimigos são
```

#### [WA:L21801-L21801] 5/1/25 17:46 | Huedro

```text
ACs altas ou baixas também dependem do personagem. Do porque ele é mais difícil ou fácil de acertar. E AC também é só uma das defesas do jogo, saving throws também são defesa no caso do d&d. É por isso que ao meu ver, o Chronos não era um problema, porque eu tenho AC alta e DEX alta, mas em qualquer outro teste (tirando INT), eu mamo de acordo
```

#### [WA:L21943-L21943] 6/1/25 23:49 | Tz Magnata

```text
Reparem q eu disse bem estabelecido. Pq ele existe, só n tenho certeza de se está suficientemente claro pra vcs, pq por motivos de plot evito falar muito sobre o chaos, mas isso n é relacionado ao plot diretamente
```

#### [WA:L21944-L21944] 6/1/25 23:50 | Tz Magnata

```text
Tp, os poderes dos seus personagens são conceitos, e não as palavras e numeros nas suas fichas. As fichas são apenas ferramentas para vocês explorarem esses conceitos e para que haja uma progressão doq vcs são ou n capazes de fzr
```

#### [WA:L21945-L21945] 6/1/25 23:51 | Tz Magnata

```text
Tendo isso em mente. Oq aconteceria se por exemplo a Sarah enfrentasse um cara como o don quixote que controla sombras
```

#### [WA:L22482-L22485] 7/18/25 13:52 | Tz Magnata

```text
@⁨Huedro⁩ 
1) na primeira action vc cita que o efeito não escala com multi attack. Ok, porém não há nenhum multiattack na sua ficha. Só quero deixar claro que chronos ataca 1 vez por turno e se errar acabou.
2) ainda segue com uma desproporção entre passivas/actions/bonus actions. porém não é um problema muito grande pq n considero a maior parte das passivas preocupantes, apenas vai tirar sua flexibilidade em combate.
3) passiva do sotoru gojo. 5+ de bonus para AC é um problema levando em conta que vocês estão lvl7 e suas habilidades deveriam ser escalonáveis(se vc tem+5lvl7 serão +?lvl20). *Porém existe um holdback na habilidade que é o fato de ela ser enfraquecida conforme é utilizada, poderiamos usar esse aspecto para fortalecer a habilidade no futuro ao inves de só aumentar números. Dito isso, acho que esse holdback não é suficiente, e da forma como está, eu nunca irei tirar essa sua habilidade pois não vale a pena bater em vc. Sugiro que modifique o texto para que ao inves da habilidade ser regenerada todo turno, vc ter de gastar 1 bonus action para isso.* Dessa forma criamos mais opções de tomadas de decisão pra você no combate (qual bonus action uso? vale a pena tentar o ataque sem recarregar o escudo? Vale a pena tentar o ataque sem tem o disingage?)
```

#### [WA:L22511-L22515] 7/18/25 14:15 | Huedro

```text
1) Isso, o Energy Charged Attack é um spell attack, ele não escalaria mesmo se eu tivesse multiattack, eu escrevi pra deixar claro. Mas o Chronos não tem multiattack, de qualquer forma.

2) Sim, ainda tem bastante passiva mas eu flexibilizei muita coisa. Ele tem mais opções de decisão atualmente do que a última ficha. São 4 passivas, desconsiderando ASI e o upgrade da Time's Chosen. 

3) Tem o scaling dela no documento docs. Eu gosto dessa habilidade então eu decidi manter ela, a ideia dela agora é que ela seria uma defesa que vai derretendo quanto mais o Chronos é focado, então se múltiplos inimigos focarem ele ou se um Boss gastar tudo nele, ele vai ficando consideravelmente mais fácil de ser atingido. O escalonamento é um teste ainda, mas a ideia era aumentar a quantidade de vezes que ele precisaria ser focado pra ter a defesa derrubada. *Mas! Tá suave, vou colocar a recarga por bonus action por enquanto e a gente vê como que fica.*
```

#### [WA:L22516-L22516] 7/18/25 14:17 | Huedro

```text
Eu acho que valeria a pena bater em mim porque fazendo isso a minha defesa cairia pelo turno, então se eu for hard focado, eu vou cair pra 16 de AC e +6 de dex save. Dai pra frente é fácil me acertar. Vai exigir mais do que bater na Sarah, mas é o Go To pra enfrentar o Chronos. Hard focar
```

#### [WA:L22519-L22520] 7/18/25 14:50 | Tz Magnata

```text
@⁨Jn⁩ 
1) cálculo de vida está errado. O hp bonus que você colocou é de 24. Porém a única fonte de  vida bonus na sua ficha é uma passiva que aumenta +2hp por nível. Como você está nível 7, esse bonus deveria ser de 14, e seu hp max é 74 ao invés de 84
```

#### [WA:L22522-L22522] 7/18/25 14:51 | Tz Magnata

```text
nao vale mt a pena gastar as poucas oportunidades de causar dano q 1 inimigo forte tem <This message was edited>
```

#### [WA:L22539-L22540] 7/18/25 16:09 | Tz Magnata

```text
@⁨Gabriel Violante⁩ 
1) a dc dos seus saves n é 17. DC dos saves = 10+proficiencia(3)+modificador do spell casting. Seu spell casting é 1 dos 3 atributos de mente. o seu mais alto tem, modificador 2.
```

#### [WA:L22667-L22667] 7/19/25 14:32 | Tz Magnata

```text
La ta o gigante da colina e uma amiga de infancia do Chronos, Valery Vongola, que foi dada como morta por fuhrer 20 Nos atras
```

#### [WA:L23545-L23545] 9/25/25 17:16 | Gabriel Violante

```text
o caos do supros agora
```

#### [WA:L23586-L23586] 9/26/25 13:09 | Tz Magnata

```text
Os caras próximos de vcs, sabem que vcs são acima da média. Não é normal um rank D ser tão relacionado com ranks A ou S como vcs são
```

#### [WA:L23605-L23605] 9/26/25 13:47 | Gabriel Violante

```text
não tem um rank C que sole o supros no x1.
```

#### [WA:L23673-L23675] 9/26/25 14:32 | Huedro

```text
Não sei... a ideia original veio disso aqui. Dá pra até ler a maldade.

"Uma skill pro Chronos que faz uma habilidade do inimigo ter delay pro próximo turno. Ou pra depois de uma ação do Chronos, ou seja, o escudo da Orihime só ia ativar depois dela já ter tomado o hit"
```

#### [WA:L23682-L23687] 9/26/25 14:45 | Tz Magnata

```text
Exemplo:
vilao 23 iniciativa
CHronos 22
supros 20
billy 17
vasco 13
```

#### [WA:L23690-L23691] 9/26/25 14:47 | Tz Magnata

```text
Nesse caso, vc precisaria de um 14 para jogar ele para baixo de vc, ou de um 13 se acreditar que sua dex é maior que a dele. mas se vc quiser jogar ele pra baixo do supros a dc vai ser 16
pra vaixo do vasco a dc é 23
```

#### [WA:L23693-L23693] 9/26/25 14:50 | Tz Magnata

```text
N sei se vai querer seguir com a skill assim @⁨Huedro⁩ mas eu gradei. Por mim poderiamos criar ela com 1 uso por long e uma outra skill mais fraco com mais usos talvez
```

#### [WA:L23701-L23711] 9/26/25 16:12 | Huedro

```text
Time's Domain / Chronosphere - ACTION - 1 USO - LONG REST
Chronos espalha seu caos na área ao seu redor, a colocando sobre seu controle. Durante a duração dessa habilidade, você é capaz de negar o acontecimento de UM ÚNICO 'evento' dentro dessa área.

Alguns exemplos de uso dessa habilidade são:
- Negar uma AÇÃO ou REAÇÃO inimiga.
- Negar TEMPORARIAMENTE algum efeito de cenário como 'Pedras Desmoronando', 'Queda Livre' ou 'Chuvas de Flecha'. 
- Negar UM ÚNICO efeito de status. Ex: 'Grappled', 'Barreira Orihime', 'Preso no Inferno' ou algo assim.
- Negar UMA ÚNICA instância de dano completamente, em si ou outro alvo dentro da área. 
 
A habilidade termina imediatamente após uso. 
Um inimigo pode contestar a negação de uma habilidade passando em um SAVING THROW de INT (DC16). Se passar, a habilidade ocorre normalmente mas o domínio de Chronos se mantém. Caso ele falhe, ele perde sua AÇÃO ou REAÇÃO naquele turno, mantém seu uso da habilidade e o domínio de Chronos se encerra.
```

#### [WA:L23716-L23716] 9/26/25 16:47 | Tz Magnata

```text
Entendo que o Huedro pode negar qualquer coisa dentro dessa área a qual ele tenha conhecimento. Ele não pode tentar negar algo que ele não sabe que está acontecendo. As ilusões do Xen são completamente indistinguíveis da realidade. Ele não conseguiria saber se a ilusão esta ou não acontecendo, nem quais partes do que ele percebe são ilusões
```

#### [WA:L23744-L23744] 9/26/25 17:29 | Tz Magnata

```text
O mundo todo ta tentando pegar ele e não consegue pq o poder dele é roubadissimo.
```

#### [WA:L23745-L23745] 9/26/25 17:34 | Tz Magnata

```text
Tosen que é reconhecido como o mais forte do mundo hoje, foi HUMILHADO em x1 contra o xen
```

#### [WA:L23750-L23755] 9/26/25 20:11 | Huedro

```text
A outra skill vai ser algo de dano/bleeding/anti-heal

> DOT ANTI-HEAL - ACTION - 3 usos? - LONG REST 
> Opções de nome: Fractured Self? Fractured soul? Sever Fate? Shatter Self?
> Chronos brevemente abre a 4ª dimensão e fratura futuros disponíveis para seu inimigo, enfraquecendo a existência dele. Escolha um alvo para fazer um saving throw DC16 de Wisdom. Em uma falha, o inimigo recebe imediatamente 4d6 + INT e sangra 1d8 + INT por 1d4 turnos, além disso todo healing recebido nesse tempo é cortado pela metade. 
> (Explicação flavor: o inimigo toma DoT e Bleed porque a existência dele foi temporariamente fraturada, se esvaindo pelas timelines quebradas.)
```

#### [WA:L23757-L23760] 9/26/25 21:20 | Gabriel Violante

```text
Como uma Ação Bônus, Supros cria um clone instável feito de pura eletricidade que dura até o fim do combate. • Sempre que Supros for alvo de um ataque, o atacante deve rolar 1d4. Com resultado 1-2, o ataque é redirecionado para a miragem. • Um inimigo corpo a corpo que atinja a miragem causa a sua explosão. O atacante sofre 2d8 de dano elétrico e deve fazer um ST de CON (DC 17). Se falhar, fica Paralisado até o fim do seu próximo turno.

Usos: 3 por long rest
Bonus Action
```

#### [WA:L23761-L23764] 9/26/25 21:20 | Gabriel Violante

```text
Como uma Reação ao ser alvo de um ataque por um inimigo que você pode ver, Supros libera uma explosão de luz e som no agressor. • O atacante deve fazer um ST de CON (DC 17). Em caso de falha, ele fica Cego e Surdo até o final do próximo turno dele. • Cego: Vantagem em ataques contra ele; Desvantagem nos ataques dele. • Surdo: Não pode ouvir e falha em testes que exigem audição.

Usos: 3 por short rest.
Reaction
```

#### [WA:L23765-L23768] 9/26/25 21:20 | Gabriel Violante

```text
Como uma Ação, Supros se concentra para sentir as correntes elétricas ao seu redor por até 10 minutos (requer concentração). • Ele detecta a localização de criaturas vivas em um raio de 60ft, ignorando cobertura total e invisibilidade. • A habilidade é bloqueada por 1m de pedra ou 5cm de metal. • Não detecta constructos ou a maioria dos mortos-vivos.

Sem Limite
Action
```

#### [WA:L23792-L23824] 9/27/25 10:09 | Jn

```text
🦵🔥 Meteoro Vascajyin

Salto destrutivo de duas pernas

Action / 2 usos por Long Rest

Vasco salta até 20ft no ar e despenca com um chute duplo meteórico.

Área de impacto: círculo de 10ft de raio.

Alvos: inimigos na área fazem teste de Constituição DC 16.

Falha: sofrem 2d8 + Força de dano de impacto e caem Prone.

Sucesso: sofrem metade do dano e ficam em pé.

Adicional se precisar buffar: o impacto deixa o chão instável → terreno difícil em 10ft ao redor até o próximo turno.

🌌 Vórtex Vascajyin

Spinning kick que corta o ar

Action / 2 usos por Long Rest

Vasco gira canalizando Caos nos pés, liberando uma onda cortante.

Alcance: linha reta de 30ft, 5ft de largura.

Alvos: todos na linha fazem teste de Destreza DC 16.

Falha: recebem 2d6 + Força de dano radiante. Inimigos adjacentes a Vasco em um circulo de 10ft no início do chute precisam fazer teste de Força DC 16 ou são puxados 5ft em direção a ele antes da onda sair.

Sucesso: recebem metade do dano.
```

#### [WA:L23957-L23989] 9/27/25 19:32 | Jn

```text
Profissão:

SAILOR
LV1
+2 para 2 testes entre Atletismo, acrobacia, nature, intimidation.
Capaz de navegar um navio com até 10 tripulantes

LV2
+3 para testes
Adiciona mais 1 para o dado de embarcação antes de uma viagem marítima.
Não perde velocidade dentro da água.
+2 para atirar com balas de canhão.

Lv3

+4 para testes
Durante uma viagem marítima, pode refazer um teste em que algum aliado tenha falhado 1 vez.
Capaz de navegar um navio com até 50 tripulantes.
+3 para atirar com balas de canhão.
+2 para testes de reparo no navio.

LV4
+5 em testes
1 vez por viagem marítima, pode recuperar 1 level de exaustão seu ou de um aliado.
Capaz de navegar um navio com até 200 tripulantes.
+6 para atirar balas de canhão.
+4 para testes de conserto no navio

LV5
Capaz de liderar uma frota de navios.
Não erra balas de canhão.
+5 para testes de conserto no navio.
Pode dar fast travel por mares conhecidos.
```

#### [WA:L24044-L24048] 9/28/25 04:52 | Tz Magnata

```text
Invasores, vosso corpo irá cair por essas terras junto ao meu. Nossa carne se tornara arvores sem flores e nosso sangue irá arder sob o mesmo sol, até que as próprias nuvens se pareçam com rubis.

 A chuva que irá vir, há de cair vermelha como o vosso e o meu sangue. Em suas gotas, minhas palavras ecoarão para os ouvidos de vossos e de meus filhos. Até que nossos olhos, iguais como são e serão, levem aos corações, iguais como são e serão, a verdade de que nunca houve diferença. Ao menos, nenhuma que justifique arvores sem vida.

 Até lá, eu hei de defender os meus como defendem os seus, até que se tornem nossos.
```

#### [WA:L24255-L24259] 10/6/25 15:11 | Tz Magnata

```text
Invasores, vosso corpo irá cair por essas terras junto ao meu. Nossa carne se tornara arvores sem flores e nosso sangue irá arder sob o mesmo sol, até que as próprias nuvens se pareçam com rubis.

 A chuva que irá vir, há de cair vermelha como o vosso e o meu sangue. Em suas gotas, minhas palavras ecoarão para os ouvidos de vossos e de meus filhos. Até que seus olhos, iguais como são e serão, levem aos corações, iguais como são e serão, a verdade de que nunca houve diferença. Ao menos, nenhuma que justifique arvores sem vida.

 Até lá, eu hei de defender os meus como defendem os seus, até que se tornem nossos.
```

#### [WA:L24260-L24260] 10/6/25 15:13 | Tz Magnata

```text
Isso tava escrito na escultura de homenagem a um homem leão que viveu em Ioania 1k anos atras, foram as ultimas palavras dele. Ele morreu em combate contra a legião, mas não sem antes matar o Kenshin. Foi morto por um aprendiz de Kenshin chamado Arturo.
```

#### [WA:L24261-L24261] 10/6/25 15:14 | Tz Magnata

```text
A sessão passada entregou vários segredos importantes pra vcs saberem sobre o que Thomas Legion teria feito 1k anos atrás, assim como qual é o plano da Ordem
```

#### [WA:L24482-L24482] 10/9/25 21:53 | Gabriel Violante

```text
que eu coloquei de backstory do chaos antigo do supros
```

#### [WA:L24843-L24843] 10/16/25 12:59 | Gabriel Violante

```text
s o grande herói supros nao tivesse ferido o dragão
```


---

## [CHUNK-025] Anexo B. Backstory Supros, íntegra em parágrafos de origem

Fonte: `Backstory Supros.docx`. **Contém informações de bastidores do personagem e segredos que ele pode não conhecer.** Os parágrafos abaixo preservam a redação da fonte, sem pressupor sua aprovação pelo mestre.

**[BACKSTORY:P01]** Backstory Kozuki Supros

**[BACKSTORY:P02]** Indivíduo: Kozuki Supros

**[BACKSTORY:P03]** Alcunha: O homem que feriu o dragão

**[BACKSTORY:P04]** Origem: Fronteira Norte de Nippon

**[BACKSTORY:P06]** I. O clã e o Irmão Desaparecido

**[BACKSTORY:P07]** O Clã Kozuki vivia isolado nas montanhas gélidas de Nippon, na fronteira com o território Oni. Eles não eram conhecidos por serem grandes generais, mas por uma genética volátil ligada a tempestades.

**[BACKSTORY:P08]** Kozuki Kaito

**[BACKSTORY:P09]** Antes de Supros ser o foco, havia Kaito, seu irmão mais velho.

**[BACKSTORY:P10]** Kaito era um espadachim nato, disciplinado e frio. Até os 12 anos, Kaito nunca manifestou nenhum traço de Chaos. Para um clã que vivia da magia elemental, ele era considerado "incompleto" pelos anciãos, apesar de sua técnica perfeita com a lâmina.

**[BACKSTORY:P11]** Quando Supros nasceu, demonstrando uma atividade elétrica anormal desde o berço, Kaito foi preterido.

**[BACKSTORY:P12]** Misteriosamente, Kaito abandonou a vila pouco tempo depois. Não houve despedidas. Ele simplesmente sumiu na nevasca, levando apenas sua espada de treino.

**[BACKSTORY:P13]** Status Atual: Desconhecido. O Mestre tem liberdade total sobre suas motivações e se ele despertou algum Chaos tardio.

**[BACKSTORY:P15]** II. O Chaos de Supros

**[BACKSTORY:P16]** Durante anos, o Clã e o próprio Supros acreditaram que seu Chaos era do tipo Elemental-Elétrico. Eles estavam errados. O raio é um subproduto do chaos de supros.

**[BACKSTORY:P17]** O Chaos de Supros é a Manipulação de Energia.

**[BACKSTORY:P18]** Seu corpo age como um Buraco Negro energético. Ele drena energia cinética, térmica, radiante e eletrostática do ambiente, armazenando-a em suas células.

**[BACKSTORY:P19]** A razão pela qual ele manifesta raios é pura ineficiência.

**[BACKSTORY:P20]** Supros absorve tanta energia passivamente que seu corpo não consegue conter. A eletricidade é a forma mais rápida e violenta da natureza de equalizar cargas. Ele vaza energia na forma de arcos voltaicos porque está sempre transbordando.

**[BACKSTORY:P21]** Ele não foi treinado para lutar. Todo o treinamento de sua infância, supervisionado por seus pais e pelo Mestre Rengoku, era focado em Supressão e Controle.

**[BACKSTORY:P22]** "Não sinta. Não deixe sair. Segure."

**[BACKSTORY:P26]** Yumi

**[BACKSTORY:P27]** A única razão pela qual Supros sobreviveu à infância sem fritar foi Yumi, sua vizinha e amiga.

**[BACKSTORY:P28]** O Chaos de Yumi, chamado Rewind, era extremamente raro. Ela podia tocar seres e objetos orgânicos ou inorgânicos e rebobinar seu estado físico para um momento anterior.

**[BACKSTORY:P29]** Ela não curava feridas, ela fazia com que a ferida nunca tivesse existido.

**[BACKSTORY:P30]** No caso de Supros, quando a carga estática atingia níveis críticos, causando dor e faíscas, Yumi segurava suas mãos e rebobinava o corpo dele para um estado de carga zero. O único momento em que Supros sentia paz era ao toque dela.

**[BACKSTORY:P32]** III. O INCIDENTE

**[BACKSTORY:P33]** Supros tinha 13 anos. O ataque não foi uma guerra grandiosa, foi um massacre sujo sob chuva torrencial.

**[BACKSTORY:P34]** Os Onis invadiram a vila buscando suprimentos e escravos.

**[BACKSTORY:P36]** Supros foi encurralado no pátio do dojo. Ele viu tudo.

**[BACKSTORY:P37]** Ele viu um General Oni de pele escura cravar uma lança no peito de seu pai. Ele viu sua mãe ser brutalmente espancada e decapitada ao tentar bloquear o caminho dos invasores.

**[BACKSTORY:P38]** A imagem do sangue de seus pais se misturando à lama e à chuva ficou gravada em sua retina para sempre.

**[BACKSTORY:P40]** A Descarga em Cadeia

**[BACKSTORY:P41]** O choque emocional de ver a morte brutal de seus pais quebrou o controle que ele treinou a vida toda para manter. Sem Yumi por perto para resetá-lo, a carga acumulada de anos explodiu.

**[BACKSTORY:P42]** Um raio azul, silencioso e letal, saiu do peito de Supros. Como a água da chuva cobria o chão do pátio, a eletricidade encontrou um condutor perfeito.

**[BACKSTORY:P43]** O raio saltou como uma serpente viva atingindo o General Oni que matou seu pai, saltou para os outros soldados Onis próximos e, tragicamente, percorreu os diversos corpos, objetos e pessoas que estavam no local.

**[BACKSTORY:P44]** Em segundos, o pátio ficou silencioso. O cheiro não era só de sangue, mas de carne eletrocutada.

**[BACKSTORY:P45]** A Interpretação de Supros

**[BACKSTORY:P46]** Supros desmaiou. Quando acordou, viu os Onis mortos e seus pais mortos.

**[BACKSTORY:P47]** Na cabeça dele, a narrativa é simples: Os Onis mataram meus pais. Eu desmaiei de medo. Alguma coisa aconteceu (talvez os deuses, talvez sorte) e os Onis morreram também.

**[BACKSTORY:P48]** Ele não sabe que foi ele quem deu o golpe final em todos naquela explosão.

**[BACKSTORY:P51]** IV. OS SOBREVIVENTES

**[BACKSTORY:P52]** A explosão não matou todos na vila, apenas quem estava no pátio molhado.

**[BACKSTORY:P53]** 1. Ren (Melhor Amigo de Infância)

**[BACKSTORY:P54]** O Incidente: Ren estava chegando ao pátio para ajudar. Ele viu o raio sair de Supros. Ele foi atingido de raspão por um arco secundário, que queimou metade de seu rosto e braço, deixando cicatrizes de Lichtenberg.

**[BACKSTORY:P55]** A Motivação: Ren sabe a verdade. Ele viu Supros explodir. Ele culpa Supros não só pela morte dos pais, mas por ter sido um covarde que escondia um poder que poderia ter salvado a vila se usado antes, ou que causou a morte de quem ainda poderia ser salvo. Ele odeia a instabilidade de Supros.

**[BACKSTORY:P56]** 2. Rengoku (Mestre)

**[BACKSTORY:P57]** O Incidente: Sobreviveu, mas perdeu um braço e a visão.

**[BACKSTORY:P58]** A Postura: Ele sabe o que Supros é. Ele se recusa a ensinar técnicas letais a Supros até que o garoto aprenda a controlar suas emoções, pois sabe que uma espada na mão de uma bateria instável é suicídio.

**[BACKSTORY:P59]** 3. Yumi (Amiga de Infância)

**[BACKSTORY:P60]** O Destino: Yumi não estava no pátio. Ela foi capturada pelos Onis antes da descarga.

**[BACKSTORY:P61]** Utilidade para os Onis: Os Onis descobriram o poder dela. Alguém que pode rebobinar a durabilidade de armas de cerco ou fazer um guerreiro de elite voltar ao estado de antes da batalha é o recurso mais valioso de uma guerra. Ela é mantida viva como uma ferramenta vital em Nippon.

**[BACKSTORY:P62]** 4. Kaito (Irmão Perdido)

**[BACKSTORY:P63]** 100% na mão do mestre.

**[BACKSTORY:P64]** V. DESENVOLVIMENTO ATUAL DO PERSONAGEM

**[BACKSTORY:P65]** 1. A Cruzada: Seu ódio pelos Onis não é apenas vingança; é um imperativo biológico. Eles são a face da tragédia de Nippon e devem ser erradicados da existência. A Ordem também é inimiga, mas é vista como uma organização terrorista maligna, enquanto os Onis são uma praga a ser purificada.

**[BACKSTORY:P66]** 2. A Paz através da Tirania: Supros transcendeu a simples matança. Ele compreendeu que o verdadeiro inimigo é o próprio Conceito de Guerra — a entidade que vive em sua bainha. Seu objetivo final é criar um mundo onde a guerra não exista. Contudo, a ironia trágica é que, sob a influência sussurrada da Espada, ele acredita que o único caminho para essa utopia pacifista é através do Poder Absoluto. Ele planeja usar a Guerra para acabar com todas as guerras, tornando-se um mal necessário tão terrível que o conflito se torne obsoleto pelo medo.

**[BACKSTORY:P67]** 3. O Escudo e a Família: Após quatro anos de convivência, a frieza amoleceu. A party (Chronos, Vasco, Billy, Gunn, Sara) preencheu o vazio deixado pelo massacre. Um novo instinto despertou: a necessidade desesperada de Proteger. Ele não luta mais apenas para destruir o inimigo, mas para garantir que sua nova família não termine como a antiga: corpos carbonizados na chuva.

**[BACKSTORY:P68]** 4. A Dúvida: Uma incerteza perigosa o assola. Supros percebeu que a Pesadelo da Guerra vibra com um ódio genuíno e instintivo contra a Ordem e seus líderes. Isso gerou um conflito lógico: "Se a própria encarnação da Guerra odeia a Ordem, estaria a Ordem, de alguma maneira distorcida, caminhando em direção à verdadeira Paz?" Essa dúvida faz o questionar se ele está, na verdade, lutando do lado errado da história.


---

## [CHUNK-026] Anexo C. Prompts anteriores enviados ao Gemini, texto de origem

Fonte: `Prompts antigos com Gemini.md`, preservando o texto do jogador como documento histórico. Trechos podem estar desatualizados ou conflitar com a ficha e com a backstory recente.

**[PROMPT:L01]** "  

**[PROMPT:L02]** Fala gemini, vou precisar da sua ajuda com algumas coisas de uma campanha de RPG que jogo. Nesse sentido, preciso situá-lo do que aconteceu na campanha até o momento, do meu personagem e do resto da party. Quero que foque num primeiro momento em aprender sobre o mundo num geral. E a partir de hoje, após todas as sessões irei lhe informar o que aconteceu detalhadamente.  

**[PROMPT:L03]** Vamos começar com a estrutura do mundo, antes de te narrar o que aconteceu na campanha até o momento. Primeiramente vale dizer que o mundo e a sua história é muito inspirado nas seguintes obras:  

**[PROMPT:L04]** Bleach   

**[PROMPT:L05]** Cavaleiros do zodíaco   

**[PROMPT:L06]** Berserk   

**[PROMPT:L07]** Reborn  

**[PROMPT:L08]** Naruto  

**[PROMPT:L09]** Chainsaw man  

**[PROMPT:L10]** Pokemon (N sei se compensa na playlist, cpa se for um momento chill)  

**[PROMPT:L11]** FMA brotherhood  

**[PROMPT:L12]** AOT  

**[PROMPT:L13]** One Piece  

**[PROMPT:L14]** Samurai X  

**[PROMPT:L15]** Peaky blinders   

**[PROMPT:L16]** Word of warcraft   

**[PROMPT:L17]** LOL  

**[PROMPT:L18]** Black Sails  

**[PROMPT:L19]** Merlin  

**[PROMPT:L20]** Halo(tem que ter)  

**[PROMPT:L21]** Senhor dos anéis  

**[PROMPT:L22]** KINGDOM HEARTS  

**[PROMPT:L23]** DOTA  

**[PROMPT:L24]** DARK SOULS  

**[PROMPT:L25]** Vamos começar com o world building. É um RPG de fantasia fantástico heróico. O mundo atual funciona num sistema de guildas de heróis com rankings bem definidos. F- a S (igual One Punchman). O sistema de poder é o Chaos (similar a reatsu, chakara e nen) onde existem pessoas comuns e pessoas com chaos. Nem todo mundo tem chaos, mas as pessoas que o possuem são extremamente poderosas, em comparação as que não tem. Um Rank F- consegue facilmente derrotar humanos comuns sem muita dificuldade. O chaos se manifesta de diferentes formas, à depender da pessoa. Podem ser poderes simples à muito complexos. O vilão principal da campanha por exemplo, o Shein seu chaos é literalmente igual ao poder da Kyouka Suigetsu de Aizen. Nesse sentido o mundo atual é dividio em guildas e reinos individuais, em anexo lhe envio uma imagem ilustrativa incompleta (existem mais reinos) e a seguinte descrição com legenda na imagem:  

**[PROMPT:L26]** 🔴\-Dalaran  

**[PROMPT:L27]** 😀- Nippon  

**[PROMPT:L28]** 🔵\- anak halow  

**[PROMPT:L29]** 🟠- Hakkumai  

**[PROMPT:L30]** 💜- Praeglacius  

**[PROMPT:L31]** 🟡- Seasgate  

**[PROMPT:L32]** ⚪- STT 1044M  

**[PROMPT:L33]** ⚫- dragonfall  

**[PROMPT:L34]** 🟣- birmgham  

**[PROMPT:L35]** 😅- forruner  

**[PROMPT:L36]** 🥹- 3 reinos do norte (Goldage)  

**[PROMPT:L37]** Muitos anos atrás, o mundo era controlado por dragões, que hoje estão restritos à skylands, onde os dragões eram deuses "imortais" que controlavam os humanos e lideravam o mundo. Contudo, com o surgimento de um grupo de humanos super poderosos ha 1000 anos, dentre eles, o lendário Charles Legion, os dragões foram derrotados e a era dos humanos começou. Assim, 1000 anos depois começa a jornada da pary, acordando confusos em um laboratório. Aparentemente, os personagens estavam sendo usados de experimentos por uma organização criminosa chamada Ordem (facção), esta é extremamente inspirada em Kindom Hearts, sendo seu lider o Shein (basicamente o Aizen). Assim, os personagens começam sua jornada pelo mundo, se juntando a guilda legião, fundada por charles legion, 1000 anos atrás (que por sinal é a maior guilda do mundo). A campanha até o momento teve diversos acontecimentos e revelações, que vou lhe contando aos poucos. No momento, o mundo inteiro está em guerra contra a ordem que fez um super ataque terrorista no conselho anual de todas as nações. Foque em aprender sobre o mundo, leve o tempo que precisar para fazer isso.  

**[PROMPT:L38]** Gemini, no momento quero tentar passar pra você o máximo sobre o mundo e os personagens para que você entenda o contexto e depois começaremos a discutir coisas sobre o mundo. Considerenado que já temos 4 anos de camapnha e estamos no nível 8, (o sistema é propróprio inspirado em DnD praticamente), eu gostaria que você focasse 100% em aprender sobre os elemetnos do mundo. A seguir, lhe envio toda a conversa do grupo de whatsap que temos até o momento, ignore as mensagem que dizem respeito a marcar sessões ou brigas pessoais entre nós, quero que tente identificar e aprender tudo que está relacionado ao RPG.  

**[PROMPT:L39]** Certo, vamos começar descrevendo meu personagem, seu chaos e sua lore. Supros é o nome do meu personagem, ele é fortemente inspirado no Sasuke, Zoro, Yasuo, Yorichi, Zenitsu e outros.  

**[PROMPT:L40]** Aparencia Física:  

**[PROMPT:L41]** É um espadachim que carrega consigo 4 katanas, ele tem 1,75cm com porte físico bom, mas não muito musculoso. Possui cabelo grande preso, bem parecido com o Yorichi e Kokushibo, com uma pegada de Yasuo também. Ele possui somente um dos olhos, o outro tem uma cicatriz de corte, igual ao Zoro depois do timeskip. Ele possui uma cicatriz de carpa azul no peito que ganhou por feitos heróicos da campanha.  

**[PROMPT:L42]** Chaos:  

**[PROMPT:L43]** O chaos do supros é essencialmente Raios, bem parecido com o sasuke nesse sentido, a habilidade dele é basicamente controlar os raios, gerar raios e manipulá-los, no momento ele tem resistencia à dano elétrico, mas isso vai evoluir com o tempo (até a imunidade). Na ficha, você consegue ver algumas das suas habilidades.  

**[PROMPT:L44]** Passado e Lore:  

**[PROMPT:L45]** Supros tem uma Lore extremamente trágica, inspirada no tanjiro de Demons Slayer e no Sasuke de Naruto. Supros nasceu no pé de uma montanha no extremo norte de nipon, numa pequena vila militar de elite, contruida para ser a primeira linha de batalha contra os Onis. Assim, supros vivia em contato com a guerra. Contudo, uma profecia sobre uma criança marcada, assombrava os onis a respeito de que aquela criança traria ódio e destruição , portanto deveria ser eliminada. Supros nasceu com essa marca, ao saber disso, os onis organizaram uma mega investida belica e destruíram toda a sua vila, sendo supros o ultimo sobrevivente (uma pegada meio attack on titan), o garoto de apenas 13 anos na época viu todos seus entes queridos sendo brutalmente mortos 1 por 1\. Supros sobreviveu e jurou vingança, hoje ele é movido pelo ódio e pela sua vingança, apesar de seu coração estar se acalmando por ter encontrado amigos depois de tanto tempo (a party). Contudo, por onde supros passa, há caos e destruição, ele crê fortemente ser amaldiçoado. E por ironia do destino, (ou planejamento do mestre), supros acabou com uma katana que contem o Pesadelo da Guerra, uma entidade criada pelo medo dos humanos à guerra, extremamente poderoza. Esse ser hoje corrempe a alma de supros pouco a pouco, que usa para satisfazer seus próprios desejos. A guerra não permite que supros use seu chaos enquanto a usa. (em anexo coloco sua descrição e ficha). No momento atual da campanha, supros entendeu que ele não deve destruir e se vingar de tudo, mas sim, da guerra, pois no fim a guerra foi aquilo que tirou tudo dele, agora, supros tem um novo objetivo, extinguir o próprio conceito de guerra, mas ele tomou o caminho errado, o caminho do extermínio absoluto, assim como Nagato, o Pain de Naruto. No momento ele caminha com a party para derrotar a lore e realizar pequenas missões, mas ele compreende que isso é apenas uma sub-jornada para obter poder.  

**[PROMPT:L46]** Meus planejamentos para o personagem:  

**[PROMPT:L47]** Aqui posso tomar 2 caminhos. Ele pode se redimir e se tornar um pacifista no futoro, assim como Thorfin, por exemplo, ou realmente se tornar Pain e virar um antognista futuro na campanha. Eu particularmente prefiro a primeria opção, com um arco de redenção, mas caso o meu personagem morra, eu vou optar pela segunda opção, tentando conversar com o mestre com um Last-Resort, onde supros vende sua alma para a guerra e se torna um emissário ambulante, se tornando uma espécie de ambulante. Em anexo, deixo tudo sobre o personagem (imagens, descrição e Ficha) , foque em aprender sobre ele, pois ele será o foco principal das nossas conversas daqui pra frente. Leve o tempo que precisar, foque 100% em aprender sobre o meu personagem, não precisa fazer nada além de aprender.


---

## [CHUNK-027] Anexo D. Dump verificável de todas as células não vazias da ficha Supros

Fonte: `Kozuki Supros - tzpg.xlsx`, aba `Planilha1`, área usada A1:L98. **Os números são transcrição de células, não revisão/rebalanceamento.** Fórmulas são incluídas quando presentes. Células com indicações `PROPOSTA` não são aprovadas por este anexo.

- **`A1`** = NAME
- **`B1`** = HIT DICE
- **`C1`** = LVL
- **`D1`** = MAX HP
- **`E1`** = HP
- **`F1`** = AC
- **`G1`** = BONUS HP
- **`A2`** = Kozuki Supros
- **`B2`** = 10
- **`C2`** = 9
- **`D2`** = 94 | `FÓRMULA: =B2+(H7-F7)+(C2-1)*(B2/2+1+(H7-F7))+ G2`
- **`E2`** = 49
- **`F2`** = 19 | `FÓRMULA: =A13`
- **`G2`** = 9
- **`B3`** = 46274
- **`D3`** = 93
- **`A4`** = STATS:
- **`B4`** = BASE STAT (point buy)
- **`C4`** = Bonus +2 +1
- **`D4`** = Ability Score Improvment + Feat
- **`E4`** = Total STATS
- **`F4`** = Proficiency Bonus
- **`G4`** = Modifiers
- **`H4`** = Saving Throws Bonus
- **`A5`** = STRENGTH
- **`B5`** = 8
- **`C5`** = 0
- **`D5`** = 0
- **`E5`** = 8 | `FÓRMULA: =D5+C5+B5`
- **`F5`** = 0
- **`G5`** = -1 | `FÓRMULA: =(E5-10)/2`
- **`H5`** = -1 | `FÓRMULA: =(E5-10)/2+F5`
- **`A6`** = DEXTERITY
- **`B6`** = 15
- **`C6`** = 2
- **`D6`** = 5
- **`E6`** = 22
- **`F6`** = 3
- **`G6`** = 6
- **`H6`** = 9 | `FÓRMULA: =(E6-10)/2+F6`
- **`A7`** = CONSTITUTION
- **`B7`** = 15
- **`C7`** = 1
- **`D7`** = 0
- **`E7`** = 16
- **`F7`** = 3
- **`G7`** = 3
- **`H7`** = 6 | `FÓRMULA: =(E7-10)/2+F7`
- **`A8`** = INTELLIGENCE
- **`B8`** = 14
- **`C8`** = 0
- **`D8`** = 0
- **`E8`** = 14
- **`F8`** = 0
- **`G8`** = 2
- **`H8`** = 2
- **`A9`** = WISDOW
- **`B9`** = 8
- **`C9`** = 0
- **`D9`** = 0
- **`E9`** = 8
- **`F9`** = 0
- **`G9`** = -1
- **`H9`** = -1
- **`A10`** = CHARISMA
- **`B10`** = 10
- **`C10`** = 0
- **`D10`** = 0
- **`E10`** = 10
- **`F10`** = 0
- **`G10`** = 0
- **`H10`** = 0
- **`A12`** = ARMOR CLASS
- **`B12`** = Armor bonus
- **`C12`** = DEX Bonus
- **`D12`** = Shield Bonus
- **`E12`** = Other Bonus
- **`F12`** = Ataque (base)
- **`A13`** = 19 | `FÓRMULA: =B13+C13+D13+E13`
- **`B13`** = 13
- **`C13`** = 6
- **`D13`** = 0
- **`E13`** = 0
- **`F13`** = 10 | `FÓRMULA: =10`
- **`I13`** = WAR Loutus
- **`I14`** = Meta de dano
- **`A15`** = Profissão:
- **`B15`** = BlackSmith
- **`I15`** = Dano atual causado
- **`A16`** = Lvl
- **`B16`** = 3
- **`I16`** = Vida máxima perdida PRA SEMPRE
- **`J16`** = 0
- **`A17`** = Skill Checks
- **`B17`** = Control&Athletics
- **`I17`** = Vida máxima perdida temporária
- **`A18`** = Bonus
- **`B18`** = 3
- **`A19`** = Descrição:
- **`B19`** =  - +4 para testes.\n - +4 para fazer armas e armaduras.\n - Consegue utilizar forjas e fornos especiais para reduzir a dificuldade dos crafts. (+1)\n - Consegue fazer armaduras incomuns, raras e épicas.\n - Roda com vantagem para fazer armaduras comuns com materiais básicos. (metais ou pedras mineradas).\n 
- **`A24`** = Total Bonus
- **`B24`** = Skill Checks
- **`C24`** = Stats Bonus
- **`D24`** = Proficiency Bonus
- **`E24`** = Profession Bonus
- **`A25`** = 3 | `FÓRMULA: =E25+D25+C25`
- **`B25`** = Athletics
- **`C25`** = -1 | `FÓRMULA: =(E5-10)/2`
- **`D25`** = 0
- **`E25`** = 4
- **`A26`** = 10
- **`B26`** = Acrobatics
- **`C26`** = 6
- **`D26`** = 4
- **`E26`** = 0
- **`A27`** = 6
- **`B27`** = Sleight of Hands
- **`C27`** = 6 | `FÓRMULA: =(E6-10)/2`
- **`D27`** = 0
- **`E27`** = 0
- **`A28`** = 10
- **`B28`** = Stealth
- **`C28`** = 6 | `FÓRMULA: =(E6-10)/2`
- **`D28`** = 4
- **`E28`** = 0
- **`A29`** = 2
- **`B29`** = Arcana
- **`C29`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D29`** = 0
- **`E29`** = 0
- **`A30`** = 2
- **`B30`** = History
- **`C30`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D30`** = 0
- **`E30`** = 0
- **`A31`** = 10
- **`B31`** = Control
- **`C31`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D31`** = 4
- **`E31`** = 4
- **`A32`** = 2
- **`B32`** = Investigation
- **`C32`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D32`** = 0
- **`E32`** = 0
- **`A33`** = 2
- **`B33`** = Nature
- **`C33`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D33`** = 0
- **`E33`** = 0
- **`A34`** = 2
- **`B34`** = Religion
- **`C34`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D34`** = 0
- **`E34`** = 0
- **`A35`** = 2
- **`B35`** = Society
- **`C35`** = 2 | `FÓRMULA: =(E8-10)/2`
- **`D35`** = 0
- **`E35`** = 0
- **`A36`** = -1
- **`B36`** = Animal Handling
- **`C36`** = -1 | `FÓRMULA: =(E9-10)/2`
- **`D36`** = 0
- **`E36`** = 0
- **`A37`** = -1
- **`B37`** = Perception
- **`C37`** = -1 | `FÓRMULA: =(E9-10)/2`
- **`D37`** = 0
- **`E37`** = 0
- **`A38`** = -1
- **`B38`** = Insight
- **`C38`** = -1 | `FÓRMULA: =(E9-10)/2`
- **`D38`** = 0
- **`E38`** = 0
- **`A39`** = -1
- **`B39`** = Survival
- **`C39`** = -1 | `FÓRMULA: =(E9-10)/2`
- **`D39`** = 0
- **`E39`** = 0
- **`A40`** = -1
- **`B40`** = Medicine
- **`C40`** = -1 | `FÓRMULA: =(E9-10)/2`
- **`D40`** = 0
- **`E40`** = 0
- **`A41`** = 4
- **`B41`** = Deception
- **`C41`** = 0
- **`D41`** = 4
- **`E41`** = 0
- **`A42`** = 4
- **`B42`** = Intimidation
- **`C42`** = 0 | `FÓRMULA: =(E10-10)/2`
- **`D42`** = 4
- **`E42`** = 0
- **`A43`** = 4
- **`B43`** = Performance
- **`C43`** = 0 | `FÓRMULA: =(E10-10)/2`
- **`D43`** = 4
- **`E43`** = 0
- **`A44`** = 4
- **`B44`** = Persuasion
- **`C44`** = 0 | `FÓRMULA: =(E10-10)/2`
- **`D44`** = 4
- **`E44`** = 0
- **`A46`** = SKILLS
- **`A47`** = PASSIVES
- **`A48`** = Skill name
- **`E48`** = Effect
- **`A49`** = Lightning Veins
- **`E49`** = Supros ganha +1 em Destreza passivamente e aumenta o cap pra 22.
- **`A50`** = Black Flash
- **`E50`** = Trigger: Crítico corpo a corpo\nEfeito: Crit em 19–20 até o fim do combate\n    Alvo faz ST CON (17)\n    Falha: Stunned até o fim do próximo turno\n
- **`A51`** = ACTIONS
- **`A52`** = Skill Name
- **`B52`** = Effect
- **`E52`** = Uses
- **`F52`** = Recharge
- **`G52`** = Current Uses
- **`L52`** =  
- **`A53`** = Multi Attack
- **`B53`** = Ao tomar a ação de atacar, supros pode realizar dois rolamentos de ataque.
- **`E53`** = ∞
- **`F53`** = ∞
- **`G53`** = ∞
- **`A54`** = Lightning Reaver
- **`B54`** = Efeito: Realiza até 3 ataques consecutivos\nDano: Cada ataque causa Hit Básico + 1d8\nAlvo : O primeiro ataque escolhe um alvo\n    Os ataques seguintes podem atingir outros inimigos \n    a até 25 ft do alvo anterior\n    Não pode repetir o mesmo alvo\nTeste: Cada alvo faz um ST de DEX (15)\nFalha: recebe dano completo
- **`E54`** = 3
- **`F54`** = Long Rest
- **`G54`** = 3
- **`A55`** = Lightning Spear
- **`B55`** = Alcance: 90 ft (linha reta)\nAlvo: 1 criatura na linha\nDano: Causa 8d8 + DEX de dano elétrico\nTeste: ST de DEX (DC 15):\nFalha: sofre dano total e fica Paralyzed até o fim do próximo turno\nSucesso: sofre metade do dano e não é afetado adicionalmente
- **`E55`** = 2
- **`F55`** = Long Rest
- **`G55`** = 2
- **`A56`** = Lightning Beast\nKirin
- **`B56`** = Condição: Céu aberto\nCanalização:\n     Bônus Action: canaliza\n     Action: dispara\nAlvo: 1 criatura previamente ferida\nDano: Causa 8d10 + DEX de dano elétrico\nTeste: ST de DEX (DC 15):\nFalha: dano total + Paralyzed\nSucesso: metade do dano\nClina Nublado:\n    Dano: 10d10 + DEX\n    Afeta área de 10 ft ao redor do alvo"                
- **`E56`** = 1
- **`F56`** = Long Rest
- **`G56`** = 1
- **`A57`** = Energy Transmutation
- **`B57`** = Tipo: Free Action\nUsos: PB por Long Rest\nEfeito:\n    Ao causar dano, pode converter o tipo para:\n    Lightning, Thunder, Fire, Cold ou Radiant\nThunder: empurra 5 ft\nCold: -10 ft de movimento (1 turno)\nFire&Radiant: +1d6 dano (1 turno)
- **`E57`** = 4
- **`F57`** = Short Rest
- **`G57`** = 4
- **`H57`** = PROPOSTA \nSKILL LEVEL \n9
- **`A58`** = BONUS ACTION   
- **`A59`** = Skill Name
- **`B59`** = Effect
- **`E59`** = Uses
- **`F59`** = Recharge
- **`G59`** = Current Uses
- **`A60`** = Shunpo
- **`B60`** = Blink (PB * 20)
- **`E60`** = 3
- **`F60`** = Short Rest
- **`G60`** = 3
- **`A61`** = Godspeed Supros
- **`B61`** = Tipo: Ativação (1x por combate)\nDuração: 3 turnos\nEfeitos:\n    +1 DEX\n    Ganha Evasion\n    +15 ft de movimento\nSobrecarga:\n    Pode estender a duração além de 3 turnos\n    Para cada turno extra, recebe 1 nível de exaustão \n    quando desativar a habilidade
- **`E61`** = 2
- **`F61`** = Long Rest
- **`G61`** = 1
- **`A62`** = Clone
- **`B62`** = Limite: Apenas 1 clone ativo\nDuração: Até o fim do combate\nEfeito:\n    Quando Supros é alvo de um ataque, o atacante \n    rola 1d4\n    Par: ataque é redirecionado para o clone\n    Impar: ataque atinge Supros normalmente\nExplosão do Clone:\n    Quando um inimigo corpo a corpo atinge o clone:\n    O clone é destruído\n    O atacante sofre 2d8 dano elétrico\n    Deve fazer ST de CON (DC 15)\n        Falha: fica Paralyzed até o fim do próximo turno\n        Sucesso: sem efeito adicional\nAtaque e Movimentação\n    Como uma Bônus Action, Supros pode atacar com \n    o clone no campo de batalha. O clone tem a mesma \n    movimentação do personagem e o dano causado é\n    2d8 dano eletrico.\n    1 Attack Roll Normal\n    O clone não morre se acertar o ataque.\n    O clone não pode interagir com objetos (ainda).\n\n    
- **`E62`** = 3
- **`F62`** = Long Rest
- **`G62`** = 2
- **`H62`** = PROPOSTA \nUPGRADE LEVEL \n9
- **`A63`** = REACTION
- **`A64`** = Skill Name
- **`B64`** = Effect
- **`E64`** = Uses
- **`F64`** = Recharge
- **`G64`** = Current Uses
- **`A65`** = Flash Bang
- **`B65`** = Trigger: Ao ser alvo de um ataque por um inimigo que você pode ver\nEfeito: O atacante deve fazer ST de CON (DC 15)\nFalha: fica Cego até o fim do próximo turno\n    Ataques dele têm desvantagem\n    Sucesso: sem efeito
- **`E65`** = 3
- **`F65`** = Long Rest
- **`G65`** = 2
- **`A66`** = Parry
- **`B66`** = Trigger: Ao ser alvo de um ataque por um inimigo que você pode ver\nEfeito: +3 AC nesse ataque
- **`E66`** = 3
- **`F66`** = Short Rest
- **`G66`** = 1
- **`A68`** = Equipments
- **`A69`** = Item
- **`C69`** = QTD
- **`D69`** = Effect
- **`G69`** = Value
- **`A70`** = Speed Boots
- **`C70`** = 1
- **`D70`** = Additional 15ft of movement
- **`A71`** = Katana Peace Lotus
- **`C71`** = 1
- **`D71`** = 1d12 + DEX. Special effects agains War Lotus.
- **`A72`** = Katana Hyorimaru
- **`C72`** = 1
- **`D72`** = 2d6 + 2d4 + DEX. Use a bonus action to freeze 15ft within you, making it hard terrain.
- **`A73`** = Katana War Lotus
- **`C73`** = 1
- **`D73`** = 1d12 + 1d12(fixo) + DEX
- **`A74`** = Dragon's Scale Armor
- **`C74`** = 1
- **`D74`** = AC: 13 + DEX, +5hp
- **`A75`** = The Hawk's Eye
- **`C75`** = 1
- **`D75`** = 18 passive perception
- **`A76`** = Warm Clothing
- **`C76`** = 1
- **`D76`** = Good in cold places
- **`A77`** = Grappling
- **`C77`** = 14
- **`D77`** = 20ft/6 metros range
- **`A78`** = Rope
- **`C78`** = 1
- **`D78`** = 75m
- **`A79`** = Parachute
- **`C79`** = 1
- **`D79`** = 2 uses left
- **`A80`** = Anti-sound Smoke
- **`C80`** = 0
- **`D80`** = An area the size of a room
- **`A81`** = Smoke Bomb
- **`C81`** = 0
- **`D81`** = 1 round / 10x10ft
- **`A82`** = White Camouflage
- **`C82`** = 1
- **`D82`** =  +1 stealth in snow biome
- **`A83`** = Desert Camouflage
- **`C83`** = 1
- **`D83`** =  +1 stealth in desert biome
- **`A84`** = Gold
- **`C84`** = 5
- **`A85`** = Minor Healing Potion
- **`C85`** = 0
- **`D85`** = 2d4 + 2
- **`G85`** = 50g
- **`A86`** = Healing Potion
- **`C86`** = 0
- **`D86`** = 4d4+4
- **`G86`** = 100g
- **`A87`** = Bigger Healing Potion
- **`C87`** = 0
- **`D87`** = 4d6+6
- **`G87`** = 150g
- **`A88`** = Greater Healing Potion
- **`C88`** = 0
- **`D88`** = 6d6+10
- **`G88`** = 200g
- **`A89`** = Superior Healing Potion
- **`C89`** = 0
- **`D89`** = 10d6 + 15
- **`G89`** = 300g
- **`A90`** = Anti Exhaust Potion
- **`C90`** = 1
- **`D90`** = -1 Exhaust
- **`G90`** = 100
- **`A91`** = Gold
- **`C91`** = 2500
- **`A92`** = Anel Beholder
- **`C92`** = 1
- **`D92`** = Mais 3 em todo teste de charisma
- **`A93`** = Estus Flask
- **`C93`** = 46025
- **`D93`** = 10d6 + 15 recarregável por long
- **`D96`** = 1
- **`A98`** = War lotus\n1d12\n+2 para acerto.\nA espada pode ser sacada a qualquer momento e não bloqueia as habilidades do usuário.\nAo sacar a espada o usuário pode escolher rolar 1; 2 ou 3 D100. Para cada d100 o usuário perde 4 de vida máxima e soma 4 de dano flat a espada. Ao fim do combate, o usuário precisa de causar em dano o equivalente a soma de todos os resultados dos D100. Se não conseguir ele perde metade do HP que sacrificou para sacar a espada permanentemente.\n\nO usuário se cura em 50% do dano que ele causa com a espada.\n\nQualquer outra fonte de cura tem 50% do efeito original no usuário.\n\nO usuário pode sacrificar até 20 de seus pontos de vida máximos para aumentar o dano de um de seus ataques.\n\nO usuário é imune a Fear.

---

## [CHUNK-028] Índice de ingestão, versão e limites

- Extratos WhatsApp incluídos: 238 mensagens (de um total de 24984 registros do export); mensagens selecionadas por contexto, não leitura literal de mensagens omitidas.
- Células não vazias da ficha reproduzidas: 367.
- Parágrafos brutos do DOCX preservados: 58.
- Documento de prompts antigos preservado linha a linha.
- Imagens incluídas por descrição e filename, não codificadas como base64 neste Markdown.
- Datas de edição dos arquivos-fonte não fornecidas; a data do snapshot corresponde apenas à consolidação.
- Material fora dos anexos e arquivos acessíveis (mapa, imagens omitidas do WhatsApp, wikis de links externos) deve ser carregado separadamente se houver necessidade de ampliar esta base.
