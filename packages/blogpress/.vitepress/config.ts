import type { Theme } from '@sugarat/theme'
import process from 'node:process'
import { getThemeConfig } from '@sugarat/theme/node'
import * as _ from 'radash'
import { defineConfig } from 'vitepress'
import config from './config.base'

const baseUrl = process.env.BASE_URL ?? 'https://www.dmsrs.org'
const relativeUrl = process.env.RELATIVE_URL ?? ''
const weekly = `${baseUrl}/weekly`
const titleText = '代码'
const authorText = 'Calm Ripple'
const descriptionText = '天道酬勤，恒以致遠（大前端相关技术分享）'
const copyrightText = `${titleText} 2006 - ${new Date().getFullYear()}`

const RSSWeekly: Theme.RSSOptions = {
  title: '视野修炼 - 技术周刊',
  baseUrl,
  description: '每周会精选出一些 优质&有趣 的内容做推送（大前端为主），包含但不限于 优质文章，开源库，工具网站，有意思的知识',
  id: weekly,
  link: weekly,
  language: 'zh-cn',
  filter(value) {
    return value.url.startsWith('/weekly/') && !value.url.endsWith('/weekly/')
  },
  image: `${relativeUrl}/assert/weelylogo.png`,
  favicon: `${baseUrl}/favicon.ico`,
  copyright: copyrightText,
  url: `${baseUrl}/weekly.rss`,
  icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5155" width="200" height="200"><title>收容报告 RSS 订阅</title><path d="M831.8 128l-640 0c-35.3 0-64 28.7-64 64l0 640c0 35.3 28.7 64 64 64l640 0c35.3 0 64-28.7 64-64L895.8 192C895.8 156.7 867.1 128 831.8 128zM707.4 193l0 185.8L673 344.3c-6.4-6.4-14.9-9.5-23.3-9.4-8.4-0.2-16.9 2.9-23.3 9.4L592 378.8 592 193 707.4 193zM831.8 833.1l-640 0L191.8 193 528 193l0 263c0 0.5 0 1.1 0 1.6 0 0.3 0 0.5 0.1 0.7 0 0.3 0 0.5 0.1 0.8 0 0.3 0.1 0.6 0.1 0.9 0 0.2 0 0.4 0.1 0.6 0 0.3 0.1 0.7 0.2 1 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.2 0.7 0.3 1 0.1 0.2 0.1 0.4 0.2 0.5 0.1 0.3 0.2 0.6 0.3 0.9 0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.2 0.5 0.3 0.8 0.1 0.2 0.2 0.5 0.3 0.7 0.1 0.2 0.2 0.5 0.3 0.7 0.1 0.3 0.2 0.5 0.3 0.8 0.1 0.2 0.2 0.4 0.3 0.6 0.1 0.3 0.3 0.6 0.4 0.8 0.1 0.2 0.2 0.3 0.3 0.5 0.2 0.3 0.3 0.6 0.5 0.9 0.1 0.2 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.6 0.6 0.9 0.1 0.1 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.6 0.6 0.8 0.1 0.2 0.2 0.3 0.4 0.5 0.2 0.2 0.4 0.5 0.6 0.7 0.2 0.2 0.4 0.4 0.5 0.6 0.2 0.2 0.3 0.4 0.5 0.6 0.7 0.8 1.5 1.5 2.2 2.2 0.2 0.2 0.4 0.3 0.6 0.5 0.2 0.2 0.4 0.4 0.6 0.5 0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.3 0.2 0.6 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.4 0.9 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.3 0.9 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.1 0.6 0.3 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.9 0.3 0.2 0.1 0.4 0.1 0.5 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0.2 0.2 0 0.4 0.1 0.5 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0 0.6 0.1 0.9 0.1 0.3 0 0.5 0 0.8 0.1 0.2 0 0.5 0 0.7 0.1 0.5 0 1.1 0 1.6 0 0 0 0 0 0 0l0 0c0.5 0 1.1 0 1.6 0 0.3 0 0.5 0 0.7-0.1 0.3 0 0.5 0 0.8-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.4 0 0.6-0.1 0.3 0 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.3-0.1 0.5-0.1 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.9-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.5-0.2 0.8-0.4 0.2-0.1 0.4-0.2 0.6-0.3 0.3-0.1 0.6-0.3 0.8-0.4 0.2-0.1 0.3-0.2 0.5-0.3 0.3-0.2 0.6-0.3 0.9-0.5 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.9-0.6 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.6 0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.2 0.4-0.3 0.6-0.5 0.4-0.4 0.8-0.7 1.1-1.1l67.1-67.1 67.1 67.1c0 0 0 0 0 0 0.4 0.4 0.7 0.7 1.1 1.1 0.2 0.2 0.4 0.3 0.6 0.5 0.2 0.2 0.4 0.4 0.6 0.5 0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.3 0.2 0.6 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.4 0.9 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.3 0.9 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.1 0.6 0.3 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.9 0.3 0.2 0.1 0.4 0.1 0.5 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0.2 0.2 0 0.4 0.1 0.5 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0 0.6 0.1 0.9 0.1 0.3 0 0.5 0 0.8 0.1 0.2 0 0.5 0 0.7 0.1 1.1 0.1 2.1 0.1 3.2 0 0.3 0 0.5 0 0.7-0.1 0.3 0 0.5 0 0.8-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.4 0 0.6-0.1 0.3 0 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.3-0.1 0.5-0.1 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.9-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.2 0.6-0.3 0.3-0.1 0.6-0.3 0.8-0.4 0.2-0.1 0.3-0.2 0.5-0.3 0.3-0.2 0.6-0.3 0.9-0.5 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.9-0.6 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.6 0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.2 0.4-0.3 0.6-0.5 0.8-0.7 1.5-1.5 2.2-2.2 0.2-0.2 0.3-0.4 0.5-0.6 0.2-0.2 0.4-0.4 0.5-0.6 0.2-0.2 0.4-0.5 0.6-0.7 0.1-0.2 0.2-0.3 0.4-0.5 0.2-0.3 0.4-0.6 0.6-0.8 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.4-0.6 0.6-0.9 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.3-0.6 0.5-0.9 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.3 0.3-0.6 0.4-0.8 0.1-0.2 0.2-0.4 0.3-0.6 0.1-0.3 0.2-0.5 0.4-0.8 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.3 0.2-0.5 0.3-0.8 0.1-0.2 0.1-0.4 0.2-0.6 0.1-0.3 0.2-0.6 0.3-0.9 0.1-0.2 0.1-0.4 0.2-0.5 0.1-0.3 0.2-0.6 0.3-1 0-0.2 0.1-0.3 0.1-0.5 0.1-0.3 0.2-0.7 0.2-1 0-0.2 0.1-0.4 0.1-0.5 0.1-0.3 0.1-0.7 0.2-1 0-0.2 0.1-0.4 0.1-0.6 0-0.3 0.1-0.6 0.1-0.9 0-0.3 0-0.5 0.1-0.8 0-0.2 0-0.5 0.1-0.7 0-0.5 0-1.1 0-1.6L771.1 193l60.3 0L831.4 833.1z" p-id="5156"></path><path d="M468.7 416c0 17.7-14.3 32-32 32l-148 0c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l148 0C454.4 384 468.7 398.3 468.7 416L468.7 416z" p-id="5157"></path><path d="M772.3 565c0 17.7-14.3 32-32 32L291.3 597c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l449.1 0C758 533 772.3 547.3 772.3 565L772.3 565z" p-id="5158"></path><path d="M771.4 702c0 17.7-14.3 32-32 32L291.3 734c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l448.2 0C757.1 670 771.4 684.4 771.4 702L771.4 702z" p-id="5159"></path></svg>',
  ariaLabel: '收容报告RSS订阅',
  filename: 'weekly.rss',
}
const RSS: Theme.RSSOptions = {
  title: titleText,
  baseUrl,
  description: descriptionText,
  id: baseUrl,
  link: baseUrl,
  language: 'zh-cn',
  image: `${relativeUrl}/assert/sitelogo.png`,
  favicon: `${baseUrl}/favicon.ico`,
  copyright: copyrightText,
  url: `${baseUrl}/feed.rss`,
  filter(value) {
    return !value.url.endsWith('/weekly/') && !value.url.endsWith('/case/bad/')
  },
  /**
   * 最近100篇，避免太大影响解析
   */
  limit: 100,
}

