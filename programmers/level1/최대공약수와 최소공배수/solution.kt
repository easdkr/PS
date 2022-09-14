class Solution {
    fun solution(a: Int, b: Int): IntArray {
        val gcd = getGCD(a,b)
        return intArrayOf(gcd, a * (b / gcd))
    }

    fun getGCD(a: Int, b: Int) : Int = if (b > 0) getGCD(b, a % b) else a
}