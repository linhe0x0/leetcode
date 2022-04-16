const test = require('ava')

const twoSum = require('./two-sum')

test('example 1', (t) => {
  t.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
})

test('example 2', (t) => {
  t.deepEqual(twoSum([3, 2, 4], 6), [1, 2])
})

test('example 3', (t) => {
  t.deepEqual(twoSum([3, 3], 6), [0, 1])
})
