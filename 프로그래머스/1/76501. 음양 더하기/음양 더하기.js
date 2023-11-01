function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, idx) => acc + curr * (signs[idx] ? 1 : -1), 0)
}