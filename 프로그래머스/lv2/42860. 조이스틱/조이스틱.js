
function solution(name) {
  const ASCII_A = 'A'.charCodeAt(0);
  const ASCII_Z = 'Z'.charCodeAt(0);
  const len = name.length;
  let moveY = 0, moveX = len - 1;
  
  [...name].forEach((c, i) => {
    // 현재 인덱스의 문자를 만들 때 최소 상하 움직임
    moveY += Math.min(c.charCodeAt(0) - ASCII_A, ASCII_Z + 1 - c.charCodeAt(0));
    let aCount = i + 1;

    // 문자열 내 연속 되는 A 의 개수 카운팅
    while (aCount < name.length && name[aCount] === 'A') 
      aCount++;
    
    moveX = Math.min(
      moveX, // 정방향으로 진행 
      i * 2 + len - aCount, // 정방향으로 왔다가 뒤로 돌아가기 
      i + 2 * (len - aCount) // 역방향부터 진행
    )
  })

  return moveX + moveY
}