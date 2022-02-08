# Two Sum

[Go to the battlefield](https://leetcode.com/problems/two-sum/)

### Instructions

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

```go
func TwoSum(nums []int, target int) []int {

}
```

### Test Cases

```go
func TestTwoSum(t *testing.T) {
	if ok := TwoSum([]int{2,7,11,15}, 9); ok[0] != 0 || ok[1] != 1 {
		t.Error("Expected [0,1], got ", ok)
	}

	if ok := TwoSum([]int{3,2,4}, 6); ok[0] != 1 || ok[1] != 2 {
		t.Error("Expected [1,2], got ", ok)
	}

	if ok := TwoSum([]int{3,3}, 6); ok[0] != 0 || ok[1] != 1 {
		t.Error("Expected [0,1], got ", ok)
	}
}
```

### Solution

```go
func TwoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		v := target - nums[i]

		if _, ok := m[v]; ok {
			return []int{m[v], i}
		}

		m[nums[i]] = i
	}

	return nil
}
```

### Discourse

See [js/0001-two-sum#discourse](/js/0001-two-sum#discourse) to get details.
