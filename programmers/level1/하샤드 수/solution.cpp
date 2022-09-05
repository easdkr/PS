bool solution(int x) {
    bool answer = true;
    int sum = 0;
    int origin = x;
    while(x){
        int quotient = x / 10;
        int remainder = x % 10;
        sum += remainder;
        x = quotient;
    }
    return (origin % sum) == 0;
}