const blogTheme = getThemeConfig({
  imageStyle: {
    // coverPreview: [
    //   // 七牛云
    //   {
    //     rule: '//img.cdn.sugarat.top',
    //     suffix: '~cover.webp',
    //   },
    //   // 又拍云CDN
    //   {
    //     rule: '//cdn.upyun.sugarat.top',
    //     suffix: '-cover',
    //   },
    // ],
  },
  themeColor: 'el-blue',
  RSS: [RSS, RSSWeekly],
  author: authorText,
  comment: {
    repo: 'ripplejourney/ripplejourney.github.io',
    repoId: 'R_kgDONnzJWA',
    category: 'Comments',
    categoryId: 'DIC_kwDONnzJWM4CmBcQ',
    inputPosition: 'top',
  },
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://cdn.jsdelivr.net/gh/open-dmsrs/live2d-models@master/models/Senko_Normals/senko.model3.json',
      },
      {
        path: 'https://cdn.jsdelivr.net/gh/open-dmsrs/live2d-models@master/models/mai/model.json',
      },
      {
        path: 'https://cdn.jsdelivr.net/gh/open-dmsrs/live2d-models@master/models/bilibili-33/index.json',
      },
    ],
    libraryUrls: {
      complete: 'https://unpkg.com/oh-my-live2d@latest',
    },
  },
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇微信👇---👇打赏👇' },
      {
        type: 'image',
        src: '/donate3.png',
      },
      {
        type: 'text',
        content: '欢迎大家私信&加群交流',
      },
      {
        type: 'button',
        content: '关于作者',
        link: '/aboutme',
      },
      {
        type: 'button',
        content: '加群交流',
        props: {
          type: 'success',
        },
        link: '/group',
      },
    ],
    duration: -1,
    twinkle: true,
  },
  friend: {
    list: [
      {
        nickname: '一叶浮萍',
        des: '幽谷清风 深潭碧波 寂清静宁',
        avatar:
          `${relativeUrl}/assert/avatar/logo-white.png`,
        url: 'https://www.cnblogs.com/68681395',
      },

    ],
    random: true,
    limit: 6,
  },
  search: {
    showDate: true,
    pageResultCount: 4,
  },
  recommend: {
    showSelf: true,
    nextText: '下一页',
    style: 'sidebar',
  },
  authorList: [
    {
      nickname: titleText,
      url: `${baseUrl}/aboutme.html`,
      des: '天道酬勤，恒以致遠',
    },
  ],
  footer: {
    copyright: copyrightText,
    icpRecord: {
      name: '京ICP备14018270号',
      link: 'https://beian.miit.gov.cn/',
    },
    message: '',
  },
  hotArticle: {
    pageSize: 12,
  },
  buttonAfterArticle: {
    openTitle: '微信打赏支持',
    closeTitle: '下次一定',
    content: '<img src="/donate3.png">',
    icon: 'wechatPay',
  },
})

