import React, { Component } from 'react'
import { Link ,browserHistory } from 'react-router'
import BackTop from '../../../components/BackTop'
import Nav from './Nav'
import Footer from '../../../components/Footer'

class About extends Component {
  render() {
  	const style = require('../../../style/about')
    return (
      <div className={`${style.content} content`}>
        <img className={style.banner} src={`${imgUrl}/about_banner.png`} />
        <div className={style.main} >
        	<Nav />
        	{this.props.children}
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
  componentDidMount() {
  	//addBaiduAnchor()
  }
}
/*<Footer />*/
module.exports = About
