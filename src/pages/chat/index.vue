<template>
    <div class="page">
    <wx-header :pageName="name" ></wx-header>
    <!-- 顶部下拉框内容 -->
    <div id="header-tip" class="page__hd">
      <div class="page__title">对话列表</div>
      <div class="page__desc">与vr设备交互内容</div>
    </div>
    <!-- 消息列表 -->
    <div class="dialogue sub-page" style="margin-top:40px;height:1000px;">
      <!-- <ul class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">会话</div>
        <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <div class="weui-cell__hd">
                  <image :src="headerUrl" style="width: 20px;height: 20px;margin-right: 5px" />
            </div>
            <div class="weui-cell__bd weui-cell_primary">
                <div>{{msgs[0]}}</div>
            </div>
        </div>
      </ul> -->
      <section class="dialogue-section clearfix">
            <div class="row clearfix" v-for="item in msgs" :key="item">
                <img :src="item.headerUrl" class="header" style="height:35px;">
                <p class="text" >{{item.text}}</p>
            </div>
             <div class="r-row clearfix" v-for="item in mMsgs" :key="item">
                <img :src="item.headerUrl" class="r-header" style="height:35px;">
                <p class="r-text" >{{item.text}}</p>
            </div>
            <span class="msg-more" id="msg-more">
              <ul>
                  <li>复制</li>
                  <li>转发</li>
                  <li>收藏</li>
                  <li>删除</li>
              </ul></span>
      </section>
    </div>
    
    <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">
                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" v-on:click="currentChatWay=true"></span>
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" v-on:click="currentChatWay=false"></span>
                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say">
                        <span class="one">按住 说话</span>
                        <span class="two">松开 结束</span>
                    </div>
                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <input class="chat-txt" type="text" @confirm="pushMsg()"  v-model="text"/>
                </div>
                <span class="expression iconfont icon-dialogue-smile" style="margin-left: 15px"></span>
                <span class="more iconfont icon-dialogue-jia"></span>
                <div class="recording" style="display: none;" id="recording">
                    <div class="recording-voice" style="display: none;" id="recording-voice">
                        <div class="voice-inner">
                            <div class="voice-icon"></div>
                            <div class="voice-volume">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <p>手指上划,取消发送</p>
                    </div>
                    <div class="recording-cancel" style="display: none;">
                        <div class="cancel-inner"></div>
                        <p>松开手指,取消发送</p>
                    </div>
                </div>
            </div>
        </footer>
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
      mMsgs: [],
      headerUrl: '',
      currentChatWay: true,
      currentText: '',
      text: ''
    }
  },
  methods: {
    pushMsg () {
      this.mMsgs.push({
        'text': this.text,
        'date': 1488117964495,
        'name': 'sky',
        'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg'
      })
      this.text = ''
    }
  },
  mounted () {
    // 获取聊天会话id
    this.id = this.$root.$mp.query.id
    this.name = this.$store.state.msgList.baseMsg[this.id - 1].user[0].nickname
    this.msgs = this.$store.state.msgList.baseMsg[this.id - 1].msg
    this.headerUrl = this.$store.state.msgList.baseMsg[this.id - 1].user[0].headerUrl
    this.mMsgs = this.$store.state.msgList.baseMsg[this.id - 1].m_msg
  },
  onUnload () {
    this.$store.state.msgList.baseMsg[this.id - 1].m_msg = this.mMsgs
    this.mMsgs = []
  },
  components: {
    wxHeader
  }
}
</script>
<style>

</style>

