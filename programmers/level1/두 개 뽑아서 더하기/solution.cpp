#include <string>
#include <vector>
#include <set>
using namespace std;

vector<int> solution(vector<int> numbers) {
    vector<int> answer;
    set<int> answerSet;
    int size = numbers.size();
    for (auto i = 0; i < size; ++i)
        for(auto j = i+1; j < size; ++j)
            answerSet.insert(numbers[i] + numbers[j]);
    answer.assign(answerSet.begin(), answerSet.end());
    return answer;
}
