module.exports = {
  path: 'teamIntroduction',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/TeamIntroduction'))
    },'teamIntroduction')
  }
}
