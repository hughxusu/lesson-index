# 项目AI开发专属手册 AGENTS.md

## 项目基础信息
- **项目名称**: 教程索引 (lesson-index)
- **项目类型**: VitePress 静态文档站点
- **项目简介**: 技术教程索引站点，包含算法、Python、JavaScript、AI等多个技术方向的学习大纲和作业资料
- **运行环境**: Node.js 20+

## 技术栈与开发环境
- **框架**: VitePress 1.6.4
- **语言**: Vue 3 + Markdown
- **构建工具**: Vite
- **包管理器**: npm
- **图标**: 自定义图片图标
- **插件**: vitepress-plugin-mermaid、markdown-it-mathjax3
- **图表**: Mermaid

## 项目完整目录结构
```
lesson-index/
├── .github/workflows/     # GitHub Actions 部署配置
├── .vitepress/            # VitePress 配置目录
│   ├── theme/             # 自定义主题
│   │   ├── custom.css     # 自定义样式
│   │   └── index.ts       # 主题入口
│   ├── config.mts         # 站点配置文件
│   └── dist/              # 构建输出目录（自动生成）
├── docs/                  # 文档子目录（存放课程大纲、作业等）
│   ├── homework/          # 作业资料目录
│   │   ├── algorithm.md   # 算法作业
│   │   ├── leetcode.md    # LeetCode作业
│   │   ├── network.md     # 网络作业
│   │   └── python.md      # Python作业
│   ├── intro/             # 入门介绍目录
│   │   ├── assets/        # 入门文档资源
│   │   ├── coder-work.md  # 开发者工作方式
│   │   └── teacher.md     # 讲师介绍
│   └── outline/           # 课程大纲目录
│       ├── assets/        # 大纲文档资源
│       ├── ai.md          # AI课程大纲
│       ├── algorithm.md   # 算法课程大纲
│       ├── design.md      # 设计模式课程大纲
│       ├── javascript.md  # JavaScript课程大纲
│       ├── math.md        # 数学基础课程大纲
│       ├── matlab.md      # MATLAB课程大纲
│       ├── paper.md       # 论文写作课程大纲
│       ├── practice.md    # 编程实践课程大纲
│       └── python.md      # Python课程大纲
├── public/                # 静态资源目录（VitePress默认）
│   └── logo_icon.jpeg     # 站点图标
├── src/                   # 额外资源目录
│   └── 原图.xmind        # 思维导图原图
├── .gitignore             # Git 忽略配置
├── .nojekyll              # GitHub Pages 配置
├── AGENTS.md              # AI开发手册
├── LICENSE                # 许可证
├── README.md              # 项目说明
├── Taskfile.yml           # 任务管理配置
├── index.md               # 首页（必须存在）
├── package-lock.json      # 依赖锁定文件
└── package.json           # 依赖配置
```

## 各业务模块功能说明
| 目录 | 功能说明 |
|------|----------|
| `.github/workflows/` | GitHub Actions 自动部署配置 |
| `.vitepress/` | VitePress配置和构建输出 |
| `.vitepress/theme/` | 自定义主题样式和功能扩展 |
| `docs/homework/` | 各课程的作业资料和练习题（算法、LeetCode、网络、Python） |
| `docs/intro/` | 学习指南、开发者工作方式、讲师介绍 |
| `docs/outline/` | 各技术方向的课程大纲和知识点梳理（AI、算法、设计模式、JavaScript、数学、MATLAB、论文写作、编程实践、Python） |
| `public/` | VitePress静态资源目录（站点图标） |
| `src/` | 额外资源目录（思维导图原图） |
| `Taskfile.yml` | 任务管理配置，简化开发命令 |

## 全局强制开发约束
1. **命名规范**: 
   - 文件名使用小写字母和连字符（kebab-case）
   - 目录名使用小写字母和连字符
   - Markdown标题使用中文，清晰层级分明

2. **链接规范**:
   - 内部链接使用相对路径，如 `/docs/homework/algorithm`
   - 图片资源放在对应文档的 `assets/` 目录，使用相对路径引用
   - 全局图标放在 `public/` 根目录，链接使用 `/logo_icon.jpeg` 格式
   - 当配置了 `base: '/lesson-index/'` 时，部署环境下资源路径需包含 base 前缀

3. **配置规范**:
   - VitePress源目录为项目根目录（默认配置，无需设置srcDir）
   - 首页文件必须为根目录的 `index.md`
   - 配置文件 `.vitepress/config.mts` 包含 base 路径配置
   - 启用 Mermaid 图表支持：`markdown: { mermaid: true }`
   - 启用数学公式支持：`markdown: { math: true }`
   - 构建命令使用 `npm run docs:build` 或 `task build`
   - 开发服务器使用 `npm run docs:dev` 或 `task dev`

4. **文档规范**:
   - 每个页面必须有一级标题（#）
   - 使用VitePress支持的Markdown扩展语法
   - 代码块使用正确的语言标识
   - Mermaid图表使用 ```mermaid 代码块
   - 数学公式使用 $$ 包裹（LaTeX语法）

## 开发流程
1. **环境配置**: 确保安装Node.js 20+和npm
2. **依赖安装**: `task install`（推荐）或 `npm install`
3. **本地开发**: `task dev`（推荐）或 `npm run docs:dev`（启动开发服务器）
4. **内容编写**: 在根目录或`docs/`子目录下创建/修改Markdown文件
5. **构建验证**: `task build`（推荐）或 `npm run docs:build`（检查死链接和构建错误）
6. **预览测试**: `task preview`（推荐）或 `npm run docs:preview`（预览构建结果）
7. **一键构建预览**: `task deploy`（先构建再预览）
8. **查看任务列表**: `task -l`（查看所有可用任务）
9. **部署发布**: 推送代码到GitHub，触发Actions自动部署

## 禁止行为
1. 禁止删除或重命名根目录的 `index.md` 文件
2. 禁止使用绝对路径引用资源（使用 `/images/xxx` 格式）
3. 禁止修改 `.vitepress/dist/` 目录下的文件（自动生成）
4. 禁止在 `public/` 目录外存放静态资源