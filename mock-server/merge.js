const fs = require('fs')

// 定义需要合并的文件路径
const file = [
  './data/homeBanner.json',
  './data/homeProdList.json',
  './data/prodDetailList.json'
]

main(file)

async function main (arr) {
  let data = {}
  for (var item of arr) {
    let itemData = require(item) // 读取文件数据
    Object.assign(data, itemData) // 合并到data
  }
  fs.writeFile('mock-server/db.json', JSON.stringify(data), (err) => {
    if (err) throw err
    console.log('文件已保存')
  })
}
