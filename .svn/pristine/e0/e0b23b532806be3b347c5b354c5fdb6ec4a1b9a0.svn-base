module.exports = {
  path: 'about',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/CompanyProfile'),
        require('./routes/DevelopmentHistory'),
        require('./routes/JoinUs'),
        require('./routes/LinkUs'),
        require('./routes/TeamIntroduction')
      ])
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/About'))
    },'about')
  }
}
