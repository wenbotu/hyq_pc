module.exports = {
  path: 'joinUs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/JoinUs'))
    },'joinUs')
  }
}
