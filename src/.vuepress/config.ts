import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "紫月冰凌的文档",
  description: "vuepress-theme-hope 的文档演示",


  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    searchPlugin({
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    // searchProPlugin({
    //   indexContent: true,
    //   indexOptions: {
    //     tokenize: (text, fieldName) =>
    //       fieldName === "id" ? [text] : cut(text, true),
    //   },
    //   customFields: [
    //     {
    //       getter: ({ frontmatter }) =>
    //         <string | undefined>frontmatter.category ?? null,
    //       formatter: "分类: $content",
    //     },
    //   ],
    //   suggestDelay: 60,
    // }),
  ],

});
