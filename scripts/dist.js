const fs = require('fs')

require('../dist/all.json').forEach(dat => {
  fs.writeFileSync(__dirname+'/../dist/dat/'+dat.filename+'.json', JSON.stringify(dat, null, 2))
  // fs.writeFileSync(__dirname+'/../dist/dat/'+dat.filename+'.min.json', JSON.stringify(dat))
})
