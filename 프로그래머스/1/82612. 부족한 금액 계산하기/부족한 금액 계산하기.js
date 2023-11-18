function solution(price, money, count) {
    return Math.abs(Math.min(money - new Array(count).fill(0).map((_, i) => (i + 1) * price).reduce((acc, curr) => acc + curr, 0), 0));
}