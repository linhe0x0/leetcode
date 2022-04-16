package main

import "testing"

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
