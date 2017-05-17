import React, { Component } from 'react'
import { Link } from 'react-router'

class PictureNav extends Component {
  render() {
  	const style = require('../style/home.page')
		return (
	      <div className={style.information}>
					<img src={this.props.title}/>
					<div className={style.more}>
							<Link to={`/more/${this.props.type}/1`} >更多<i className='iconfont'>&#xe601;</i></Link>
					</div>
					<ul>
		        {this.props.list.map((item, i) =>
		          <li key={i}>
		          	<i className='iconfont'>&#xe602;</i>
	          		{
	          			this.props.type == 'report'?
	          			<a href={item.url} target='_blank'>{item.title}</a>:
	          			<Link to={`/info/${item.id}`}>{item.title}</Link>
	          		}
		          </li>
		        )}
		      </ul>
	      </div>
	    )
  }
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount() {
  	
  }
}
export default PictureNav
