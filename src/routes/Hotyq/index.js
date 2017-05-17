module.exports = {
  path: 'hotyq',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Hotyq'))
    },'hotyq')
  }
}
