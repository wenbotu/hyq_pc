import React, { Component } from 'react'
import { Link ,browserHistory } from 'react-router'
import style from '../../../../../style/arandActivity/rankingList.scss'
import video_2 from '../../../../../style/img/video_2.png'
import play from '../../../../../style/img/play.png'
import bgFir from '../../../../../style/img/arandActivity/rankKingList/firBg.png'
import logoFir from '../../../../../style/img/arandActivity/rankKingList/firLogo.png'
import pic0Three from '../../../../../style/img/arandActivity/rankKingList/actorF.png'
import pic1Three from '../../../../../style/img/arandActivity/rankKingList/actorS.png'
import pic2Three from '../../../../../style/img/arandActivity/rankKingList/actorT.jpg'
import listFour from '../../../../../style/img/arandActivity/rankKingList/fourList.jpg'
import parkFour from '../../../../../style/img/arandActivity/rankKingList/partyPic.jpg'
import fiveLeft from '../../../../../style/img/arandActivity/rankKingList/fivePicLeft.jpg'
import fiveRight from '../../../../../style/img/arandActivity/rankKingList/fivePicRight.jpg'
import sixBg from '../../../../../style/img/arandActivity/rankKingList/sixBg.png'
import firPos from '../../../../../style/img/arandActivity/rankKingList/firPos.png'
import firPosLeft from '../../../../../style/img/arandActivity/rankKingList/firPosL.png'
import globalYellow from '../../../../../style/img/arandActivity/rankKingList/globalPos.png'
import globalGreen from '../../../../../style/img/arandActivity/rankKingList/golbalGreen.png'
import listFour2 from '../../../../../style/img/arandActivity/rankKingList/actorPicSec.jpg'
import top_1_1 from '../../../../../style/img/arandActivity/rankKingList/top_1_1.jpg'
import top_1_2 from '../../../../../style/img/arandActivity/rankKingList/top_1_2.jpg'
import top_1_3 from '../../../../../style/img/arandActivity/rankKingList/top_1_3.jpg'
import top_1_4 from '../../../../../style/img/arandActivity/rankKingList/top_1_4.jpg'
import top_1_5 from '../../../../../style/img/arandActivity/rankKingList/top_1_5.jpg'
import top_1_6 from '../../../../../style/img/arandActivity/rankKingList/top_1_6.jpg'
import top_1_7 from '../../../../../style/img/arandActivity/rankKingList/top_1_7.jpg'
import top_1_8 from '../../../../../style/img/arandActivity/rankKingList/top_1_8.jpg'
import top_1_9 from '../../../../../style/img/arandActivity/rankKingList/top_1_9.jpg'
import top_1_10 from '../../../../../style/img/arandActivity/rankKingList/top_1_10.jpg'
import top_2_1 from '../../../../../style/img/arandActivity/rankKingList/top_2_1.jpg'
import top_2_2 from '../../../../../style/img/arandActivity/rankKingList/top_2_2.jpg'
import top_2_3 from '../../../../../style/img/arandActivity/rankKingList/top_2_3.jpg'
import top_2_4 from '../../../../../style/img/arandActivity/rankKingList/top_2_4.jpg'
import top_2_5 from '../../../../../style/img/arandActivity/rankKingList/top_2_5.jpg'
import top_2_6 from '../../../../../style/img/arandActivity/rankKingList/top_2_6.jpg'
import top_2_7 from '../../../../../style/img/arandActivity/rankKingList/top_2_7.jpg'
import top_2_8 from '../../../../../style/img/arandActivity/rankKingList/top_2_8.jpg'
import top_2_9 from '../../../../../style/img/arandActivity/rankKingList/top_2_9.jpg'
import top_2_10 from '../../../../../style/img/arandActivity/rankKingList/top_2_10.jpg'
import top_3_1 from '../../../../../style/img/arandActivity/rankKingList/top_3_1.jpg'
import top_3_2 from '../../../../../style/img/arandActivity/rankKingList/top_3_2.jpg'
import top_3_3 from '../../../../../style/img/arandActivity/rankKingList/top_3_3.jpg'
import top_3_4 from '../../../../../style/img/arandActivity/rankKingList/top_3_4.jpg'
import top_3_5 from '../../../../../style/img/arandActivity/rankKingList/top_3_5.jpg'
import top_3_6 from '../../../../../style/img/arandActivity/rankKingList/top_3_6.jpg'
import top_3_7 from '../../../../../style/img/arandActivity/rankKingList/top_3_7.jpg'
import top_3_8 from '../../../../../style/img/arandActivity/rankKingList/top_3_8.jpg'
import top_3_9 from '../../../../../style/img/arandActivity/rankKingList/top_3_9.jpg'
import top_3_10 from '../../../../../style/img/arandActivity/rankKingList/top_3_10.jpg'
import rank_video from '../../../../../style/img/arandActivity/rankKingList/rank_video.jpg'
let rankPlayer1 = null
class RankingList extends Component {
  render() {
    return (
      <div>
			<div className={style.bgSet}>
				<div className={style.contain}>
					<FirCon/>
					<SecCon/>
					<ThreeCon/>
					<FourCon/>
					<FiveCon/>
					<SixCon/>
				</div>
			</div>
      </div>
    )
  }
  componentDidMount() {
    	addBaiduAnchor()
    	//$('#activeLink').addClass('active')
    	var rankSwiperTop1 = new Swiper('#rankSwiperTop1', {
	        nextButton: '#rankNextBtn',
	        prevButton: '#rankPrevBtn',
	        spaceBetween: 10,
	    });
  }
  componentWillUnmount(){
  	//$('#activeLink').removeClass('active')
  }
}
class FirCon extends Component{
 	 
