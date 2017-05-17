module.exports = {
  path: 'hotman',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Hotman'))
    },'hotman')
  }
}
