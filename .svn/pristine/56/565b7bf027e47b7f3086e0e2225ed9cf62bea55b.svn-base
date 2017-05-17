import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
  	const style = require('../../../style/about')
    return (
    	<div className={style.nav}>
    		<Link activeClassName={style.active} to="/about/companyProfile" >公司简介</Link>
    		<Link activeClassName={style.active} to="/about/developmentHistory" >发展历程</Link>
    		<Link activeClassName={style.active} to="/about/teamIntroduction" >团队介绍</Link>
    		<Link activeClassName={style.active} to="/about/joinUs" >加入我们</Link>
    		<Link activeClassName={style.active} to="/about/linkUs" >联系我们</Link>
    	</div>
    )
  }
}

export default Nav