const moment = require('moment')
console.log('作業開始：' + moment().format('h:mm:ss'))

const finder = require('findit')(process.argv[2] || '.')
const path = require('path')
const fs = require('fs-extra')
const { parse, stringify } = require('csv/sync');
const _ = require('lodash')
 
const dirname = __dirname;

let csv = fs.readFileSync('items.csv')
let items = parse(csv, {
  columns: false,
})

items = _.flattenDeep(items)

finder.on('directory', function (dir, stat, stop) {
  items.forEach((item_name) => {
    if (dir.indexOf(item_name) !== -1) {
      let foldername = path.basename(dir)

      fs.copy(path.resolve(dir), `${dirname}/items/${item_name}/${foldername}`, function (err) {
        console.log(path.resolve(dir))
      });
    }
  })
})
 
finder.on('file', function (file, stat) {
  items.forEach((item_name) => {
    if (file.indexOf(item_name) !== -1) {
      let filename = path.basename(file)

      fs.copy(path.resolve(file), `${dirname}/items/${item_name}/${filename}`, function (err) {
        console.log(path.resolve(file))
      });
    }
  })
});

finder.on('end', function () {
  console.log('作業終了：' + moment().format('h:mm:ss'))  
})