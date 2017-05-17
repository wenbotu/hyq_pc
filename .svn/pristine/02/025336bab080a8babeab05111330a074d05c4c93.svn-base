import React, { Component } from 'react'
import style from '../../../../../style/contact.scss'
class LinkUs extends Component {
	
  render() {
  	var arr1=["红演圈（北京）网络科技有限公司","地址：北京市朝阳区酒仙桥中路878东区2层","总机：010-57799869"];
  	var arr2=["红蜜家","地址：北京市朝阳区百子湾黄木厂路1号院1号楼底商","总机：400-960-9099"];
    return (
      <div className={style.contact} >
   		<div className={style.contactCon}>
	        <div className={style.contactLeft} >	
	        	<HotyqDes />
	        </div>
	        <div className={style.contactRight}>
	        	<HotyqMap id="div1" txt={arr1} />
	        	<HotyqMap id="div2" txt={arr2} />
	        </div>
   		</div>
      </div>
    )
  }
  componentWillUnmount(){
	  $('#aboutLink').removeClass('active')
	}
  componentDidMount(){
  	window.scrollTo(0,0);
  	$('#aboutLink').addClass('active')
  	addBaiduAnchor()
  	 setTimeout(function(){
  	 	//第一张地图
  	 	var map = new BMap.Map("div1");	
  	 	var point=new BMap.Point(116.500748,39.982352);
		map.centerAndZoom(point, 15);
		var marker=new BMap.Marker(point);
		map.addOverlay(marker);
		map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
		map.enableContinuousZoom(); 
		//第二张地图
		var map2 = new BMap.Map("div2");            // 创建Map实例
	    var point2 = new BMap.Point(116.472269,39.906142);  
	    var marker2=new BMap.Marker(point2);
		map2.addOverlay(marker2);
	    map2.centerAndZoom(point2,15);                 
	    map2.enableScrollWheelZoom();  
  	 },30)
  	 //document.body.style.overflowY='scroll'
    /*setTimeout(()=>{
    	document.body.style.overflow='scroll'
    },0)*/
  }
}
var HotyqDes=React.createClass({
	 render(){
	 		return <div>
			 				<p className={style.title}>商务合作</p>
			 				<p>TEL：010-57799869－8182</p>
			 				<p>Mail：BD@hotyq.com</p>
			 				<p className={style.title}>客服</p>
			 				<p>TEL：010-57799869－8183</p>
			 				<p>Mail：kf@hotyq.com</p>
			 				<p>QQ：2284680653</p>
			 				<p className={style.title}>红蜜客服</p>
			 				<p>400-960-9099</p>
			 				<p className={style.title}>媒体账号</p>
			 				<a href="http://weibo.com/hotyq" className={style.weiboHref} target='_blank'  style={{backgroundImage:`url(${imgUrl}/hotFanWeiBo.jpg)`}}>红演圈微博</a>
			 				<a href="http://weibo.com/p/1005055958399021" target='_blank' className={style.weiboHref} style={{ backgroundImage:`url(${imgUrl}/hotFanWeiBo.jpg)`}}>红蜜家微博</a>
			 				<div className={style.erweima}>
			 					<img src={`${imgUrl}/hotFanWeiXin.jpg`} />
			 					<p className={style.erweides}>扫描二维码关注红演圈微信</p>
			 				</div>
			 				<div className={style.erweima}>
			 					<img src={`${imgUrl}/hotmi_home.png`} />
			 					<p className={style.erweides}>扫描二维码关注红蜜家微信</p>
			 				</div>
	 				</div>
	 }
})
var HotyqMap=React.createClass({
		render(){
			return <div>
				<div id={this.props.id} className={style.map}></div>
				<div className={style.mapDes}>
					{this.props.txt.map((item,i) =><p key={i}>{item}</p>)}
					
				</div>
			</div>
		}
})
module.exports = LinkUs
