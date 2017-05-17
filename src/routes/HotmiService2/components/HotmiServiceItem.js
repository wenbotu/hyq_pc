import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectService } from '../actions'
import ServiceInfo from '../components/ServiceInfo'
import ServicePhotoOrVideo from '../components/ServicePhotoOrVideo'
require('../../../style/hotmi_service.css')
const style = require('../../../style/hotmi.service2')
class HotmiServiceItem extends Component {
	constructor(props, context) {
    super(props, context)
    this.getServiceById = this.getServiceById.bind(this)
  }
  render() {
  	const name = this.props.name
  	const serviceCateId = this.props.serviceCateId
  	const service = this.props.service
  	const firstProject = name.firstProject
    return (
        <div className={style.main}>
			<div className={style.serviceWrap}>
    			{
	      			service.name == '' ?
	      			<ServicePhotoOrVideo service={firstProject} name={name.name} serviceCateId={serviceCateId} />:
	      			<ServicePhotoOrVideo service={service} serviceCateId={serviceCateId} name={name.name} />
	      		}
		      	<div className={style.rightWrap}>
		      		<h3>{name.name}</h3>
		      		<div className={`typeCon ${style.typeBox}`} style={{height:name.projects.length > 16 ? '220px' : 'auto'}}>
		      			{name.projects.map((item, j) =>
		      				<span key={item.serviceProjectId} className={!j? `${style.selected}`:'' } data-id={item.serviceProjectId} onClick={this.getServiceById}>{item.name}</span>
		      			)}
		      		</div>
		      		{
	          			name.projects.length > 16 ?
	          			<div className={`fold ${style.fold}`} onClick={this.foldClass}>
							<i className='iconfont'>&#xe604;</i>
							<span className='foldBtn'>展开更多分类</span>
						</div>:
						<div></div>
	          		}
		      		{
		      			service.name == '' ?
		      			<ServiceInfo service={firstProject} />:
		      			<ServiceInfo service={service} serviceCateId={serviceCateId} />
		      		}
		      	</div>
	      	</div>
    	</div>
    )
  }
  componentDidMount() {
  	
  }
  componentWillReceiveProps(nextProps){
  	
  }
  foldClass(e){
  	var fold = $(e.currentTarget)
  	var span = fold.find('span')
  	var i = fold.find('i')
  	if(span.html() == '展开更多分类'){
		span.html('收起')
		i.html('&#xe603');
		fold.prev().css({'height':'auto'})
	}else{
		span.html('展开更多分类')
		i.html('&#xe604');
		fold.prev().css({'height':'220px'})
	}
  }
  getServiceById(e) {
  	
  	var spanList =e.currentTarget.parentNode.getElementsByTagName('span')
  	Array.prototype.forEach.call(spanList, function(span) {
	    span.classList.remove(`${style.selected}`)
	})
  	
  	e.currentTarget.classList.add(`${style.selected}`)
  	
  	//$(e.currentTarget).parent().find('span').removeClass(`${style.selected}`)
  	//$(e.currentTarget).addClass(`${style.selected}`)
  	
  	global.serviceCateId = this.props.serviceCateId
  	this.props.dispatch(selectService(e.target.dataset.id))
  	
  }
}

function mapStateToProps(state, ownProps) {
	const { selectService } = state
	const service = selectService.service || {name:''}
	return {
		service
	}
}

module.exports = connect(mapStateToProps)(HotmiServiceItem)