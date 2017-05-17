module.exports = {
  path: 'hotmiService2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HotmiService'))
    },'hotmiService2')
  }
}
