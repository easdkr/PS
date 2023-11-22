#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;
int T;
//N : 건물의 개수, K : 건설 순서 규칙
int N, K;
//time[i] : 각 건물당 건설에 걸리는 시간
vector<int> time;
//그래프 인접리스트
vector<vector<int>> adj;
//preNode[i] : i번 노드의 선행노드
vector<int> preNode;
vector<int> cache;
int W;
int solve();
//시간을 구해야하는 건물 
void makeGraph();
int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cin >> T;
    for (int t = 0; t < T; ++t) {
        cin >> N >> K;
        time = vector<int>(N);
        cache = vector<int>(N);
        for (int i = 0; i < N; ++i)
            cin >> time[i];
        makeGraph();
        cin >> W;
        W--;
        cout << solve() << "\n";
    }

    return 0;
}
int solve() {
    int answer = 0;
    queue<int> q;
    //선행노드들이 없는 애들 queue에 넣음
    for (int i = 0; i < N; ++i)
        if (preNode[i] == 0)
            q.push(i);
    while (q.front() != W) {
        int here = q.front();
        q.pop();
        //후행노드들 시간 갱신 
        for (int i = 0; i < adj[here].size(); ++i) {
            int there = adj[here][i];
            cache[there] = max(cache[there], cache[here] + time[here]);
            preNode[there]--;
            if (preNode[there] == 0)
                q.push(there);
        }
    }
    answer = time[W] + cache[W];
    return answer;
}
void makeGraph() {
    int u, v;
    adj = vector<vector<int>>(N);
    preNode = vector<int>(N, 0);
    for (int i = 0; i < K; ++i) {
        cin >> u >> v;
        adj[u-1].push_back(v-1);
        preNode[v-1]++;
    }
}