# Temas Customizados

::: warning :construction: TRABALHO EM PROGRESSO
Essa página é um trabalho em progresso e ainda não está completa.
:::

Hydra permite que você adicione temas customizados para que tenha a aparência que você quiser.

## Como instalar um tema customizado

Temas estão disponíveis em nossa [Loja de Temas](https://hydrathemes.shop/). Você pode instalar facilmente um tema apenas clicando no botão "Instalar Tema".

![Hydra Themes Shop Screenshot](../images/theme-shop.png)

## Como criar um tema customizado

Vá na aba Aparência em Configurações e clique no botão "Criar".

![Hydra Launcher Settings page](../images/settings-page.png)

Escolha um nome para seu tema
![Hydra create theme modal](../images/create-theme-modal.png)

Clique em "Habilitar tema" para tornar o atual tema ativo

![Hydra Appearance tab with active theme](../images/activate-theme.png)

Clique no botão de Editar para começar a customizar

![Hydra Appearance tab with active theme](../images/theme-edit-button.png)

Duas janelas irão abrir. Uma é o editor de tema, onde você irá escrever o CSS para seu tema customizado, conquistas e selecionar um som customizado para uma conquista. A outra janela é o "Dev Tools" da janela principal, onde você será capaz de debugar e ver todo o atual HTML e CSS para ajudar a você escrever o tema.

![Hydra Theme editor](../images/theme-editor-empty.png)

E agora você pode fazer seu Hydra Launcher parecer do jeito que você quiser.

Você também pode adicionar um som customizado para uma conquista no seu tema. O arquivo do som deve ser colocado na pasta principal e deve ser nomeado como `achievement` com uma das seguintes extensões: `mp3`, `ogg`, `wav`, ou `m4a`. Esse som será tocado quando um conquista for desbloqueada.

Por exemplo, esse é o CSS do tema para a próxima screenshot:

```CSS
.sidebar,
.header,
.container__content,
.bottom-panel {
  background: transparent;
}

body {
  color: #9e9e9e;
}

#root {
  background: url(https://preview.redd.it/l5gcq3y6ggk41.png?auto=webp&s=c886c7db543b1ff5b7e68df6bd76f1fb7ee8a6c7)
    #000;
  background-position: top;
  background-repeat: no-repeat;
}

.text-field-container__text-field--dark,
.text-field-container__text-field--primary,
.header__search,
.game-item,
.settings__content,
.catalogue__filters-container,
.friends-box__box,
.user-stats__box,
.recent-games__box,
.sidebar {
  background-color: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(8px);
}

.container__content .button--outline {
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
}

.settings-download-sources__item,
.download-group__item,
.game-item {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
```

![Hydra Theme editor with a custom theme code](../images/theme-editor.png)

## Como publicar seu tema personalizado

::: warning
Para esse passo, você precisará de um conhecimento básico em [Git](https://git-scm.com/) e [GitHub](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git).
:::

Para publicar seu tema você precisa abrir uma Pull Request no repositório do "Hydra Themes".

Para isso, siga os seguintes passos:

1. Faça um Fork do repositório hydra-themes
2. Crie uma pasta e arquivos para seu tema
3. Faça o Commit e Push para seu tema
4. Abra uma Pull Request
5. Espere seu tema ser revisado pelos moderadores

### Faça Fork do repositório hydra-themes

Comece entrando com sua conta do Github, vá para o Hydra Themes na [página de fork](https://github.com/hydralauncher/hydra-themes/fork)

Faça um fork e então clone o repositório para sua máquina.

Você pode clonar seu fork com o comando git clone: `git clone https://github.com/<github-username>/hydra-themes.git`

### Crie uma pasta e arquivos para seu tema

Agora você precisa criar seu tema dentro do projeto. Aqui você pode abrir o projeto usando "Visual Studio Code", crie uma pasta "My Awesome Theme-\<my friend code>" dentro da pasta "themes" e adicione uma screenshot do tema e o arquivo .css contendo todo o código que você escreveu dentro do inicializador.

Coisas importantes:

- O nome do arquivo da screenshot deve ser `screenshot` e a extensão do arquivo de ser uma das seguintes opções: `png, webp, jpg, jpeg, avif, heic, heif`.
- A extensão do arquivo css deve ser `.css`.
- Você pode opcionalmente adicionar um arquivo de som customizado para conquistas. O nome desse arquivo de ser `achievement` e deve ter uma das seguintes opções para extensão: `mp3`, `ogg`, `wav`, ou `m4a`.
- Você deve adicionar seu "friend code" ao nome da pasta. Pull Requests que não tem um "friend code", ou que possuem um "friend code" que não pertencem a você, não irão ser aceitos.
- Você não deve mudar nenhum dos outros arquivos que não pertencem ao seu tema.

![Visual Studio code with hydra-theme repository](../images/hydra-theme-project.png)

### Faça o Commit e Push para seu tema

1. Stage os arquivos do seu tema: `git add .`
2. Commit suas mudanças: `git commit -m 'Creating my theme'`
3. Push suas mudanças: `git push`

### Abra uma Pull Request

1. Vá para a página de fork
2. Clique em "Contribute"
3. Clique em "Open pull request"
4. Clique em "Create pull request"

![Hydra Theme Fork](../images/github-fork.png)

### Espere seu tema ser revisado pelos moderadores

O time do Hydra irá revisar seu tema e checar se está de acordo com as regras de criação de tema

Se tudo estiver de acordo, sua Pull Request será aprovada e depois disso, seu tema deve aparecer na loja em questão de minutos!
