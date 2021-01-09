const fs = require('fs')
const list = require('../dist/index_dat.json')
const langs = require('../dist/lang.json')
const all = require('../dist/all.json')

const langdirs = Object.fromEntries(langs.map(lang => [lang, new Set(fs.readdirSync(__dirname+"/../dist/lang/"+lang))]))
const indexByName = Object.fromEntries(all.map(dat => ([dat.filename, {
  filename: dat.filename,
  numHeaders: dat.header.length,
  numItems: dat.data.length,
  size: JSON.stringify(dat).length,
  langs: langs.filter(lang => langdirs[lang].has(dat.filename+".json")),
}])))
const index = list.map(name => indexByName[name] || {filename: name, missing: true})
// fs.writeFileSync(__dirname+'/../dist/index.json', JSON.stringify(index, null, 2))
fs.writeFileSync(__dirname+'/../dist/index.json', JSON.stringify(index))
