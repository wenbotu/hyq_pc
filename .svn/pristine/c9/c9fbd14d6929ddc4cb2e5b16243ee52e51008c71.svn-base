import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { hotmiServeList , hotmiSelectionServeList , hotmiLimitServeList } from '../../../actions'
import banner_1 from '../../../style/img/hotmi_service_banner_1.png'
import banner_2 from '../../../style/img/hotmi_service_banner_2.png'
import bottom_name from '../../../style/img/bottom_name.png'
import hotmi_logo from '../../../style/img/hotmi_logo_icon.png'
import play from '../../../style/img/play.png'
import custom_service from '../../../style/img/custom_service.png'
import limit from '../../../style/img/limit.png'
import Footer from '../../../components/Footer';
import BackTop from '../../../components/BackTop'
require('../../../style/hotmi_service.css')
const style = require('../../../style/hotmi.service')

function checkSubmit(){
//	console.log("sljCheck")
	return true;
}

class HotmiService extends Component {
	 handleClick(){
		 this.props.dispatch(hotmiServeList2())
	 }
	 constructor(props, context) {
		 super(props, context)
		 this.props.dispatch(hotmiSelectionServeList())
		 this.props.dispatch(hotmiServeList())
		 this.props.dispatch(hotmiLimitServeList())
		 this.onSubmit=this.onSubmit.bind(this)
	  }
	 onSubmit(){
		 if(checkSubmit()){
			 this.props.dispatch(submitData())
		 }
		 
	 }
	  render() {
		const { hotmiServeListArr , hotmiSelectionServeListArr , hotmiLimitServeListArr } = this.props
		//console.log(hotmiServeListArr)
	    return (
	    	<div className={style.hotmiService}>
		    	<div className={`appointForm ${style.appointmentWrap}`}>
						<div className={style.appointmentBox}>
							<h3>预约信息</h3>
							<i className={`closeBtn ${style.closeBtns}`}>&#215;</i>
							<div className={style.serviceList}>
								<p >您选择的服务</p>
								<span className="selectedSer">红蜜圣诞老人</span>
							</div>
							<div className={style.formRow}>
								<span>*</span>
								<input type="text" name="name" id="name" defaultValue=""  placeholder="联系人姓名"/>
							</div>
							<div className={style.formRow}>
								<span>*</span>
								<input type="text" name="tel" id="tel"  defaultValue="" placeholder="联系人电话"/>
							</div>
							<div className={style.formRow}>
								<textarea name="" rows="" cols="" placeholder="需求描述"></textarea>
							</div>
							<span  className={`submitBtn ${style.submitBtns}`}>提交</span>
						</div>
				</div>
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
	    		< HotmiServiceItem texts={hotmiLimitServeListArr} />
	    		< HotmiServiceItem texts={hotmiSelectionServeListArr} />
	    		< HotmiServiceItem texts={hotmiServeListArr} />
	    		< HotmiCustomServiceItem />
	    		<BackTop />
	    		<Footer />
	      </div>
	    )
	  }
	  componentWillUnmount(){
	  	$(".header").parent().show();
	  	clearIntervalArr();
	  }
	  componentDidMount(){
	  	
	  	window.scrollTo(0,0)
  		addBaiduAnchor()
  	
	  	console.log('*********************************************************************************************************');
	  	console.log(console.log($('.isItem').length));
	  	//< HotmiServiceItem texts={hotmiSelectionServeListArr} />
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
	  	 $('body').on('click','.typeCon span',function(){
	  		 var demoWrap=$(this).parents(".serviceWrapm");
	  		 var theIndex=$(this).index();
	  		 demoWrap.find('span').removeClass('selected');
	  		 $(this).addClass('selected');
	  		 
	  		 demoWrap.find('iframe').each(function(){
	  		 	/*if($(this)[0].contentWindow.onPlayerReady){
	  		 		$(this)[0].contentWindow.pauseVideo();
	  		 	}*/
	  		 	//$(this)[0].contentWindow.pauseVideo();
	  		 	if($(this).attr('src') != ''){
	  		 		$(this)[0].contentWindow.pauseVideo();
	  		 	}
	  		 });
	  		 
	  		 
	  		 /*//alert('点击了我_'+$(this).html());
	  		 //限时特价
	  		 //console.log(demoWrap.find('.djsMask:eq("+theIndex+")').html());
	  		 var djsMask = demoWrap.find(".viedoWrapm:eq("+theIndex+")").find('.djsMask');
	  		 var timeprices = JSON.parse(djsMask.attr('data-item'));
	  		 //console.log(timeprices);*/
	  		 
	  		 demoWrap.find(".priceBoxm").hide();
	  		 demoWrap.find(".priceBoxm:eq("+theIndex+")").show();
	  		 demoWrap.find(".viedoWrapm").hide();
	  		 demoWrap.find(".infom").hide();
	  		 demoWrap.find(".viedoWrapm:eq("+theIndex+")").show();
	  		 demoWrap.find(".infom:eq("+theIndex+")").css('display','block');
	  		 demoWrap.find(".projectName:eq("+theIndex+")").html($(this).html);
	  		 
		  });
	   	$('body').on('click','.appointBtn',function(){
	   		//$('.appointForm').slideDown();
	   		if($(this).attr('id') == 'customBook'){
	   			$('.submitBtn').attr('id','customSubmit')
	   		}
	   		var demoParent=$(this).parents(".serviceWrapm");
	   		var projectId=demoParent.find(".selected").attr("id");
	   		var text=demoParent.find(".selected").html();
	   		$('.appointForm').show();
	   		$(".selectedSer").attr("id",projectId);
	   		$(".selectedSer").html(text);
	   		//$('body').css('overflow','hidden');
	   		//$('#root').css('position','fixed');
	   		//$(window).unbind('scroll');
	   		disabledMouseWheel();
	   	});
	   	$('body').on('click','.closeBtn',function(){
	   		$("input").val("");
	   		//$('.appointForm').slideUp();
	   		$('.appointForm').hide();
	   		//$('body').css('overflow','auto');
	   		enabledMouseWheel();
	   	})
	   	var theTel;
	   	var theName;
	   	$("body").on('click','.submitBtn',function(){
	   		theName=$("input[name=name]").val();
	   		theTel=$("input[name=tel]").val();
	   		var projectid=$(".selectedSer").attr("id");
	   		var textarea=$("textarea").val();
	   		var url = `${guanW}/hongmi-api/order/pcSubmit`;
	   		if($(this).attr('id') == 'customSubmit'){
	   			url = '${guanW}/hongmi-api/customerRequire/addPcRequire';
	   		}
	   		if(!theName){
	   			alert("姓名不能为空，或不正确");
	   			return false;
	   		}
	   		var testphone=/^1[3|4|5|7|8][0-9]\d{8,8}$/;
	   		if(!testphone.test($("input[name=tel]").val())){
	   			alert("电话不能为空，或不正确");
	   			return false;
	   		}
	   		$.ajax({
				type:"post",
				url:url,
				data:{
					"projectid":projectid,
					"name":theName,
					"phone":theTel,
					"message":textarea
				},
				async:false,
				success:function(data){
					alert(data.desc)
					$(".submitBtn").removeAttr("id");
					//$('body').css('overflow','auto');
					enabledMouseWheel();
					if(data.stateCode=="0000"){
						//window.location
						setTimeout(function(){
							$(".appointForm").hide();
						},500)
					}else{
						
					}
				},
				dataType:"json"
			});	
	   	//	this.props.dispatch(submitData())
	   		/*
	   		alert($("input[name=tel]").val())
	   		*/
	   	//	this.props.dispatch(hotmiServeList())
	   		//onSubmit()
	   		
	   		//this.props.dispatch(sumit())
	   	})
	   	$("body").on("input",'#tel',function(){
			//theName=$("input[name=name]").val();
			theTel=$(this).val();
		});
		$("body").on("input",'#name',function(){
			//theName=$("input[name=name]").val();
			theName=$(this).val();
		});
		
		//展开与收起
		$("body").on("click",'.fold',function(){
			var i = $(this).find('i')
			var span = $(this).find('span')
			if(span.html() == '展开更多分类'){
				span.html('收起')
				i.html('&#xe603');
				$(this).prev().css({'height':'auto'})
			}else{
				span.html('展开更多分类')
				i.html('&#xe604');
				$(this).prev().css({'height':'220px'})
			}
		});
		
		//播放视频
		var currentVideoPlayInterval;
	  	$('body').on('click','.play',function(){
	  		var $parent = $(this).parent();
	  		var $iframe = $parent.find('iframe');
	  		var src = $iframe.attr('data-url');
	  		$iframe.attr('src',src);
	  		$iframe.on('load',function(){
	  			$parent.find('img').hide();
	  			$parent.find('div').hide();
	  			$iframe.show();
	  		})
	  		/*setTimeout(function(){
	  			$(this).parent().find('img').hide();
	  			$(this).parent().find('div').hide();
	  			$iframe.show();
	  		},500);*/
	  		
	  		$('iframe').each(function(){
	  			
	  			if($(this).attr('src') != ''){
	  		 		$(this)[0].contentWindow.pauseVideo();
	  		 	}
	  			
	  			//$(this)[0].contentWindow.pauseVideo();
	  			/*var video = $(this)[0];
	  			if(video.contentWindow.onPlayerReady){
	  				setTimeout(function(){
	  					video.contentWindow.pauseVideo();
	  				},500);
	  		 	}*/
	  		});
	  		/*currentVideoPlayInterval = setInterval(function(){
	  			if($iframe[0].contentWindow.onPlayerReady){
	  				setTimeout(function(){
	  					$iframe[0].contentWindow.playVideo();
	  					window.clearInterval(currentVideoPlayInterval);
	  				},500);
		  		}
	  		},100);*/
	  	});
	  	/*setTimeout(function(){
	  		//alert($('.typeCon').length);
	  		$('.typeCon').each(function(){
	  			//alert('1');
	  			//$(this).find('span:first').trigger('click');
	  			//console.log($(this).find('span:first').html());
	  			$(this).find('span:first').trigger('click');
	  			alert();
	  			//$(this).eq(0).trigger('click');
	  		});
	  		//$('.typeCon span:first').trigger('click');
	  	},3000);*/
	  	setTimeout(function(){
	  		$(".djsMask").each(function(i,obj){
	  			var timeprices = JSON.parse($(this).attr('data-item'))[0];
	  			timeArr.push(timeprices.now);
	  		});
	  		updateEndTime();
	  	},1000);
	 }
}
 var ServiceTags=React.createClass({
	 render (){
		 return <div className={`typeCon ${style.typeBox}`}>
					{this.props.tagsData.map((items,i) =><span className={!i? 'selected':'' }   serviceId={items.serviceId} >{items.name}</span>)}
				</div>
	 }
	
 })
 var HotmiServiceItem=React.createClass({
	 /*change:function(aaa){
		 this.setState({
	            text: {aaa}
	      });
	 },
	 getInitialState:function(i){
		 var changeData=this.props.text[i]
		 return  {
			 checked:changeData
		 }
	 },
	 changeState:function(){
		 var newState = !this.state.checked;
	    this.setState({
	      checked: newState
	    });
	 },*/
	 componentDidMount(){
	 	/*var list = this.props.texts;
	 	console.log(this.props);
	  	for(var i = 0; i < list.length; i++ ){
	  		console.log(list[i].name);
	  	}*/
	  	//console.log($('.isItem').length);
	 },
	 componentWillReceiveProps: function(nextProps) {
        console.log(this.props);
     },
	 render(){
	 		console.log(this.props)
		 return <div className="isItem">
					{this.props.texts.map((item,i) =><div key={i}>
					<div className={style.main}>
						<div className={`serviceWrapm ${style.serviceWrap}`}>
						{item.projectList.map((items,j) =><div key={j} className={`viedoWrapm ${style.viedoWrap}`} style={{display:!j? 'block' : 'none'}}>
							{
								items.mediaType==2?
								<iframe src='' data-url={`${videoUrl}?vid=${items.videos[0].vid}`} style={{height:'515px',width:'540px',display:'none'}}  ></iframe>:
								<i></i>
							}
							<img className={`play ${style.play}`} src={play} style={{display: items.mediaType==2 ? 'block' : 'none' }} />
							<img className={style.logoIcon} style={{display:'block'}} src={hotmi_logo} />
							<img style={{height:'515px',width:'540px',display:'block'}} src={items.icon}/>
							<img className={style.bottomNameImg} style={{display:'block'}} src={bottom_name} />
							<div style={{display:'block'}} className={style.bottomName}>
								{
									items.isTimeprice == 1 ?
									<div className={`djsMask ${style.djsMask}`} data-item={JSON.stringify(items.timeprices)}>
										<div className={style.title}>
											<img src={limit} />
										</div>
										<div className={`djs ${style.djs}`}>
											<em className={`txt ${style.txt}`}>距结束还剩：</em>
											<span className={`td ${style.td}`} style={{display: 'none'}}>00</span>
											<span className={`td2 ${style.td2}`} style={{display: 'none'}}>00</span>
											<i className={`day`} style={{display: 'none'}}>天</i>
											<span className={`th`}>00</span><i className="dian1">:</i>  
											<span className={`tm`}>00</span><i className="dian2">:</i>  
											<span className={`ts`}>00</span>
										</div>
									</div>:
									<div className={style.nameBox}>
										<span>{item.name}</span>
									</div>
								}
								<div className={style.projectNameBox}>
									<span className='projectName'>{items.name}</span>
								</div>
							</div>
						</div>
						)}
							
							<div className={style.rightWrap}>
								<h3>{item.name}</h3>
								<div className={`typeCon ${style.typeBox}`} style={{height:item.projectList.length > 16 ? '220px' : 'auto'}}>
								{item.projectList.map((items,i) =>
									<span key={i} className={!i? 'selected':'' }  id={items.serviceProjectId} >{items.name}</span>
								)}
								</div>
								{
				          			item.projectList.length > 16 ?
				          			<div className={`fold ${style.fold}`}>
										<i className='iconfont'>&#xe604;</i>
										<span className='foldBtn'>展开更多分类</span>
									</div>:
									<div></div>
				          		}
								{item.projectList.map((items,i) =><div key={i} className={`priceBoxm ${style.priceBox}`} style={{display:!i? 'block' : 'none'}}>
										{
											items.isTimeprice == 0 ?
											<p className={style.price1}><span>市场价:</span><i>￥{items.isTimeprice==0?items.priceMarket:items.price}</i></p>:
											<p className={style.price1}><span>原价:</span><i>￥{items.price}</i></p>
										}
										{
											items.isTimeprice == 0 ?
											<p className={style.price2}><label>特购价:</label><span>￥{items.price}</span><i>/{items.unitName}</i></p>:
											items.timeprices.map((timeprice,i) =><p className={style.price2}><label>限时价:</label><span>￥{timeprice.price}</span><i>/{items.unitName}</i></p>)
										}
									</div>
								)}
								<span className={`appointBtn ${style.appointmentBtn}`} >预约</span>
								<div className={style.botCon}>
									<div>
										<i className={`iconfont ${style.qqicon}`}>&#xe617;</i>
										<span>QQ客服：273759497</span>
										<i className={`iconfont ${style.telicon}`}>&#xe616;</i>
										<span>预约热线：400-960-9099</span>
									</div>
									{item.projectList.map((items,i) =><p style={{display:!i? 'block' : 'none'}} className={`infom ${style.info}`}><span>服务说明：</span>{items.introduction}</p>
									)}
									
								</div>
							</div>
						</div>
					</div>
					</div>)} 
		 		</div>
	 }
 })
 
  var HotmiCustomServiceItem=React.createClass({
	 render(){
		 return <div className="isItem">
		 		<div>
					<div className={style.main}>
						<div className={`serviceWrapm ${style.serviceWrap}`}>
						<div className={`viedoWrapm ${style.viedoWrap}`}>
							<img style={{height:'515px',width:'540px'}} src={custom_service}/>
						</div>
						<div className={style.rightWrap}>
								<h3>定制服务</h3>
								<div className={`typeCon ${style.typeBox}`}>
									<span className='selected' id='' >定制服务</span>
								</div>
								<div className={`priceBoxm ${style.priceBox}`}>
									<p className={`${style.customPrice1} ${style.price1}`}><span>原价:</span><i>暂无</i></p>
									<p className={`${style.price2} ${style.customPrice2}`}><span>详情咨询</span></p>
								</div>
								<span id='customBook' className={`appointBtn ${style.appointmentBtn}`} >我要定制</span>
								<div className={style.botCon}>
									<div>
										<i className={`iconfont ${style.qqicon}`}>&#xe617;</i>
										<span>QQ客服：273759497</span>
										<i className={`iconfont ${style.telicon}`}>&#xe616;</i>
										<span>预约热线：400-960-9099</span>
									</div>
									<p className={`infom ${style.info}`}><span>服务说明：</span>提交您的具体需求，红蜜客服将为您一对一量身定制。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
		 	</div>
	 }
 })
 
