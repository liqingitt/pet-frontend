export default defineAppConfig({
  pages: [
    // tabBar pages
    'pages/user/index',
    "pages/home/index",

    // pages
  ],
  tabBar:{
    list:[
      {
        pagePath:"pages/home/index",
        text:"首页",
      },
      {
        pagePath:"pages/user/index",
        text:"我的",
      },
   
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
