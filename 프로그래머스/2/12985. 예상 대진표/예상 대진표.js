/**
 * 매 라운드에서 2로 나눴을 때, '올림'한 정수 값이 같으면 해당 라운드에서 매칭
 */
function solution(n, a, b) {
  let round = 0;
  let [currentA, currentB] = [a, b];
    
  while (currentA !== currentB) {
    currentA = Math.ceil(currentA / 2);
    currentB = Math.ceil(currentB / 2);
    round++;
  }

  return round;
}