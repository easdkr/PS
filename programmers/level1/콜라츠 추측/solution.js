/**
 * @param {number} num
 * @return {number}
 */
function solution(num) {
  return calculateCollatzGuessCount(num, 0);
}

/**
 * @param {number} num
 * @param {number} count
 * @returns {number} Collatz guess calculate count
 */
const calculateCollatzGuessCount = (num, count) =>
  count > 500
    ? -1
    : num === 1
    ? count
    : calculateCollatzGuessCount(task(num), count + 1);

/**
 * @param {number} num
 * @return {number} Collatz guess task
 */
const task = (num) => (num % 2 ? num * 3 + 1 : num / 2);
