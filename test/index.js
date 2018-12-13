var test = require('ava')
var { join } = require('path')
var { unlinkSync } = require('fs')

var readConfigSync = require('../read-config-sync')

var peachConfigJs = require('../')

test('peach-config', function (t) {
  t.truthy(peachConfigJs, 'module is require-able')
  t.is(typeof peachConfigJs, 'object', 'module exports an object')
  t.is(typeof peachConfigJs.ssb, 'function', 'module.ssb is a function')
})

test('peach-config.ssb', function (t) {
  var keysPath = join(__dirname, 'config', 'ssb', 'keys.json')
  var ssbPath = join(__dirname, 'state', 'ssb')

  try {
    unlinkSync(keysPath)
  } catch (err) {}

  process.env.PEACH_CONFIG = join(__dirname, 'config')
  process.env.PEACH_STATE = join(__dirname, 'state')

  var config = peachConfigJs.ssb()
  t.truthy(config)
  t.is(config.path, ssbPath)

  var keys = readConfigSync(keysPath)
  t.deepEqual(config.keys, keys)
})
