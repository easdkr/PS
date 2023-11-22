#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;
const char BACKSPACE = '-';
const char LEFTMOVE = '<';
const char RIGHTMOVE = '>';
//테스트 케이스 수
int T;
//키 로그
string keylog;

string getPassword();
int main(void) {
	std::ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> T;
	for (int i = 0; i < T; ++i) {
		cin >> keylog;
		cout << getPassword() << "\n";
	}
	return 0;
}

string getPassword() {
	string answer;
	stack<int> passwordStack, tempStack;
	for (int i = 0; i < keylog.size(); ++i) {
		char key = keylog[i];
		if (key == BACKSPACE) {
			if (!passwordStack.empty())
				passwordStack.pop();
		}
		else if (key == LEFTMOVE) {
			if (!passwordStack.empty()) {
				char c = passwordStack.top();
				passwordStack.pop();
				tempStack.push(c);
			}
		}
		else if (key == RIGHTMOVE) {
			if (!tempStack.empty()) {
				char c = tempStack.top();
				tempStack.pop();
				passwordStack.push(c);
			}
		}
		else
			passwordStack.push(key);
	}
	while (!tempStack.empty()) {
		passwordStack.push(tempStack.top());
		tempStack.pop();
	}
	/*while (!passwordStack.empty()) {
		answer.push_back(passwordStack.top());
		passwordStack.pop();
	}
	reverse(answer.begin(), answer.end());*/
	answer.resize(passwordStack.size());
	for (int i = answer.size() - 1; i >= 0; --i) {
		answer[i] = passwordStack.top();
		passwordStack.pop();
	}
	return answer;
}

