export default defineAppConfig({
  pages: [
    // tabBar pages

    "pages/home/index",
    "pages/publish/index",

    'pages/user/index',

    // pages
    'pages/PublishNext/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/publish/index",
        text: "发布",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
      },

    ]
  },
  requiredPrivateInfos: [
    "getFuzzyLocation"
  ],
  "permission": {
    "scope.userFuzzyLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
