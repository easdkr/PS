/**
    모든 배열을 순회하면서 현재 요소의 값이 0이 아닌 경우 [가로 아래, 세로 아래, 오른쪽 대각선 아래] 의 값을 검사하고, 
    모든 요소의 값이 0이 아니고 같으면 오른쪽 대각선 아래 요소의 값 + 1, 
    모든 요소의 값이 0이 아니고 다르면 요소중 max 값을 오른쪽 대각선 아래 값으로 변경
    현재 발견한 최대 정사각형의 변 길이를 max 에 할당
*/
function solution(board){
    let maxSide = 0;
    const height = board.length, width = board[0].length;
    
    if (height < 2 || width < 2){
        if(!board.filter(row => row.filter(elem => elem).flat()).length) return 0;
        return 1;
    } 
    
    for (let cIndex = 1; cIndex < height; ++cIndex)
        for (let rIndex = 1; rIndex < width; ++rIndex){
            if(!board[cIndex][rIndex]) continue;
            board[cIndex][rIndex] = Math.min(board[cIndex-1][rIndex-1], board[cIndex-1][rIndex], board[cIndex][rIndex-1]) + 1;
            maxSide = Math.max(maxSide, board[cIndex][rIndex])
        }
    
    return maxSide ** 2;
    
}