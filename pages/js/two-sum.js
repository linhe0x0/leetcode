/**
 * Solution 1
const twoSum = function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
*/

/**
 * Solution 2
const twoSum = function twoSum(nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i += 1) {
    obj[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i += 1) {
    const expect = target - nums[i]

    if (obj[expect] !== undefined && obj[expect] !== i) {
      return [i, obj[expect]]
    }
  }
}
*/

const twoSum = function twoSum(nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i += 1) {
    const expect = target - nums[i]

    if (obj[expect] !== undefined) {
      return [obj[expect], i]
    }

    obj[nums[i]] = i
  }
}

module.exports = twoSum
