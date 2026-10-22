
# Tayrine Amorim | Consultoria Contábil

Site institucional da **Tayrine Amorim**, desenvolvido para apresentar serviços contábeis, fortalecer a presença digital e facilitar o contato de clientes por meio do WhatsApp.

O projeto utiliza uma identidade visual elegante, com tons nude, champagne e grafite, além de uma interface responsiva para computadores, tablets e celulares.

## 🎨 Identidade visual

| Elemento | Cor | Código |
|---|---|---|
| Nude rosado | Nude | `#c9a28a` |
| Champagne | Bege claro | `#e9dccf` |
| Grafite | Preto acinzentado | `#2a2a2d` |
| Marfim | Fundo principal | `#faf7f3` |
| Areia | Fundo secundário | `#f2e9e0` |
| Rosa queimado | Destaques | `#b07d66` |

### Tipografia

- **Cormorant Garamond:** títulos e elementos de destaque.
- **Jost:** textos, navegação e elementos da interface.

As fontes são carregadas pelo Google Fonts.

## 🚀 Funcionalidades

- Página inicial com apresentação profissional.
- Seção sobre a profissional.
- Apresentação dos serviços contábeis.
- Seção de diferenciais e etapas do atendimento.
- Carrossel de depoimentos com controles de navegação.
- Perguntas frequentes expansíveis.
- Formulário de solicitação de orçamento.
- Integração com WhatsApp para encaminhamento de mensagens.
- Menu de navegação responsivo.
- Botão flutuante de contato pelo WhatsApp.
- Botão para retornar ao topo da página.
- Animações de entrada e contadores visuais.
- Aviso de cookies e gerenciamento de preferências.
- Página de Política de Privacidade.
- Página de Política de Cookies.
- Página de Termos de Uso.
- Metadados para mecanismos de busca e compartilhamento social.
- Favicon personalizado.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura e conteúdo das páginas |
| CSS3 | Estilização, layout e responsividade |
| JavaScript | Interações e funcionalidades dinâmicas |
| Google Fonts | Tipografia personalizada |
| WhatsApp Click to Chat | Contato e solicitação de orçamento |

O projeto é um site estático. Não foi identificada a necessidade de framework JavaScript ou de uma etapa obrigatória de compilação nos arquivos principais consultados.

## 📁 Estrutura do projeto

```text
tayrine-amorim/
├── index.html
├── politica-de-privacidade.html
├── politica-de-cookies.html
├── termos-de-uso.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    ├── favicon.svg
    ├── simbolo_tayrine_amorim.png
    ├── tayrine-amorim.jpg
    └── tayrine-amorim_perfil.jpg
```

> A estrutura acima representa os arquivos e caminhos identificados durante a consulta ao código. Confirme os nomes dos arquivos e a existência das imagens no repositório antes de utilizá-la como inventário definitivo.

### Arquivos principais

#### `index.html`

Contém a estrutura principal da landing page, a navegação, as seções institucionais, os serviços, o formulário de orçamento e o rodapé.

#### `css/style.css`

Responsável pela identidade visual, pelas variáveis de cores, pela tipografia, pelos componentes, pelo layout responsivo e pelas animações.

#### `js/main.js`

Implementa as interações da página, incluindo o menu móvel, as animações, os contadores, o carrossel, a validação do formulário e as preferências de cookies.

#### Páginas institucionais e legais

- `politica-de-privacidade.html`: informações sobre privacidade e tratamento de dados.
- `politica-de-cookies.html`: informações sobre cookies e preferências.
- `termos-de-uso.html`: condições de utilização do site.

#### Diretório `img/`

Armazena os recursos visuais utilizados pelo site, como logotipo, favicon e fotografias.

## 💻 Como executar o projeto

### Pré-requisitos

- Navegador atualizado.
- Editor de código, como Visual Studio Code (opcional).

### Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/vinicius-campelo/tayrine-amorim.git
   ```

2. Entre no diretório:

   ```bash
   cd tayrine-amorim
   ```

3. Abra o arquivo `index.html` no navegador.

Para facilitar o desenvolvimento, você também pode utilizar a extensão **Live Server** no Visual Studio Code.

## 📱 Formulário e integração com WhatsApp

O formulário valida os campos obrigatórios, organiza as informações preenchidas e abre o WhatsApp com uma mensagem preparada para envio.

O visitante precisa confirmar o envio dentro do próprio WhatsApp.

Antes da publicação, confira o número configurado em `WHATSAPP_NUMBER`, no arquivo `js/main.js`, e verifique os demais links de contato presentes nas páginas.

## 🔒 Privacidade e cookies

O projeto contém páginas dedicadas à Política de Privacidade, à Política de Cookies e aos Termos de Uso.

Antes de publicar, revise esses documentos para garantir que descrevam corretamente as práticas efetivamente adotadas pelo site.

Verifique também se as preferências de cookies são respeitadas e se eventuais cookies não essenciais dependem do consentimento aplicável.

## ✅ Checklist antes da publicação

- [ ] Confirmar nome, telefone, e-mail e endereço profissional.
- [ ] Substituir dados demonstrativos por informações reais e autorizadas.
- [ ] Conferir CNPJ e registro profissional, quando aplicáveis.
- [ ] Verificar se os depoimentos são autênticos e autorizados.
- [ ] Validar os links de WhatsApp e os dados do formulário.
- [ ] Revisar as páginas legais e as práticas de privacidade.
- [ ] Confirmar a existência de todas as imagens referenciadas.
- [ ] Testar o menu, o carrossel e o formulário em dispositivos móveis.
- [ ] Verificar a responsividade em diferentes tamanhos de tela.
- [ ] Conferir títulos, descrições e metadados para mecanismos de busca.

**Importante:** os arquivos consultados contêm dados com aparência de demonstração, incluindo referências genéricas a CNPJ, registro profissional e endereço. Corrija ou remova essas informações antes de publicar o site.

## 🔧 Manutenção e evolução

- Mantenha a paleta de cores centralizada nas variáveis CSS do bloco `:root`.
- Atualize os textos e conteúdos institucionais em `index.html`.
- Centralize as interações JavaScript em `js/main.js`.
- Preserve os caminhos relativos dos arquivos e das imagens.
- Otimize as imagens para melhorar o carregamento.
- Mantenha o código acessível, responsivo e organizado.
- Atualize este README quando houver mudanças importantes no projeto.

## 🌐 Publicação

O site pode ser hospedado em uma plataforma compatível com sites estáticos, como GitHub Pages, Vercel ou Netlify.

Após configurar a hospedagem, confira os caminhos dos arquivos, o domínio, o certificado HTTPS e o funcionamento dos formulários e links externos.

---

**Projeto:** Tayrine Amorim — Consultoria Contábil  
**Repositório:** [vinicius-campelo/tayrine-amorim](https://github.com/vinicius-campelo/tayrine-amorim)  
**Idioma:** Português brasileiro  
**Categoria:** Site institucional estático
