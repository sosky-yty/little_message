<template>
    <div class="profile">
        <div class="weui-cells">
            <div class="weui-cell" id="avatarCell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>头像</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" style="width: 50px;height: 50px;border-radius: 4px;">
                </div>
            </div>
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>名字</p>
                </div>
                <div class="weui-cell__ft">
                    sky
                </div>
            </div>
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>小消息号</p>
                </div>
                <div class="weui-cell__ft">
                    0001
                </div>
            </div>
            <div @click="to('/self/profile/my-qrcode')" class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的二维码</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="../../../static/images/contact_add-friend-my-qr.png" style="vertical-align: middle; width:24px; height:24px;" class="_align-middle">
                </div>
            </div>
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>我的地址</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>性别</p>
                </div>
                <div class="weui-cell__ft">
                    男
                </div>
            </div>
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft">
                   成都 郫县
                </div>
            </div>
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>个性签名</p>
                </div>
                <div class="weui-cell__ft">
                    未填写
                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    <p>关联腾讯qq账号</p>
                </div>
                <div class="weui-cell__ft">
                    未设置
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  methods: {
    to (path) {
      wx.navigateTo({
        url: path
      })
    }
  }
}
</script>

<style>
#self .weui-cell__ft img{height:25px;vertical-align:middle;margin-right:10px}#self .weui-cell__hd img{width:23px;margin-right:8px;display:block}#self img.self-header{display:block;margin-right:10px;border-radius:4px;width:60px;height:60px}#self .self-nickname{font-size:16px;margin-bottom:5px}#self .self-wxid{font-size:13px}
</style>
