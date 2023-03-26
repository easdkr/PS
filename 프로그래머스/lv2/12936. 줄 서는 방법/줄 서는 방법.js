/**
1. arr = [1, ...n] 배열 생성
2. nth = k - 1
3. factorial(n - 1) 마다 첫번째 자리가 바뀌므로, nth / factorial(n - 1) (정수 값)을 구한다. 
4. arr[nth / factorial(n - 1)]을 첫 앞자리로 setting
5. nth -= nth / factorial(n - 1) * factorial(n - 1)
6. arr가 전부 빌 때 까지 반복
*/
function solution(n, k) {
    const result = [];
    const arr = new Array(n).fill(0).map((_, index) => index + 1);
    let nth = k - 1;
    
    while(arr.length) {
        if(nth === 0) {
            result.push(...arr)
            break;
        }
        
        const fact = factorial(arr.length - 1);
        const index = Math.floor(nth / fact);
        
        result.push(arr[index]);
        
        arr.splice(index, 1);
        nth %= fact;
    }
    
    return result; 
    
    function factorial(num) {
        return num === 1 ? num : num * factorial(num - 1);
    }
}