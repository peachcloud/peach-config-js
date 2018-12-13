var { join } = require('path')
var setConfigDefaults = require('ssb-config/defaults')
var Keys = require('ssb-keys')

var readConfigSync = require('./read-config-sync')

module.exports = {
  ssb: PeachConfigSsb
}

function PeachConfigSsb () {
  var PEACH_CONFIG = process.env.PEACH_CONFIG || '/etc/peach'
  var PEACH_STATE = process.env.PEACH_STATE || '/var/lib/peach'

  var rawConfig = {}
  try {
    rawConfig = readConfigSync(join(PEACH_CONFIG, 'ssb/config.json'))
  } catch (err) {
    if (err.code === 'ENOENT') rawConfig = {}
    else throw err
  }
  var config = setConfigDefaults('ssb', rawConfig)
  config.path = join(PEACH_STATE, 'ssb')
  config.keys = Keys.loadOrCreateSync(join(PEACH_CONFIG, 'ssb/keys.json'))
  return config
}
