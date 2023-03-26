/**
1) 전체 토핑 별 개수가 담긴 Map 객체 생성
2) 철수의 토핑 종류를 담을 Set 객체 생성
3) 모든 토핑에 대해 순회하며, Map에 담긴 토핑을 하나씩 빼서 철수 set에 할당
4) 철수와 동생의 토핑 개수가 같으면 result 값 하나씩 증가
*/
function solution(topping) {
    let result = 0;
    
    const toppings = new Map();
    topping.forEach(t => {
        toppings.has(t) ? toppings.set(t, toppings.get(t)+1) : toppings.set(t, 1);
    })
    
    const chulsoo = new Set();
    topping.forEach(t => {
        // 하나 빼기
        toppings.get(t) - 1 === 0 ? toppings.delete(t) : toppings.set(t, toppings.get(t) - 1);
        // 철수에게 토핑 할당
        chulsoo.add(t);
        if(chulsoo.size === toppings.size) result++;
    })
    
    return result;
}