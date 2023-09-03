
function solution(wallpaper){
    let [minRow, minCol, maxRow, maxCol] = [
        Number.MAX_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER,
    ]  

    for (let r = 0, rl = wallpaper.length; r < rl; ++r)
        for (let c = 0, cl = wallpaper[r].length; c < cl; ++c) 
            if (wallpaper[r][c] === '#'){
                minRow = Math.min(minRow, r);
                minCol = Math.min(minCol, c);
                maxRow = Math.max(maxRow, r);
                maxCol = Math.max(maxCol, c);
            }

    return [minRow, minCol, maxRow + 1, maxCol + 1]
}