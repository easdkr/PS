/**
 *
 * @param {number[]} numbers
 * @returns
 */
function solution(numbers) {
  const result = [];
  return Array.from(
    new Set(
      numbers.flatMap((iv, i) =>
        numbers
          .map((jv, j) => i !== j && { iv, i, jv, j })
          .filter((item) => item)
          .map((item) => item.iv + item.jv)
      )
    )
  ).sort((a, b) => a - b);
}
