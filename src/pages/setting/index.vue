<template>
  <div class="setting">
        <section>
            <div class="weui-cells">
                <div @click="to('/')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">帐号与安全</div>
                    <div class="weui-cell__ft">已保护</div>
                </div>
            </div>
            <div class="weui-cells">
                <div @click="to('/')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">新消息通知</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div @click="to('/')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">隐私</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div @click="to('/')" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">通用</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" hover-class="weui-cell_active" href="https://kf.qq.com/@clickuch/product/wechat_app.html?platform=15&amp;scene_id=kf338">
                    <div class="weui-cell__bd">帮助与反馈</div>
                    <div class="weui-cell__ft"></div>
                </a>
                <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">关于小消息</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-btn-area">
                <button class="weui-btn weui-btn_warn"  style="background: #ff5c33" @click="tip()">退出登录</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  methods: {
    to (path) {
      wx.navigateTo({
        url: path
      })
    },
    tip () {
      wx.showModal({
        title: '温馨提示',
        content: '暂时只能使用测试账号哦',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
}
</script>

<style>

</style>
