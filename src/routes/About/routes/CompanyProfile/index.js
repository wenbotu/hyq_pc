module.exports = {
  path: 'companyProfile',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/CompanyProfile'))
    },'companyProfile')
  }
}
