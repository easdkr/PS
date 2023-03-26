function solution(s) {
    const numbers = s.split(' ').sort((a, b) => a - b);
    
    return [numbers[0], numbers.at(-1)].join(' ')
}