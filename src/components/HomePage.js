import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectHomeList } from '../actions'
import HomeBanner from '../components/HomeBanner'
import PictureNav from '../components/PictureNav'
import Information from '../components/Information'
import GlobalNav from '../components/GlobalNav'
import BackTop from '../components/BackTop'
import Footer from '../components/Footer'
import Videos from '../components/Videos'
import Videos2 from '../components/Videos2'
import Videos3 from '../components/Videos3'
const Tabs = require('antd/lib/tabs')
const TabPane = Tabs.TabPane
class HomePage extends Component {
  render() {
  	const { infoList, reportList } = this.props
  	const style = require('../style/home.page')
    return (
    	<div className={style.content}>
    		<HomeBanner />
    		<div className={style.main}>
    			<PictureNav />
    			<div className={`videoTabs ${style.videoTabs}`}>
    			  <div></div>
    			  <i>/</i>
    			  <i>/</i>
    				<Tabs defaultActiveKey="1">
					    <TabPane tab="明星助力" key="1">
					    	<Videos />
					    </TabPane>
					    <TabPane tab="精彩活动" key="2">
					    	<Videos2 />
					    </TabPane>
					    <TabPane tab="关于红演圈" key="3">
					    	<Videos3 />
					    </TabPane>
					  </Tabs>
    			</div>
    			
    			<div className={style.informations}>
    				<Information title={`${imgUrl}/news_title.png`} list={reportList} type='report' />
    				<Information title={`${imgUrl}/message_title.png`} list={infoList} type='info' />
    			</div>
    			<img className={style.partnerTitle} src={`${imgUrl}/partner_title.png`} />
   				<img className={style.partner} src={`${imgUrl}/logo_home.jpg`} />
    		</div>
    		<BackTop />
    		<Footer />
    	</div>
    	
    )
  }
  constructor(props, context) {
    super(props, context)
    this.props.dispatch(selectHomeList())
  }
  componentWillReceiveProps(){
  	
  }
  componentWillMount(){
  	
  }
  componentWillUnmount(){
  	//$('.headerCon').css('padding-right','17px')
  }
  componentDidMount() {
  	addBaiduAnchor()
  }
}

function mapStateToProps(state, ownProps) {
	const { selectHomeList } = state
	const infoList = selectHomeList.infoList || []
	const reportList = selectHomeList.reportList || []
  return {
  	infoList,
  	reportList
  }
}

export default connect(mapStateToProps)(HomePage)
