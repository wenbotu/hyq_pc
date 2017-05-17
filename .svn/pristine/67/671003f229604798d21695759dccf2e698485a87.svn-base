import React, { Component } from 'react';
import style from '../../../style/Hotfan.scss';
import '../../../style/swiper_hotfan_reset.css';
import Footer from '../../../components/Footer';
class Hotfan extends Component {
  render() {
  	let styles = {
  		position:'fixed',
  		bottom:'1.50rem',
  		right:'2.50rem',
  		cursor:'pointer',
  		zIndex:'999',
  		width:'0.8rem',
  		height:'0.8rem'
  	}
    return (
    	<div style={{width:'100%',height:'calc(100% - 80px)',minWidth:'1100px',overflow:'hidden'}}   >
    			<div  style={{width:'100%',height:'100%',overflow:'hidden'}} >
    				
			    	<div className="swiper-container" >
							    <div className="swiper-wrapper">
							        <div className="swiper-slide"  ><NavSection /></div>
							        <div className="swiper-slide" style={{overflow:'hidden'}} ><DownSection /></div>
							        <div className="swiper-slide"><DesSection/></div>
							        <div className="swiper-slide" ref="aa" style={{overflowY:'scroll'}}><JoinOrgSection/></div>
							    </div>
							    <div className={`swiper-pagination ${style.paginationSet} swiper-hofan-reset`} style={{position:'fixed',right:'2rem'}} ></div>
			      </div>
		     		<img src={`${imgUrl}/back_top.png`} style={styles}   className="backTop" />
    			</div>
    	</div>
    )
  }
  componentWillUnmount(){
  	$('.headerCon').css('padding-right','0px')
  }
  componentWillMount(){
  	$('.headerCon').css('padding-right','17px')
  }
  
