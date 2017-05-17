module.exports = {
  path: 'ruiliModel',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/RuiliModel'))
    },'ruiliModel')
  }
}
