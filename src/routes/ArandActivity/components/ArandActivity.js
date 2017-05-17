import React, { Component } from 'react'
import { Link ,browserHistory } from 'react-router'
import Footer from '../../../components/Footer'
import BackTop from '../../../components/BackTop'
import activity_1 from '../../../style/img/arandActivity/activity_1.jpg'
import activity_2 from '../../../style/img/arandActivity/activity_2.jpg'
import activity_3 from '../../../style/img/arandActivity/activity_3.jpg'
import quotPre from '../../../style/img/arandActivity/quotPre.png'
import quotNext from '../../../style/img/arandActivity/quotNext.png'

class ArandActivity extends Component {
  render() {
  	const style = require('../../../style/arandActivity/arandActivity')
    return (
      <div>
        {this.props.children ||
        	<div className={style.content}>
        		<Link className='nav' to="/arandActivity/rankingList" >
	        		<div>
	        			<img src={activity_1} />
	        			<div>
	        				<img src={quotPre} />
	        				<img src={quotNext} />
	        				<p>由红演圈主办、微博校园联合主办，国内目前最有影响力的校园演艺人才综合实力排行榜。截至目前，已有覆盖600所高校，超过1500名校园艺人上榜。</p>
	        			</div>
	        		</div>
        		</Link>
        		<Link className='nav' to="/arandActivity/ruiliModel" >
	        		<div>
	        			<img src={activity_2} />
	        			<div>
	        				<img src={quotPre} />
	        				<img src={quotNext} />
	        				<p>第十二届瑞丽模特大赛红演圈绿色通道，选送大量优秀选手参加，其中4名选手晋级北京赛区总决赛，并最终产生3名佳丽直通全国总决赛。</p>
	        			</div>
	        		</div>
        		</Link>
        		<a href='javascript:;'>
        			<div>
	        			<img src={activity_3} />
	        			<div>
	        				<img src={quotPre} />
	        				<img src={quotNext} />
	        				<p>CHINA SHOWGIRL年度竞选活动，是一个面向Showgirl的全国性选秀活动。活动海选报名选手千余人，累计投票次数超过百万。得到国内近百家网络、游戏、影视等企业的通力支持。</p>
	        			</div>
	        		</div>
        		</a>
        		
        	</div>
        }
        <BackTop />
    	  <Footer />
        
      </div>
    )
  }
  componentDidMount() {
    	addBaiduAnchor()
  }
}
module.exports = ArandActivity
