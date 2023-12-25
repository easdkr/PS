function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    let result = 0;
    function search(fatigue, visited, count) {
        dungeons.forEach((d, i) => {
            const [minimumFatigue, consumeFatigue] = d;
            if (minimumFatigue <= fatigue && !visited[i]) {
                visited[i] = true;
                search(fatigue - consumeFatigue, visited, count + 1);
                visited[i] = false;
            }
        });
        
        result = Math.max(result, count);
    }
    
    search(k, visited, 0);
    
    return result;
}