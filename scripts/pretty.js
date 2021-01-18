const in_ = require("fs").readFileSync(0).toString()
const json = JSON.parse(in_)
const out = JSON.stringify(json, null, 2)
process.stdout.write(out)
