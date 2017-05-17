module.exports = {
  path: 'developmentHistory',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/DevelopmentHistory'))
    },'developmentHistory')
  }
}
