# 幸福乐清 Web 版

这是「幸福乐清」微信小程序的Web版本，已经准备好部署到GitHub和Vercel。

## 项目结构

```
xingfu-leqing-web/
├── public/
│   ├── index.html      # 主页面
│   ├── css/            # 样式文件
│   │   └── style.css   # 主样式文件
│   ├── js/             # JavaScript文件
│   │   └── script.js   # 交互功能脚本
│   └── images/         # 图片资源（如需本地图片可放在这里）
├── package.json        # 项目配置和依赖
├── .gitignore          # Git忽略文件
└── README.md           # 项目说明文档
```

## 本地开发

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 在浏览器中访问 `http://localhost:3000`

## 部署到GitHub和Vercel

### 1. 部署到GitHub

1. 在GitHub上创建一个新的仓库

2. 初始化Git并推送代码
```bash
# 进入项目目录
cd xingfu-leqing-web

# 初始化Git仓库
git init

# 添加文件
git add .

# 提交代码
git commit -m "初始化项目"

# 添加远程仓库（将YOUR_GITHUB_USERNAME和YOUR_REPO_NAME替换为实际值）
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# 推送到GitHub
git push -u origin main
```

### 2. 部署到Vercel

1. 登录 [Vercel](https://vercel.com/)

2. 点击「New Project」

3. 连接你的GitHub账户

4. 选择刚刚创建的仓库

5. 配置项目：
   - Framework Preset: 选择「Other」
   - Root Directory: 保持为空（默认）
   - Build Command: 不需要（保持为空）
   - Output Directory: `public`

6. 点击「Deploy」开始部署

7. 部署完成后，Vercel会提供一个URL访问你的网站

## 注意事项

- 所有外部资源（如Font Awesome、Google Fonts）使用CDN加载
- 图片使用picsum.photos服务提供随机图片
- 项目已配置为在Vercel上直接部署，无需额外构建步骤

## 功能特性

- 响应式设计，适配移动设备
- 轮播Banner展示
- 分类导航
- 商家推荐展示
- 商品列表展示
- 底部导航栏