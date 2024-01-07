
function solution(arr) {
    return arr.sort((a, b) => a - b).reduce((lcm, curr) => calculateLcm(lcm, curr))
}

function calculateLcm(a, b) {
    return (a * b) / calculateGcd(a, b);
}

function calculateGcd(a, b) {
    if (b === 0) return a;
    return calculateGcd(b, a % b);
}
