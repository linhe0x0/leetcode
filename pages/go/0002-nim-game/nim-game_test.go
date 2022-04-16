package main

import "testing"

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
