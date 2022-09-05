function solution(x) {
  return x % x.toString().split("").reduce((prev, curr) => +prev + +curr, 0) === 0
}
