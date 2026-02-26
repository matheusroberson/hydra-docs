import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
  title: "Hydra Docs",
  description: "Documentação Técnica para Hydra Launcher",

  themeConfig: {


     sidebar: [
      {
        text: "Introdução",
        items: [{ text: "O que é o Hydra Launcher?", base: "/pt/", link: "index", }],
      },
      {
        text: "Guias",
        items: [
          { text: "Iniciando", base: "/pt/", link: "getting-started" },
          { text: "Instale Fontes", base: "/pt/", link: "download-sources" },
          { text: "Temas Customizados", base: "/pt/", link: "themes" },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edite esta página no GitHub'
    },


    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    outline: {
      label: 'Nesta página'
    },

    lastUpdated: {
      text: 'Atualizado em'
    },

    notFound: {
      title: 'PÁGINA NÃO ENCONTRADA',
      quote:
        'Mas se você não mudar de direção e continuar procurando, pode acabar onde está indo.',
      linkLabel: 'ir para a página inicial',
      linkText: 'Me leve para casa'
    },

    langMenuLabel: 'Alterar Idioma',

  }
})
