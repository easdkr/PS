function solution(s) {
    const cache = {};
    
    return [...s].map((c, index) => {
        if (c in cache) {
            const previousIndex = cache[c];
            cache[c] = index;
            return index - previousIndex;
        }
        cache[c] = index;
        return -1;
    })
}