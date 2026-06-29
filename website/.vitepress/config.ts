import { defineConfig } from 'vitepress'

const enNav = [
  { text: 'Home', link: '/' },
  { text: 'Getting Started', link: '/guide/getting-started' },
  { text: 'Features', link: '/guide/features' },
  { text: 'Architecture', link: '/guide/architecture' },
  { text: 'Integrations', link: '/guide/integrations' },
  { text: 'Benchmark', link: '/guide/benchmark' },
  { text: 'GitHub', link: 'https://github.com/oceanbase/powermem' },
]

const zhNav = [
  { text: '主页', link: '/zh/' },
  { text: '快速开始', link: '/zh/guide/getting-started' },
  { text: '特性', link: '/zh/guide/features' },
  { text: '架构', link: '/zh/guide/architecture' },
  { text: '集成', link: '/zh/guide/integrations' },
  { text: '性能评测', link: '/zh/guide/benchmark' },
  { text: 'GitHub', link: 'https://github.com/oceanbase/powermem' },
]

const enSidebar = {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Quick Start', link: '/guide/getting-started' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Configuration', link: '/guide/configuration' },
      ],
    },
    {
      text: 'Core Features',
      items: [
        { text: 'Overview', link: '/guide/features' },
        { text: 'Architecture', link: '/guide/architecture' },
        { text: 'Hybrid Retrieval', link: '/guide/hybrid-retrieval' },
        { text: 'Memory Lifecycle', link: '/guide/memory-lifecycle' },
        { text: 'Experience & Skill', link: '/guide/experience-skill' },
      ],
    },
    {
      text: 'Advanced',
      items: [
        { text: 'Integrations', link: '/guide/integrations' },
        { text: 'Benchmark', link: '/guide/benchmark' },
        { text: 'Multi-Agent', link: '/guide/multi-agent' },
        { text: 'CLI Reference', link: '/guide/cli-reference' },
      ],
    },
  ],
}

const zhSidebar = {
  '/zh/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '快速上手', link: '/zh/guide/getting-started' },
        { text: '安装说明', link: '/zh/guide/installation' },
        { text: '配置参考', link: '/zh/guide/configuration' },
      ],
    },
    {
      text: '核心特性',
      items: [
        { text: '概览', link: '/zh/guide/features' },
        { text: '架构说明', link: '/zh/guide/architecture' },
        { text: '混合检索', link: '/zh/guide/hybrid-retrieval' },
        { text: '记忆生命周期', link: '/zh/guide/memory-lifecycle' },
        { text: '经验与技能', link: '/zh/guide/experience-skill' },
      ],
    },
    {
      text: '进阶',
      items: [
        { text: '集成生态', link: '/zh/guide/integrations' },
        { text: '性能评测', link: '/zh/guide/benchmark' },
        { text: '多智能体', link: '/zh/guide/multi-agent' },
        { text: 'CLI 参考', link: '/zh/guide/cli-reference' },
      ],
    },
  ],
}

export default defineConfig({
  title: 'PowerMem',
  description: 'Persistent, self-evolving memory for AI agents — Accurate, Agile, Affordable',

  base: '/powermem/',
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:image', content: '/logo-light.svg' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        editLink: {
          pattern: 'https://github.com/oceanbase/powermem/edit/main/website/:path',
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'Released under the Apache 2.0 License.',
          copyright: 'Copyright © 2025-2026 PowerMem Contributors (OceanBase)',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        editLink: {
          pattern: 'https://github.com/oceanbase/powermem/edit/main/website/:path',
          text: '在 GitHub 上编辑此页',
        },
        footer: {
          message: '基于 Apache 2.0 协议发布。',
          copyright: 'Copyright © 2025-2026 PowerMem 贡献者 (OceanBase)',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '目录',
        darkModeSwitchLabel: '主题',
      },
    },
  },

  themeConfig: {
    logo: {
       light: '/logo-light.svg',
       dark: '/logo-dark.svg',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oceanbase/powermem' },
      { icon: 'x', link: 'https://x.com/OceanBaseDB' },
      { icon: 'discord', link: 'https://discord.com/invite/74cF8vbNEs' },
    ],
  },

  markdown: {
    lineNumbers: false,
  },
})
