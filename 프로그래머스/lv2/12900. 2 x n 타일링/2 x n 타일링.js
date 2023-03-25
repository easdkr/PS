// n === 1 => 1
// n === 2 => 2
// n === 3 => f(n-1) + f(n)
// n === 4 => 
function solution(n) {
    const cache = new Array(n+1).fill(0);
    const modNumber = 1000000007
    cache[1] = 1;
    cache[2] = 2;
    for(let i = 3; i <= n; ++i){
        cache[i] = cache[i-1] % modNumber + cache[i-2] % modNumber;
    }
    return cache[n] % modNumber
}