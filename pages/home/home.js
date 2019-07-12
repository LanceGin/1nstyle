// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    // 当前滤镜
    current_filter: 'original'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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
  // 滑动切换tab  
  bindChange: function (e) {
    const current_tab = e.detail.current
    const self = this
    self.setData(
      {
        currentTab: current_tab
      }
    )
  },
  // 点击tab切换   
  swichNav: function (e) {
    const current_tab = e.target.dataset.current
    const self = this;
    if (this.data.currentTab === current_tab) {
      return false;
    } else {
      self.setData({
        currentTab: current_tab
      })
    }
  },
  // 拍照
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        const image_path = res.tempImagePath
        wx.navigateTo({
          url: '/pages/edit/edit?imagePath=' + image_path
        })
      }
    })
  },
})