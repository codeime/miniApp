import wepy from 'wepy';
import { TIME_STAMP } from "./constant"

function setItem(name, value) {
    wepy.setStorageSync(name, value);
}

function getItem(name) {
    return wepy.getStorageSync(name);
}

/**
 * 获取当前时间的串
 */
function getCurrentTime() {
    var keep = '';
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var rand = Math.round(Math.random() * 899 + 100);
    keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
    return keep;
    // 20160614134947
}

/**
 * 获取对象长度
 */
function objLength(input) {
    var type = toString(input);
    var length = 0;
    if (type != "[object Object]") {
        // throw "输入必须为对象{}！"
    } else {
        for (var key in input) {
            if (key != "number") {
                length++;
            }
        }
    }
    return length;
}
// 验证是否是手机号码
function checkPhone(number) {
    let flag = false;
    let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (number.length != 11) {
        flag = flag;
    } else if (!myreg.test(number)) {
        flag = flag;
    } else {
        flag = true;
    }
    return flag;
}


// 遍历对象属性和值
function displayProp(obj) {
    var names = "";
    for (var name in obj) {
        names += name + obj[name];
    }
    return names;
}
// 去除字符串所有空格
function sTrim(text) {
    return text.replace(/\s/ig, '')
}
// 去除所有:
function replaceMaohao(txt) {
    return txt.replace(/:/ig, '')
}

/**
 * 判断是否是数组类型，
 * 并且是否是有效数组
 */
function isArray(array, isEffective = false) {
    if (Object.prototype.toString.call(array) == "[object Array]") {
        if (isEffective) {
            return array.length > 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
};
/**
 * 判断是否是对象
 */
function isObject(obj, isEffective = false) {
    if (Object.prototype.toString.call(obj) == "[object Object]") {
        if (isEffective) {
            return !!Object.keys(obj).length;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

/**
 * 分割符转换 - ==> /
 */
function delimiterConvert(val) {
    if (val) {
        return val.replace(/-/g, '/');
    } else {
        return '';
    }
}

/**
 * 时间转换成 友好的展示
 */
function getMyTimes(lasttime) { //获取时间
    let time = this.getItem(TIME_STAMP);
    lasttime = Date.parse(delimiterConvert(lasttime));
    let minutes = Math.floor((time - lasttime) / (1000 * 60));
    let hours = Math.floor((time - lasttime) / (1000 * 60 * 60));
    let day = Math.floor((time - lasttime) / (1000 * 60 * 60 * 24));
    if (minutes < 60 && minutes >= 0) {
        if (minutes < 1) {
            return minutes = "刚刚";
        }
        return minutes + "分钟前";
    } else if (minutes > -60 && minutes < 0) {
        return -minutes - 1 + "分钟后"
    } else if (minutes >= 60 && minutes < (24 * 60)) {
        return hours + "小时前"
    } else if (minutes <= -60 && minutes > -(24 * 60)) {
        return -hours - 1 + "小时后"
    } else if (minutes > (24 * 60)) {
        if (!isNaN(day)) {
            return day + "天前";
        }
    } else if (minutes < -(24 * 60)) {
        if (!isNaN(day)) {
            return -day - 1 + "天后";
        }
    } else {
        return "";
    }
}

/**
 * 获取格式化的当前时间 2018-05-11 22:22:22
 */
function getNowFormatDate() {
    var keep = '';
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var rand = Math.round(Math.random() * 899 + 100);
    keep = y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s;
    return keep;
}
/**
 * 传入时间和需要转换的格式进行转换
 */
function dateFormat(date, fmt) {

    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}



/**
 * 已知flags值 取得标识位修改后的flags(srt为flags,index为第几位,value为改之后标识)例：getNewFlags(3,1,0)
 */
function getNewFlags(str, index, value) {
    var a = "00000000" + str.toString(2);
    a = a.split("");
    a.splice(a.length - index, 1, value);
    return parseInt(a.join(""), 2);
};

/**
 * 二进制取位（如：getByte(2, 1)为数字2的第1位，得到0。位1给手机，位2给邮箱）
 */
function getByte(str, index) {
    var a = "00000000" + str.toString(2);
    return a.substr(a.length - index, 1);
};
/**
 * @param {"byte"} size
 */
function byteCalc(size) {
    if (size > 1048576) {
        return (size / 1048576).toFixed(2) + " M";
    } else {
        return (size / 1024).toFixed(2) + " KB";
    }
};
/**
 *
 * @param {"emailAddress"} str
 */
function checkEmail(str) {
    var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    return !!re.test(str);
};
/**
 *
 * @param {"url"} str
 */
function checkWebSite(str) {
    var re = /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})(www\.){0,1}(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
    return !!re.test(str);
}
/**
 *
 * @param {"telephoneNumber"} str
 */
function checkTel(str) {
    var re = /^0?\d{2,3}-?\d{7,8}-?(\d{1,5})?$/;
    return !!re.test(str);
}

module.exports = {
    isArray: isArray,
    isObject: isObject,
    getMyTimes: getMyTimes,
    setItem: setItem,
    getItem: getItem,
    getNewFlags: getNewFlags,
    getByte: getByte,
    byteCalc: byteCalc,
    getCurrentTime: getCurrentTime,
    getNowFormatDate: getNowFormatDate,
    dateFormat: dateFormat,
    objLength: objLength,
    displayProp: displayProp,
    sTrim: sTrim,
    replaceMaohao: replaceMaohao,
    checkPhone: checkPhone,
    checkEmail: checkEmail,
    checkWebSite: checkWebSite,
    checkTel: checkTel
}