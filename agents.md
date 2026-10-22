# AGENTS.md

## Arquitetura
Site estático, sem etapa de build: o Netlify publica a raiz do repositório (`netlify.toml`).

- `index.html`: página única com todas as seções (âncoras `#sobre`, `#servicos`, `#como-funciona`, `#depoimentos`, `#faq`, `#contato`)
- `politica-de-privacidade.html`, `politica-de-cookies.html`, `termos-de-uso.html`: páginas legais. Repetem o header, o footer, o banner e o modal de cookies do `index.html`, com links `/#secao`. **Se mudar o header ou o footer, atualize as quatro páginas.**
- `css/style.css`: um único arquivo. A paleta e as fontes ficam em variáveis no `:root`. Breakpoints: 1100, 960 e 640px.
- `js/main.js`: JS puro em uma IIFE (menu, scroll spy, reveal, contadores, slider, formulário → WhatsApp, consentimento de cookies).
- `img/`: retrato e favicon.

## Decisões importantes
- O formulário não usa backend: monta o texto e abre `https://wa.me/5561998035237?text=…`. O número fica em `WHATSAPP_NUMBER` no `main.js` e nos links `wa.me` do HTML.
- O consentimento de cookies fica no `localStorage` (`ta_cookie_consent`) e dispara o evento `cookieconsent` no `document`. Scripts de analytics devem ouvir esse evento ou checar o consentimento antes de carregar.
- CRC, CNPJ, endereço, e-mails e redes sociais são placeholders fictícios (veja o README).
- Os textos estão em pt-BR. Use `<em>` nos títulos para o destaque em itálico rosado.
