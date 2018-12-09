<template>
     <li class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
        <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
            <image class="weui-media-box__thumb" :src="item.user[0].headerUrl" />
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
            <div class="weui-media-box__title" v-if="item.type=='group'">{{item.group_name}}</div>
            <div class="weui-media-box__title" v-else>{{item.user[0].remark||item.user[0].nickname}}</div>
            <div class="weui-media-box__desc">{{item.msg[item.msg.length-1].text}}</div>
        </div>
    </li>
</template>
<script>
export default {
  props: ['item'],
  mounted () {
    console.log(this.item)
  }
}
</script>
<style>

</style>


