let env = "-dev"; //-dev||-prod

let domain = '';
let socketUrl = '';
let uploadUrl = '';
let downloadUrl = '';
let imgBaseUrl = '';

if (env == "-dev") {
    domain = '';
    imgBaseUrl = '';
    socketUrl = '';
    uploadUrl = '';
    downloadUrl = '';
} else if (env == "-prod") {
    domain = '';
    imgBaseUrl = '';
    socketUrl = '';
    uploadUrl = '';
    downloadUrl = '';
}

const baseUrl = domain + '/pcapi/';
const RES_OK = "0";

export default {
    baseUrl,
    socketUrl,
    imgBaseUrl,
    uploadUrl,
    downloadUrl,
    RES_OK
}
