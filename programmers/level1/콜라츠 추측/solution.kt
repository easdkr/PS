fun solution(num: Int): Int {
    return calculateCollatzGuessCount(num.toLong(), 0)
}

fun task(num: Long) : Long = if (num % 2 == 0L) num / 2 else (num * 3) + 1

fun calculateCollatzGuessCount(num: Long, count: Int) : Int =
    when{
        count > 500 -> -1
        num == 1L -> count
        else -> calculateCollatzGuessCount(task(num), count+1)
    }