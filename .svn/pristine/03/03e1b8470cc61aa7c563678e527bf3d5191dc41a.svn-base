import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import GlobalNav from '../components/GlobalNav'

class App extends Component {
  render() {
  	const { children, inputValue } = this.props
    return (
	    <div className="container">
	    	<GlobalNav />
	      {this.props.children || <HomePage />}
	    </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)
