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
import video_15 from '../style/img/video_15.png'
import video_16 from '../style/img/video_16.png'
import video_17 from '../style/img/video_17.png'
const Modal = require('antd/lib/modal')
let homePlayer = null
class Videos extends Component {
  render() {
  	const style = require('../style/videos')
    return (
      <div className={style.videos}>
      	<div className={style.row}>
	        <div onClick={this.showVideo2}>
	        	<img src={video_2} />
	        	<img src={play} />
	        	<span>红演圈·校园艺人排行榜宣传片</span>
	        </div>
	        <div onClick={this.showVideo15}>
	        	<img src={video_15} />
	        	<img src={play} />
	        	<span>红演圈·China Showgirl年度盛典</span>
	        </div>
	        <div onClick={this.showVideo16}>
	        	<img src={video_16} />
	        	<img src={play} />
	        	<span>瑞丽模特大赛·红演圈赛区总决赛</span>
	        </div>
	        <div onClick={this.showVideo3}>
	        	<img src={video_3} />
	        	<img src={play} />
	        	<span>北电培训中心·红演圈主角训练营</span>
	        </div>
      	</div>
      	<div className={style.row}>
      		<div onClick={this.showVideo4}>
	        	<img src={video_4} />
	        	<img src={play} />
	        	<span>红蜜·圣诞老人演艺到家服务</span>
	        </div>
	        <div onClick={this.showVideo17}>
	        	<img src={video_17} />
	        	<img src={play} />
	        	<span>红蜜·专业年会服务</span>
	        </div>
      	</div>
      	<Modal title="Basic Modal" visible={this.state.visible} width={965} closable={true} wrapClassName='video-module'
				      onOk={this.handleOk} onCancel={this.handleCancel}>
			<div id={`homeYoukuplayer2`} style={{width:'100%',height:'100%'}}></div>
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
    this.showVideo15 = this.showVideo15.bind(this)
    this.showVideo16 = this.showVideo16.bind(this)
    this.showVideo17 = this.showVideo17.bind(this)
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
  showVideo15(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTUwNTc2NDM4NA==')
  }
  showVideo16(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg3MjUyNDc1Mg==')
  }
  showVideo17(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMTg2NzMwNzU5Mg==')
  }
  playVideo(vid){
	homePlayer = new YKU.Player('homeYoukuplayer2',{
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
