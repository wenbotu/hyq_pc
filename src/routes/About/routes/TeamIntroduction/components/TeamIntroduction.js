import React, { Component } from 'react'

const style = require('../../../../../style/about_team')

class TeamIntroduction extends Component {
  render() {
    return (
      <div className={style.teamIntroduction}>
      		<div className={style.founderBox}>
      				<img src={`${imgUrl}/BZ.jpg`} />
      				<div className={style.foundertxt}>
      						<h2>创始人&董事长<br/>鲍啸峰</h2>
      						<p>浙江宁波人，毕业于对外经济贸易大学国贸专业，连续10年创业者，曾参与创办全国青少年成长励志营和君和天下知识产权，多年服务腾讯、百度、华谊兄弟、万达文化、乐视、优酷、青青树等知名文化娱乐公司。<br/>
      						现任北京市朝阳区政协委员、北京市青年联合会委员、首都文化产业协会常务理事、首都青创联盟副理事长、北京市朝阳区工商联会员、北京市朝阳区青年联合会委员、北京市怀柔区青年联合会委员。</p>
      				</div>
      		</div>
      		<div className={style.founderBox}>
      				<div className={style.foundertxt}>
      						<h2>联合创始人&CEO<br/>姜海</h2>
      						<p>中国农业大学管理专业学士、文化部国家网络文化标准化委员会委员、参与创办音乐网站ting365.com；投资创立闪客帝国，引入ADOBE投资；参与创办君和天下知识产权和战略咨询公司，任高级合伙人。拥有超过10年的互联网和娱乐项目运作经验。</p>
      				</div>
      				<img src={`${imgUrl}/JZ.jpg`} style={{float:'right'}}/>
      		</div>
      		<ul className={style.staffBox}>
      				<li>
      					<img src={`${imgUrl}/SY.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>产品VP<br/>申悦</h3>
	      						<p>从事产品经理5年，具有开发和UI设计经验，历任中兴通讯开发工程师，网易、e代驾高级产品经理。拥有通信设备制造、云计算、移动互联网、O2O行业经验。</p>
	      				</div>
      				</li>
      				<li>
      					<img src={`${imgUrl}/WC.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>红蜜副总裁<br/>王朝</h3>
	      						<p>毕业于UIBE，连续创业者。创业是一种心态，我一直在路上。</p>
	      				</div>
      				</li>
      				<li>
      					<img src={`${imgUrl}/CR.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>设计总监<br/>陈锐</h3>
	      						<p>从事广告设计期间，服务过三星、联想HTC、中粮、奔驰等客户。从事视频包装相关设计，服务过CCTV3、CCTV9、BTV等相关栏目。</p>
	      				</div>
      				</li>
      				<li>
      					<img src={`${imgUrl}/ZQ.png`} />
	      				<div className={style.stafftxt}>
	      						<h3>CTO<br/>张强</h3>
	      						<p>曾任职于汇智互联、华通人、小马金融等公司，担任近6年的项目经理，在电商、银行、保险、航天等多个行业领域带领团队研发。</p>
	      				</div>
      				</li>
      		</ul>
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

module.exports = TeamIntroduction
