/**
 * wxid-小消息id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */

const contacts = [{ // 昵称备注都有的朋友
  'wxid': 'wxid_yanghao',
  'initial': 'z',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
  'nickname': 'haoge',
  'sex': 1,
  'remark': '浩',
  'signature': '嵌入式开发大拿',
  'telphone': 18123374800,
  'album': [{
    imgSrc: ''
  }],
  'area': ['中国', '成都', '郫县'],
  'from': '',
  'tag': '',
  'desc': {

  }
},
{
  'wxid': 'wxid_xihaozou',
  'initial': 'b',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg',
  'nickname': 'xituotuo',
  'sex': 0,
  'remark': '',
  'signature': '大碗宽面',
  'telphone': 18123374800,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg',
    date: 182625262
  }, {
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg',
    date: 182625262
  }],
  'area': ['成都', '华阳'],
  'from': '通过扫一扫',
  'tag': '大神',
  'desc': {
    'title': '',
    'picUrl': ''
  }
}, { // 昵称备注都有的朋友
  'wxid': 'wxid_yangli',
  'initial': 'y',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/yehua.jpg',
  'nickname': '杨大神',
  'sex': 1,
  'remark': '大神',
  'signature': '我啥子都不懂哦',
  'telphone': 18123373800,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg',
    date: 182625262
  }, {
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg',
    date: 182625262
  }],
  'area': ['成都', '郫县'],
  'from': '通过扫一扫',
  'tag': '大神哦',
  'desc': {
    'title': '',
    'picUrl': ''
  }
},
{
  'wxid': 'wxid_jiangruize',
  'initial': 'l',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/liubei.jpg',
  'nickname': 'acmer',
  'sex': 1,
  'remark': 'acmer',
  'signature': '算法什么的都太简单了',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg',
    date: 182625262
  }, {
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg',
    date: 182625262
  }],
  'area': ['成都', '郫县'],
  'from': '通过扫一扫',
  'tag': '会长',
  'desc': {
    'title': '',
    'picUrl': ''
  }
},
{
  'wxid': 'wxid_guangyu',
  'initial': 'g',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg',
  'nickname': '关羽',
  'sex': 1,
  'remark': '关羽',
  'signature': '观尔乃插标卖首',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg',
    date: 182625262
  }, {
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg',
    date: 182625262
  }],
  'area': ['蜀国', '荆州'],
  'from': '通过扫一扫',
  'tag': '蜀',
  'desc': {
    'title': '',
    'picUrl': ''
  }
},
{
  'wxid': 'wxid_zhugeliang',
  'initial': 'z',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg',
  'nickname': '诸葛亮',
  'sex': 1,
  'remark': '诸葛亮',
  'signature': '你可识得此阵？',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg',
    date: 182625262
  }, {
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg',
    date: 182625262
  }],
  'area': ['蜀国', '荆州'],
  'from': '通过扫一扫',
  'tag': '卧龙',
  'desc': {
    'title': '',
    'picUrl': ''
  }
},
{
  'wxid': 'wxid_sunshangxiang',
  'initial': 's',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg',
  'nickname': '孙尚香',
  'sex': 0,
  'remark': '孙尚香2',
  'signature': '夫君,身体要紧~',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg',
    date: 182625262
  }],
  'area': ['吴国', '富春'],
  'from': '通过手机号码添加',
  'tag': '孙夫人',
  'desc': {
    'title': '',
    'picUrl': ''
  }
},
{
  'wxid': 'wxid_sunquan',
  'initial': 's',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg',
  'nickname': '孙权',
  'sex': 1,
  'remark': '孙权',
  'signature': '容我三思',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg',
    date: 182625262
  }],
  'area': ['吴国', '吴郡'],
  'from': '通过手机号码添加',
  'tag': '主公',
  'desc': {
    'title': '',
    'picUrl': ''
  }
},
{
  'wxid': 'wxid_huangyueying',
  'initial': 'h',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg',
  'nickname': '黄月英',
  'sex': 0,
  'remark': '黄月英',
  'signature': '哼哼~',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg',
    date: 182625262
  }],
  'area': ['蜀', '荆州'],
  'from': '通过手机号码添加',
  'tag': '蜀',
  'desc': {
    'title': '',
    'picUrl': ''
  }
}, {
  'wxid': 'wxid_zhenji',
  'initial': 'z',
  'headerUrl': 'https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg',
  'nickname': '甄姬',
  'sex': 0,
  'remark': '甄姬',
  'signature': '仿佛兮若轻云之蔽月',
  'telphone': 18896586152,
  'album': [{
    imgSrc: 'https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg',
    date: 182625262
  }],
  'area': ['魏', '荆州', '中山'],
  'from': '通过手机号码添加',
  'tag': '蜀',
  'desc': {
    'title': '',
    'picUrl': ''
  }
}
]

const contact = {
  contacts
}

contact.getUserInfo = function (wxid) {
  if (!wxid) {

  } else {
    for (var index in contacts) {
      if (contacts[index].wxid === wxid) {
        return contacts[index]
      }
    }
  }
}

export default contact
