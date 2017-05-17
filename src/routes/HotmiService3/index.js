module.exports = {
  path: 'hotmiService3',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/HotmiService'))
    },'hotmiService3')
  }
}
