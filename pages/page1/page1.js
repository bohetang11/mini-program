// pages/page1/page1.js
Page({
  click(e){
    console.log(e.target.dataset.index)
  },
  handleChange(e){
    console.log(e.detail.value)
    this.setData({ foo: e.detail.value})
  },
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    students: [
      { id: 1, name: 'zjamg1', age: 18 },
      { id: 2, name: 'zjamg2', age: 18 },
      { id: 3, name: 'zjamg3', age: 18 },
      { id: 4, name: 'zjamg4', age: 18 }
    ],
    foo: 'hello wechat app'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      this.setData({ isLoading: false })
    }, 2000)
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

  }
})