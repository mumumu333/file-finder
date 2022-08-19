const moment = require('moment')
console.log('作業開始：' + moment().format('h:mm:ss'))

const finder = require('findit')(process.argv[2] || '.')
const path = require('path')
const fs = require('fs-extra')
const { parse, stringify } = require('csv/sync');
const _ = require('lodash')
 
const dirname = __dirname;

let csv = fs.readFileSync('products.csv')
let products = parse(csv, {
  columns: false,
})

products = _.flattenDeep(products)

finder.on('directory', function (dir, stat, stop) {
  products.forEach((serial_no) => {
    if (dir.indexOf(serial_no) !== -1) {
      fs.copy(path.resolve(dir), dirname + '/products/' + serial_no, function (err) {
        console.log(path.resolve(dir))
      });
    }
  })
})
 
finder.on('file', function (file, stat) {
  products.forEach((serial_no) => {
    if (file.indexOf(serial_no) !== -1) {
      let filename = path.basename(file)

      fs.copy(path.resolve(file), `${dirname}/products/${serial_no}/${filename}`, function (err) {
        console.log(path.resolve(file))
      });
    }
  })
});

finder.on('end', function () {
  console.log('作業終了：' + moment().format('h:mm:ss'))  
})