function mapStateToProps(state, ownProps) {
	console.log(state);
	const { hotmiServeList , hotmiSelectionServeList , hotmiLimitServeList } = state
	console.log(hotmiSelectionServeList)
	const hotmiSelectionServeListArr = hotmiSelectionServeList.selectionDataList || [];
	const hotmiLimitServeListArr = hotmiLimitServeList.limitDataList || [];
	console.log(hotmiSelectionServeListArr)
	console.log(hotmiServeListArr)
	const hotmiServeListArr = {hotmiServeList}.hotmiServeList.dataList|| [];
	//console.log("slj")
	//console.log(hotmiServeListArr)
  	return {
  		hotmiSelectionServeListArr,
		hotmiServeListArr,
		hotmiLimitServeListArr
  	}
}

module.exports = connect(mapStateToProps)(HotmiService)
//module.exports = HotmiService

var timeArr = [];
var intervalArr = [];
function updateEndTime(){
	console.log('**********************************************************');
	console.log($(".djsMask").length);
  //interval = setInterval(function(){
	$(".djsMask").each(function(i,obj){
		//console.log('1212');
		/*var demoWrap=$(this).parents(".serviceWrapm");
		var theIndex=$(this).index();
		var djsMask = demoWrap.find(".viedoWrapm:eq("+theIndex+")").find('.djsMask');*/
		var timeprices = JSON.parse($(this).attr('data-item'))[0];
		//console.log(timeprices);
		//console.log('i-----------'+i);
		var thisSelf=this;
		//time=parseInt($(thisSelf).attr("data-time"));
		intervalArr[i] = setInterval(function(){	
		 	//console.log('jxf');
		 	//var endTime =$(thisSelf).attr("data-endTime"); 
		//var endTime =parseInt($(this).attr("data-endTime")); 
		/*var time=sysTimes;
		var endTime=endTimes;*/
		//console.log('time----11'+time);
		//console.log('endTime----11'+endTime);
		
		
		var endTime = timeprices.endTime;
		//console.log(endTime);
		//timeArr[i] = timeprices.now;
		//console.log();
	    var t = endTime-timeArr[i];
	    timeArr[i]=timeArr[i] + 1000;
	    //console.log('timeArr[i]----'+timeArr[i])
	    //console.log('倒计时t---'+t)
	    //console.log('倒计时ttttt'+t);
	    var d=Math.floor(t/1000/60/60/24);
		var h=Math.floor(t/1000/60/60%24);
		var m=Math.floor(t/1000/60%60);
		var s=Math.floor(t/1000%60);
		var d_html=$(thisSelf).find('.td');
		var d_html2=$(thisSelf).find('.td2');
		var h_html=$(thisSelf).find('.th');
		var m_html=$(thisSelf).find('.tm');
		var s_html=$(thisSelf).find('.ts');
		var dayInfo=$(thisSelf).find('.day')
		var dian1=$(thisSelf).find('.dian1');
		var dian2=$(thisSelf).find('.dian2');
		if(t<0){
	    	h_html.html("00");
	    	m_html.html("00");
	    	s_html.html("00");
	    	return false;
	    }
		//d_html.innerHTML = d;
		//console.log('倒计时'+d+h+m+s);
		if(d>=1){
			d_html.show();
			d_html2.show();
			dayInfo.show()
			h_html.hide();
			m_html.hide();
			s_html.hide();
			dian1.hide();
			dian2.hide();
			if(d<10){
				d_html.html("0");
				d_html2.html(d);
			}else{
				d_html.html(Math.floor(d/10));
				d_html2.html(d%10);
			}
			
		}else{
			if(h<=9){
				h_html.html("0"+h);
			}else{
				h_html.html(h);;
			}
			if(m<=9){
				m_html.html("0"+m);
			}else{
				m_html.html(m);
			}
			if(s<=9){
				s_html.html("0"+s);
			}else{
				s_html.html(s);
			}
		}
		
		//console.log('********************************************************************')
		},1000);
		//console.log(intervalArr)
	});
//},1000);
	
	 //setTimeout("updateEndTime()",1000);
	/*setInterval(function(){
	 	updateEndTime();
	 	console.log('jxf');
		//getRTime(endTime,'t_d','t_h','t_m','t_s',thisI);
	},1000);*/
}

function clearIntervalArr(){
	for(var i = 0; i< intervalArr.length; i++){
		window.clearInterval(intervalArr[i]);
	}
}

function disabledMouseWheel() {  
  if (document.addEventListener) {  
    document.addEventListener('DOMMouseScroll', scrollFunc, false);  
  }//W3C  
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome  
}  
function scrollFunc(evt) {  
  return false;  
}  

function enabledMouseWheel() {  
  if (document.removeEventListener) {  
    document.removeEventListener('DOMMouseScroll', scrollFunc, false);  
  }//W3C  
  window.onmousewheel = document.onmousewheel = enabledScrollFunc;//IE/Opera/Chrome  
}  
function enabledScrollFunc(evt) {  
  return true;  
} 
