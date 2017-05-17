module.exports = {
  path: 'policy',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Policy'))
    },'policy')
  }
}
