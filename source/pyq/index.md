---
title: 朋友圈
date: 2022-01-29 15:23:17
---


<!-- 引入 CSS 样式 -->
<link rel="stylesheet" href="https://uipv4.zywvvd.com:33030/HexoFiles/js/friend-circle/heoMainColor.css">

<!-- 定义容器 -->
<div id="hexo-circle-of-friends-root"></div>

<!-- 配置信息 -->
<script>
    let UserConfig = {
        // 填写你的 API 地址
        private_api_url: 'https://pyq.20010501.xyz/',
        // 点击加载更多时，一次最多加载几篇文章，默认10
        page_turning_number: 12,
        // 头像加载失败时，默认头像地址
        error_img: 'https://20010501.xyz/img/fluid.png',
        // 进入页面时第一次的排序规则
        sort_rule: 'created'
    };
</script>

<!-- 引入 JavaScript 文件 -->
<script type="text/javascript" src="https://uipv4.zywvvd.com:33030/HexoFiles/js/friend-circle/app.min.js"></script>
<script type="text/javascript" src="https://uipv4.zywvvd.com:33030/HexoFiles/js/friend-circle/bundle.js"></script>

<!-- 初始化函数 -->
<script>
    // 初始化函数
    (function() {
        // 初始化函数调用
        initCircleOfFriends(UserConfig);
    })();
</script>