import React, { Component } from 'react'
import { Link ,browserHistory } from 'react-router'
import banner_text from '../../../../../style/img/arandActivity/ruiliModel/banner_text.png'
import screen_1_title from '../../../../../style/img/arandActivity/ruiliModel/screen_1_title.png'
import screen_1_video from '../../../../../style/img/arandActivity/ruiliModel/screen_1_video.jpg'
import screen_2_title from '../../../../../style/img/arandActivity/ruiliModel/screen_2_title.png'
import ruili_screen_3 from '../../../../../style/img/arandActivity/ruiliModel/ruili_screen_3.png'
import screen_4_title from '../../../../../style/img/arandActivity/ruiliModel/screen_4_title.png'
import screen_5_title from '../../../../../style/img/arandActivity/ruiliModel/screen_5_title.png'
import screen_6_title from '../../../../../style/img/arandActivity/ruiliModel/screen_6_title.png'
import screen_7_title from '../../../../../style/img/arandActivity/ruiliModel/screen_7_title.png'
import screen_8_title from '../../../../../style/img/arandActivity/ruiliModel/screen_8_title.png'
import ruili_logo_1 from '../../../../../style/img/arandActivity/ruiliModel/ruili_logo_1.png'
import ruili_logo_2 from '../../../../../style/img/arandActivity/ruiliModel/ruili_logo_2.png'

import swiper_1_1 from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_1.jpg'
import swiper_1_2 from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_2.jpg'
import swiper_1_3 from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_3.jpg'
import swiper_1_4 from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_4.jpg'
import swiper_1_5 from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_5.jpg'
import swiper_1_6 from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_6.jpg'
import swiper_1_1_min from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_1_min.jpg'
import swiper_1_2_min from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_2_min.jpg'
import swiper_1_3_min from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_3_min.jpg'
import swiper_1_4_min from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_4_min.jpg'
import swiper_1_5_min from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_5_min.jpg'
import swiper_1_6_min from '../../../../../style/img/arandActivity/ruiliModel/swiper_1_6_min.jpg'

import swiper_2_1 from '../../../../../style/img/arandActivity/ruiliModel/swiper_2_1.jpg'
import swiper_2_2 from '../../../../../style/img/arandActivity/ruiliModel/swiper_2_2.jpg'
import swiper_2_3 from '../../../../../style/img/arandActivity/ruiliModel/swiper_2_3.jpg'
import swiper_2_4 from '../../../../../style/img/arandActivity/ruiliModel/swiper_2_4.jpg'
import swiper_2_5 from '../../../../../style/img/arandActivity/ruiliModel/swiper_2_5.jpg'
import swiper_2_6 from '../../../../../style/img/arandActivity/ruiliModel/swiper_2_6.jpg'

import swiper_3_1 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_1.jpg'
import swiper_3_2 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_2.jpg'
import swiper_3_3 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_3.jpg'
import swiper_3_4 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_4.jpg'
import swiper_3_5 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_5.jpg'
import swiper_3_6 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_6.jpg'
import swiper_3_7 from '../../../../../style/img/arandActivity/ruiliModel/swiper_3_7.jpg'

