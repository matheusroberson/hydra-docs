import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hydra Docs",
  description: "Technical documentation for Hydra Launcher",

  rewrites: {
    'en/:rest*': ':rest*'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      dir: "ltr"
    },
    pt: {
      label: 'Português',
      lang: "pt-BR",
      dir: "ltr"
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "What is Hydra Launcher?", link: "/" }],
      },
      {
        text: "Guides",
        items: [
          { text: "Getting started", link: "/getting-started" },
          { text: "Download sources", link: "/download-sources" },
          { text: "Custom themes", link: "/themes" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hydralauncher/hydra-docs" },
      { icon: "x", link: "https://x.com/hydralauncher" },
      { icon: "tiktok", link: "https://tiktok.com/@hydralauncher" },
      { icon: "telegram", link: "https://t.me/hydralauncher" },
      { icon: "reddit", link: "https://reddit.com/r/hydralauncher/" },
    ],
  },
});
