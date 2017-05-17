import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link ,browserHistory } from 'react-router'
import { selectService } from '../actions'
import bottom_name from '../../../style/img/bottom_name.png'
import hotmi_logo from '../../../style/img/hotmi_logo_icon.png'
import play from '../../../style/img/play.png'
import limit from '../../../style/img/limit.png'
const style = require('../../../style/hotmi.service2')
let player = null
let interval = null
let time = null
class ServicePhotoOrVideo extends Component {
  render() {
  	const service = this.props.service
  	const serviceCateId = this.props.serviceCateId
    return (
      <div id={`viedoWrap${serviceCateId}`} className={`viedoWrapm ${style.viedoWrap}`}>
      	{
					service.mediaType==2?
					<div id={`youkuplayer${serviceCateId}`} style={{position:'absolute',width:'540px',height:'515px',display:'none'}}></div>:
					<i></i>
				}
				<img className={`play ${style.play}`} src={play} style={{display: service.mediaType==2 ? 'block' : 'none' }} onClick={this.playVideo} />
				<div className='needHide'>
					<img className={style.logoIcon} style={{display:'block'}} src={hotmi_logo} />
					<img style={{height:'515px',width:'540px',display:'block'}} src={service.icon}/>
					<img className={style.bottomNameImg} style={{display:'block'}} src={bottom_name} />
				</div>
				<div style={{display:'block'}} className={style.bottomName}>
					{
						service.isTimeprice == 1 ?
						<div id={`djsMask${serviceCateId}`} className={`djsMask ${style.djsMask}`} data-item={JSON.stringify(service.timeprices)}>
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
							<span>{this.props.name}</span>
						</div>
					}
					<div className={style.projectNameBox}>
						<span className='projectName'>{service.name}</span>
					</div>
				</div>
			</div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.playVideo = this.playVideo.bind(this)
  }
  componentDidMount() {
  	var viedoWrap = $(`#djsMask${this.props.serviceCateId}`)
  	//console.log(`#djsMask${this.props.serviceCateId}`)
  	//console.log(viedoWrap.length)
  	if(viedoWrap.length != 0){
  		var timeprices = JSON.parse(viedoWrap.attr('data-item'))[0]
  		time = timeprices.now;
  		this.updateEndTime()
  	}
  	
  }
  componentWillReceiveProps(nextProps){
		var viedoWrap = $(`#viedoWrap${this.props.serviceCateId}`)
		viedoWrap.find(`#youkuplayer${this.props.serviceCateId}`).hide()
  	viedoWrap.find('.needHide img').show()
	  viedoWrap.find(`.${style.bottomName}`).show()
	  viedoWrap.find(`.${style.projectNameBox}`).show()
	  
	  /*if(nextProps.service.mediaType == 2){
	  	viedoWrap.find('.play').show()
	  }*/
	  
	  
	  
	  /*var nextViedoWrap = $(`#viedoWrap${nextProps.serviceCateId}`)
	  if(nextViedoWrap.length != 0){
	  	
	  	var timeprices = JSON.parse(nextViedoWrap.attr('data-item'))[0]
			time = timeprices.now;
			this.updateEndTime()
	  }*/
  		
  }
  componentDidUpdate(){
  	var viedoWrap = $(`#djsMask${this.props.serviceCateId}`)
  	//console.log(viedoWrap.length)
  	if(viedoWrap.length != 0){
  		var timeprices = JSON.parse(viedoWrap.attr('data-item'))[0]
  		time = timeprices.now;
  		this.updateEndTime()
  	}
  }
  shouldComponentUpdate(nextProps, nextState){
  	return global.serviceCateId == nextProps.serviceCateId
  }
  playVideo(e){
  	
  	var playerId = `youkuplayer${this.props.serviceCateId}`
  	var vid = this.props.service.videos[0].vid
		player = new YKU.Player(playerId,{
			styleid: '0',
			client_id: '320a457df632b818',
			vid: vid,
			autoplay: true,
			//newPlayer: true,
		});
  		
  	var playBtn = $(e.currentTarget)
  	var parent = playBtn.parent()
		parent.find('img').hide()
  	parent.find(`.${style.bottomName}`).hide()
 	 	parent.find(`.${style.projectNameBox}`).hide()
	  parent.find(`#youkuplayer${this.props.serviceCateId}`).show()
	  //parent.find(`#youkuplayer${this.props.serviceCateId}`).css('z-index','0')
	  //player.playVideo()
  }
  updateEndTime(){
		var viedoWrap = $(`#djsMask${this.props.serviceCateId}`);
	  //interval = setInterval(function(){
			//console.log('1212');
			var timeprices = JSON.parse(viedoWrap.attr('data-item'))[0];
			//console.log(timeprices);
			//console.log('i-----------'+i);
			//var thisSelf=this;
			//time=parseInt(viedoWrap.attr("data-time"));
			window.clearInterval(interval)
			console.log(interval)
			interval = setInterval(function(){	
			 	//console.log('jxf');
			 	//var endTime =viedoWrap.attr("data-endTime"); 
			//var endTime =parseInt($(this).attr("data-endTime")); 
			/*var time=sysTimes;
			var endTime=endTimes;*/
			//console.log('time----11'+time);
			//console.log('endTime----11'+endTime);
			
			
			var endTime = timeprices.endTime;
			//console.log(endTime);
			
			//console.log();
		    var t = endTime-time;
		    time=time + 1000;
		    //console.log('time----'+time)
		    //console.log('倒计时t---'+t)
		    //console.log('倒计时ttttt'+t);
		    var d=Math.floor(t/1000/60/60/24);
			var h=Math.floor(t/1000/60/60%24);
			var m=Math.floor(t/1000/60%60);
			var s=Math.floor(t/1000%60);
			var d_html=viedoWrap.find('.td');
			var d_html2=viedoWrap.find('.td2');
			var h_html=viedoWrap.find('.th');
			var m_html=viedoWrap.find('.tm');
			var s_html=viedoWrap.find('.ts');
			var dayInfo=viedoWrap.find('.day')
			var dian1=viedoWrap.find('.dian1');
			var dian2=viedoWrap.find('.dian2');
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
	//},1000);
		
		 //setTimeout("updateEndTime()",1000);
		/*setInterval(function(){
		 	updateEndTime();
		 	console.log('jxf');
			//getRTime(endTime,'t_d','t_h','t_m','t_s',thisI);
		},1000);*/
	}
}

module.exports = ServicePhotoOrVideo
