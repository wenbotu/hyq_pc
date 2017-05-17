module.exports = {
  path: 'hotmiService4',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HotmiService'))
    },'hotmiService4')
  }
}
