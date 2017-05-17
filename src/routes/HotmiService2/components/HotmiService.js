import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { selectNameList } from '../actions'
import HotmiServiceItem from '../components/HotmiServiceItem'
import Footer from '../../../components/Footer'
import BackTop from '../../../components/BackTop'
import banner_1 from '../../../style/img/hotmi_service_banner_1.png'
import banner_2 from '../../../style/img/hotmi_service_banner_2.png'

class HotmiService extends Component {
	  render() {
	  	const style = require('../../../style/hotmi.service2')
	  	const { nameList } = this.props
	    return (
	    	<div className={style.hotmiService}>
	    	
	    		<div className={style.banner}>
	    			<div className={`swiper-container ${style.swiperContainer}`}>
						  <div className="swiper-wrapper">
						    <div className={`swiper-slide ${style.swiperSlide}`}>
						    	<Link to='/'><img src={banner_1} /></Link>
						    </div>
						    <div className={`swiper-slide ${style.swiperSlide}`}>
						    	<Link to='/'><img src={banner_2} /></Link>
						    </div>
						  </div>
						</div>
	    		</div>
	    		
	    		{nameList.map((item, i) =>
	    			<HotmiServiceItem key={item.serviceCateId} name={item} serviceCateId={item.serviceCateId} serviceProjectId={item.projects[0].serviceProjectId} />
	    		)}
	      </div>
	    )
	  }
	  constructor(props, context) {
	    super(props, context)
	    this.props.dispatch(selectNameList())
	  }
	  componentDidMount(){
	  	$(".header").parent().hide();
	  	
	  	setTimeout(function(){
	  		var swiper = new Swiper('.swiper-container', {
		        direction: 'vertical',
		        paginationClickable: true,
		        mousewheelControl: true,
		        keyboardControl : true,
		        autoplay: 2500,
		        loop:true
	    	});
	  	},500);
	  	window.scrollTo(0,0)
  		addBaiduAnchor()
	  }
	  componentWillUnmount(){
	  	$(".header").parent().show();
	  }
}

function mapStateToProps(state, ownProps) {
	const { selectNameList } = state
	const nameList = selectNameList.nameList || []
	return {
		nameList
	}
}

module.exports = connect(mapStateToProps)(HotmiService)
