# 个人主页

这是一个简洁优雅的个人主页，展示了个人资料和社交链接。

## 项目结构
- `/src/App.tsx`: 主组件，包含个人资料、社交链接和布局。
- `/src/assets/images/`: 存放静态资源，如头像和背景图片。
- `/index.html`: 主 HTML 入口文件。
- `/package.json`: 项目依赖和脚本配置。
- `/vite.config.ts`: Vite 配置，已设置为使用相对路径以支持部署。

## 部署指南

### GitHub Pages
1. 将项目推送到 GitHub 仓库。
2. 项目中已包含 `.github/workflows/deploy.yml`，每次推送到 `main` 分支时会自动构建并部署到 GitHub Pages。

### Vercel
1. 将你的 GitHub 仓库导入到 Vercel。
2. Vercel 会自动检测 Vite 项目并配置构建设置。

### Netlify
1. 使用 Git 创建新站点。
2. 设置构建命令: `npm run build`。
3. 设置发布目录: `dist`。

### Cloudflare Pages
1. 将你的 GitHub 仓库连接到 Cloudflare Pages。
2. 设置构建命令: `npm run build`。
3. 设置发布目录: `dist`。
