<template>
    <div id="page">
    <wx-header :pageName="name" ></wx-header>
    <!-- 顶部下拉框内容 -->
    <div id="header-tip" class="page__hd">
      <div class="page__title">对话列表</div>
      <div class="page__desc">与vr设备交互内容</div>
    </div>
    <!-- 消息列表 -->
    <div class="page_bd" style="margin-top:40px">
      <ul class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">会话</div>
        <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <div class="weui-cell__hd">
                  <image :src="headerUrl" style="width: 20px;height: 20px;margin-right: 5px" />
            </div>
            <div class="weui-cell__bd weui-cell_primary">
                <div>聊天内容</div>
            </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import wxHeader from '@/components/wx-header'
export default {
  data () {
    return {
      id: '',
      name: '',
      msgs: '',
      headerUrl: ''
    }
  },
  mounted () {
    // 获取聊天会话id
    this.id = this.$root.$mp.query.id
    this.name = this.$store.state.msgList.baseMsg[this.id - 1].user[0].nickname
    this.msgs = this.$store.state.msgList.baseMsg[this.id - 1].msg
    this.headerUrl = this.$store.state.msgList.baseMsg[this.id - 1].user[0].headerUrl
  },
  components: {
    wxHeader
  }
}
</script>
<style>

</style>

