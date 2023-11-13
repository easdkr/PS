function solution(left, right) {    
    return new Array(right - left + 1)
                .fill(0)
                .map((_, i) => i + left)
                .map((num) => ({
                                num,
                                divisor : new Array(Math.ceil(Math.sqrt(num)))
                                                .fill(0)
                                                .map((_, i) => i + 1) 
                                                .reduce((acc, curr) =>
                                                    num % curr === 0 ?
                                                    num / curr === curr ?
                                                    acc + 1 : acc + 2 :  acc, 0)
                }))
                .reduce((acc , curr) => curr.divisor % 2 === 0 ? acc + curr.num : acc - curr.num,0)
    
}