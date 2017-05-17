module.exports = {
  path: 'hotmiService',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HotmiService'))
    },'hotmiService')
  }
}
