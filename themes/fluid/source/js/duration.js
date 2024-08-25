document.addEventListener('DOMContentLoaded', function() {
    var establishedDate = new Date('2023-01-01T00:00:00'); // 注意ISO 8601格式
    var establishedDateString = establishedDate.toLocaleDateString('zh-CN') + ' ' + establishedDate.toLocaleTimeString('zh-CN'); document.getElementById('establishedDate').textContent = establishedDateString;
});