const homeData = require('./data/homeData.json')
const pageDetail = require('./data/pageDetail.json').data

const DB = {
  homeData,
  pageDetail
}
module.exports = () => DB
