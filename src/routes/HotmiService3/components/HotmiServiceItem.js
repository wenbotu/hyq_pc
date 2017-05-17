import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectService } from '../actions'
import Test from '../components/Test'
require('../../../style/hotmi_service.css')

class HotmiServiceItem extends Component {
	constructor(props, context) {
    super(props, context)
    const id = this.props.id
    /*const serviceCateId = this.props.serviceCateId
    //global.serviceCateId = serviceCateId
   //this.props.dispatch(selectService(id))
   global.initServiceCateIdList.push(serviceCateId)*/
    console.log(id)
  	this.state={id:id}
  	console.log('===============================')
  	console.log(this.state)
  }
  render() {
  	const style = require('../../../style/hotmi.service2')
  	const name = this.props.name
  	const serviceCateId = this.props.serviceCateId
  	const service = this.props.service
  	
  	console.log(this.props.id)
  	console.log(serviceCateId)
  	console.log("***********************************************")
  	console.log(service)
    return (
          <div className={style.main}>
	    			<div className={style.serviceWrap}>
			      	<div className={style.viedoWrap}>
			      		
			      	</div>
			      	<div className={style.rightWrap}>
			      		<h3>{name.name}</h3>
			      		<div className={`typeCon ${style.typeBox}`}>
			      			{name.projects.map((item, j) =>
			      				<span key={item.serviceProjectId} className={!j? 'selected':'' } onClick={(id) => {this.getServiceById(item.serviceProjectId)}}>{item.name + '_' + item.serviceProjectId}</span>
			      			)}
			      		</div>
			      		{this.renderService()}
			      	</div>
			      </div>
	    	</div>
    )
  }
  componentDidMount() {
  	//{this.props.children}
  	this.setState({aa:'aa'})
  	//this.props.dispatch(selectService(this.props.id))
  	console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
  	const serviceCateId = this.props.serviceCateId
    //global.serviceCateId = serviceCateId
   //this.props.dispatch(selectService(id))
   global.initServiceCateIdList.push(serviceCateId)
  	console.log(global.initServiceCateIdList)
  	
  	//$('.typeCon span:first').trigger('click');
  	/*$('.typeCon').each(function(){
  		$(this).find('span:first').trigger('click');
  	});*/
  	
  	/*const id = this.props.id
  	const serviceCateId = this.props.serviceCateId
    global.serviceCateId = serviceCateId
    setTimeout(function(){
    	this.props.dispatch(selectService(id))
    }.bind(this),1000)*/
   const id = this.props.id
    //this.props.dispatch(selectService(id))
  }
  renderService(){
  	//this.setState({aa:'aa'})
  	/*console.log(this.state)
  	return this.props.children
  	<Test service={this.props.service} />
  	{this.renderService()}*/
  	console.log(this.state)
  	console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM')
  	return <Test key={this.state.id} id = {this.state.id} service={this.state.service} ><i key={this.state.id}></i></Test>
  }
  /*shouldComponentUpdate(nextProps, nextState){
  	console.log(nextProps)
  	console.log(nextProps.service.serviceProjectId + "_" + this.props.service.serviceProjectId)
  	//console.log(nextProps.service.serviceProjectId !== this.props.service.serviceProjectId)
  	console.log(nextProps.serviceCateId !== this.props.serviceCateId)
  	//return nextProps.serviceCateId == this.props.serviceCateId
  	//return nextProps.service.serviceProjectId !== this.props.service.serviceProjectId
  	return true
  }*/
  shouldComponentUpdate(nextProps, nextState){
  	
  	console.log(nextProps)
  	console.log(this.props.serviceCateId+"_"+nextProps.serviceCateId)
  	//console.log(nextProps.service.serviceProjectId + "_" + this.props.service.serviceProjectId)
  	//console.log(nextProps.service.serviceProjectId !== this.props.service.serviceProjectId)
  	//console.log(nextProps.serviceCateId !== this.props.serviceCateId)
  	//return nextProps.serviceCateId == this.props.serviceCateId
  	//return nextProps.service.serviceProjectId !== this.props.service.serviceProjectId
  	console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT')
  	/*console.log(this.state)
  	console.log(nextState)*/
  	console.log(this.props.serviceCateId + "___" + global.serviceCateId)
  	//return this.props.serviceCateId == global.serviceCateId
  	return true
  }
  componentWillReceiveProps(nextProps){
  	console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
  	console.log(this.state)
  	console.log(this.props.children)
  }
  getServiceById(id) {
  	console.log(this)
  	//this.setProps({id:'id'})
  	//this.props.id=id;
  	//this.setState({bb:'bb'})
  	this.setState({id:id})
  	console.log('////////////////////////////////////////////////')
  	global.serviceCateId = this.props.serviceCateId
  	console.log(global.serviceCateId)
  	console.log(this.props.id)
  	console.log(this.state)
  	//alert(this.props.children.key)
  	//this.props.dispatch(selectService(id))
  	/*console.log(this.props)*/
  	//this.props.dispatch(selectService(id))
  	//<Test key={service.serviceProjectId + service.introduction} id={service.serviceProjectId} service={service}/>
  	console.log(this.props)
  	console.log(id)
  	
  	
  }
}

function mapStateToProps(state, ownProps) {
	console.log('***************************')
	//console.log(this.state)
	console.log(state)
	const { selectService } = state
	console.log(selectService)
	const defaultService = {
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
	}
	const service = selectService.service || defaultService
	return {
		service
	}
}

module.exports = connect(mapStateToProps)(HotmiServiceItem)