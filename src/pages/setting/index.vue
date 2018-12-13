<template>
    <!--我 组件-->
  <div id="self">
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <div @click="to('/self/profile')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt="" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">sky</h4>

            <p class="self-wxid">小消息账号：wx_sky</p>
          </div>
          <div class="weui-cell__ft">
            <img src="../../../static/images/chat-info-qr.png" style="width:35px; height:35px">
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div @click="to('/self/album')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="../../../static/images/me_more-my-album.png" style="height:20px">
          </div>
          <div class="weui-cell__bd">
            <p>相册</p>
          </div>
        </div>
        <div @click="to('/self/album')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="../../../static/images/me_more-my-favorites.png"  style="height:20px">
          </div>
          <div class="weui-cell__bd">
            <p>我的设备</p>
          </div>
        </div>
        <div @click="to('/self/album')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="../../../static/images/me_more-my-bank-card.png"  style="height:20px">
          </div>
          <div class="weui-cell__bd">
            <p>钱包</p>
          </div>
        </div>
        <div @click="to('/self/album')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="../../../static/images/me_my-card-package-icon.png"  style="height:20px">
          </div>
          <div class="weui-cell__bd">
            <p>VR场景</p>
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div @click="to('/self/album')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="../../../static/images/me_more-expression.png"  style="height:20px">
          </div>
          <div class="weui-cell__bd">
            <p>VR表情</p>
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div @click="to('/self/settings')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img src="../../../static/images/me_more-setting.png"  style="height:20px">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#self .weui-cell__ft img{height:25px;vertical-align:middle;margin-right:10px}#self .weui-cell__hd img{width:23px;margin-right:8px;display:block}#self img.self-header{display:block;margin-right:10px;border-radius:4px;width:60px;height:60px}#self .self-nickname{font-size:16px;margin-bottom:5px}#self .self-wxid{font-size:13px}
</style>
