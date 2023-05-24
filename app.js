const howxm = requirePlugin('howxm-plugin')
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow() {
    howxm.debug(false) //设置为true时，开启调试模式
    howxm.init(
      'eb918802-6027-4ba9-80bd-5bf4cdd69a88',
      {},
      function (data) {
        // 成功回调
        console.log('howxm.init成功回调', JSON.stringify(data))
      },
      function (err) {
        // 失败回调
        console.log('howxm.init失败回调', JSON.stringify(err))
      }
    )
  },
  globalData: {
    userInfo: null
  }
})
