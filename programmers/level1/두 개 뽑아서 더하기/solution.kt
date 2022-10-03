fun solution(numbers: IntArray): IntArray {
    val list = numbers.toList()
    return list.withIndex().flatMap { i -> list.withIndex().map { j -> i to j} }
        .filter { it.first.index != it.second.index }
        .map {it.first.value + it.second.value}
        .toSortedSet()
        .toIntArray()
}