function solution(a, b) {
    return zip(a, b, (i, j) => i * j).reduce((acc, curr) => acc + curr, 0);
}

function zip(leftArr, rightArr, fn) {
  const results = [];
  
  for (let i = 0; i < Math.min(leftArr.length, rightArr.length); ++i)
    results.push(fn(leftArr[i], rightArr[i]));
    
  return results;
};
