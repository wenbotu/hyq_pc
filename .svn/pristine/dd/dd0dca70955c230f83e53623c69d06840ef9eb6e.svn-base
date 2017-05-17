/****************************** 测试 begin ******************************/

global.imgUrl = 'http://'+'testweb.hotyq.com'+'/src/style/img'//测试
global.api = 'http://www.hotyq.com:9988/index/newsapi'//测试
global.guanW='http://www.hotyq.com:9988' //测试
global.videoUrl='http://'+'testweb.hotyq.com'+'/src/video.html'

/****************************** 测试 end ******************************/

//console.log(window.location.hostname)

/****************************** 线上 begin ******************************/

/*global.imgUrl =  'http://'+window.location.hostname+'/hotyq/src/style/img'//线上
global.api = 'http://'+window.location.hostname+'/index/newsapi'//线上
global.guanW='http://'+window.location.hostname //线上
global.videoUrl='http://'+window.location.hostname+'/hotyq/src/video.html'*/

/****************************** 线上 end ******************************/

//添加百度统计锚点
global.addBaiduAnchor = function(){
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?17db08ec9ac3c30accefeb4a1cc91662";
  var s = document.getElementsByTagName("script")[0];
  if(s.src.indexOf('hm.baidu.com') != -1){
	s.parentNode.removeChild(s)
	s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
  }else{
	s.parentNode.insertBefore(hm, s);
  }
}

global.serviceCateId = 12;

global.initServiceCateIdList=[];
