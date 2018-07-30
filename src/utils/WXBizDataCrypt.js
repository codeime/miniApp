const Crypto = require('./cryptojs/cryptojs.js').Crypto;

function WXBizDataCrypt(appId, sessionKey) {
    this.appId = appId
    this.sessionKey = sessionKey
}

WXBizDataCrypt.prototype.decryptData = function(encryptedData, iv) {

    var encryptedData2 = Crypto.util.base64ToBytes(encryptedData)
    var key = Crypto.util.base64ToBytes(this.sessionKey);
    var iv2 = Crypto.util.base64ToBytes(iv);

    // 对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充
    var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);

    try {
        // 解密
        var bytes = Crypto.AES.decrypt(encryptedData2, key, {
            asBpytes: true,
            iv: iv2,
            mode: mode
        });

        var decryptResult = JSON.parse(bytes);

    } catch (err) {
        console.log(err)
    }

    if (decryptResult.watermark.appid !== this.appId) {
        console.log("err")
    }

    return decryptResult
}
export default WXBizDataCrypt