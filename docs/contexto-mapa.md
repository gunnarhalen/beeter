# Estrutura do Projeto Beeter

## Pastas principais e arquivos-chave

- **assets/** - Recursos estáticos do frontend
  - `css/` - Estilos (app.css, foundation.css, normalize.css, etc.)
  - `js/` - Scripts JavaScript (vendor/, foundation/, arquivos customizados como particles.js, typed.js)
  - `img/` - Imagens (logos, backgrounds, ícones)
  - `fonts/` - Fontes (Avenir Next LT Pro)
- **views/** - Templates HTML do servidor
  - `index.html` - Página inicial
  - `login.html` - Tela de login
  - `signup.html` - Cadastro de usuário
  - `profile.html` - Perfil do usuário
  - `explore.html` - Exploração de usuários
  - `favourites.html` - Favoritos
  - `edit-profile.html` - Edição de perfil
  - `404.html` - Página de erro
  - `layout/default.html` - Layout base
- **design_assets/** - Arquivos de design (PSD, AI)
- **server.js** - Servidor Hapi.js na porta 3000
- **routes.js** - Rotas da aplicação
- **package.json** - Dependências (hapi, handlebars)
- **opencode.json** - Configuração do opencode

## O que o app faz

Beeter é uma rede social e site de encontros voltado para públicos nerd e geek, onde usuários podem criar perfis, explorar outros usuários, salvar favoritos e interagir com base em interesses culturais como séries de TV, filmes, jogos e música. O app utiliza o framework Hapi.js no backend com Handlebars para renderização de templates HTML, e Foundation para o frontend responsivo. As principais funcionalidades incluem cadastro/login, visualização de perfis com informações pessoais e preferências culturais, sistema de exploração com paginação, lista de favoritos e navegação via off-canvas menu.

