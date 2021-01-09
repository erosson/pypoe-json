const fs = require('fs')
const list = require('../dist/list.json')

const input = process.argv[process.argv.length-2]
const output = process.argv[process.argv.length-1]
const out = __dirname+'/../'+output
const in_ = __dirname+'/../'+input
const all = JSON.parse(fs.readFileSync(in_))

fs.mkdirSync(out, {recursive: true})
all.forEach(dat => {
  // fs.writeFileSync(out+'/'+dat.filename+'.json', JSON.stringify(dat, null, 2))
  fs.writeFileSync(out+'/'+dat.filename+'.json', JSON.stringify(dat))
})
