// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_image: '',
    current_filter: 'original',
    filters: [
      'original',
      '1977',
      'aden',
      'amaro',
      'ashby',
      'brannan',
      'brooklyn',
      'charmes',
      'clarendon',
      'crema',
      'dogpatch',
      'earlybird',
      'gingham',
      'ginza',
      'hefe',
      'helena',
      'hudson',
      'inkwell',
      'kelvin',
      'juno',
      'lark',
      'lofi',
      'ludwig',
      'maven',
      'mayfair',
      'moon',
      'nashville',
      'perpetua',
      'poprocket',
      'reyes',
      'rise',
      'sierra',
      'skyline',
      'slumber',
      'stinson',
      'sutro',
      'toaster',
      'valencia',
      'vesper',
      'walden',
      'willow',
      'xpro-ii'
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
  }
})