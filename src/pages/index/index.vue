<template>
  <div id="page">
    <welcome></welcome>
    <wx-header pageName="小消息" ></wx-header>
    <!-- 顶部下拉框内容 -->
    <div id="header-tip" class="page__hd">
      <div class="page__title">消息列表</div>
      <div class="page__desc">小消息的消息列表，每个对话框对应着相应的vr设备</div>
    </div>
    <!-- 消息列表 -->
    <div class="page_bd" style="margin-top:40px">
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
        <!-- <msg-item class="list-row" v-for="baseMsgObj in baseMsgs" :item="baseMsgObj" :key="baseMsgObj.mid">
        </msg-item> -->
        <newmsg-item v-for="baseMsgObj in baseMsgs" :item="baseMsgObj" :key="baseMsgObj">123</newmsg-item>
      </ul>
    </div>
  </div>
</template>

<script>
import msgItem from '@/components/msg-item'
import wxHeader from '@/components/wx-header'
import newmsgItem from '@/components/new_msg-item'
import welcome from '@/components/welcome'
export default {
  data () {
    return {
      pageName: '微信',
      baseMsgs: this.$store.state.msgList.baseMsg,
      elastic_top: 0,
      elastic_topHeight: 200
    }
  },
  onPageScroll (e) {
    var top = e.scrollTop
    console.log('滑动')
    if (top > 0) {
      this.elastic_top = top
      return
    }
    this.elastic_topHeight = Math.abs(top * 2) + 50
  },
  components: {
    msgItem,
    wxHeader,
    newmsgItem,
    welcome
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  }
}
</script>

<style scoped>
</style>
