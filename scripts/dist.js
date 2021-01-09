const fs = require('fs')
const all = require('../dist/all.json')
const list = require('../dist/index_dat.json')

all.forEach(dat => {
  // fs.writeFileSync(__dirname+'/../dist/dat/'+dat.filename+'.json', JSON.stringify(dat, null, 2))
  fs.writeFileSync(__dirname+'/../dist/dat/'+dat.filename+'.json', JSON.stringify(dat))
})

const indexByName = Object.fromEntries(all.map(dat => ([dat.filename, {
  filename: dat.filename,
  numHeaders: dat.header.length,
  numItems: dat.data.length,
  size: JSON.stringify(dat).length,
}])))
const index = list.map(name => indexByName[name] || {filename: name, missing: true})
// fs.writeFileSync(__dirname+'/../dist/index.json', JSON.stringify(index, null, 2))
fs.writeFileSync(__dirname+'/../dist/index.json', JSON.stringify(index))
