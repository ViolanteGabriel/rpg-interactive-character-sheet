# Combate do Supros — regras e operação

## Início e fim de turno

1. Inicie o combate e depois o turno do Supros.
2. Ative as habilidades e registre dano recebido, cura e efeitos da mesa.
3. Finalize o turno. Godspeed perde um turno e efeitos configurados para esse marco avançam.
4. O próximo início abre o turno seguinte. Não é possível finalizar ou iniciar o mesmo marco duas vezes.

Existe apenas o turno individual do Supros. O controle grande de Iniciar/Finalizar turno fica fixo durante a rolagem da página de combate. Todos os efeitos com duração avançam nesse relógio, inclusive buffs cujo alvo é o grupo. O histórico registra o marco e os nomes dos efeitos que expiraram. Fechar o navegador não avança nenhum contador.

## Godspeed

- +2 DEX (22 → 24 na ficha inicial); +1 no modificador.
- +1 CA, acerto, salvaguarda de DEX, perícias de DEX existentes e dano de DEX.
- Evasion e +15 ft destacados como referência; não há cálculo de deslocamento base nem resolução de salvaguardas.
- Dura três fins de turno do Supros, incluindo o turno em que foi ativado.
- Ao chegar a zero, escolha desativar ou estender. O próximo turno pessoal fica bloqueado até essa decisão.
- Cada extensão dá um turno e acumula um nível de exaustão a receber na desativação. Encerrar combate também resolve essa exaustão.
- Respeita uma ativação por combate e as cargas por descanso longo.

Os atributos e bônus base não são sobrescritos: desativar remove os modificadores. Não somar manualmente o bônus de Godspeed nos campos base.

## War Lotus

A espada tem painel preto/vermelho próprio, bordas e imagem com presença vermelha ao empunhar, animação de ativação e rastreador de dívida.

Ao empunhar, informe 1–3 resultados de d100 rolados fisicamente. Cada resultado custa 4 HP máximos e acrescenta +4 de dano fixo. A soma dos resultados é a dívida de dano. Não há rolagem digital.

- Bônus inicial: +2 acerto. Nenhum bônus próprio de CA consta na fonte; o padrão é zero, editável em Ajustes.
- A fórmula base inicial usa a descrição detalhada: `1d12 + DEX`. O inventário também traz uma fórmula divergente; a regra adotada é explícita e editável em Ajustes, sem somar as versões.
- DEX na fórmula é substituída pelo modificador efetivo. O dano fixo do saque aparece separadamente.
- Registrar dano causado usa o resultado **efetivamente aplicado com a espada**, soma à dívida e cura 50% automaticamente. Não registrar o mesmo dano duas vezes; use desfazer para corrigir.
- Cura externa é reduzida a 50% enquanto a espada está empunhada nesta implementação. Arredondamento para baixo por padrão; pode ser alterado para cima em Ajustes.
- Imunidade a Fear é indicada enquanto empunhada.
- Embainhar remove os bônus de empunhadura; não cancela sacrifício, dívida ou histórico. Reempunhar no mesmo combate mantém o pacto, sem um novo saque.
- O sacrifício adicional de até 20 HP máximos por ataque permanece sem automação: a fonte não define a escala de conversão em dano.

Ao encerrar combate, a prévia mostra dívida e perda permanente. Se a meta falhou, metade do sacrifício daquele saque é convertida de perda temporária para permanente, sem descontá-la duas vezes. A recuperação da parte temporária só ocorre se você marcar a autorização da mesa. Também existe uma recuperação explícita em Ajustes após o combate. Nenhuma dessas recuperações cura a vida atual.

Exemplo: máximo base 94, dois d100, sacrifício 8 → máximo efetivo 86. Meta não cumprida: 4 tornam-se perda permanente e 4 continuam temporários. Recuperar a parte temporária leva o máximo a 90. Toda a resolução pode ser desfeita.

## Efeitos recebidos, exaustão e reações

