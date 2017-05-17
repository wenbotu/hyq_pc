import React, { Component } from 'react'
import { Link,browserHistory } from 'react-router'
import play from '../style/img/play.png'
import video_1 from '../style/img/video_1.png'
import video_2 from '../style/img/video_2.png'
import video_3 from '../style/img/video_3.png'
import video_4 from '../style/img/video_4.png'
import video_5 from '../style/img/video_5.png'
import video_6 from '../style/img/video_6.png'
import video_7 from '../style/img/video_7.png'
import video_8 from '../style/img/video_8.png'
import video_9 from '../style/img/video_9.png'
import video_10 from '../style/img/video_10.png'
import video_11 from '../style/img/video_11.png'
import video_12 from '../style/img/video_12.png'
import video_13 from '../style/img/video_13.png'
import video_14 from '../style/img/video_14.png'
const Modal = require('antd/lib/modal')
let homePlayer = null
class Videos extends Component {
  render() {
  	const style = require('../style/videos')
    return (
      <div className={style.videos}>
      	<div className={style.row}>
      		<div onClick={this.showVideo5}>
        		<img src={video_5} />
        		<img src={play} />
        		<span>著名主持人华少助力红演圈</span>
	        </div>
	        <div onClick={this.showVideo6}>
	        	<img src={video_6} />
	        	<img src={play} />
	        	<span>青年演员余心恬助力红演圈</span>
	        </div>
	        <div onClick={this.showVideo7}>
	        	<img src={video_7} />
	        	<img src={play} />
	        	<span>人气偶像王大陆助力红演圈</span>
	        </div>
	        <div onClick={this.showVideo8}>
	        	<img src={video_8} />
	        	<img src={play} />
	        	<span>知名音乐人老猫助力红演圈</span>
	        </div>
      	</div>
      	<div className={style.row}>
      		<div onClick={this.showVideo9}>
        		<img src={video_9} />
        		<img src={play} />
        		<span>青年演员王晓卯助力红演圈</span>
	        </div>
      		<div onClick={this.showVideo10}>
	        	<img src={video_10} />
	        	<img src={play} />
	        	<span>著名歌手许飞助力红演圈</span>
	        </div>
	        <div onClick={this.showVideo13}>
	        	<img src={video_13} />
	        	<img src={play} />
	        	<span>天空乐队助力红演圈</span>
	        </div>
	        <div onClick={this.showVideo11}>
	        	<img src={video_11} />
	        	<img src={play} />
	        	<span>《龙日一》剧组助力红演圈</span>
	        </div>
      	</div>
      	<div className={style.row}>
      		<div onClick={this.showVideo12}>
	        	<img src={video_12} />
	        	<img src={play} />
	        	<span>《暴力音符》剧组助力红演圈</span>
	        </div>
	        <div onClick={this.showVideo14}>
	        	<img src={video_14} />
	        	<img src={play} />
	        	<span>《逃出无人岛》剧组助力红演圈</span>
	        </div>
      	</div>
      	<Modal title="Basic Modal" visible={this.state.visible} width={965} closable={true} wrapClassName='video-module'
				      onOk={this.handleOk} onCancel={this.handleCancel}>
			<div id={`homeYoukuplayer`} style={{width:'100%',height:'100%'}}></div>
        </Modal>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
    	visible:false
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.showVideo1 = this.showVideo1.bind(this)
    this.showVideo2 = this.showVideo2.bind(this)
    this.showVideo3 = this.showVideo3.bind(this)
    this.showVideo4 = this.showVideo4.bind(this)
    this.showVideo5 = this.showVideo5.bind(this)
    this.showVideo6 = this.showVideo6.bind(this)
    this.showVideo7 = this.showVideo7.bind(this)
    this.showVideo8 = this.showVideo8.bind(this)
    this.showVideo9 = this.showVideo9.bind(this)
    this.showVideo10 = this.showVideo10.bind(this)
    this.showVideo11 = this.showVideo11.bind(this)
    this.showVideo12 = this.showVideo12.bind(this)
    this.showVideo13 = this.showVideo13.bind(this)
    this.showVideo14 = this.showVideo14.bind(this)
  }
  handleCancel(e) {
    this.setState({
      visible: false
    })
  }
  showVideo1(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTM5MTI4NzY0MA==')
  }
  showVideo2(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTc4MjAwMDYzMg==')
  }
  showVideo3(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg0MTI0NzY3Mg==')
  }
  showVideo4(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTgyNDc0MTM5Mg==')
  }
  showVideo5(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTcyNTQ5MzcwNA==')
  }
  showVideo6(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg0MjQ5ODY0MA==')
  }
  showVideo7(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg0MjQ5MTI4OA==')
  }
  showVideo8(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg0MjQ1NTE0OA==')
  }
  showVideo9(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg1MTUxNzQ3Mg==')
  }
  showVideo10(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTgyMDQwOTMyOA==')
  }
  showVideo11(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTgzNTA0OTAxMg==')
  }
  showVideo12(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg0NTY4NDc4OA==')
  }
  showVideo13(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg1MTUxODM1Ng==')
  }
  showVideo14(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTc3Njc3MjkyMA==')
  }
  playVideo(vid){
	homePlayer = new YKU.Player('homeYoukuplayer',{
		styleid: '0',
		client_id: '320a457df632b818',
		vid: vid,
		autoplay: true,
		//newPlayer: true,
	});
  }
  componentDidMount() {
  	
  }
}
export default Videos
