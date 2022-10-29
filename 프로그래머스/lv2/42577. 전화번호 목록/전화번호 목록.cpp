#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool solution(vector<string> phone_book) {
	bool answer = true;
	sort(phone_book.begin(), phone_book.end());
	for (int i = 0; i < phone_book.size(); ++i) {
		string base = phone_book[i];
		for (int j = i + 1; j < phone_book.size(); ++j) {
			string target = phone_book[j];
            int index = target.find(base, 0); 
			if (index != string::npos && index == 0)
				return false;
            else
                break;
		}
	}
	return answer;
}