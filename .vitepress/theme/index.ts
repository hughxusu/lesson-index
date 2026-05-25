// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme, // 继承 VitePress 的默认主题
  /* 如果后续有需要，你还可以在这里注册全局组件或做其他扩展 */
}