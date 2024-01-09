function solution(n) {
    var answer = [];
    
    const hanoi = (n, from, via, to) => {
        if (n === 1) {
            answer.push([from, to]);
            return;
        }
        
        hanoi(n - 1, from, to, via);
        answer.push([from, to])
        hanoi(n - 1, via, from, to)
    }
    
    hanoi(n, 1, 2, 3);
    return answer;
}