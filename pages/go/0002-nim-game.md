# Nim Game

[Go to the battlefield](https://leetcode.com/problems/nim-game/)

### Instructions

You are playing the following Nim Game with your friend:

- Initially, there is a heap of stones on the table.
- You and your friend will alternate taking turns, and you go first.
- On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
- The one who removes the last stone is the winner.

Given `n`, the number of stones in the heap, return `true` if you can win the game assuming both you and your friend play optimally, otherwise return `false`.

```go
func CanWinNim(n int) bool {
}
```

### Test Cases

```go
func TestCanWinNim(t *testing.T) {
	if ok := CanWinNim(4); ok != false {
		t.Errorf("should return false with 4, but got %t", ok)
	}

	if ok := CanWinNim(1); ok != true {
		t.Errorf("should return true with 1, but got %t", ok)
	}

	if ok := CanWinNim(2); ok != true {
		t.Errorf("should return true with 2, but got %t", ok)
	}
}
```

### Solution

```go
func CanWinNim(n int) bool {
	return n%4 != 0
}
```

### Discourse

See [js/0002-nim-game#discourse](/js/0002-nim-game#discourse) to get details.
