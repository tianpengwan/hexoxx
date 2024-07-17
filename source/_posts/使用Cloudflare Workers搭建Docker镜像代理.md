---
abbrlink: ''
categories:
- - 技术教程
date: '2024-07-17T20:51:49.192354+08:00'
index_img: https://fxdl.20010501.xyz/https://raw.githubusercontent.com/tianpengwan/hexoxxtc/master/Qexo/24/7/u=1326085449,2834338878&fm=253&fmt=auto&app=120&f=JPEG_255575cfc8a67936661ab1db71bbe9b0.jpg
tags:
- docker
- Cloudflare Workers
- 反向代理
- 镜像源
title: 使用Cloudflare Workers搭建Docker镜像代理
updated: '2024-07-17T21:10:34.243+08:00'
---
#使用Cloudflare Workers搭建Docker镜像代理

## 一、准备工作

1. **注册并登录Cloudflare账户**

   - 访问[Cloudflare官网](https://www.cloudflare.com/)，创建并登录你的账户。
2. **购买并配置域名**

   - 在域名注册商处购买一个你喜欢的域名。
   - 将你的域名DNS解析到Cloudflare。
3. **设置Cloudflare Workers**

   - 在Cloudflare后台找到Workers选项卡，并创建一个新的工作。

## 二、部署Docker镜像代理服务

### 1. 获取代理源码

[worker.js](https://github.com/cmliu/CF-Workers-docker.io/blob/main/_worker.js)

- 你可以使用现有的开源项目如 `cloudflare-docker-proxy`，或者自己编写代理逻辑。
- 这里以 `cloudflare-docker-proxy`为例，从GitHub上克隆其源码。

### 2. 修改配置

![S40717-21092022_com.github.android.png](https://fxdl.20010501.xyz/https://raw.githubusercontent.com/tianpengwan/hexoxxtc/master/Qexo/24/7/S40717-21092022_com.github.android_067aeca0407fa25bb9ec9afac123b323.png)

- 在源码中找到配置文件（如 `config.js`），并修改相关配置以适应你的Docker仓库和你的域名。

### 3. 部署源码到Cloudflare Workers

- 在Cloudflare Workers界面，创建一个新的工作，并将你的源码粘贴或上传。
- 配置你的域名和路由规则。

### 4. 测试与验证

- 使用你的域名加上Docker镜像路径，如 `<你的域名>/镜像名:标签`，来拉取镜像。
- 确保一切顺利，并检查日志以诊断任何问题。

## 三、注意事项

- 确保你的Cloudflare Workers配额足够，因为这会消耗请求次数。
- 不要将你的域名公开到网上以防被刷量。

这就是使用Cloudflare Workers搭建Docker镜像代理的基本流程。希望这个教程对你有所帮助！如果你有任何疑问或需要进一步的指导，请随时提问。
