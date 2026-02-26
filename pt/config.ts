export default {
  label: "Português",
  lang: "pt-BR",
  dir: "ltr",
  link: "/pt/",

  themeConfig: {
    sidebar: [
      {
        text: "Introdução",
        items: [
          {
            text: "O que é Hydra Launcher?",
            link: "/pt/index.md",
          },
        ],
      },
      {
        text: "Guias",
        items: [
          { text: "Iniciando", link: "/pt/getting-started.md" },
          {
            text: "Fontes de download", link: "/pt/download-sources.md",
          },
          { text: "Temas Customizados", link: "/pt/themes.md" },
        ],
      },
    ],
    docFooter: {
      prev: "Página Anterior",
      next: "Próxima Página",
    },
    outline: {
      label: "Nesta página",
    },
    lastUpdated: {
      text: "Atualizado em",
    },
    darkModeSwitchLabel: "Aparência",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Voltar ao topo",
  },
};