const extraHead: any
  // eslint-disable-next-line style/multiline-ternary
  = process.env.NODE_ENV === 'production' ? [
    [
      'script',
      {
        charset: 'UTF-8',
        id: 'BAIDU_TONGJI',
        defer: true,
        src: 'https://hm.baidu.com/hm.js?b48d57d263dacefaa9070edcdf045a6b',
      },
    ],
    [
      'script',
      {},
      '!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3IeB5Nny4fc4uQvw",ck:"3IeB5Nny4fc4uQvw",autoTrack:true,hashMode:true,screenRecord:true});',
    ],
    [
      'script',
      {},
      '!(function(c,i,e,b){var h=i.createElement("script");var f=i.getElementsByTagName("script")[0];h.type="text/javascript";h.crossorigin=true;h.onload=function(){new c[b]["Monitor"]().init({id:"3IeDjeHzDHEi0y90",sendSuspicious:true});};f.parentNode.insertBefore(h,f);h.src=e;})(window,document,"https://sdk.51.la/perf/js-sdk-perf.min.js","LingQue");',
    ],
  ] : []

config.head = undefined
config.themeConfig.nav = undefined
config.themeConfig.socialLinks = undefined
config.extends = undefined
config.vite.plugins = []

export default defineConfig(_.assign(config, {
  base: relativeUrl,
  extends: blogTheme,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: `${baseUrl}`,
  },
  lang: 'zh-cn',
  title: `${titleText}`,
  description:
    '代码收容所的个人博客，记录随笔与学习笔记，大前端相关的知识，项目管理，股票等',
  head: [

    ['meta', { name: 'author', content: `${titleText}` }],

    ...extraHead,
  ],

  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern:
        'https://github.com/ripplejourney/ripplejourney.github.io/tree/master/packages/blogpress/:path',
      text: '去 GitHub 上编辑内容',
    },
    nav: [
      {
        text: '关于我',
        link: '/aboutme',
      },
      {
        text: '云',
        items: [
          { text: 'devops', link: '/cloud/devops/' },
        ],
      },
      {
        text: '笔记',
        items: [
          { text: '技术教程', link: '/technology/learn/' },
          { text: '模板工程', link: '/technology/tpl/' },
          { text: '源码学习', link: '/technology/source/' },
          { text: '技术概念', link: '/technology/theory/' },
          { text: '个人作品', link: '/technology/works/' },
          { text: '学习笔记', link: '/technology/study/' },
        ],
      },
      {
        text: '计算机',
        items: [
          { text: '算法与数据结构', link: '/computerBase/algorithm/' },
          { text: '操作系统', link: '/computerBase/os/' },
          { text: '计算机网络', link: '/computerBase/Internet/' },
          { text: '设计模式', link: '/computerBase/design/' },
        ],
      },
      {
        text: '前端',
        items: [
          { text: 'javascript', link: '/bigWeb/js/' },
          { text: 'vue', link: '/bigWeb/vue/' },
          { text: 'html', link: '/bigWeb/html/' },
          { text: 'css', link: '/bigWeb/css/' },
          { text: '🌏浏览器专题', link: '/bigWeb/browser/' },
          { text: 'Web性能优化', link: '/bigWeb/performance/' },
          { text: 'regexp', link: '/bigWeb/regexp/' },
          { text: 'node', link: '/bigWeb/node/' },
        ],
      },
      {
        text: '代码',
        items: [
          { text: 'github', link: '/coding/github/' },
        ],
      },
      {
        text: '面试',
        items: [

          { text: '手撕代码', link: '/interview/code/' },
          { text: '性能优化', link: '/interview/performance/' },
          { text: '综合问题', link: '/interview/other/' },
          { text: '剑指offer', link: '/interview/offer/' },
          { text: '小程序', link: '/interview/mini/' },
        ],
      },

      {
        text: '作品',
        items: [
          {
            text: 'POCO Mapper(dotnet)',
            link: 'https://github.com/netniubility/EmitMapper',
          },

        ],
      },
      {
        text: '周刊',
        link: '/weekly',

      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ripplejourney/ripplejourney.github.io' },
      {
        icon: 'x',
        link: 'https://x.com/cnJimbo',
      },
    ],
  },
}))
