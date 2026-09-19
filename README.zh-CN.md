# Travel Universe

[English](README.md) | [简体中文](README.zh-CN.md)

一个用 Next.js、React 与 Framer Motion 制作的交互式旅行记忆网站。

## 本地运行

1. 使用 `npm install` 安装依赖。
2. 使用 `npm run dev` 启动项目。
3. 在浏览器打开 `http://localhost:3000`。

这个演示项目可以独立运行：所有展示图片均位于 `public/photos`，克隆后不需要访问任何私人照片库。

## 架构

![Travel Universe 公开版架构图](docs/architecture.svg)

[交互式架构图源文件](docs/travel-universe-architecture.html) 描述了当前公开版架构：城市 JSON 生成照片清单，应用只从 `public/` 提供静态资源。

## 视觉素材

地图、宇宙插画与地标贴纸先作为可审阅的图片素材生成，再通过 JSON 与组件接入 UI。请参阅[素材生成指南](docs/asset-production.zh-CN.md)，其中包含可复用提示词、输出要求和项目内地图／地球样例。

## 隐私说明

公开照片已重新编码并移除 EXIF 元数据；检测到正脸的照片已做像素化处理。替换或新增图片前，请阅读[照片隐私流程](docs/privacy.zh-CN.md)。

请在发布任何新的个人照片前自行复核：人脸检测可辅助筛查，但不能保证不遗漏。
