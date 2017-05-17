module.exports = {
  path: 'rankingList',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/RankingList'))
    },'rankingList')
  }
}
