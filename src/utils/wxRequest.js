import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip';
import { ACCESS_TOKEN, INDIVIDUAL_ACCESS_TOKEN } from "./constant";

//const API_SECRET_KEY = 'www.demo.com'
//const TIMESTAMP = util.getCurrentTime()
//const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const http = async (url, params = {}) => {
    tip.loading();

    let data = params.query || {};

    data["_@#time"] = util.getCurrentTime();

    if (wepy.getStorageSync(INDIVIDUAL_ACCESS_TOKEN).value) {
        Object.assign(data, {
            [INDIVIDUAL_ACCESS_TOKEN]: wepy.getStorageSync(INDIVIDUAL_ACCESS_TOKEN).value
        });
    }
    if (wepy.getStorageSync(ACCESS_TOKEN).value) {
        Object.assign(data, {
            [ACCESS_TOKEN]: wepy.getStorageSync(ACCESS_TOKEN).value
        });
    }
    /* 丢到外边处理 */
    return wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' }
    });

    /* try {
        let res = await 
        tip.loaded();
        return res;
    } catch (error) {
        console.log(error);
        tip.loaded();
        tip.error("请求出错");
    } */

};

export default class wxRequest {

    static get(url, params) {
        Object.assign(params, { method: 'GET' });
        return http(url, params);
    }
    static post(url, params) {
        Object.assign(params, { method: 'POST' });
        return http(url, params);
    }
    static delete(url, params) {
        Object.assign(params, { method: 'DELETE' });
        return http(url, params);
    }
    static put(url, params) {
        Object.assign(params, { method: 'PUT' });
        return http(url, params);
    }

}