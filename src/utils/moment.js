import moment from 'moment';

// 统一正8区时间,提交到后台
function unifiedTime(time) {
    if (time === '' || time === null || time === undefined || time === 'undefined') {
        return '';
    } else {
        return moment(time).utc().utcOffset(+8).format('YYYY-MM-DD HH:mm:ss');
    }
}
//  + (-8) 把北京时间转换成相对本地的相对时间
function beijingToLocal(date) {
    let YMD = date.split(' ')[0].split('-');
    let Hms = date.split(' ')[1].split(':');
    let Y = parseInt(YMD[0]);
    let M = parseInt(YMD[1]);
    let D = parseInt(YMD[2]);
    let H = parseInt(Hms[0]);
    let m = parseInt(Hms[1]);
    let s = parseInt(Hms[2]);
    let T = parseInt(new Date().toString().split('GMT')[1].split(' ')[0]) / 100 + (-8);
    let h = H + T;
    // 处理小时
    if (h >= 24) {
        D = D + 1; // 向前添加一天
        H = h - 24; // 更正小时
        // 处理日
        if ([1, 3, 5, 7, 8, 10, 12].indexOf(M)) { // 31天
            if (D > 31) {
                M = M + 1; // 月份加1
                D = D - 31; // 更正天数
            }
        } else if ([4, 6, 9, 11].indexOf(M)) { // 30天
            if (D > 30) {
                M = M + 1; // 月份加1
                D = D - 30; // 更正天数
            }
        } else if ([2].indexOf(M) != -1) { // 29/28天
            // 闰年/平年 求2月天数
            if (((Y % 4 == 0) && (Y % 100 != 0)) || (Y % 400 == 0)) {
                if (D > 29) {
                    M = M + 1; // 月份加1
                    D = D - 29; // 更正天数
                }
            } else {
                if (D > 28) {
                    M = M + 1; // 月份加1
                    D = D - 28; // 更正天数
                }
            }
        }
        // 处理月
        if (M > 12) {
            Y = Y + 1;
            M = M - 12;
        }
    } else if (h < 24 && h >= 0) {
        H = h;
    } else if (h < 0) {
        D = D - 1; // 向后添加一天0
        H = 24 + h; // 更正小时
        if (D === 0) { // 回到上个月的最后一天
            M = M - 1;
            if (M === 0) { // 回到上一年
                Y = Y - 1;
                M = 12;
            }
            // 根据年份，月份决定天
            if ([1, 3, 5, 7, 8, 10, 12].indexOf(M) != -1) {
                D = 31;
            } else if ([4, 6, 9, 11].indexOf(M) != -1) {
                D = 30;
            } else if ([2].indexOf(M) != -1) {
                if (((Y % 4 == 0) && (Y % 100 != 0)) || (Y % 400 == 0)) {
                    D = 29;
                } else {
                    D = 28;
                }
            }
        }
    }

    let t = new Date(Y + '/' + M + '/' + D + ' ' + H + ':' + m + ':' + s);
    return t;
}

function utcOffset(date, option = {}) {
    date = beijingToLocal(date);
    let { timezone } = Object.assign({
        timezone: '+8'
    }, option);
    return moment(date).utc().utcOffset(parseInt(timezone));
}

function formulateTime(time, option = {}) {
    if (time === '' || time === null || time === undefined || time === 'undefined') {
        return '';
    }
    time = beijingToLocal(time);
    let {
        today,
        yesterday,
        tomorrow,
        aftertomorrow,
        format,
        timezone
    } = Object.assign({
        today: '今天',
        yesterday: '昨天',
        tomorrow: '明天',
        aftertomorrow: '后天',
        format: 'YYYY-MM-DD HH:mm:ss',
        timezone: '+8'
    }, option);
    // 传入时间的年月日
    let t = moment(time).utc().utcOffset(parseInt(timezone)).format(format);

    let date = new Date();

    // 判断一年以内
    // 前一年时间
    let beforeYear = parseInt(moment(date).format('YYYY')) - 1 + moment(date).format('-MM-DD');
    beforeYear = moment(beforeYear).format('YYYY-MM-DD');
    // 后一年
    // let afterYear = parseInt(moment(date).format('YYYY')) + 1 + moment(date).format('-MM-DD')
    // 前两天的时间
    let beforeDay2 = moment(date).format('YYYY-MM-') + (parseInt(moment(date).format('DD')) - 1);
    // 传入日期偏差
    let offsetMS = (+new Date(date)) - (+new Date(time));
    let offsetDay = parseInt(moment(date).format('DD')) - parseInt(moment(time).format('DD'))

    // 传入的时间是否大于1年前今天的时间，并且小于前两天的时间。那就是过去一年内的时间
    let oneDayMs = 24 * 60 * 60 * 1000;
    if (+new Date(time) > +new Date(beforeYear) && +new Date(time) < +new Date(beforeDay2)) {
        return moment(time).format('MM/DD HH:mm');
    } else if (offsetDay === 0 && (offsetMS < oneDayMs || offsetMS > (-oneDayMs))) { // 今天
        return today + ' ' + moment(time).format('HH:mm');
    } else if (offsetDay === 1 && (offsetMS < 2 * oneDayMs)) { // 昨天
        return yesterday + ' ' + moment(time).format('HH:mm');
    } else if (offsetDay === -1 && offsetMS > -2 * oneDayMs && offsetMS < 0) { // 明天
        return tomorrow + ' ' + moment(time).format('HH:mm');
    } else if (offsetDay === -2 && offsetMS > -3 * oneDayMs && offsetMS < -1 * oneDayMs) { // 后天
        return aftertomorrow + ' ' + moment(time).format('HH:mm');
    } else { // 都不在时
        return moment(time).format('YYYY/MM/DD');
    }
}
export default {
    unifiedTime,
    beijingToLocal,
    utcOffset,
    formulateTime
}