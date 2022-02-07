import Callout from 'nextra-theme-docs/callout'

# Two Sum

[Go to the battlefield](https://leetcode.com/problems/two-sum/)

### Instructions

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {}
```

### Test Cases

```js
t.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
t.deepEqual(twoSum([3, 2, 4], 6), [1, 2])
t.deepEqual(twoSum([3, 3], 6), [0, 1])
```

### Solution

```js
const twoSum = function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
```

### Discourse

这道题主要的要求是在给定的一系列数字中，找到两数之和为目标数值的位置。最简单的思路就是从头到尾逐个进行尝试，计算对比是否和目标值相等，这种方式也常被称之为“暴力破解”。

在这种思路下，主要的问题就变成了如何遍历出两两数字的所有组合。在上面的解题中，通过两层的嵌套循环，将当前位置的数值与后面的每一个进行组合计算达到遍历组合的目的。然后再计算出其和并和目标值相等，如果符合要求，因为题目中已经假设只会有一个答案，因此通过 `return` 提前终止循环避免后续不必要的计算。

<Callout type="warning" emoji="⚠️">
上面的解题思路简单粗暴，但是因为用到了两层循环嵌套，所以在数据量大的时候，会因为循环计算次数过多导致存在很大的计算压力。所以优化的目标在于如何减少循环次数。
</Callout>

### Improvement

```js
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
```

通过利用 JSON 的特性先获取到并存储所有的数值以及他们的位置，这样我们想获取其中某个值的时候，无论数据量有多大，其复杂度都是一样的。然后我们再去取个遍历，因此这次是单值遍历，所以判断思路需要调整为 `obj` 中是否存在目标数值减当前数值的值，如果存在，即符合要求，直接返回目标结果。

<Callout type="warning" emoji="⚠️">
在上面的解题中虽然已经减少了循环次数，但是还是做了 2 次遍历，并且因为提前存储了所有的数值到 `obj` 中，因此在判定是否存在的时候还要排除当前元素自身。
</Callout>

### Further improvement

```js
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
```

通过上面的优化调整，将 2 次循环优化为一次循环即完成任务。主要是利用了组合时每一个元素都只和其后面的元素进行组合匹配即可，因此可以利用先判定再存储的思路来进行改进，同时也不需要考虑需要排除其自身的情况。

<Callout emoji="🚀">
这是一个以空间换时间的思路，通过一个新的变量来存储需要的数据，来减少程序的运行次数，从而达到优化执行性能的目的。
</Callout>
