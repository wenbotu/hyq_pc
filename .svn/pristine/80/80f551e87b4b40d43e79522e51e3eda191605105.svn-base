module.exports = {
  path: 'arandActivity',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/RankingList'),
        require('./routes/RuiliModel')
      ])
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ArandActivity'))
    },'arandActivity')
  }
}
