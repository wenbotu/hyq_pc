import React, { Component } from 'react'

const style = require('../../../../../style/about_joinus')
class JoinUs extends Component {
  render() {

    return (
      <div className={style.joinUs}>
      		<p className={style.txt}>我们正在寻找这样的你：年轻而踏实好学，热情且专业，细致而又不失想象力。<br/>当然，我们也非常欢迎经验丰富同时还拥有一颗年轻的心的你。<br/>我们拥有尊重个人、鼓励创新的企业文化，有积极向上、轻松活泼的工作氛围。<br/>我们的穿着不必严肃，但我们的态度和行动却始终认真而执着。<br/>除了提供五险一金之外，<br/>我们还定期举办各种团队活动，公司旅游、生日会生日礼物、下午茶是标配，<br/>另外还有各种零食饮料、生鲜水果不间断提供哦~</p>
      		<div className={style.imgList}>
      				<img src={`${imgUrl}/joinus_1.jpg`} />
      				<img src={`${imgUrl}/joinus_2.jpg`} />
      				<img src={`${imgUrl}/joinus_3.jpg`} />
      				<img src={`${imgUrl}/joinus_4.jpg`} />
      				<img src={`${imgUrl}/joinus_5.jpg`} />
      				<img src={`${imgUrl}/joinus_6.jpg`} />
      				<img src={`${imgUrl}/joinus_7.jpg`} />
      				<img src={`${imgUrl}/joinus_8.jpg`} />
      				<img src={`${imgUrl}/joinus_9.jpg`} />
      		</div>
      		<p className={style.txt}>加入我们，你会发现：这里没有森严的等级制度，<br/>只有一群能嗨、敢拼的年轻人相互学习一起成长；<br/>这里的每个人都会尽力燃烧自己的小宇宙，<br/>让我们的大集体变得更加不可思议。<br/>在这里，每天都经历着工作生活的丰富多彩，每天都在和小伙伴们一起实现新的突破！<br/>来吧，加入红演圈，我们一起成就梦想。<br/>简历投递至：hr@hotyq.com</p>
      		<div className={style.workLink}>
      			<span>具体岗位要求请点击这里：</span>
      			<a href="https://www.lagou.com/gongsi/47523.html" target='_blank'><img src={`${imgUrl}/joinus_10.jpg`} /></a>
      			<a href="http://company.zhaopin.com/CC208309383.htm" target='_blank'><img src={`${imgUrl}/joinus_11.jpg`} /></a>
      		</div>
      </div>
    )
  }
  componentDidMount() {
  	$('#aboutLink').addClass('active')
  	addBaiduAnchor()
  }
  componentWillUnmount(){
  	$('#aboutLink').removeClass('active')
  }
}

module.exports = JoinUs
