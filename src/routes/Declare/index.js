module.exports = {
  path: 'declare',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Declare'))
    },'declare')
  }
}
