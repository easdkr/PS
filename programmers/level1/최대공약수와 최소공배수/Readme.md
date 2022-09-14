**문제**\
[최대공약수와 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12940)

**해답**\
[Javascript](solution.js) , [Kotlin](solution.kt), [C++](solution.cpp)

**다른 사람의 풀이 중 참고할만한 사항**\

```javascript
// 유클리드 호제법 계산을 for 문에 넣고 풀이한 방식
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
```
