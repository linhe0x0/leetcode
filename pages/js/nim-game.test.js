const test = require('ava')
const canWinNim = require('./nim-game')

test('should return false when input with 4', (t) => {
  t.false(canWinNim(4))
})

test('should return true when input with 1', (t) => {
  t.true(canWinNim(1))
})

test('should return true when input with 2', (t) => {
  t.true(canWinNim(2))
})
