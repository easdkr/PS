/**
 * 지갑의 크기 (= 직사각형의 넓이)
 * 직사각형의 넓이는 양 변의 길이의 합이 같을 때 양 변의 길이의 차에 반비례한다.
 * 한 변은 명함을 수용할 수 있는 크기 중 최대, 나머지 한 변은 명함을 수용할 수 있는 크기 중 최저로 
 * 설정하면 모든 명함을 수용할 수 있는 최적의 지갑 크기를 구할 수 있다.
 */
function solution(sizes) {
    return sizes.reduce((acc, curr) =>  [
            Math.max(acc[0], Math.min(curr[0], curr[1])),
            Math.max(acc[1], Math.max(curr[0], curr[1]))    
        ], [0,0]).reduce((prev, curr) => prev * curr);
}