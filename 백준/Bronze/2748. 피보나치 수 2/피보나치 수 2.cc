#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <vector>
using namespace std;
vector<long long> memo;

long long fibonacci(int n) {
	
	if (n < 2) return n;
	
	if (memo.at(n) != 0)
		return memo.at(n);
	else {
		memo.at(n) = fibonacci(n - 1) + fibonacci(n - 2);
		return memo.at(n);
	}
}

void initMemo() {
	memo.assign(91, 0);
	memo[1] = memo[2] = 1;
}
int main(void) {
	int n;
	initMemo();
	cin >> n;
	cout << fibonacci(n) << "\n";
	return 0;
}