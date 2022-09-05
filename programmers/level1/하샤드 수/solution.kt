class Solution {
    fun solution(x: Int) : Boolean {
        return x % x.toString().fold(0){ total: Int, value -> total + value.code - 48 } == 0
    }
}
