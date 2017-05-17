import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link ,browserHistory } from 'react-router'

import { selectService } from '../actions'

class Test extends Component {
  render() {
  	const service = this.state.service
  	//const service = this.props.service
  	console.log('++++++++++++++++++++++++++++++++++++++++++++++')
  	console.log(service)
    return (
      <div>
        <span>{service.name}</span>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    console.log('____________________________________')
    console.log(this.props.id)
    this.state={service:{
			addTime:0,
			icon:'',
			introduction:'333',
			isTimeprice:0,
			mediaType:1,
			name:'',
			price:0,
			priceMarket:0,
			serviceProjectId:0,
			timeprices:[],
			unitKey:'',
			unitName:'',
			videos:[]
		}}
    //this.props.dispatch(selectService(this.props.id))
    //this.props.dispatch(selectService(this.props.id))
    //this.state={id:this.pros}
    
	
  }
  componentDidMount() {
  	console.log('))))))))))))))))))))))))))))))))))))))))))))')
  	console.log(this.props.id)
  	//this.props.dispatch(selectService(this.props.id))
  	//addBaiduAnchor()
  	//<span>{this.props.service.introduction}</span>
  	//var _this = this;
  	
	  $.ajax({
				url:`${guanW}/hongmi-api/service/getPcServiceProject?id=${this.props.id}`,
				type: 'get',
				data: {
					
				},
				success: function(data) {
					//alert(JSON.stringify(data))
					console.log(data)
					this.setState({service:data.data})
				}.bind(this),
				error:function(data){
					console.log("error");
				},
				dataType: 'json'
		});
	  	
  }
  componentWillReceiveProps(nextProps){
  	console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
  	console.log(nextProps)
  	console.log(nextProps.id)
  	//this.setState({id:nextProps.id})
  }
  /*shouldComponentUpdate(nextProps, nextState){
  	
  	return true
  }*/
}
/*<Footer />*/
module.exports = Test
/*function mapStateToProps(state, ownProps) {
	console.log('***************************')
	//console.log(this.state)
	console.log(state)
	const { selectService } = state
	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
	console.log(selectService)
	const defaultService = {
		addTime:0,
		icon:'',
		introduction:'333',
		isTimeprice:0,
		mediaType:1,
		name:'22255',
		price:0,
		priceMarket:0,
		serviceProjectId:0,
		timeprices:[],
		unitKey:'',
		unitName:'',
		videos:[]
	}
	const service = selectService.service || defaultService
	return {
		service
	}
}

module.exports = connect(mapStateToProps)(Test)*/
