import React, { Component } from 'react'
import { Link } from 'react-router'
var path = require('path')

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
  }
	
	//<Link className='home nav' to="/" ><img src='http://127.0.0.1/hotyqkj_logo.jpg' /></Link>
  render() {
  	const style = require('../style/global.nav')
    const { user } = this.props
    return (
    	<div className='headerCon' style={{paddingRight:'0px'}}>
	      <div className='header'>
		  	<Link className='home nav' to="/" ><img src={`${imgUrl}/hotyqkj_logo.png`} /></Link>
			  	<div className={style.globalNav}>
			    	 	<Link className='nav' activeClassName='active' to="/hotyq" >红演圈</Link>
		        	<Link className='nav' activeClassName='active' to="/hotmi" >红蜜</Link>
		        	<Link className='nav' activeClassName='active' to="/hotfan" >新媒红贩</Link>
		        	<Link id='activeLink' className='nav' activeClassName='active' to="/arandActivity" >品牌活动</Link>
		        	<Link id='aboutLink' className='nav' activeClassName='active' to="/about/companyProfile" >关于我们</Link>
		        	<div id='activeMenu' onMouseOver={this.showActive} onMouseOut={this.hideActive} className={style.arandActivity}>
		        		<Link to="/arandActivity/rankingList" onClick={this.hideActive} >校园艺人排行帮</Link>
		        		<Link to="/arandActivity/ruiliModel" onClick={this.hideActive} >第十二届瑞丽模特大赛</Link>
		        	</div>
			  	</div>
	      </div>
      </div>
    )
  }
  /*showActive(){
  	$('#activeMenu').show();
  	$('#activeLink').addClass('header-nav-hover');
  }
  hideActive(){
  	$('#activeMenu').hide();
  	$('#activeLink').removeClass('header-nav-hover');
  }*/
}

export default GlobalNav