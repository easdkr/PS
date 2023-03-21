function solution(s) {
    const delim = ' ';
    
    return s.split(delim).map(e => e === '' ? e : [...e.toLowerCase()]).map(e => e === '' ? e : [...e[0].toUpperCase(), ...e.slice(1, e.length)].join('')).join(delim);;
}