import swiper_4_1 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_1.png'
import swiper_4_2 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_2.jpg'
import swiper_4_3 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_3.jpg'
import swiper_4_4 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_4.jpg'
import swiper_4_5 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_5.jpg'
import swiper_4_6 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_6.jpg'
import swiper_4_7 from '../../../../../style/img/arandActivity/ruiliModel/swiper_4_7.jpg'
let ruiliPlayer1 = null
class RuiliModel extends Component {
  render() {
  	const style = require('../../../../../style/arandActivity/ruiliModel')
    return (
      <div className={style.ruiliModel}>
        <div className={style.content1}>
        	<div className={style.banner}>
        		<img src={banner_text} />
        	</div>
        	<div className={style.screen1}>
        		<img src={screen_1_title} />
        		<div className={style.screen1Video}>
        			<img src={screen_1_video} onClick={this.showVideo1} />
        			<div id='ruiliPlayer1'></div>
        		</div>
        	</div>
        	<div className={style.screen2}>
        		<img src={screen_2_title} />
        		<div>
        			<div className={style.screen2Content}>
	        			<div>
	        				<p>瑞丽模特大赛，是国内影响力领先的平面模特选拔赛事，已成功举办11届。作为中国新生代模特发源地，为国内模特行业输送了无数新星，为大量有梦想的女孩提供了展示自我的机会。</p>
	        				<p>取得名次的选手将有机会签约瑞丽，成为瑞丽专属模特，参与《瑞丽》杂志拍摄。高圆圆、杨幂、刘亦菲等当红女星都与《瑞丽》有过紧密合作。</p>
	        				<p>瑞丽模特大赛作为业内高度认可的平面模特选拔赛事，携手专注演艺行业人才服务并有丰富网络海选经验的红演圈App，共同打造今夏最火赛事——第十二届瑞丽模特大赛。</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className={style.screen3}>
        		<img src={ruili_screen_3} />
        	</div>
        	
        	<div className={style.ruiliSwiper}>
        		<img src={screen_4_title} />
        		<div className={`ruili-swiper-container ${style.ruiliSwiperContainer}`}>
        			<div id='ruiliSwiperTop1' className="swiper-container gallery-top">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_6})`}}></div>
					        </div>
					    </div>
					    <div id='ruiliNextBtn1' className="swiper-button-next swiper-button-white"></div>
					    <div id='ruiliPrevBtn1' className="swiper-button-prev swiper-button-white"></div>
					    <div id='ruiliSwiperThumbs1' className="swiper-container gallery-thumbs">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_1_min})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_2_min})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_3_min})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_4_min})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_5_min})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_1_6_min})`}}></div>
					        </div>
					    </div>
        		</div>
        	</div>
        	
        </div>
        
        <div className={style.content2}>
        
        	<div className={style.ruiliSwiper}>
        		<img src={screen_5_title} />
        		<div className={`ruili-swiper-container ${style.ruiliSwiperContainer}`}>
        			<div id='ruiliSwiperTop2' className="swiper-container gallery-top">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_6})`}}></div>
					        </div>
					    </div>
					    <div id='ruiliNextBtn2' className="swiper-button-next swiper-button-white"></div>
					    <div id='ruiliPrevBtn2' className="swiper-button-prev swiper-button-white"></div>
					    <div id='ruiliSwiperThumbs2' className="swiper-container gallery-thumbs">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_2_6})`}}></div>
					        </div>
					    </div>
        		</div>
        	</div>
        	
        	<div className={style.ruiliSwiper}>
        		<img src={screen_6_title} />
        		<div className={`ruili-swiper-container ${style.ruiliSwiperContainer}`}>
        			<div id='ruiliSwiperTop3' className="swiper-container gallery-top">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_6})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_7})`}}></div>
					        </div>
					    </div>
					    <div id='ruiliNextBtn3' className="swiper-button-next swiper-button-white"></div>
					    <div id='ruiliPrevBtn3' className="swiper-button-prev swiper-button-white"></div>
					    <div id='ruiliSwiperThumbs3' className="swiper-container gallery-thumbs">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_6})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_3_7})`}}></div>
					        </div>
					    </div>
        		</div>
        	</div>
        	
        	<div className={style.ruiliSwiper}>
        		<img src={screen_7_title} />
        		<div className={`ruili-swiper-container ${style.ruiliSwiperContainer}`}>
        			<div id='ruiliSwiperTop4' className="swiper-container gallery-top">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_6})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_7})`}}></div>
					        </div>
					    </div>
					    <div id='ruiliNextBtn4' className="swiper-button-next swiper-button-white"></div>
					    <div id='ruiliPrevBtn4' className="swiper-button-prev swiper-button-white"></div>
					    <div id='ruiliSwiperThumbs4' className="swiper-container gallery-thumbs">
					        <div className="swiper-wrapper">
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_1})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_2})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_3})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_4})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_5})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_6})`}}></div>
					            <div className="swiper-slide" style={{backgroundImage:`url(${swiper_4_7})`}}></div>
					        </div>
					    </div>
        		</div>
        	</div>
        	
        	<div className={style.screen8}>
        		<img src={screen_8_title} />
        		<div className={style.screen8Content1}>
        			<div>
        				<img src={ruili_logo_1} />
        				<p>《瑞丽》是中国轻工业出版社出版的杂志，以平面期刊出版为主，同时大力发展新媒体、图书、无线移动等多种媒体的出版运营，以及广告、发行、活动推广、模特经纪、电子商务等多项业务。现已成为中国极具影响力的时尚媒体集团。</p>
        			</div>
        		</div>
        		<div className={style.screen8Content2}>
        			<div>
        				<p>红演圈App是为演艺从业人员服务的信息平台，为影视、音乐、模特、网红、主播、舞蹈、戏剧、主持、综艺、幕后、文体培训等全品类演艺人员提供日常所需的职业信息类服务，包含通告、人脉、培训、美容整形、服装租赁等；也为各类机构提供艺人招聘发布服务。红演圈致力于发展成为亚洲最大的文化演艺娱乐人力资源供应商。</p>
        				<img src={ruili_logo_2} />
        			</div>
        		</div>
        	</div>
        	
        </div>
      </div>
    )
  }
  componentDidMount() {
    	addBaiduAnchor()
    	$('#activeLink').addClass('active')
    	ruiliPlayer1 = new YKU.Player('ruiliPlayer1',{
				styleid: '0',
				client_id: '320a457df632b818',
				vid: 'XMTg3MjUyNDc1Mg==',
				autoplay: true,
				//newPlayer: true,
			});
			setTimeout(function(){
				//$('#ruiliSwiperTop1').load(function(){
					var ruiliSwiperTop1 = new Swiper('#ruiliSwiperTop1', {
			        nextButton: '#ruiliNextBtn1',
			        prevButton: '#ruiliPrevBtn1',
			        spaceBetween: 10,
			        //loop:true
			    });
			    var ruiliSwiperThumbs1 = new Swiper('#ruiliSwiperThumbs1', {
			        spaceBetween: 10,
			        centeredSlides: true,
			        slidesPerView: 'auto',
			        touchRatio: 0.2,
			        slideToClickedSlide: true,
			        //loop:true
			    });
			    ruiliSwiperTop1.params.control = ruiliSwiperThumbs1;
			    ruiliSwiperThumbs1.params.control = ruiliSwiperTop1;
				//})
	    	
		    
		    var ruiliSwiperTop2 = new Swiper('#ruiliSwiperTop2', {
		        nextButton: '#ruiliNextBtn2',
		        prevButton: '#ruiliPrevBtn2',
		        spaceBetween: 10,
		    });
		    var ruiliSwiperThumbs2 = new Swiper('#ruiliSwiperThumbs2', {
		        spaceBetween: 10,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        touchRatio: 0.2,
		        slideToClickedSlide: true
		    });
		    ruiliSwiperTop2.params.control = ruiliSwiperThumbs2;
		    ruiliSwiperThumbs2.params.control = ruiliSwiperTop2;
		    
		    var ruiliSwiperTop2 = new Swiper('#ruiliSwiperTop2', {
		        nextButton: '#ruiliNextBtn2',
		        prevButton: '#ruiliPrevBtn2',
		        spaceBetween: 10,
		    });
		    var ruiliSwiperThumbs2 = new Swiper('#ruiliSwiperThumbs2', {
		        spaceBetween: 10,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        touchRatio: 0.2,
		        slideToClickedSlide: true
		    });
		    ruiliSwiperTop2.params.control = ruiliSwiperThumbs2;
		    ruiliSwiperThumbs2.params.control = ruiliSwiperTop2;
		    
		    var ruiliSwiperTop3 = new Swiper('#ruiliSwiperTop3', {
		        nextButton: '#ruiliNextBtn3',
		        prevButton: '#ruiliPrevBtn3',
		        spaceBetween: 10,
		    });
		    var ruiliSwiperThumbs3 = new Swiper('#ruiliSwiperThumbs3', {
		        spaceBetween: 10,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        touchRatio: 0.2,
		        slideToClickedSlide: true
		    });
		    ruiliSwiperTop3.params.control = ruiliSwiperThumbs3;
		    ruiliSwiperThumbs3.params.control = ruiliSwiperTop3;
		    
		    var ruiliSwiperTop4 = new Swiper('#ruiliSwiperTop4', {
		        nextButton: '#ruiliNextBtn4',
		        prevButton: '#ruiliPrevBtn4',
		        spaceBetween: 10,
		    });
		    var ruiliSwiperThumbs4 = new Swiper('#ruiliSwiperThumbs4', {
		        spaceBetween: 10,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        touchRatio: 0.2,
		        slideToClickedSlide: true
		    });
		    ruiliSwiperTop4.params.control = ruiliSwiperThumbs4;
		    ruiliSwiperThumbs4.params.control = ruiliSwiperTop4;
		    
	    },500)
  }
  componentWillUnmount(){
  	$('#activeLink').removeClass('active')
  }
  showVideo1(e){
  	const playImg = $(e.currentTarget);
  	playImg.hide();
  	$('#ruiliPlayer1').show();
  }
}
module.exports = RuiliModel