Em Estado ou no atalho do combate, registre nome, origem, descrição, alvo, bônus/penalidades de CA/acerto/dano e duração. Um alvo Supros ou Grupo afeta os totais do Supros; Aliado apenas registra o efeito. A duração pode ser manual ou por ocorrências do início/fim do turno pessoal do Supros. A próxima ocorrência do marco escolhido já conta; ajuste o número se o efeito só vencer em um turno posterior.

Condições como Cego ou Paralisado ficam registradas e destacadas, sem importar uma tabela de condições de D&D. Exaustão é um campo numérico, com aumento automático apenas pela sobrecarga implementada de Godspeed. Os efeitos mecânicos dos níveis de exaustão dependem da regra da campanha e continuam sob decisão da mesa.

Parry concede +3 CA contra o ataque atual, como um efeito identificado. Após resolver o ataque, abra o marcador e encerre a defesa. Ele não acumula consigo mesmo. Kirin consome uma carga na canalização e o botão passa a Disparar; disparar não consome uma segunda carga. Clone mantém um marcador ativo e não pode ser criado novamente até encerrar o anterior. Efeitos em inimigos são referências para a mesa, sem ficha ou rolagem de inimigos.

## Identidade, animações e persistência

Os arquivos fornecidos pelo jogador em `externalAssets/` são copiados sem alteração para `app/assets/`. Os ícones aparecem nas técnicas e no catálogo; Flash Bang usa um ícone vetorial de luz, pois não há um arquivo próprio entre os assets fornecidos. As sete seções têm ícones vetoriais locais.

Cada técnica possui uma cena distinta:

| Habilidade | Encenação |
| --- | --- |
| Lightning Reaver | Três cortes sequenciais em ângulos diferentes, com estilhaços elétricos |
| Lightning Spear | Acúmulo de energia seguido de feixe horizontal e anel de impacto |
| Shunpo | Deslocamento rápido com rastros e imagens residuais |
| Clone | Silhueta original e uma cópia elétrica se separando; dissipação ao encerrar |
| Energy Transmutation | Núcleo de energia e órbita com as cinco cores elementais |
| Flash Bang | Íris luminosa e raios dourados que se expandem |
| Parry | Encontro de lâminas, defesa circular e faíscas metálicas |
| Godspeed | Retrato transformado, linhas de aceleração, anéis e descargas em camadas |
| Kirin | Céu carregado e invocação na canalização; descida da criatura, raio e impacto ao disparar |
| War Lotus | Corrupção se espalhando, entidade da espada, domínio rubro e raios pretos de borda vermelha |

Godspeed troca os retratos pelo asset de cabelos brancos, energiza painéis e controles de todas as seções e emite raios do banner para a interface. A War Lotus tem prioridade de paleta: a ficha inteira passa para preto/vermelho e os raios ganham núcleo preto e contorno vermelho. Se Godspeed continuar ativo, o retrato transformado é mantido com tonalidade corrompida. Embainhar a espada restaura a apresentação de Godspeed; desativar ambas restaura a apresentação base. O ícone da War Lotus representa a espada/entidade e não substitui o rosto do Supros.

Animações não executam regras nem bloqueiam cliques. Uma ação só dispara sua cena após salvar com sucesso. Reabrir a ficha restaura forma, paleta e retrato sem repetir a cena de ativação. Há opção para desligar animações, inclusive os raios persistentes, e suporte à preferência de movimento reduzido do sistema.

O formato atual é v3, no mesmo IndexedDB e endereço local. Estados e backups v1/v2 são migrados preservando recursos, notas, transformações e histórico. Efeitos que antes usavam o relógio do grupo passam a usar o turno individual com a mesma quantidade de ocorrências restantes. O alvo do efeito é preservado. A versão anterior à migração fica em `before-upgrade-v3`, e os snapshots do histórico também são convertidos para que desfazer não reintroduza relógios antigos.
