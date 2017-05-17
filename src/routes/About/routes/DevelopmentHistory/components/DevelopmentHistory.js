import React, { Component } from 'react'

class DevelopmentHistory extends Component {
  render() {
		const style = require('../../../../../style/history')
    return (
      <div className={style.container}>
        <div className={style.yearContent} >
        	<i></i>
        	<div className={style.year}><div>2014</div></div>
        </div>
        <div className={style.content}>
        	<div className={style.month}>10月</div>
        	<p>创始人鲍啸峰、姜海、大姨吗CEO柴可等人筹资120万，红演圈（北京）网络科技有限公司成立。</p>
        </div>
        <div className={style.yearContent}>
        	<div className={style.year}><div>2015</div></div>
        </div>
        <div className={style.content}>
        	<div className={style.month}>4月</div>
        	<p>红演圈科技获海通证券1400万天使轮投资。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>红演圈App作为一款具有社交功能的演艺圈“智联招聘”，iOS 1.0、Android 1.0正式上线。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>8月</div>
        	<p>红演圈科技联合Chinajoy主办方汉威信恒，开展2015 China Showgirl网络海选暨年度盛典活动，千余名showgirl报名，数百万网友参与投票，反响热烈。同期，注册用户突破50万。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>9月</div>
        	<p>红演圈（亚洲）有限公司在香港成立，布局港澳台和日韩娱乐艺人服务。香港亚洲电视指定红演圈为第27届ATV2015亚洲小姐竞选中国内地独家网络海选官方合作平台。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>10月</div>
        	<p>红演圈科技成为世界超模中国冠军赛海选北京赛区官方合作平台。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>11月</div>
        	<p>红演圈科技与CCTV6电影频道1905电影网达成战略合作，共同组建运营公司，运营电影网“优才计划”。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>12月</div>
        	<p>红演圈科技获赛马资本A轮2100万人民币投资。</p>
        </div>
        <div className={style.yearContent}>
        	<div className={style.year}><div>2016</div></div>
        </div>
        <div className={style.content}>
        	<div className={style.month}>2月</div>
        	<p>红演圈科技联合微博校园、腾讯视频、女神TV等共同举办校园艺人排行榜活动，为有演艺梦想的校园艺人提供展示平台。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>红演圈科技联合新浪微博、乐视影业、猎聘网、新东方在线等100家企业，共同成立中国校园市场联盟。红演圈科技连同微博校园、乐视影业、支付宝、OPPO等企业出任联席主席单位。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>红演圈科技通过中国国际数码互动娱乐展览会认证，获得2016 China Joy指定经纪公司资格。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>6月</div>
        	<p>第十二届瑞丽模特大赛开辟红演圈App绿色通道，为瑞丽模特大赛八大赛区输送选手。同年8月，红演圈App赛区晋级2位选手参加瑞丽模特养成计划并进入10强。同月，注册用户突破200万。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>6月</div>
        	<p>红演圈科技旗下第二款产品红蜜（微信公众号）、红蜜艺人端App上线。红蜜，是专注为大众提供演艺服务的电商平台。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>7月</div>
        	<p>红蜜北京线下旗舰店在双井开业，开始服务北京地区的老百姓和艺人。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>7月</div>
        	<p>由红演圈科技投资并联合出品的网络大电影《死神的假期》，腾讯视频独播不到一个月，点击量超过四千万。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>8月</div>
        	<p>红演圈科技和新媒诚品影业（股票代码：834522）合资成立新媒红贩（北京）网络科技有限公司，运营线上线下一体化的影游IP交易平台红贩。同月，红贩App上线。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>9月</div>
        	<p>红演圈科技签约韩国最大演艺培训机构Global-K Center，成为其在中国地区独家事务代理。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>9月</div>
        	<p>红演圈科技签约北京电影学院培训中心，成为其独家网络招生渠道。</p>
        </div>
      </div>
    )
  }
  componentDidMount() {
  	$('#aboutLink').addClass('active')
  	addBaiduAnchor()
  }
  componentWillUnmount(){
  	$('#aboutLink').removeClass('active')
  }
}

module.exports = DevelopmentHistory
