import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectInfoDetail } from '../../../actions'
import BackTop from '../../../components/BackTop'
import Footer from '../../../components/Footer'

class InfoDetail extends Component {
  constructor(props, context) {
	super(props, context)
	this.props.dispatch(selectInfoDetail(this.props.params.id))
  }
  render() {
  	const { infoDetail } = this.props
  	const style = require('../../../style/info.detail')
    return (
    	<div className={style.infoDetail}>
    		<p className={style.crumbs}><Link to='/'>首页</Link> > <Link to='/more/info/1'>红演资讯</Link> > <span>资讯详情</span></p>
    		<div className={style.main}>
    			<p className={style.title}>{this.props.infoDetail.title}</p>
    			<p>{infoDetail.add_date}</p>
    			<div dangerouslySetInnerHTML={{__html: infoDetail.content}}></div>
    		</div>
    		<BackTop />
    		<Footer />
    	</div>
    )
  }
  componentDidMount() {
  	window.scrollTo(0,0)
  	addBaiduAnchor()
  }
}

function mapStateToProps(state, ownProps) {
	const { selectInfoDetail } = state
	const defaultInfoDetail = {title:'',add_date:'',content:''}
  	return {
  		infoDetail:selectInfoDetail.infoDetail || defaultInfoDetail
  	}
}

module.exports = connect(mapStateToProps)(InfoDetail)