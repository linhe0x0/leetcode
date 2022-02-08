# Nim Game

[Go to the battlefield](https://leetcode.com/problems/nim-game/)

### Instructions

You are playing the following Nim Game with your friend:

- Initially, there is a heap of stones on the table.
- You and your friend will alternate taking turns, and you go first.
- On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
- The one who removes the last stone is the winner.

Given `n`, the number of stones in the heap, return `true` if you can win the game assuming both you and your friend play optimally, otherwise return `false`.

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {}
```

### Test Cases

```js
t.false(canWinNim(4))
t.true(canWinNim(1))
t.true(canWinNim(2))
```

### Solution

```js
const canWinNim = function canWinNim(n) {
  return n % 4 !== 0
}
```

### Discourse

这道题的核心点在于每次只能移动 **1~3** 个石头，由此可以推算出如果总数量为 4 的倍数，则后执行者一定在最终操作时移动所有的石头从而赢得比赛。因此只需要判断总数是否为 4 个倍数即可。
