/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const getGCD = (num1, num2) => {
  // 유클리드 호제법 사용
  return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
};

function solution(n, m) {
  const gcd = getGCD(n, m);
  return [gcd, n * (m / gcd)];
}
