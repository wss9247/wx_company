// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg'
    ],
   urls:[
     { url: "/pages/cancat/cancat", name:"教育服务"},
     { url: "/pages/cancat/cancat", name:"教育研究"},
     { url: "/pages/cancat/cancat", name:"技能竞赛"},
     { url: "/pages/cancat/cancat", name:"示范案例"},
     { url: "/pages/cancat/cancat", name:"团队管理"},
     { url: "/pages/cancat/cancat", name:"合作动态"},
     { url: "/pages/cancat/cancat", name:"学员风采"},
     { url: "/pages/cancat/cancat", name:"联系我们"}
   ]
  },
  jumpTo(event){
    var url = event.target.dataset.url;
    console.log(url)
    wx.navigateTo({
      url: url
    })
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