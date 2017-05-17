module.exports = {
  path: 'info/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/InfoDetail'))
    },'infoDetail')
  }
}
