<template>
  <div id="page">
    <wx-header pageName="小消息"></wx-header>
    <!-- 顶部下拉框内容 -->
    <div class="page__hd">
      <div class="page__title">消息列表</div>
      <div class="page__desc">小消息的消息列表，每个对话框对应着相应的vr设备</div>
    </div>
    <!-- 消息列表 -->
    <div class="page_bd">
      <ul class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">消息列表</div>
        <div class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
        <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
              <image class="weui-media-box__thumb" src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" />
            </div>
            <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
              <div class="weui-media-box__title">vr001</div>
              <div class="weui-media-box__desc">我们可以开始收购腾讯了</div>
            </div>
        </div>
        <!--props传递消息对象 baseMsgObj -->
        <!-- <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" :key="baseMsgObj.mid">
        </msg-item> -->
        <newmsg-item v-for="baseMsgObj in baseMsgs" :item="baseMsgObj" :key="baseMsgObj">123</newmsg-item>
      </ul>
    </div>
  </div>
</template>

<script>
import wxHeader from '@/components/wx-header'
import newmsgItem from '@/components/new_msg-item'
export default {
  data () {
    return {
      pageName: '微信',
      baseMsgs: this.$store.state.msgList.baseMsg
    }
  },
  components: {

    wxHeader,
    newmsgItem
  }
}
</script>

<style scoped>
</style>
