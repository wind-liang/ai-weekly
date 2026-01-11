import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>跟上 AI</span>,
  project: {
    link: 'https://github.com/wind-liang/ai-weekly',
  },
  docsRepositoryBase: 'https://github.com/wind-liang/ai-weekly',
  footer: {
    text: '跟上 AI © 2026',
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?566a64844e91161b73293819cf91f7a7";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        }}
      />
    </>
  ),
  navbar: {
    extraContent: (
      <>
        <a
          href="https://coursesub.top/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: '1rem',
            color: '#666',
            textDecoration: 'none',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'color 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0070f3';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          极客时间优惠
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
            <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
          </svg>
        </a>
      </>
    ),
  },
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
