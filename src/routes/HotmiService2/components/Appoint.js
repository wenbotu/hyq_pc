import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectService } from '../actions'
import ServiceInfo from '../components/ServiceInfo'
import ServicePhotoOrVideo from '../components/ServicePhotoOrVideo'
import { serviceAppoint } from '../actions'
require('../../../style/hotmi_service.css')
//import 'antd/dist/antd.css'

//import 'antd/lib/modal/style/index.css'
//利用 babel-plugin-import 按需加载，减少 bundle size
const Modal = require('antd/lib/modal') 
const message = require('antd/lib/message') 
//require('antd/lib/modal/style/index.js') 
const style = require('../../../style/hotmi.service2')
class Appoint extends Component {
  constructor(props, context) {
    super(props, context)
    this.state={
    	visible:false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  render() {
  	const serviceProjectId = this.props.serviceProjectId
    return (
        <div className='appoint'>
					<span className={`appointBtn ${style.appointmentBtn}`} onClick={this.showModal} >预约</span>
					<Modal title="Basic Modal" visible={this.state.visible} width={900} closable={false} wrapClassName='appoint-module'
				      onOk={this.handleOk} onCancel={this.handleCancel} className={style.modal}>
							<div className={style.appointmentBox}>
								<h3>预约信息</h3>
								<i className={`closeBtn ${style.closeBtns}`} onClick={this.handleCancel}>&#215;</i>
								<div className={style.serviceList}>
									<p >您选择的服务</p>
									<span className="selectedSer">红蜜圣诞老人</span>
								</div>
								<div className={style.formRow}>
									<span>*</span>
									<input type="text" ref='name' name="name" id="name" defaultValue=""  placeholder="联系人姓名"/>
								</div>
								<div className={style.formRow}>
									<span>*</span>
									<input type="text" ref='tel' name="tel" id="tel"  defaultValue="" placeholder="联系人电话"/>
								</div>
								<div className={style.formRow}>
									<textarea ref='message' name="" rows="" cols="" placeholder="需求描述"></textarea>
								</div>
								<span  className={`submitBtn ${style.submitBtns}`} onClick={this.handleOk}>提交</span>
							</div>
	        </Modal>
    		</div>
    )
  }
  componentDidMount() {
  	message.config({
		  top: 260,
		  duration: 1.5,
		})
  }
  componentWillReceiveProps(nextProps){
  	
  }
  showModal(){
  	this.setState({
      visible:true
   })
  }
  handleOk() {
    console.log('Clicked OK')
    console.log(this.props.serviceProjectId)
    const serviceProjectId = this.props.serviceProjectId
    
    
    
    const name = this.refs.name.value
    const tel = this.refs.tel.value
    const mes = this.refs.message.value
    if(!name){
    	message.error('姓名不能为空，或不正确')
    	return false
    }
    const testphone=/^1[3|4|5|7|8][0-9]\d{8,8}$/;
		if(!testphone.test(tel)){
			message.error('电话不能为空，或不正确')
			return false
		}
    const data = `projectid=${serviceProjectId}&name=${name}&phone=${tel}&message=${mes}`
    console.log(data)
    fetch(`${guanW}/hongmi-api/order/pcSubmit`,{
			method:'POST',
			headers: {
		    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		  },
			body:data
		}).then(response =>response.json())
  	.then(result =>{ 
  		//alert(result.desc)
  		if(result.stateCode == '0000'){
  			this.setState({
		      visible: false
		    });
  			message.success('预约成功')
  		}else{
  			message.error(result.desc)
  		}
  	})
  
  }
  handleCancel(e) {
    console.log('Clicked Cancel')
    this.setState({
      visible: false
    })
  }
}

module.exports = Appoint

/*function mapStateToProps(state, ownProps) {
	const { serviceAppoint } = state
	console.log(serviceAppoint)
	const appointResult = selectService.appointResult || []
	return {
		appointResult
	}
}

module.exports = connect(mapStateToProps)(Appoint)*/