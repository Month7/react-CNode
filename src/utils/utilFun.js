export const tabText = (tab = '',good = false,top = false) => {
    if(top){
        return '置顶'
    }
    else if(good){
        return '精华'
    }
    switch(tab){
        case 'share': return '分享'; break;
        case 'ask':   return '问答'; break;
        case 'job':   return '招聘'; break;
        case 'dev':   return '测试'; break;
    }
}

export const formatPassTime = (startTime) =>{
    let currentTime = Date.parse(new Date())
    let time = currentTime - Date.parse(startTime)
    let day = parseInt(time / (1000 * 60 * 60 * 24),0);
    let hour = parseInt(time / (1000 * 60 * 60),0)
    let min = parseInt(time / (1000 * 60),0)
    let month = parseInt(day / 30,0)
    let year = parseInt(month / 12,0)
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}

export const isLogin = ()=>{
    return sessionStorage.getItem('accesstoken');
}