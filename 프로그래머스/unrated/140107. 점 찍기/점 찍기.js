/**
1) x^2 + y^2 = d^2, y^2 = d^2 - x^2 
2) y = Math.floor(Math.sqrt(d^2 - x^2))
3) x에 대해 가능한 점의 개수는 Math.floor(y/k) + 1(1은 0 포함)
*/
function solution(k, d) {
    let result = 0;
    for(let x = 0; x <= d; x+=k){
        const y = Math.floor(Math.sqrt(d**2 - x**2));
        result += Math.floor(y/k) + 1
    }
    return result;
}