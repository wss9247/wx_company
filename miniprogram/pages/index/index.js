
Page({
  data: {
    images: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg'
    ],
   urls:[
     { url: "/pages/cancat/cancat", name: "教育服务", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "教育研究", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "技能竞赛", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "示范案例", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "团队管理", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "合作动态", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "学员风采", src:"../../images/edu_service.png"},
     { url: "/pages/cancat/cancat", name: "联系我们", src:"../../images/edu_service.png"}
   ],
   notices:[
     "国际化探索|新道科技受瑞士联邦政府职教研究所邀请洽谈职教合作",
     "首届新道杯2019用友企业云服务开发技能大赛（高校赛区）投票啦",
     "企业游学|四川示范和特色院校管理干部高级研修班走进新道 共话职业院校发展路径"
   ]
  },
  jumpToNew(event){  // 导航跳转到新页面
    var url = event.target.dataset.url;
    console.log(url)
    wx.navigateTo({
      url: url
    })
  },
  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
   
  },

  /* 生命周期函数--监听页面初次渲染完成 */
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