function solution(lottos, win_nums) {
    const zeroCount = lottos.reduce((acc, curr) => curr === 0 ? acc + 1 : acc , 0);
    
    const hitCount = lottos.reduce((acc, curr) => !!win_nums.find((n) => n === curr) ? acc + 1 : acc , 0);
    
    return [Math.min(6, 6 - zeroCount - hitCount + 1), Math.min(6, 6 - hitCount + 1)]
}