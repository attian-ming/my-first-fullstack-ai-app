// 显示当前日期
const now = new Date();
document.getElementById('currentDate').textContent = now.toLocaleDateString('zh-CN');

// 按钮交互功能
document.getElementById('aiButton').addEventListener('click', function() {
    const messages = [
        "智慧不是知识的积累，而是思维的变革。欢迎开启你的旅程！",
        "每一段伟大的代码都始于一个简单的 'Hello, World!'",
        "未来属于那些相信梦想之美的你。",
        "从公务员到AI工程师，这是你写下的第一个函数！",
        "代码之于程序员，犹如画笔之于画家。今天你拿起了画笔。"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('aiMessage').textContent = randomMessage;
});