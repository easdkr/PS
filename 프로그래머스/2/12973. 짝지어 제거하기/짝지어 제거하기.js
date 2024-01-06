function solution(s){
    const stack = [];
    
    [...s].forEach((c) => {
       if (stack[stack.length - 1] === c) stack.pop();
       else stack.push(c);
    });
    
    return Number(stack.length === 0);
}