module.exports = {
  path: 'more/:name/:page',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/MoreList'))
    },'moreList')
  }
}
