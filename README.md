# TZPG · Ficha do Supros

Ficha web local para acompanhar Kozuki D Supros em RPG presencial. Funciona offline depois de baixar o projeto, com controle de recursos, turnos, inventário, notas e efeitos visuais em PixiJS.

## Abrir no computador ou notebook

É necessário **Python 3** e um navegador atual com WebGL. Não é necessário instalar Node ou pacotes para jogar. A biblioteca PixiJS já está incluída no projeto.

Depois de clonar este repositório ou baixar e extrair **Code → Download ZIP**:

- **Linux/macOS:** `bash InterctivePlayerSheet/iniciar-ficha.sh`
- **Windows:** abra `InterctivePlayerSheet/iniciar-ficha.bat`, ou execute `py -3 InterctivePlayerSheet/iniciar-ficha.py`.
- **Qualquer sistema com Python no PATH:** `python InterctivePlayerSheet/iniciar-ficha.py`.

Acesse **http://localhost:8765**. Mantenha o terminal aberto enquanto joga. Use esse mesmo endereço em todas as sessões; `127.0.0.1` e `localhost` têm armazenamentos separados no navegador.

## Levar sua partida para outro dispositivo

**O GitHub guarda o aplicativo. A partida fica no navegador e precisa de backup separado.**

1. No computador atual, abra **Ajustes & backup → Exportar backup**.
2. Copie o JSON exportado para o notebook por um meio de sua escolha.
3. Baixe o projeto no notebook, inicie o servidor e abra **http://localhost:8765**.
4. Abra **Ajustes & backup → Importar backup**, escolha o JSON, confira a prévia e confirme.
5. Confira vida, cargas, notas e turno antes de jogar. Ao retornar ao outro computador, repita a exportação/importação na direção inversa.

Não há sincronização automática entre dispositivos. Atualizar o código na mesma máquina/endereço/perfil mantém os dados locais. Guarde uma cópia do backup fora do navegador.

## Prévia dos efeitos

Sem consumir recursos da partida:

- [Godspeed](http://localhost:8765/godspeed-preview.html)
- [War Lotus e Kirin](http://localhost:8765/combat-preview.html)

As animações respeitam movimento reduzido e podem ser desligadas em Ajustes & backup. Não há rolagens digitais automáticas: resultados são resolvidos na mesa.

## Desenvolvimento

```bash
cd InterctivePlayerSheet/app
npm test
```

Os testes usam o runner nativo do Node.js (20 ou mais recente). A execução do aplicativo usa Python 3 e arquivos estáticos, sem build.

Consulte [o guia da ficha](InterctivePlayerSheet/README.md), [as regras de combate](InterctivePlayerSheet/COMBATE.md) e [o contexto de desenvolvimento](InterctivePlayerSheet/CONTEXTO_E_PROXIMOS_PASSOS.md).

Os assets fornecidos estão em `externalAssets/`; cópias usadas pelo aplicativo ficam em `InterctivePlayerSheet/app/assets/`. PixiJS 8.22.0 está em `app/vendor/pixi/`, acompanhado de sua licença MIT. O sprite transparente de Kirin em `app/assets/fx/` foi gerado para esta interface com a referência fornecida pelo jogador; veja a proveniência nessa pasta.
