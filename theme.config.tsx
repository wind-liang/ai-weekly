import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>跟上 AI</span>,
  project: {
    link: 'https://github.com/wind-liang/ai-weekly',
  },
  docsRepositoryBase: 'https://github.com/wind-liang/ai-weekly',
  footer: {
    text: '跟上 AI © 2025',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AI Articles Collection" />
      <meta property="og:description" content="每周 AI 文章整理与分享" />
      <meta property="og:type" content="website" />
      <meta name="description" content="每周 AI 文章整理与分享" />
      <meta name="keywords" content="AI, 人工智能, 机器学习, 深度学习, 文章, 资源" />
      <meta name="author" content="AI Articles Collection" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://ai.windliang.wang/" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: '搜索文章...',
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AI Articles Collection',
    }
  },
}

export default config
