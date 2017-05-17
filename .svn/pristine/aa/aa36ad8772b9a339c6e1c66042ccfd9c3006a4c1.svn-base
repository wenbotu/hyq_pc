module.exports = {
  path: 'linkUs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/LinkUs'))
    },'linkUs')
  }
}
