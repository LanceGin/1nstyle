// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_image: '',
    current_filter: 'original',
    filters: [
      { name: "Original", class: "original" },
      { name: "1977", class: "_1977" },
      { name: "Aden", class: "aden" },
      { name: "Amaro", class: "amaro" },
      { name: "Brannan", class: "brannan" },
      { name: "Brooklyn", class: "brooklyn" },
      { name: "Clarendon", class: "clarendon" },
      { name: "Gingham", class: "gingham" },
      { name: "Hudson", class: "hudson" },
      { name: "Inkwell", class: "inkwell" },
      { name: "Kelvin", class: "kelvin" },
      { name: "Lark", class: "lark" },
      { name: "Lo-fi", class: "lofi" },
      { name: "Mayfair", class: "mayfair" },
      { name: "Moon", class: "moon" },
      { name: "Nashville", class: "nashville" },
      { name: "Perpetua", class: "perpetua" },
      { name: "Reyes", class: "reyes" },
      { name: "Rise", class: "rise" },
      { name: "Slumber", class: "slumber" },
      { name: "Stinson", class: "stinson" },
      { name: "Toaster", class: "toaster" },
      { name: "Valencia", class: "valencia" },
      { name: "Walden", class: "walden" },
      { name: "Willow", class: "willow" },
      { name: "X-Pro-2", class: "xpro2" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const imagePath = options.imagePath
    this.setData({
      current_image: imagePath
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 改变滤镜
   */
  switchFilter: function (e) {
    const target = e.currentTarget.dataset.filter
    this.setData({
      current_filter: target
    })
  },
  /**
   * 保存本地
   */
  saveTo: function (e) {
    const self = this
    const ctx = wx.createCanvasContext('saveCanvas', this)
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
          const winWidth = res.windowWidth
          ctx.drawImage(self.data.current_image, 0, 0, winWidth, winWidth)
          ctx.draw(false, () => {
            self.canvasToTempFilePath({
              canvasId: 'saveCanvas'
            }, this).then((res) => {
              const file_path = res.tempFilePath
              console.log(111, file_path)
              // wx.saveImageToPhotosAlbum({
              //   filePath: file_path,
              //   success: function(res) {
              //     console.log(1111)
              //   }
              // })
            })
          })
      }
    })
  },
  canvasToTempFilePath: function (option, context) {
    return new Promise((resolve, reject) => {
      wx.canvasToTempFilePath({
        ...option,
        success: resolve,
        fail: reject,
      }, context)
    })
  }
})