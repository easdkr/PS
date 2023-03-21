const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
function solution(maps) {
    let answer = 1;
    const visited = maps;
    const queue = [];
    const n = maps.length, m = maps[0].length;
    queue.push([0, 0]);
    visited[0][0] = 0;
    while (queue.length > 0) {
        for (let j = 0, len = queue.length; j < len; ++j) {
            const [x, y] = queue.shift();
            for (let i = 0; i < 4; ++i) {
                const nx = x + dx[i], ny = y + dy[i];
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    if (nx === n - 1 && ny === m - 1)
                        return ++answer;
                    queue.push([nx, ny]);
                    visited[nx][ny] = 0;
                }
            }
        }
        ++answer;
    }
    return -1;
}