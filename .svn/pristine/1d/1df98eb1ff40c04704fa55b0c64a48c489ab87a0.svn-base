module.exports = {
  path: 'hotfan',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Hotfan'))
    },'hotfan')
  }
}
