const solution = (arr) => arr.map(n => n.toString()).map(s => s.split('7').length - 1).reduce((prev, curr) => prev + curr, 0)