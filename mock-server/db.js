const homeData = require('./data/homeData')
const productDetail = require('./data/productDetail')

const DB = {
  homeData,
  productDetail
}
module.exports = () => DB
