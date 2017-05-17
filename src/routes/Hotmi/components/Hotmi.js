import React, { Component } from 'react'
import HeaderFix from '../../../components/HeaderFix'
import FooterFix from '../../../components/FooterFix'
import Footer from '../../../components/Footer';
const style= require('../../../style/hotmi');
require('../../../style/hotmi_headAndfoot.css')
require('../../../style/hotmi_swiper.css')
class Hotmi extends Component {
  render() {
    return (
    	<div className="hotmi_swiper" >
    		<img className='backtopfull' src={`${imgUrl}/back_top.png`} />
    	 	<div className={`swiper-container ${style.swiperContainer}`}>
        		<div className={`swiper-wrapper ${style.swiperWrapper}`}>
        			<div className={`swiper-slide ${style.hotmiOne}`} style={{backgroundImage:`url(${imgUrl}/hotmibg1.jpg)`}}>
        					<div className={style.content}>
        							<div className={style.oneleft}>
        									<div className={style.hotmiOne3Con}>
        										<img className={style.hotmiOne3}  src={`${imgUrl}/hotmiOne3.png`} />
        									</div>
        							</div>
        							<div className={style.oneright}>
        									<img className={style.hotmiOne1} src={`${imgUrl}/hotmiOne1.png`} />
        									<i className={style.onerightLine}>
        									</i>
        									<img className={style.hotmiOne2}  src={`${imgUrl}/hotmiOne2.png`} />
        									<p className={style.onerightTxt}>
        										红蜜是一家为广大消费者提供演艺服务的综合类商城。秉承客户为先的理念，打破传统模式，以服务价格低、艺人数量多为主要特点。红蜜销售9大类60余种日常演艺服务，囊括礼仪模特、主持、歌舞、乐器表演、相声曲艺、魔术杂技、网红明星等，适用于婚礼庆典、生活聚会、企业年会、开业典礼、展销会等场景。
        									</p>
        									<img className={style.hotmiOne4} src={`${imgUrl}/hotmiOne4.png`} />
        							</div>
        					</div>
        			</div>
        			<div className={`swiper-slide ${style.hotmiTwo}`}>
        					<div className={style.content2}>
        							<img className={style.hotmiTwo0} src={`${imgUrl}/hotmiTwo0.jpg`} />
        							<div className={style.maskcon} id="maskcon">
	        							<ul className={`mask ${style.maskul1}`} id="mask">
	        									<li ref="mask1" className="maskli">
	        											<img className={style.hotmiTwo1} src={`${imgUrl}/hotmiTwo1.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(248,121,28,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src= {`${imgUrl}/hotmiTwo_zc.png`} />
																		<span>主持</span>
																	</p>
																</div>
	        									</li>
	        							</ul>
	        							<ul className={style.maskul2}>
	        									<li ref="mask2" className="maskli">
	        											<img className={style.hotmiTwo2} src={`${imgUrl}/hotmiTwo2.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(123,199,38,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_zb.png`} />
																		<span>主播</span>
																	</p>
																</div>
	        									</li>
	        									<li ref="mask3" className="maskli">
	        											<img className={style.hotmiTwo3} src={`${imgUrl}/hotmiTwo3.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(236,76,64,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_mt.png`} />
																		<span>模特</span>
																	</p>
																</div>
	        									</li>
	        							</ul>
	        							<ul className={style.maskul1}>
	        									<li ref="mask4" className="maskli">
	        											<img className={style.hotmiTwo4} src={`${imgUrl}/hotmiTwo4.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(198,114,225,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_gw.png`} />
																		<span>歌舞</span>
																	</p>
																</div>
	        									</li>
	        							</ul>
	        							<ul className={style.maskul2}>
	        									<li ref="mask5" className="maskli">
	        											<img className={style.hotmiTwo5} src={`${imgUrl}/hotmiTwo5.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(85,152,220,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_xx.png`} />
																		<span>相声曲艺</span>
																	</p>
																</div>
	        									</li>
	        									<li ref="mask6" className="maskli">
	        											<img className={style.hotmiTwo6} src={`${imgUrl}/hotmiTwo6.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(29,191,147,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_ms.png`} />
																		<span>魔术杂技</span>
																	</p>
																</div>
	        									</li>
	        							</ul>
	        							<ul className={style.maskul3}>
	        									<li ref="mask7" className="maskli">
	        											<img className={style.hotmiTwo7} src={`${imgUrl}/hotmiTwo7.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(138,114,225,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_lq.png`} />
																		<span>乐器表演</span>
																	</p>
																</div>
	        									</li>
	        									<li ref="mask8" className="maskli">
	        											<img className={style.hotmiTwo8} src={`${imgUrl}/hotmiTwo8.jpg`} />
	        											<div className={style.maskdiv} style={{background:'rgba(211,7,117,0.75)'}}>
																	<p className={style.laycenter}>
																		<img src={`${imgUrl}/hotmiTwo_ly.png`} />
																		<span>礼仪</span>
																	</p>
																</div>
	        									</li>
	        							</ul>
	        						</div>
        					</div>
        			</div>
        			<div className={`swiper-slide ${style.hotmiThree}`}>
        					<div className={style.content}>
        							<img className={style.hotmiThree1} src={`${imgUrl}/hotmiThree1.jpg`} />
        							<img className={style.hotmiThree2}  src={`${imgUrl}/hotmiThree2.jpg`} />
        					</div>
        			</div>
        			<div className={`swiper-slide ${style.hotmiFour}`} ref="last" style={{overflowY:'auto'}}>
    							<div className={style.fourtop}>
    									<div className={style.content}>
    											<img className={style.hotmiFour1} src={`${imgUrl}/hotmiFour1.jpg`} />
    											<ul className={style.hotmiFourul}>
    													<li>
    														<img src={`${imgUrl}/hotmiFour2.jpg`} />
    														<h3>海量一手</h3>
    														<p>优质海量艺人</p>
    														<p>服务类比丰富，档次多样</p>
    													</li>
    													<li>
    														<img src={`${imgUrl}/hotmiFour3.jpg`} />
    														<h3>超值保障</h3>
    														<p>市场最低价</p>
    														<p>艺人接单，省去中间环节</p>
    													</li>
    													<li>
    														<img src={`${imgUrl}/hotmiFour4.jpg`} />
    														<h3>专业安全</h3>
    														<p>人保保障</p>
    														<p>安心预约零风险</p>
    													</li>
    													<li>
    														<img src={`${imgUrl}/hotmiFour5.jpg`} />
    														<h3>资料保真</h3>
    														<p>艺人通过红蜜面试</p>
    														<p>照片保真，视频保真</p>
    													</li>
    											</ul>
    									</div>
    							</div>
    							<div className={style.fourmid}>
    									<div className={style.content}>
    											<div className={style.fourmidleft}>
		        									<img className={style.hotmiFour6}  src={`${imgUrl}/hotmiFour6.jpg`} />
		        									<img className={style.hotmiFour7}  src={`${imgUrl}/hotmiFour7.jpg`} />
		        							</div>
		        							<div className={style.fourmidright}>
		        										<img className={style.hotmiFour8}  src={`${imgUrl}/hotmiFour8.png`} />
		        									  <a className={style.hotmiFour9} href="http://api.hotyq.com:8089/hotyq/outer/goto.do?outName=iosguanwanghotmi"><img src={`${imgUrl}/hotmiFour9.jpg`} /></a>
		        									  <a className={style.hotmiFour10} href="http://img.hotyq.com/android_apk/hotmi_v12.apk"><img  src={`${imgUrl}/hotmiFour10.jpg`} /></a>
		        									  <img className={style.hotmiFour11}  src={`${imgUrl}/hotmiFour11.jpg`} />
		        							</div>
    									</div>
    							</div>
    							<Footer />
        			</div>
        		</div>
        		<div className={`swiper-pagination ${style.swiperPagination}`} style={{position:'fixed'}}></div>
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
  
  componentDidMount(){
  	window.scrollTo(0,0)
  	addBaiduAnchor()
  	 var qq=this.refs.last;
  	$('.backtopfull').hide();
  	var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheelControl: true,
        keyboardControl : true,
        paginationBulletRender: function (index, className) {
			    	return '<span class="' + className + '" style="background:#222222; width:0.16rem; height:0.16rem; border:0.02rem solid rgba(34,34,34,0.3);"></span>';
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
        		$('.backtopfull').hide();
        	}else{
        		$('.backtopfull').fadeIn(600);
        		$('.backtopfull').click(function(){
        			swiper.slideTo(0, 400, false);
        			mySwiper.enableMousewheelControl();
        			$('.backtopfull').fadeOut(600);
        		})
        	}
        }
    });
  	
    $("#maskcon .maskli").each(function(index,element){
    	$(this).hover(function() {
				$(this).find("div").stop().animate({"opacity": 1},'fast','linear');
			}, function() {
				$(this).find("div").stop().animate({"opacity": 0},'fast','linear');
			})
    })
    
    
	}
  
}

module.exports = Hotmi
