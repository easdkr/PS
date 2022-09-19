#include <string>
#include <vector>
#include <iostream>
using namespace std;

int solution(int num) {
    int answer = 0;
    long long num_l =num;
    if(num == 1) return answer;
    while(true){
        if(num_l % 2 == 0) num_l = num_l/2;
        else num_l = num_l*3 +1;
        answer++;
        if(num_l == 1) break;
        if(answer > 500){
            answer = -1;
            break;
        }
    }
    return answer;
}