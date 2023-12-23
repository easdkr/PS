function solution(name, yearning, photo) {
    const yearningMap = name.reduce((acc, curr, index) => {
        acc[curr] = yearning[index];
        
        return acc;
    }, {});
    
    return photo.map((p) => 
        p.reduce((acc, curr) => yearningMap[curr] ? acc + yearningMap[curr] : acc, 0))
}