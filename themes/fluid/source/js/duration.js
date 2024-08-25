function createtime() {
    var now = new Date(); // 在每次函数调用时获取新的当前时间
    var grt = new Date("07/12/2024 12:00:00"); // 固定的站点建立时间

    // 计算两个时间戳之间的差异
    var diff = now - grt;

    // 计算天数、小时数、分钟数和秒数
    var dnum = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hnum = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mnum = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var snum = Math.floor((diff % (1000 * 60)) / 1000);

    // 确保时间部分为双位数
    hnum = ('0' + hnum).slice(-2);
    mnum = ('0' + mnum).slice(-2);
    snum = Math.round(snum);
    snum = ('0' + snum).slice(-2); // 如果你希望秒也是双位数的话

    // 更新页面元素
    document.getElementById("timeDate").innerHTML = "本站已安全运行 " + dnum + " 天";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}

// 设置间隔时间为每秒钟执行一次，因为每250毫秒执行可能过于频繁
setInterval(createtime, 1000);