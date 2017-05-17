import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link ,browserHistory } from 'react-router'
import { selectService } from '../actions'
import Appoint from '../components/Appoint'
const style = require('../../../style/hotmi.service2')
class ServiceInfo extends Component {
	constructor(props, context) {
    super(props, context)
  }
  render() {
  	const service = this.props.service
  	//console.log(service)
    return (
    	<div>
	      	<div className={`priceBoxm ${style.priceBox}`}>
	      		{
							service.isTimeprice == 0 ?
							<p className={style.price1}><span>市场价:</span><i>￥{service.isTimeprice==0?service.priceMarket:service.price}</i></p>:
							<p className={style.price1}><span>原价:</span><i>￥{service.price}</i></p>
						}
						{
							service.isTimeprice == 0 ?
							<p className={style.price2}><label>特购价:</label><span>￥{service.price}</span><i>/{service.unitName}</i></p>:
							service.timeprices.map((timeprice,i) =><p key={i} className={style.price2}><label>限时价:</label><span>￥{timeprice.price}</span><i>/{service.unitName}</i></p>)
						}
			      	</div>
			      	<Appoint serviceProjectId={service.serviceProjectId} serviceCateId={this.props.serviceCateId} />
			      	<div className={style.botCon}>
						<div>
							<i className={`iconfont ${style.qqicon}`}>&#xe617;</i>
							<span>QQ客服：273759497</span>
							<i className={`iconfont ${style.telicon}`}>&#xe616;</i>
							<span>预约热线：400-960-9099</span>
						</div>
						<p className={`infom ${style.info}`}><span>服务说明：</span>{service.introduction}</p>
					</div>
      	</div>
    )
  }
  componentDidMount() {
	  	//this.setState({id:3})
  }
  componentWillReceiveProps(nextProps){
  	
  }
  shouldComponentUpdate(nextProps, nextState){
  	return global.serviceCateId == nextProps.serviceCateId
  }
}

module.exports = ServiceInfo
