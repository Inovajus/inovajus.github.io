# 2026-08-17 — Publicação dos tutoriais do MCP ApoIA (ChatGPT e Antigravity)

## Pedido
Criar links compartilháveis para os tutoriais do ApoIA no ChatGPT e no Antigravity
(estavam só como HTML solto em `Downloads`) e atualizar o tutorial do Claude
(`tutorial-apoia-mcp.html`) para citá-los como anexos, com links clicáveis.
Depois, a pedido: links recíprocos entre os três.

## O que foi feito
Commit `a61a949` em `Inovajus/inovajus.github.io`:

- **Novos arquivos publicados**
  - `tutorial-apoia-chatgpt.html` — https://inovajus.github.io/tutorial-apoia-chatgpt.html
  - `tutorial-apoia-antigravity.html` — https://inovajus.github.io/tutorial-apoia-antigravity.html
  - Origem: `Downloads/tutorial-apoia-chatgpt.html` e `Downloads/tutorial-apoia-antigravity_1.html`
    (o `_1` e o sem sufixo tinham md5 idêntico — `60373be077fe01bebd0c4c3a0c6c27b8`; publicado um só, sem o sufixo).

- **`tutorial-apoia-mcp.html` (Claude)**
  - Anexo A (ChatGPT): mantido o resumo, acrescido callout com link para a página completa.
  - Anexo B (Antigravity): seção nova, `id="antigravity"`, com aviso de credencial em texto puro.
  - Anexo C — Claude Code: era Anexo B; **só o rótulo mudou, a âncora `#claudecode` foi preservada**,
    então links externos existentes não quebram.
  - Índice "Nesta página" atualizado com os três anexos.

- **Links recíprocos**: cada um dos dois tutoriais novos ganhou seção `id="serie"`
  ("Tutoriais desta série") apontando para os outros dois, com entrada no índice.

## Verificação executada (saída literal)
```
tutorial-apoia-mcp.html          HTTP 200  346583 bytes
tutorial-apoia-chatgpt.html      HTTP 200  439132 bytes
tutorial-apoia-antigravity.html  HTTP 200  154911 bytes
```
Parser HTML (balanceamento de tags + âncoras internas) nos três arquivos: `RESULTADO: TODOS OK`.
Crossref lido das páginas publicadas: os três apontam para os outros dois.

## Decisões e armadilhas
- **Fonte canônica é o clone `~/02-jfce-inovacao/inovajus-site`.** Existe um espelho antigo em
  `~/01-jfce-operacional/tutorial-apoia-mcp/index.html` (byte-idêntico à versão anterior, 344.929 B)
  que **agora está desatualizado** — não editar por lá.
- Edição feita por script Python com `assert count == 1` por substituição, para falhar alto
  em vez de editar o lugar errado em arquivo de 340 KB com CSS inline.
