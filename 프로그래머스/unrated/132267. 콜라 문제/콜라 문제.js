function solution(a, b, n) {
    return (calculateBottleCount = (remainBottleCount) => {
        if( remainBottleCount / a < 1 ) return 0; 
        
        const receivedColaCount = Math.floor(remainBottleCount / a) * b;
        const currentRemainBottleCount = remainBottleCount % a;
        
        return receivedColaCount + calculateBottleCount(receivedColaCount + currentRemainBottleCount);
    })(n);
}