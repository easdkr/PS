#include <string>
#include <vector>

using namespace std;


int gcd(int n, int m);
vector<int> solution(int n, int m) {
    vector<int> answer;
    answer.push_back(gcd(n,m));
    answer.push_back(n * (m/gcd(n,m)) );
    return answer;
}

int gcd(int n, int m){
    int r = 99999999;
    do{
        r = n%m;
        n = m;
        m = r;
    }while(r != 0);
    return n;
}