# 19/08/2026 — Página "MCP e API" publicada como apoio do bloco de MCP

## O que entrou

`mcp-vs-api.html` — explicador de **MCP × API para quem não programa**, publicado em
https://inovajus.github.io/mcp-vs-api.html. Serve o bloco "O MCP em duas metades (30 min)",
antecipado para 19/08 às 14h45 na `grade-encontros-restantes.html`.

Estrutura da página, em ordem: analogia do restaurante (cozinha = API, cardápio = MCP, garçom = o
aplicativo com o modelo) com diagrama animado · o que cada um é em uma frase · o painel de 12 fios
contra 7, que troca ao clique · comparação em 9 eixos · as três primitivas (tools/resources/prompts)
com exemplo de vara · o fluxo de uma chamada com o ator de cada passo, destacando a aprovação humana ·
quatro confusões que custam projeto · decisor interativo de 4 perguntas · glossário de 12 termos.

Os blocos técnicos ficam recolhidos atrás de um botão **Modo simples / Modo completo**: o leigo lê a
página inteira sem tropeçar em `tools/list`, JSON-RPC e `stdio`, e quem quiser o nome técnico abre.

## Regra de publicação aplicada

A versão de trabalho tinha modo de edição de conteúdo (padrão das páginas que faço para o Victor). A
**regra do README deste repo, de 02/08/2026, proíbe isso em página de participante** — e exige remoção
do arquivo, não ocultação por CSS. Foram removidos do HTML publicado: o botão "Editar conteúdo", a
barra flutuante, o CSS do modo de edição, o módulo de JS inteiro, a restauração via `localStorage` e
os 32 atributos `data-edit`. Conferido por grep no arquivo servido: 0 ocorrências de
`contenteditable`, `editbar`, `data-edit`, `btnEdit`. A página entrou também no rol "sem edição" do
README.

## Onde a página vive (uma cópia só)

Canônica **aqui**, no `inovajus-site`. Ela nasceu em `01-jfce-operacional/curso-servidor-ia` (commit
`d1647b9`, 18/08) e foi movida para cá no dia seguinte (`7aabaa6` lá remove o arquivo e aponta o
README para a URL). O `06-claude-toolkit/mcp-tutorial` tem só um ponteiro no fim do `tutorial-mcp.md`
— aquele documento cobre os conectores instalados na estação do Victor, este cobre o conceito.

Existe também um artifact privado da versão **com** modo de edição:
https://claude.ai/code/artifact/557b6bb2-b750-4e6b-bd68-7a0cb8756eae — é a versão de trabalho do
Victor, não a de participante. Republicar sempre passando essa URL.

## Design

Design system **MIRA**, tema `corporate-blue`: os 16 tokens no bloco `@MIRA:THEME:START/END`, mais
`--mira-warn` declarado ali dentro (o tema não tem token semântico de alerta, e as armadilhas
precisavam). Zero cor literal fora do bloco, medido por grep. Tipografia Bricolage Grotesque + Inter +
IBM Plex Mono. **Sem CDN**: animações em CSS/SVG nativo, não em D3 — a Regra Zero do MIRA é sobre a
animação viva, não sobre a biblioteca. Abre atrás do firewall da JFCE e sem internet.

## Verificação (saída literal)

```
[N1] contenteditable 0 | editbar 0 | data-edit 0 | btnEdit 0   (no arquivo servido)
[N1] estrutura HTML 0 erros | ids do JS ausentes: nenhum | node --check exit 0
[N1] 0 cores fora do bloco @MIRA:THEME | 9 seções / 9 eixos / 12 termos
[N3] navegador: decisor "Sim,Sim,Não,Não" -> Use a API direta; painel troca para 7 conexões;
     modo completo abre 2/2; sem scroll lateral; console sem erro
[N3] link publicado: HTTP/1.1 200 OK, 55.524 bytes, text/html
     âncoras conferidas no corpo servido: "A cozinha, o cardápio e o garçom" 1,
     "Doze fios ou sete" 1, "Quatro confusões que custam projeto" 1, "Glossário de bolso" 1,
     "Qual usar no seu caso" 1, "@MIRA:THEME:START" 1, "Bricolage Grotesque" 1
```

Não verificado: Firefox, Safari, leitor de tela. A página **não foi linkada** a partir da grade nem do
material do aluno — mexer em página que vai ao ar hoje às 14h45 é risco desnecessário sem o Victor
pedir; o link é compartilhado direto.

## Quirks de ambiente

- `wsl.exe bash -lc '...'` **mastiga aspas** quando o comando tem `printf '%-40s'`, heredoc e aspas
  aninhadas: o script chega corrompido e o resultado sai como lixo silencioso (`1/n`). Para
  qualquer script não trivial, escrever num `.sh`, rodar `sed -i 's/\r$//'` e executar o arquivo.
- Scripts Python rodando no Windows gravam **CRLF** em arquivo de repo do WSL. Sempre
  `io.open(..., newline='')` (preserva) ou `newline='\n'`, senão o diff vem com o arquivo inteiro
  reescrito. Aconteceu em 18/08 e custou um commit de conserto.
- O `git` do Windows recusa os repos do WSL por UNC ("dubious ownership"): rodar git por `wsl.exe`.
