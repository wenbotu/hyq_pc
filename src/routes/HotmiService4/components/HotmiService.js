import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectNameList } from '../actions'
import HotmiServiceItem from '../components/HotmiServiceItem'
import Test from '../components/Test'

class HotmiService extends Component {
	  render() {
	  	const style = require('../../../style/hotmi.service2')
	  	const { nameList } = this.props
	  	console.log(nameList)
	    return (
	    	<div className={style.hotmiService}>
	    		{nameList.map((item, i) =>
	    			<HotmiServiceItem key={item.serviceCateId} name={item} serviceCateId={item.serviceCateId} id={item.projects[0].serviceProjectId}>
	    				
	    			</HotmiServiceItem>
	    			/*<HotmiServiceItem key={item.serviceCateId+item.name} name={item} serviceCateId={item.serviceCateId} />*/
	    		)}
	    		
	      </div>
	    )
	  }
	  constructor(props, context) {
	    super(props, context)
	    
	    this.props.dispatch(selectNameList())
	  }
	  shouldComponentUpdate(nextProps, nextState){
	  	console.log(this.props.children)
	  	return true
	  }
	  componentDidMount(){
	  	$(".header").parent().hide();
	  	//console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
	  	/*setTimeout(function(){
	  		$('.typeCon').each(function(){
		  		console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
		  		$(this).find('span:first').trigger('click');
		  	});
	  	},3000)*/
	  	
	  }
	  componentWillUnmount(){
	  	$(".header").parent().show();
	  }
}

function mapStateToProps(state, ownProps) {
	console.log(state)
	const { selectNameList } = state
	console.log(selectNameList)
	const nameList = selectNameList.nameList || []
	/*for(var i = 0; i < gla){
		
	}*/
	return {
		nameList
	}
}

module.exports = connect(mapStateToProps)(HotmiService)
