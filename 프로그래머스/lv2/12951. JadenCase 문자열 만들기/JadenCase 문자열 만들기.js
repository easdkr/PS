function solution(s) {
    const delim = ' ';
    
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ")
}