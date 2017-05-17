module.exports = {
  path: 'hotmi',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Hotmi'))
    },'hotmi')
  }
}
