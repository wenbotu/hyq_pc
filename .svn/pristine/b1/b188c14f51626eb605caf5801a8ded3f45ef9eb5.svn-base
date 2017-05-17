import React, { Component , PropTypes } from 'react'
import { Link , browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { selectMoreList } from '../../../actions'
import Footer from '../../../components/Footer'
//import Pagination from '../../../components/pagination/index'

//import { Pagination } from 'antd'
//import '../../../style/antd.css'
import '../../../style/page.css'
//利用 babel-plugin-import 按需加载，减少 bundle size
const Pagination = require('antd/lib/pagination') 

class MoreList extends Component {
  constructor(props, context) {
    super(props, context)
    const { name , page } = this.props.params
    this.props.dispatch(selectMoreList(name,page))
    this.onPageChange = this.onPageChange.bind(this)
  }
  componentWillReceiveProps(){
  	
  }
  componentWillMount(){
  	//this.props.dispatch(selectMoreList(name,page))
  }
  render() {
  	const style = require('../../../style/more.list')
  	const name = this.props.params.name == 'report' ? '媒体报道' : '红演资讯'
  	const news = `${imgUrl}/news_title.png`
  	const message = `${imgUrl}/message_title.png`
  	const title = this.props.params.name == 'report' ? news : message
  	const { list , nowPage , totalCount , totalPage } = this.props
    return (
      <div id='moreContainer' className={style.morelist}>
      	<p className={style.crumbs}><Link to='/'>首页</Link> > <span>{name}</span></p>
      	<div id='moreMain' className={style.moreMain}>
      		<div className={style.moreInformation}>
						<img src={title}/>
						<div className={style.more}></div>
							<ul id='moreList' className={style.moreUl}>
				        {list.map((item, i) =>
				          <li className={style.moreLi} key={i}>
				          	<div className={style.moreItem}>
					          	<i className='iconfont'>&#xe602;</i>
				          		{
				          			this.props.params.name == 'report'?
				          			<a className={style.moreLink} href={item.url} target='_blank'>{item.title}</a>:
				          			<Link className={style.moreLink} to={`/info/${item.id}`}>{item.title}</Link>
				          		}
			          		</div>
				          	<span>{item.add_date}</span>
				          </li>
				        )}
	      			</ul>
		    	</div>
			    <div className={style.paging} id="pages">
			    	<Pagination current={nowPage * 1} total={totalPage * 10} onChange={this.onPageChange} />
			    </div>
      	</div>
      	<div id='moreFooter' className={style.moreFooter}>
      		<Footer />
      	</div>
      </div>
    )
  }
  componentDidMount() {
  	window.scrollTo(0,0)
  	const { list , nowPage , totalCount , totalPage } = this.props
  	addBaiduAnchor()
  }
  componentDidUpdate(){
		if($('#moreList').height() < 764 && $('#moreContainer').height() < $(window).height()){
			$('#moreFooter').css({'position':'absolute','top':'clac(100% - 80px)'})
		}else{
			$('#moreMain').css('height','auto')
			$('#moreFooter').css('position','relative')
		}
  }
  onPageChange(page){
  	console.log(this.props)
  	const { name } = this.props.params
    //browserHistory.push(`/hotyq/src/index.html/more/${name}/${page}`)
    window.history.replaceState({},'',`/hotyq/src/index.html/more/${name}/${page}`)
    this.props.dispatch(selectMoreList(name,page))
  }
}

MoreList.propTypes = {
  list: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {
	const { selectMoreList } = state
	const defaultMoreList = {
		list:[{
			add_date:'',
			id:0,
			title:'',
			url:''
		}],
		nowPage:1,
		totalCount:1,
		totalPage:1
	}
	const { list , nowPage , totalCount , totalPage } = selectMoreList.list ? selectMoreList : defaultMoreList
  	return {
  		list,
  		nowPage,
  		totalCount,
  		totalPage
  	}
}

module.exports = connect(mapStateToProps)(MoreList)