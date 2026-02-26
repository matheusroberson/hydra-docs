import { defineConfig } from "vitepress";
import ptLocale from "../pt/config"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hydra Docs",
  description: "Technical documentation for Hydra Launcher",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  locales: {
    root: {
      label: "English",
      lang: "en-US",
      dir: "ltr",
    },
    pt: ptLocale
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "What is Hydra Launcher?", link: "/index.md" }],
      },
      {
        text: "Guides",
        items: [
          { text: "Getting started", link: "/getting-started.md" },
          { text: "Download sources", link: "/download-sources.md" },
          { text: "Custom themes", link: "/themes.md" },
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
