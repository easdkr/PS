/**
 * @param {number[]} number
 */
function solution(number) {
  /**
   * @param {number[]} picked
   * @param {number} start
   * @returns {number}
   */
  const combination = (picked, start) => {
    if (picked.length === 3)
      return picked.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;

    let result = 0;

    for (let i = start, length = number.length; i < length; i++)
      result += combination([...picked, number[i]], i + 1);

    return result;
  };

  return combination([], 0);
}