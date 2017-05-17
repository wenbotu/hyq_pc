import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory,hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './routes/Root'
import configureStore from './store/configureStore'
import useBasename from 'history/lib/useBasename'
import App from './containers/App'
import './config'
//import './plugins/swiper/swiper.min.js'
import './plugins/common.js'
//import './plugins/swiper/swiper.min.css'
//import './plugins/swiper/ruiliSwiper.js'
require('./style/global.css')
require('./style/global.scss')
require('./style/header.css')
require('./style/footer.css')

require('./style/antd.css')

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={useBasename(() => history)({ basename: `/hotyq/src/index.html` })} />,
  document.getElementById('root')
)
/*import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
render(<div>test</div>,document.getElementById('root'))*/

