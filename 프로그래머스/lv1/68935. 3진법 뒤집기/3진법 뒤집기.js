function solution(n) {
    return [...n.toString(3)].reduceRight((prev, curr, index, array) =>  prev + (parseInt(curr, 10) * Math.pow(3, index)), 0)
}