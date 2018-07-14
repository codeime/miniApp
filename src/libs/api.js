export default {
    UniversalInterface: {
        //通用接口
        verifySMS: "UniversalInterface/verifySMS" //发送短信验证码
    },
    Mails: {
        billLabelPut: "Mails/home/billLabelPut", //单据更新标签
        //邮件列表
        getMaillist: "Mails/home/getMaillist" //获取指定文件夹的邮件列表
    },
    Client: {
        list: {
            getListDetail: "Client/list/getListDetail", //聚合，单据列表详情数据聚合接口
            getListDetail_contacts: "Client/list/getListDetail_contacts" //聚合，单据列表详情，联系人tab
        },
        cardscan: "Client/cardscan"
    },
    v2: {
        auth: "v2/auth", //登陆
        dictionary: "v2/dictionary/", //系统基础信息
        account_add: "v2/account/add", //注册个人账号
        account_put: "v2/account/put", //修改个人信息
        checkValid: "v2/checkValid/", //有效性验证（企业、账号）
        auth_query: "v2/weixin/auth/query", //code获取openId或者企业列表
        area: "v2/area/", //获取行政区划信息
        accountDropList_get: "v2/accountDropList/get", //获取人员/部门下拉框


        label_get: "v2/label/get", //获取标签列表,获取单个标签信息

        /* 单据框架 */

        sysBoxValue_get: "v2/sysBoxValue/get", //获取下拉框值
        fieldDetails_get: "v2/fieldDetails/get", //字段操作相关=>获取相关字段
        fieldShow_get: "v2/fieldShow/get", //获取业务字段展示
        socialType_get: "v2/socialType/get", //获取社交类型
        customerWithContact_add: 'v2/customerWithContact/add', // 修改跟进（基础信息）
        document_generalOperate_add: "v2/document/generalOperate/add", //单据新增
        document_generalOperate_get: "v2/document/generalOperate/get", //获取单据列表,获取单据详情
        document_generalOperate_put: "v2/document/generalOperate/put", //修改单据
        document_rightCheck_do: "v2/document/rightCheck/do", //判断是否有权限操作
        document_operate_detailOpt_put: "v2/document/operate/detailOpt/put", //关注,取消关注

        /* 单据附件 */
        docFile_get: "v2/docFile/get", //单据附件列表
        /* 系统设置 */
        behaviorLog_get: "v2/behaviorLog/get", //获取行为日志
        messenger_get: "v2/messenger/get", //获取日程列表
        message_get: "v2/message/get", //获取提醒列表

        loginEnterprise: 'v2/loginEnterprise' // 登入进企业记录行为
    }
}