	 render(){
		 return <div className={`${style.section} ${style.fir}`}>
		 	<div className={style.firPosLeft}>
		 		<img src={firPosLeft} />
		 	</div>
		 	<div className={style.sectionCon}>
		 		<div className={style.posFir}><img src={firPos}/></div>
		 		<img src={logoFir}/>
		 			<div className={style.desCon}>由红演圈主办、微博校园联合主办，国内目前最有影响力的校园演艺人才综合实力排行榜。<br/>截至目前，已有超过
		 			<span className={style.boldFir}>1500名</span>校园艺人上榜。</div>
		 		<div className={style.firVedio}>
		 			<img id='rankVideoImg1' src={rank_video} onClick={this.showVideo1} />
		 			<img id='rankVideoPlayBtn1' onClick={this.showVideo1} src={play} />
        	<div id='rankPlayer1'></div>
		 		</div>
		 	</div>
		 </div>
	 }
	 componentDidMount() {
    	addBaiduAnchor()
    	rankPlayer1 = new YKU.Player('rankPlayer1',{
				styleid: '0',
				client_id: '320a457df632b818',
				vid: 'XMTc4MjAwMDYzMg==',
				autoplay: true,
				//newPlayer: true,
			});
   }
	 showVideo1(e){
	  	$('#rankVideoImg1').hide();
	  	$('#rankVideoPlayBtn1').hide();
	  	$('#rankPlayer1').show();
   }
 }
  var SecCon=React.createClass({
	 render:function(){
		 return <div className={`${style.section} ${style.sec}`}>
		 	<div className={style.sectionCon}>
		 		<div className={`${style.whBg} ${style.fontBig}`}>
		 		<p>
		 		校园艺人排行榜是在团中央指导下，中国校园市场联盟的大力支持下，由红演圈主办，微博校园联合主办，是国内第一个也是目前最有影响力的校园演艺人才综合实力排行榜。</p>
		 		<p>通过举办线下人才推介会、剧组选角等多种活动形式，将所有入榜优质艺人、百强艺人、十佳艺人，直接推荐给国内各大影视公司、经纪公司、演艺机构、视频与直播平台等用人单位。</p>
		 		<p>旨在搭建一个校园艺人走向演艺之路的绿色通道，发现与挖掘校园演艺人才，成就校园艺人演艺梦想！</p>
		 		<p>活动2016年2月29日启动，截至2016年12月，已经有超过<span className={style.emphasizeCss}>1500名</span>校园艺人上榜！先后产生了3-12月榜百强艺人<span className={style.emphasizeCss}>1000名</span>，至少<span className={style.emphasizeCss}>200名</span>入榜艺人迅速成为了各大综艺节目、模特赛事、网络直播的首选合作艺人。
		 		</p>
		 		</div>
		 		<ul className={style.ul}>
		 			<li>
		 			<img src={pic0Three} />
		 			</li>
		 			<li>
		 			<img src={pic1Three} />
		 			</li>
		 			<li>
		 			<img src={pic2Three} />
		 			</li>
		 		</ul>
		 	</div>
		 </div>
	 }
 })
  var ThreeCon=React.createClass({
	 render:function(){
		 return <div  className={`${style.section} ${style.thr}`}>
		 <img src={firPosLeft} className={style.threeLeftB}/>
		 <img src={globalYellow} className={style.threeRightB} />
		 <div className={style.sectionCon}>
		 	<div className={style.wrapBor}>
		 		<div className={style.wrapSection}>
		 		<p className={style.title}>网络海选</p>
		 		  <div className={style.flexCss}>
			 		 <div>
			 			<ul>
			 				<li><b>报名</b><span>选手下载红演圈App，注册登陆后进入“校园艺人排行榜”专题，点击报名</span></li>
			 				<li className={style.line50}><b>投票</b><span>报名成功后系统生成选手票选页面，接受大众票选</span></li>
			 				<li><b>上榜</b><span>当月票选前100名将获得由红演圈提供的包装、上戏、签约机会等</span></li>
			 			</ul>
			 		</div>
			 		<div><img src={listFour}/></div>
		 		  </div>
		 		</div>
		 	</div>
		 	<div className={style.wrapBor}>
	 		<div className={style.wrapSection}>
	 		<p className={style.title}>艺人推荐会</p>
	 		  <div className={style.flexCss}>
	 		  	<div><img src={listFour2}/></div>
		 		 <div>
		 			<ul className={style.scaleUl}>
		 				<li><b className={style.two}>才艺<br/>秀</b><span>校园艺人排行榜当月百强艺人，通过视频、表演等多种方式现场向影视公司等用人单位展示自己的才艺</span></li>
		 				<li><b className={style.two}>主题<br/>推荐</b><span>校园艺人排行榜每期设立一个主题，向百强艺人推介优秀的机构、企业、赛事活动或者影视项目</span></li>
		 				<li><b>颁奖</b><span>现场决选出当月10强选手，由影视界大咖、知名企业领导颁奖</span></li>
		 				<li><b>对接</b><span>校园艺人排行榜百强艺人与到场影视公司、经纪公司、直播工会等现场对接，建立合作</span></li>
		 			</ul>
		 		</div>
		 		
	 		  </div>
	 		</div>
	 	</div>
		 <div className={style.felxCssTwo}>
			 <div className={style.wrapBor}>
		 		<div className={style.wrapSection}>
		 			<p className={style.title}>校园角色</p>
		 				<div className={style.flexCss}>
		 				<ul className={style.schoolSec}>
		 					<li className={style.line50}><b>剧组</b><span>把影视剧组、节目组带进校园，让校园艺人直接面对机会</span></li>
		 					<li className={style.line50}><b>导演</b><span>影视剧剧组或节目组导演现场面试</span></li>
		 					<li><b>入库</b><span>选角活动中表演优秀的，无论当场被剧组选中与否，都将进入校园艺人排行榜优质艺人库，获得更多面试机会</span></li>
		 				</ul>
		 				</div>
		 			</div>
		 		</div>
		 		<div className={style.wrapBor}>
		 		<div className={style.wrapSection}>
	 				<p className={style.title}>年度盛典</p>
	 				<p>打造国内最具影响力的校园艺人/校园网红盛典</p>
	 				<div className={style.parkImg}>
	 					<img src={parkFour}/>
	 				</div>
	 			</div>
	 		</div>
		 </div>
		 </div>
		 </div>
	 }
 })
  var FourCon=React.createClass({
	 render:function(){
		 return <div className={`${style.section} ${style.four}`}>
		 <div className={style.sectionCon}>
		 		<div className={`rank-swiper-container ${style.rankSwiperContainer}`}>
		 			<div id='rankSwiperTop1' className="swiper-container gallery-top">
			        <div className="swiper-wrapper">
			            <div className="swiper-slide">
			            	<div>
			            		<img src={top_1_1} />
			            		<div>
			            			<span>阿肯</span>
			            			<p>北京航空航天大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_2} />
			            		<div>
			            			<span>蔡雨浓</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_3} />
			            		<div>
			            			<span>陈若仪</span>
			            			<p>首都师范大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_4} />
			            		<div>
			            			<span>方子榕</span>
			            			<p>北京第二外国语学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_5} />
			            		<div>
			            			<span>骆俊帆</span>
			            			<p>中国传媒大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_6} />
			            		<div>
			            			<span>闫海明</span>
			            			<p>中国传媒大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_7} />
			            		<div>
			            			<span>赵诗雨</span>
			            			<p>北京城市学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_8} />
			            		<div>
			            			<span>陈毅飞</span>
			            			<p>天津师范大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_9} />
			            		<div>
			            			<span>崔凯琦</span>
			            			<p>广东外国语大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_1_10} />
			            		<div>
			            			<span>刘慕宇</span>
			            			<p>北华大学</p>
			            		</div>
			            	</div>
			            </div>
			            
			            
			            <div className="swiper-slide">
			            	<div>
			            		<img src={top_2_1} />
			            		<div>
			            			<span>刘元昊</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_2} />
			            		<div>
			            			<span>薛博荣</span>
			            			<p>中央司法警察学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_3} />
			            		<div>
			            			<span>xixi</span>
			            			<p>南昌理工学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_4} />
			            		<div>
			            			<span>白星杰</span>
			            			<p>上海戏剧学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_5} />
			            		<div>
			            			<span>陈澄</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_6} />
			            		<div>
			            			<span>单露菲</span>
			            			<p>烟台大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_7} />
			            		<div>
			            			<span>郭郗翊</span>
			            			<p>河南大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_8} />
			            		<div>
			            			<span>李陈明月</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_9} />
			            		<div>
			            			<span>李祖瀛</span>
			            			<p>北京演艺艺术职业学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_2_10} />
			            		<div>
			            			<span>刘栩</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
		            </div>
		            
		            
		            <div className="swiper-slide">
			            	<div>
			            		<img src={top_3_1} />
			            		<div>
			            			<span>卢薇</span>
			            			<p>清华大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_2} />
			            		<div>
			            			<span>罗娅菲</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_3} />
			            		<div>
			            			<span>孙艾妮</span>
			            			<p>沈阳音乐学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_4} />
			            		<div>
			            			<span>孙基轩</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_5} />
			            		<div>
			            			<span>完颜和卓</span>
			            			<p>中央戏剧学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_6} />
			            		<div>
			            			<span>王佳鹤</span>
			            			<p>北京电影学院进修班</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_7} />
			            		<div>
			            			<span>王艺蕊</span>
			            			<p>西南大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_8} />
			            		<div>
			            			<span>闫莉</span>
			            			<p>武汉大学</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_9} />
			            		<div>
			            			<span>杨雅然</span>
			            			<p>北京电影学院</p>
			            		</div>
			            	</div>
			            	<div>
			            		<img src={top_3_10} />
			            		<div>
			            			<span>朱珠</span>
			            			<p>北京印剧学院</p>
			            		</div>
			            	</div>
		            </div>
		            
		            
			        </div>
			    </div>
			    <div id='rankNextBtn' className="swiper-button-next swiper-button-white"></div>
					<div id='rankPrevBtn' className="swiper-button-prev swiper-button-white"></div>
		 		</div>
		 		</div>
		 </div>
	 }
 })
  var FiveCon=React.createClass({
	 render:function(){
		 return <div className={`${style.section} ${style.five}`}>
		 <div className={style.sectionCon}>
		 <img src={globalGreen} className={style.fiveLeftPos} />
		 <img src={firPos} className={style.fiveRightPosLitt}/>
			 <div className={style.felxCssTwo}>
				 <div className={style.wrapBor}>
			 		<div className={style.wrapSection}>
			 			<p className={style.title}>全程直播</p>
			 				<div className={style.parkImg}>
				 				<div className={style.imgS}> <img src={fiveLeft} /></div>
				 				<div className={style.fiveTxt}>校园艺人排行榜线下面试及落地推介等活动都在一直播、映客、花椒、
				 				乐嗨等平台由优秀网红主播直播并进行推广。活动累计直播观看人数
				 				超过1000万。</div>
			 				</div>
			 			</div>
			 		</div>
			 		<div className={style.wrapBor}>
			 		<div className={style.wrapSection}>
		 				<p className={style.title}>媒体曝光</p>
		 				<div className={style.parkImg}>
		 				<div className={style.imgS}> <img src={fiveRight} /></div>
		 				<div className={style.fiveTxt}>目前已有超过600万人在微博关注了解＃校园艺人排行榜＃活动。
		 				通过“今日头条、网易、搜狐”等影响力自媒体，多点传播校园艺人
		 				排行榜活动，截至2016年12月阅读超过100万。</div>
		 				</div>
		 			</div>
		 		</div>
		 		
			 </div>
			 <div className={style.influnce}>
		 		<p>1、第十二届瑞丽模特大赛为校园艺人排行榜选手开设绿色通道。4名校园艺人直接入选第十二届瑞丽模特大赛北京赛区16强。</p>
		 		<p>2、乐视影业中国乐主播为校园艺人排行榜开设绿色通道。</p>
		 		<p>3、微博校园联手校园艺人排行榜打造校园网红季活动。</p>
		 		<p>4、校园艺人卢雨婷直接晋级《hello女神》全国海选北京赛区决赛，思聪校长亲自颁发奖章。</p>
		 		<p>5、校园艺人排行榜直播女神团，全程直播步步高梅溪湖音乐节，与钢琴大师郎朗、知名韩国艺人黄致列亲密互动。</p>
	 		</div>
	 		<div className={style.startLeft}>
	 			<img src={firPos}/>
	 		</div>
	 		<div className={style.startRight}>
	 			<img src={firPos}/>
	 		</div>
		 </div>
		 </div>
	 }
 })
  var SixCon=React.createClass({
	 render:function(){
		 return <div className={`${style.section} ${style.six}`}>
		 <div className={style.sectionCon}>
		 	<img src={globalGreen} className={style.sixGreenPos} />
		 	<img src={globalYellow} className={style.sixYelloPos}/>
		 	<img src={sixBg}/>
		 </div>
		 </div>
	 }
 })
module.exports = RankingList