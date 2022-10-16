#include <string>
#include <vector>
#include <algorithm>
using namespace std;
bool compare(pair<double, int>& a, pair<double, int>& b);
vector<int> solution(int N, vector<int> stages) {
	vector<int> answer;
	answer.resize(N);
	vector<int> reachedUser;
	// (실패율, 스테이지번호)
	vector<pair<double, int>> forSorting;
	int totalUser = stages.size();
	reachedUser.assign(N+1, 0);
	for (const auto& log : stages) {
		if (log <= N)
			reachedUser[log]++;
	}
	for (int i = 1; i <= N; ++i) {
		const auto& record = reachedUser[i];
		if (totalUser != 0) {
			forSorting.push_back(make_pair(double(record) / double(totalUser), i));
			totalUser -= record;
		}
		else
			forSorting.push_back(make_pair(0, i));
		
	}
	sort(forSorting.begin(), forSorting.end(), compare);
	
	for (int i = 0; i < N; ++i)
		answer[i] = forSorting[i].second;
	
	return answer;
}
bool compare(pair<double, int>& a, pair<double, int>& b) {
	if (a.first == b.first)
		return a.second < b.second;
	else
		return a.first > b.first;
}