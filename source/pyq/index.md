---
title: 朋友圈
date: 2022-01-29 15:23:17
---

<!-- 挂载友链朋友圈的容器 -->
<div id="cf-container">与主机通讯中……</div>

<!-- 加样式和功能代码 -->
<link id="fcircle-css" rel="stylesheet" href="https://fastly.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.css">
<script type="text/javascript">
  var fdataUser = {
    //apiurl: 'https://pyq.20010501.xyz/',  //自部署api
  }

  function setTheme() {
    var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var link = document.getElementById('fcircle-css');
    link.href = `https://fastly.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-${theme}.css`;
  }

  // 初始化
  setTheme();

  // 监听主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);
</script>

<script type="text/javascript" src="https://fastly.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.js"></script>