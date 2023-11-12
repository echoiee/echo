import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/echo/',
  title: "闲隙札记",
  description: "随心所写",
  head: [['link', { rel: 'icon', href: '/favicon.jpg' }]],
  themeConfig: {
    logo:"/favicon.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/index' },
      { text: 'Docker学习记录', link: '/docker/index' },
      { text: 'vite&webpack', link: '/vite&webpack' },
    ],

    sidebar:{
      '/frontend':[
        {
          text: 'element框架的form组件二次封装',
          link: "/frontend/js/day-1",
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/echoiee' }
    ]
  }
})
