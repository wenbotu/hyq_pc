import React, { Component } from 'react'
import { Link } from 'react-router'
require('../style/home.swiper')
const Modal = require('antd/lib/modal')
import banner_click_img from '../style/img/banner_6_click.png'
import banner_7_click from '../style/img/banner_7_click.png'
class HomeBanner extends Component {
  render() {
  	const style = require('../style/home.page')
    return (
	    <div className="swiper-container home-swiper">
			    <div className="swiper-wrapper" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
			    		<div className="swiper-slide">
			        	<Link to='/hotman'><img src= {`${imgUrl}/banner_6.jpg`} /></Link>
			        </div>
			        <div className="swiper-slide">
			        	<img className={style.lastBannerImg} src= {`${imgUrl}/banner_1.jpg`} onClick={this.showModal2} />
			        </div>
			        <div className="swiper-slide">
			        	<Link to='/hotmiService'><img src= {`${imgUrl}/banner_2.jpg`} /></Link>
			        </div>
			        <div className="swiper-slide">
			        	<Link to='/hotfan'><img src= {`${imgUrl}/banner_3.jpg`} /></Link>
			        </div>
			        <div className="swiper-slide">
			        	<Link to='/arandActivity/rankingList'><img src= {`${imgUrl}/banner_4.jpg`} /></Link>
			        </div>
			    </div>
			    <div className={`swiper-pagination ${style.swiperPagination}`}></div>
			    <div className="swiper-button-prev" ref='prevButton' onMouseOver={this.onMouseOver}></div>
					<div className="swiper-button-next" ref='nextButton' onMouseOver={this.onMouseOver}></div>
					<Modal title="Basic Modal" visible={this.state.visible} closable={false} width={'7rem'} wrapClassName='banner-module' onCancel={this.handleCancel}>
							<div>
								<img src={banner_click_img} />
							</div>
	        </Modal>
	        <Modal title="Basic Modal" visible={this.state.visible2} closable={false} width={'7rem'} wrapClassName='banner-module' onCancel={this.handleCancel}>
							<div>
								<img src={banner_7_click} />
							</div>
	        </Modal>
			</div>
    )
  }
  /*<Link to='/hotmi'><img src= {`${imgUrl}/banner_2.jpg`} /></Link>*/
  /*<a href='http://cnews.chinadaily.com.cn/2016-04/21/content_24729504.htm' target='_blank'><img src= {`${imgUrl}/banner_5.jpg`} /></a>*/
  onMouseOver(){
  	let prevButton = this.refs.prevButton;
  	let nextButton = this.refs.nextButton;
  	prevButton.style.display='block';
  	nextButton.style.display='block';
  }
  onMouseOut(){
  	let prevButton = this.refs.prevButton;
  	let nextButton = this.refs.nextButton;
  	prevButton.style.display='none';
  	nextButton.style.display='none';
  }
  constructor(props, context) {
    super(props, context)
    this.state={
    	visible:false,
    	visible2:false,
    }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.showModal = this.showModal.bind(this)
    this.showModal2 = this.showModal2.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  showModal(){
  	this.setState({
      visible:true
   })
  }
  showModal2(){
  	this.setState({
      visible2:true
   })
  }
  handleCancel(e) {
    //console.log('Clicked Cancel')
    this.setState({
      visible:false,
    	visible2:false
    })
  }
  componentDidMount() {
  	setTimeout(function(){
  		var mySwiper = new Swiper ('.swiper-container', {
		  	direction: 'horizontal',
		    loop: true,
		    autoplay:5000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    paginationBulletRender: function (index, className) {
			    return '<span class="' + className + '" style="background:#fff;"></span>';
			  },
		    paginationClickable :true,
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    
		    // 如果需要滚动条
		    //scrollbar: '.swiper-scrollbar',
		  })
  	},500);
  }
}
export default HomeBanner
