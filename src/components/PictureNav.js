import React, { Component } from 'react'
import { Link,browserHistory } from 'react-router'

class PictureNav extends Component {
  render() {
  	const style = require('../style/home.page')
    return (
      <div className={style.pictureNav} id="pictureNav">
        <Link to="/hotyq" >
        	<img src = {`${imgUrl}/hotyq.jpg`} />
        	<p className={style.mask} style={{backgroundImage:`url(${imgUrl}/hotyq_code.png)`}}></p>
        </Link>
	    	<Link to="/hotmi" >
        	<img src = {`${imgUrl}/hotmi.jpg`} />
        	<p className={style.mask} style={{backgroundImage:`url(${imgUrl}/hotmi_code.png)`}}></p>
        </Link>
	    	<Link to="/hotfan" >
	    		<img src = {`${imgUrl}/hotfan.jpg`} />
	    		<p className={style.mask} style={{backgroundImage:`url(${imgUrl}/hotfan_code.png)`}}></p>
	    	</Link>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount() {
  	$("#pictureNav a").each(function(index,element){
    	$(this).hover(function() {
				$(this).find('p').stop().animate({"opacity": 1},'fast','linear');
			}, function() {
				$(this).find('p').stop().animate({"opacity": 0},'fast','linear');
			})
    })
  }
}
export default PictureNav
