#include <string>
#include <vector>
#include <iostream>
using namespace std;
vector<int> a = {1, 2, 4};

string solution(int n) {
    string answer = "";
    if(n <= 3) return to_string(a[n-1]);

    while(true){
        n -= 1;
        int r = n % 3; 
        answer = to_string(a[r]) + answer;
        n = n / 3;
        
        if(n == 0) break;
    }
    
    return answer;
}