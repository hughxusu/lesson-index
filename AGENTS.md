# 项目AI开发专属手册 AGENTS.md

## 项目基础信息
- **项目名称**: 教程索引 (lesson-index)
- **项目类型**: VitePress 静态文档站点
- **项目简介**: 技术教程索引站点，包含算法、Python、JavaScript、AI等多个技术方向的学习大纲和作业资料
- **运行环境**: Node.js 20+

## 技术栈与开发环境
- **框架**: VitePress 2.0.0-alpha.17
- **语言**: Vue 3 + Markdown
- **构建工具**: Vite
- **包管理器**: npm
- **图标**: 自定义图片图标

## 项目完整目录结构
```
lesson-index/
├── .github/workflows/     # GitHub Actions 部署配置
├── .vitepress/            # VitePress 配置目录
│   ├── config.mts         # 站点配置文件
│   └── dist/              # 构建输出目录（自动生成）
├── docs/                  # 文档子目录（存放课程大纲、作业等）
│   ├── homework/          # 作业资料目录
│   ├── intro/             # 入门介绍目录
│   └── outline/           # 课程大纲目录
├── public/                # 静态资源目录（VitePress默认）
│   └── images/            # 图片资源
├── src/                   # 额外资源目录
├── .gitignore             # Git 忽略配置
├── AGENTS.md              # AI开发手册
├── index.md               # 首页（必须存在）
├── package.json           # 依赖配置
└── README.md              # 项目说明
```

## 各业务模块功能说明
| 目录 | 功能说明 |
|------|----------|
| `docs/homework/` | 各课程的作业资料和练习题 |
| `docs/intro/` | 学习指南、开发者工作方式、讲师介绍 |
| `docs/outline/` | 各技术方向的课程大纲和知识点梳理 |
| `public/` | VitePress静态资源目录（图片、图标等） |
| `public/images/` | 站点使用的图片资源 |
| `.vitepress/` | VitePress配置和构建输出 |

## 全局强制开发约束
1. **命名规范**: 
   - 文件名使用小写字母和连字符（kebab-case）
   - 目录名使用小写字母和连字符
   - Markdown标题使用中文，清晰层级分明

2. **链接规范**:
   - 内部链接使用相对路径，如 `/docs/homework/algorithm`
   - 图片资源放在 `public/images/` 目录
   - 图片链接使用 `/images/xxx.jpg` 格式
   - 图标放在 `public/` 根目录，链接使用 `/logo_icon.jpeg` 格式

3. **配置规范**:
   - VitePress源目录为项目根目录（默认配置，无需设置srcDir）
   - 首页文件必须为根目录的 `index.md`
   - 构建命令使用 `npm run docs:build`
   - 开发服务器使用 `npm run docs:dev`

4. **文档规范**:
   - 每个页面必须有一级标题（#）
   - 使用VitePress支持的Markdown扩展语法
   - 代码块使用正确的语言标识

## 开发流程
1. **环境配置**: 确保安装Node.js 20+和npm
2. **依赖安装**: `npm install`
3. **本地开发**: `npm run docs:dev`（启动开发服务器）
4. **内容编写**: 在根目录或`docs/`子目录下创建/修改Markdown文件
5. **构建验证**: `npm run docs:build`（检查死链接和构建错误）
6. **预览测试**: `npm run docs:preview`（预览构建结果）
7. **部署发布**: 推送代码到GitHub，触发Actions自动部署

## 禁止行为
1. 禁止删除或重命名根目录的 `index.md` 文件
2. 禁止使用绝对路径引用资源（使用 `/images/xxx` 格式）
3. 禁止修改 `.vitepress/dist/` 目录下的文件（自动生成）
4. 禁止在 `public/` 目录外存放静态资源