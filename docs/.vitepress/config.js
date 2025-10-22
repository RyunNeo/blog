// docs/.vitepress/config.js
export default {
  base: '/blog/',
  // 站点级选项
  title: "前端逆光者", // 网站标题
  description: "记录生活，记录日常，记录学习，记录成长", // 网站描述

  themeConfig: {
    // 主题级选项
    nav: [
      { text: '关于', link: '/about' },
      {
        text: '大前端',
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },
        ]
      }
    ],
    sidebar: {
      "/bigFrontEnd/html/": {
        text: "html",
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "html1", link: "/bigFrontEnd/html/html1" },
          { text: "html2", link: "bigFrontEnd/html/html2" },
        ],
      },
      "/bigFrontEnd/css/": {
        text: "css",
        items: [
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "css1", link: "/bigFrontEnd/css/css1" },
          { text: "css2", link: "/bigFrontEnd/css/css2" },
        ],
      },
      "/bigFrontEnd/js/": {
        text: "js",
        items: [
          { text: "js", link: "/bigFrontEnd/js/" },
          { text: "js1", link: "/bigFrontEnd/js/js1" },
          { text: "js2", link: "/bigFrontEnd/js/js2" },
        ],
      },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  },
};