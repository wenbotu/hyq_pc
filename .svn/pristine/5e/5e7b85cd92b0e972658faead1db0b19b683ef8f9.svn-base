import React, { Component } from 'react'
import { Link } from 'react-router'
import GlobalNav from '../components/GlobalNav'
require('../style/hotmi_headAndfoot.css')

class HeaderFix extends Component {

  constructor(props, context) {
    super(props, context)
  }
	render() {
    return (
    	<div>
        <div className='nav_opacity' ></div>
	    		<div className="hotmi_header">
	    			<GlobalNav />
	    		</div>
      </div>
    	
    )
  }
  componentDidMount(){
  	
  	var navtimes=setTimeout(function(){
        $('.hotmi_header').fadeOut(500);
        clearTimeout(navtimes);
    },3000);
    
    $('.hotmi_header').hover(function(){
        clearTimeout(navtimes);
    },function(){
        navtimes=setTimeout(function(){
            $('.hotmi_header').fadeOut(500);
            clearTimeout(navtimes);
        },3000);
        $('.nav_opacity').show();
    });
    $('.nav_opacity').hover(function(){
       $('.hotmi_header').fadeIn(100);
       $('.nav_opacity').hide();
    });
  }
  
}

export default HeaderFix