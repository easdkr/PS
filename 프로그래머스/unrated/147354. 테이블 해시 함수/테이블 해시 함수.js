
function solution(data, col, row_begin, row_end) {
    return data.sort((a, b) => a[col-1] - b[col-1] || b[0] - a[0])
    .filter((_, index) => index >= row_begin -1 && index <= row_end -1)
    .map((row, index) => row.reduce((prev, curr) => prev += curr % (index + row_begin), 0))
    .reduce((prev, curr) => prev ^ curr, 0);
}