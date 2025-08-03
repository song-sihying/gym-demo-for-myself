function getBMI(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    return bmi;
}

// 取得評語
function getComment(bmi) {
    if (bmi < 18.5) {
        return "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！";
    } else if (bmi < 24) {
        return "恭喜！「健康體重」，要繼續保持！";
    } else if (bmi < 27) {
        return "「體重過重」了，要小心囉，趕快力行「健康體重管理」！"
    } else {
        return "啊～「肥胖」，需要立刻力行「健康體重管理」囉！";
    }
}