# GLaDOS-CHINA · 光的片刻

无构建步骤的摄影作品集首页。直接打开 index.html 即可预览。

## 文件结构

```text
.
├── index.html     # 首页、响应式样式、照片放大交互
├── .nojekyll      # 禁用 Jekyll，直接发布静态文件
└── README.md      # 部署与维护说明
```

## 启用 GitHub Pages

1. 打开 https://github.com/GLaDOS-CHINA/GLaDOS-CHINA.github.io/settings/pages
2. Build and deployment → Source：选择 Deploy from a branch。
3. Branch：选择 main；目录选择 /(root)；点击 Save。
4. 等待 GitHub Pages 构建完成，在 Actions 查看构建状态。
5. 发布成功后访问 https://glados-china.github.io/ 。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 替换为自己的摄影作品

当前四张照片由 images.unsplash.com 远程加载，仅用于版式演示，并已在页面明确标注，不能当作本站作者作品。
外部图片可能因网络原因加载失败；页面会显示提示，导航与文字仍可用。

1. 在仓库新建 assets/photos/，上传自己拥有展示权的照片（推荐 WebP/JPEG）。
2. 在 index.html 将四个 img 的 src 改为相对路径，例如 assets/photos/mountain.webp。
3. 同时修改 alt（照片描述）、width/height（原片宽高）、figcaption（作品名）、aria-label（按钮说明）。
4. 更新关于文字、页面描述和标题，移除示例影像说明与来源链接；脚本中的大图说明也须改为实际作者署名。
5. 添加真实联系邮箱时，使用 mailto: 形式的链接。当前未填写任何虚构联系方式。

无需安装依赖，无第三方脚本或字体。原生 dialog 提供照片放大、关闭按钮、Esc 关闭与焦点管理；图片懒加载，支持减少动画偏好。

## 发布前检查

- 在电脑和手机宽度下查看，确认无横向溢出。
- 逐张点开照片，验证关闭按钮、Esc 与键盘 Tab 导航。
- 确认照片可加载，文字说明、作品署名及联系方式准确。
- 每次提交到 main 后，检查 Pages 部署结果。
