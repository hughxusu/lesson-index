import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "教程索引",
  description: "教程索引",
  base: '/lesson-index/',
  markdown: {
    math: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/lesson-index/logo_icon.jpeg' }],
  ],
  themeConfig: {
    outline: {
      label: '导航',
    },
    footer: {
      copyright: '徐夙 &copy; 2026 北方工业大学',
    },
  }
})
