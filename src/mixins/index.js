import wepy from 'wepy'

export default class Mixins extends wepy.mixin {
    data = {}
    methods = {
        onShareAppMessage() {
            return {
                title: '管理客户从最重要的事开始',
                path: '/pages/login/index',
                imageUrl: '../../images/share.png'
            }
        }
    }
    onShow() {

    }

    // onLoad() {
    //    
    // }
}