// pages/abouts/abouts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [{  // 缩小
      id: 1,
      iconPath: '../../images/suoxiao.png',
      position: {
        left: 310,
        top: 40,
        width: 32,
        height: 32
      },
      clickable: true
    },{ //放大
      id: 2,
      iconPath: '../../images/fangda.png',
      position: {
        left: 340,
        top:40,
        width: 32,
        height: 32
      },
      clickable: true
    }]
  },

  onLoad: function () {
    var _this = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        console.log(res)
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: 30.635175,
            longitude: 103.98769,
            width: 32,
            height: 32,
            iconPath: "../../images/location.png",
            title: "西物慧鼎"
          }]
        })
      }
    })

  },
  //点击merkers
  markertap(e) {
    console.log(e)
    wx.showActionSheet({
      itemList: ["成都市武侯区西物慧鼎A座"],
      success: function (res) {
        console.log(res.tapIndex);
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  mapLocation(e){
    console.log(e);
  },
  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }
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