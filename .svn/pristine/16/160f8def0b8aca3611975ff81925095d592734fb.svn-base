import React, { Component } from 'react'
import { Link } from 'react-router'

class BackTop extends Component {

  

  render() {
  	let style = {
  		position:'fixed',
  		bottom:150,
  		right:'2.5rem',
  		cursor:'pointer',
  		zIndex:'999',
  		width:'0.8rem',
  		height:'0.8rem'
  	}
    return (
    	<img src={`${imgUrl}/back_top.png`} style={style}  className="backTop" />
    ) 
  }
  
  componentDidMount(){
	  $('.backTop').hide();
	  $(window).resize(function(){
	  	var isCon=$(".backTop").width();
	  	var tmpW=(parseInt($("body").width())-1230)/2-parseInt(isCon)-20;
		  			if(tmpW>=0){
		  				$('.backTop').css("right",tmpW+'px');
		  			}else{
		  				$('.backTop').css("right",'0px');
		  			}
	  })
	  $(window).scroll(function(){
		  if ($(window).scrollTop()>200){
		  			var isCon=$(".backTop").width();
		  			var tmpW=(parseInt($("body").width())-1230)/2-parseInt(isCon)-20;
		  			if(tmpW>=0){
		  				$('.backTop').css("right",tmpW+'px');
		  			}else{
		  				$('.backTop').css("right",'0px');
		  			}
			  $('.backTop').fadeIn(500);
		  }else{
		   $('.backTop').fadeOut(600);
		  }
		});
		$('.backTop').click(function(){
			//window.scrollTo(0,0);
			$('html,body').animate({scrollTop:0},200);
			$('.backTop').fadeOut(600);
		})
  }
  
}

export default BackTop