   componentDidMount() {
   			window.scrollTo(0,0);
   			addBaiduAnchor()
   			 var qq=this.refs.aa;
   			 $('.backTop').hide();
        var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    pagination: '.swiper-pagination',
			    width:window.innerWidth,
			    paginationClickable :true,
			    mousewheelControl : true,
			    keyboardControl : true,
			    paginationBulletRender: function (index, className) {
			    	return '<span class="' + className + '" style="background:#222222; width:0.16rem; height:0.16rem; border:0.02rem solid rgba(34,34,34,0.3); " ></span>';
				  },
			    onSlideChangeStart:function(swiper){
			    	var tmpIndex=swiper.activeIndex;
			    	if(tmpIndex==3){
			    		mySwiper.disableMousewheelControl();
			    		$("body").css("minHeight",'80px')
			    		qq.scrollTop=2;
			    		document.body.onmousewheel = function(event) {
					    	event = event || window.event;
							    var top=qq.scrollTop;
							    if(top==0 && event.wheelDelta>0){
							    	mySwiper.enableMousewheelControl();
							    }
							};
							document.body.addEventListener("DOMMouseScroll", function(event) {
							    event = event || window.event;
							    var top=qq.scrollTop;
							    if(top==0 && event.detail==-3){
							    	mySwiper.enableMousewheelControl();
							    }
							});
			    	}
			    	  
			    }, 
			    onSlideChangeEnd: function(swiper){
        	var tmpIndex=swiper.activeIndex;
        	if(tmpIndex==0){
        		$('.backTop').hide();
        	}else{
        		$('.backTop').fadeIn(600);
        		$('.backTop').click(function(){
        			swiper.slideTo(0, 400, false);
        			mySwiper.enableMousewheelControl();
        			$('.backTop').fadeOut(600);
        		})
        	}
        }
			 
			  }) 
  }
}
var NavSection= React.createClass({
  render: function() {
    return <div className={style.nav_contain}>
    				<div className={style.navDes}>
    					<div className={style.logo} style={{backgroundImage:`url(${imgUrl}/hotfanLogo.png) `}}></div>
				    	<p className={style.des}>
				    新媒红贩（北京）网络科技有限公司是由红演圈科技和新媒诚品合资成立，专注于精品影游交易的互联网中介公司。公司拥有高品质，高热度作品版权源头。一对一为投资人提供有料，并且合适投资人风格方向的版权作品。版权交易的主要流程为线上曝光，线下交易。线上对我们拥有版权作品进行展示；线下进行版权拍卖和严格的版权交易流程。
				    	</p>
    				</div>
			    	<div className={style.topImg} style={{backgroundImage:`url(${imgUrl}/hotFanNavtop.jpg) `}}></div>
			    	<div className={style.botImg} style={{backgroundImage:`url(${imgUrl}/hotFanNavBot.png) `}}></div>
		    	</div>;
  }
});
var DownSection= React.createClass({
  render: function() {
    return <div className={style.downContain} style={{backgroundImage:`url(${imgUrl}/hotFanLeftTop.png),url(${imgUrl}/hotFanRightBot.png)`}}>
    					<div className={style.downDes}>
    						<p className={style.hotFanDownTit} style={{backgroundImage:`url(${imgUrl}/hotFanDownTit.png) `}}></p>
    						<div className={style.hotFanDownPhone} style={{backgroundImage:`url(${imgUrl}/hotFanDownPhone.png) `}}></div>
	    					<p className={style.downCon}>红贩App是提供高品质、高效率、标准化服务的影视IP版权线上曝光、线下交易平台，专注为投资商与版权方（作家、出版社、小说网站）提供优质服务。为作家寻找影视投资方，进行作品的影视版权销售。提供市场调研、投资方评估、版权法务梳理等专业服务。为影视投资方寻找合适的影视IP，梳理一手版权、调查清晰版权所属、去中间商、无差价。提供专业的影视IP采购与猎头服务。</p>
	    					<div className={style.downBtn}>
	    							<div className={style.erWeiMa} style={{backgroundImage:`url(${imgUrl}/erWeiMa.png) `}}></div>
	    							<a  className={style.android} style={{backgroundImage:`url(${imgUrl}/hotFanAndroid.png) `}} href="http://img.hotyq.com/android_apk/hotfan_v11.apk"></a>
	    							<a className={style.ios} style={{backgroundImage:`url(${imgUrl}/hotFanIos.png) `}} href="http://api.hotyq.com:8089/hotyq/outer/goto.do?outName=iosguanwanghotfan"></a>
	    					</div>
    					</div>
    				</div>
  }
});
var DesSection= React.createClass({
  render: function() {
    return <div className={style.desContain}>
    					<div className={style.desDes}>
    							<p className={style.desTit}><img src={`${imgUrl}/hotFanDesTit.png`} /></p>
    							<ul className={style.eggImg}>
    								<li><img src={`${imgUrl}/hotFanEg1.png`} /></li>
    								<li><img src={`${imgUrl}/hotFanEg2.png`} /></li>
    								<li><img src={`${imgUrl}/hotFanEg3.png`} /></li>
    							</ul>
    					</div>
    				</div>;
  }
});
var JoinOrgSection= React.createClass({
	open:function(){
		$(".JoinOrgContain").css("height","auto");
		$(".jsoinOrgTit").css("height","auto");
		this.refs.open.style.display='none';
		this.refs.close.style.display='block';
	},
	close:function(){
		this.refs.open.style.display='block';
		this.refs.close.style.display='none';
		$(".JoinOrgContain").css("height","100%");
		$(".jsoinOrgTit").css("height","100%");
	},
  render: function() {
    return <div className={style.joinOrgContain2}>
				    	<div className={`${style.joinOrgContain} JoinOrgContain`}>
							    	<div className={style.jsoinOrgTit}>
							    		<p className={style.jsoinOrgImg} style={{backgroundImage:`url(${imgUrl}/hotFanOrgTit.jpg)`}}></p>
							    		<div className={style.jsoninOrgs} ref="open">
							    			<img src={`${imgUrl}/hotFanOrgSection.jpg`} />
							    			<a href="javascript:;" onClick={this.open}  className={style.jsoninOrgMore}>显示更多<i className="iconfont">&#xe604;</i></a>
							    		</div>
							    		<div className={style.jsoninOrgs} ref="close" style={{display:'none'}}>
							    			<img src={`${imgUrl}/hotFanOrgAll.jpg`} />
							    			<a href="javascript:;" onClick={this.close} className={style.jsoninOrgMore}>收起<i className="iconfont">&#xe603;</i></a>
							    		</div>
							    	</div>
							    	<div className={style.JoinOrgDes}>
							    			<div className={style.JoinLogo} style={{backgroundImage:`url(${imgUrl}/hotFanJoinLogo.png) `}}></div>
							    			<div className={style.JoinTxt} style={{backgroundImage:`url(${imgUrl}/hotFanJoinTxt.png) `}}></div>
							    			<div className={style.JoinErweima} style={{backgroundImage:`url(${imgUrl}/erWeiMa.png) `}}></div>
							    			<a href="http://api.hotyq.com:8089/hotyq/outer/goto.do?outName=iosguanwanghotfan" className={style.ios} style={{backgroundImage:`url(${imgUrl}/hotFanIos.png)`}} ></a>
							    			<a href="http://img.hotyq.com/android_apk/hotfan_v11.apk" className={style.android} style={{backgroundImage:`url(${imgUrl}/hotFanAndroid.png)`}}></a>
							    	</div>
							    	<div><Footer /></div>
							    </div>
							    
				    </div>
  }
});

module.exports = Hotfan
