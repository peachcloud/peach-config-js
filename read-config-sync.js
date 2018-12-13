// helper function to read config files in the special format that ssb uses.
// (which is neither json nor json5 but a made-up json format with # comments...)

var { readFileSync } = require('fs')

module.exports = readConfig

function readConfig (path) {
  try {
    var raw = readFileSync(path, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') return {}
    else throw err
  }

  var json = raw
    .replace(/\s*#[^\n]*/g, '')
    .split('\n').filter(Boolean).join('')

  return JSON.parse(json)
}
