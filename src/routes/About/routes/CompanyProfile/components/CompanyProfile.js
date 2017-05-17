import React, { Component } from 'react'
import Nav from '../../../components/Nav'
import play from '../../../../../style/img/play.png'

class CompanyProfile extends Component {
  render() {
  	const style = require('../../../../../style/about')
    return (
      <div className={style.companyProfile}>
      	<p>红演圈（北京）网络科技有限公司，成立于2014年，是目前国内移动互联网领域第一的文化演艺网红人力资源服务商，业务包括为艺人提供从业需要的各类付费产品、为影视机构寻找新人、为直播平台提供主播和网红、为大型赛事海选、为演艺培训机构招生，为老百姓生活演艺提供节目等。业务发展迅速，目前团队80余人。</p>
        <p>公司旗下有红演圈App、红蜜（微信公众号）、红贩App（合资）三款产品。</p>
        <p>红演圈App是为演艺从业人员服务的信息平台，为影视、音乐、模特、网红、主播、舞蹈、戏剧、主持、综艺、幕后、文体培训等全品类演艺人员提供日常所需的职业信息类服务，包含通告、人脉、培训、美容整形、服装租赁等。也为各类机构提供艺人招聘发布服务。</p>
        <p>红蜜（微信公众号）是为广大消费者提供高品质、低价格、多选择的演艺电商平台，销售5大类200余种日常演艺服务，囊括礼仪模特、主持、歌舞、乐器表演、相声曲艺、魔术杂技、网红明星等，适用于婚礼庆典、生活聚会、企业年会、开业典礼、展销会、促销宣传等场景。微信搜索红蜜即可进入在线商城下单，红蜜北京旗舰店位于朝阳区双井地区，全国加盟店陆续开设中。</p>
        <p>红贩App是线上线下一体化的影视IP信息平台，服务于版权方和投资方，通过线上相关版权信息的审核和曝光、线下拍卖会的形式，提高行业版权交易效率。</p>
        <p>公司陆续举办了：2015CHINA SHOWGIRL网络海选暨年度盛典、ATV2015亚洲小姐竞选中国内地网络海选、2015中国电竞女皇（英雄联盟）网络海选、第26届世界超级模特大赛网络赛区、江苏卫视《看见你的声音》网络海选、湖南卫视《超级女声》网络海选、新版《西游记》全国演员海选、北京卫视《周末喜刷刷》海选、2016C•GIRL全国海选、校园艺人排行榜、2016欧洲杯足球宝贝、第十二届瑞丽模特大赛红演圈赛区、2016中国星女郎（第二季）海选、熊猫TV《Hello！ 女神》海选等全国性大型活动、赛事。并与新浪微博、腾讯视频、乐视、汉威信恒等多家行业领导力企业建立起紧密的战略伙伴关系，与爱奇艺、欢瑞世纪、瑞丽等企业达成良好的合作伙伴关系。</p>
        <p>公司目前业务遍及北京、上海、广州、深圳、武汉、天津、大连、杭州、南京、厦门、成都、青岛、重庆等十余个城市。</p>
        <div className={style.title}><span>所获荣誉奖项</span></div>
        <div className={style.award}>
        	<div>
	        	<a href='http://img.hotyq.com/new-index/image/1.jpg' target='_blank'><img src={`${imgUrl}/award_1.jpg`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/2.jpg' target='_blank'><img src={`${imgUrl}/award_2.jpg`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/3.jpg' target='_blank'><img src={`${imgUrl}/award_3.jpg`} /></a>
	        </div>
	        <div>
	        	<a href='http://img.hotyq.com/new-index/image/4.jpg' target='_blank'><img src={`${imgUrl}/award_4.jpg`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/5.jpg' target='_blank'><img src={`${imgUrl}/award_5.jpg`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/6.jpg' target='_blank'><img src={`${imgUrl}/award_6.jpg`} /></a>
	        </div>
	        <div>
	        	<a href='http://img.hotyq.com/new-index/image/7.jpg' target='_blank'><img src={`${imgUrl}/award_7.jpg`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/8.jpg' target='_blank'><img src={`${imgUrl}/award_8.jpg`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/9.jpg' target='_blank'><img src={`${imgUrl}/award_9.jpg`} /></a>
	        </div>
        </div>
        <div className={style.title}><span>创始人寄语</span></div>
        <div className={style.sendWord} style={{backgroundImage:`url(${imgUrl}/sendWord.jpg)`}}>
        	<p style={{textIndent:'2em'}}>当时创立红演圈科技的初衷，是发现国内没有一个规范透明的文化演艺人才服务市场，就像没有“e代驾”之前的代驾市场、没有“携程”之前酒店旅游消费市场一样。一方面，大量怀揣演艺梦想的年轻人找不到顺畅的职业道路，另一方面，需要演艺人才的社会大众和机构找不到合适的艺人。所以，希望通过红演圈的创立，帮助年轻人一步踏进演艺圈，帮助社会大众更快更好的找到“艺中人”。我们希望用科技改变娱乐圈信息交流的方式，用科技改变老百姓演艺消费的习惯，最终构建一个和谐的演艺人才市场，助力中国青年演艺梦想。</p>
        	<span>鲍啸峰</span>
        </div>
        <div className={style.title}><span>媒体报道</span></div>
        <div className={`videoBox ${style.videoBox}`}>
        	<div className={`playBox ${style.playBox}`}>
        		<img src={play} />
        	</div>
        	<iframe src='' data-url={`${videoUrl}?vid=XMTgyMzEwMjA0OA==`}  />
        </div>
      </div>
    )
  }
  componentDidMount() {
  	$('#aboutLink').addClass('active')  
  	addBaiduAnchor();
  	//console.log($('.videoBox iframe').length);
  	var interval;
  	$("body").on("click",'.videoBox .playBox',function(){
  		var src = $('.videoBox iframe').attr('data-url');
  		$('.videoBox iframe').attr('src',src);
  		
  		$('.videoBox iframe').on('load',function(){
  			$(this).parent().find('img').hide();
  			$(this).parent().find('div').hide();
  			//$iframe.show();
  		});
  		
  		$('.videoBox iframe').show();
  		/*interval = setInterval(function(){
  			if($('.videoBox iframe')[0].contentWindow.onPlayerReady){
  				setTimeout(function(){
  					$('.videoBox iframe')[0].contentWindow.playVideo();
  					window.clearInterval(interval);
  				},500);
	  		}
  		},100);*/
  		$(this).hide();
  	});
  }
  componentWillUnmount(){
  	$('#aboutLink').removeClass('active');
  	$('iframe').each(function(){
			if($(this).attr('src') != ''){
		 		$(this)[0].contentWindow.pauseVideo();
		  }
		});
  }
}

module.exports = CompanyProfile
