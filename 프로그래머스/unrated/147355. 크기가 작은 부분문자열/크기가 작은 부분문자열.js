function solution(t, p) {
    return new Array(t.length - p.length + 1)
        .fill(0)
        .map((_, idx) => +[...t].slice(idx, idx + p.length).join(''))
        .reduce(((acc, curr) => curr <= +p ? acc + 1 : acc), 0)
}