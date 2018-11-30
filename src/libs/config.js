let domain = '';
let socketUrl = '';
let uploadUrl = '';
let downloadUrl = '';
let imgBaseUrl = '';

const RES_OK = "0";

function getApiConfig(API_ENV) {
    if(API_ENV == "dev") {
        domain = '';
        imgBaseUrl = '';
        socketUrl = '';
        uploadUrl = '';
        downloadUrl = '';
    } else if(API_ENV == "prod") {
        domain = '';
        imgBaseUrl = '';
        socketUrl = '';
        uploadUrl = '';
        downloadUrl = '';
    }
    const baseUrl = domain + '/pcapi/';
    return {
        baseUrl,
        socketUrl,
        uploadUrl,
        downloadUrl,
        imgBaseUrl,
        RES_OK
    }
}

export default {
    getApi: getApiConfig
}