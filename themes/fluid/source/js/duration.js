const grt = new Date("07/12/2024 12:00:00"); // 建站时间，定义在函数外部

function createtime() {
    let now = new Date();
    let days = (now - grt) / (1000 * 60 * 60 * 24);
    let dnum = Math.floor(days);
    let hours = (now - grt) / (1000 * 60 * 60) % 24;
    let hnum = Math.floor(hours);
    let minutes = (now - grt) / (1000 * 60) % 60;
    let mnum = Math.floor(minutes);
    let seconds = (now - grt) / 1000 % 60;
    let snum = Math.round(seconds);

    // 格式化小时、分钟和秒
    hnum = hnum.toString().padStart(2, '0');
    mnum = mnum.toString().padStart(2, '0');
    snum = snum.toString().padStart(2, '0');

    // 更新DOM
    document.getElementById("timeDate").innerHTML = "本站已安全运行 " + dnum + " 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}

// 使用函数引用而不是字符串
setInterval(createtime, 250);