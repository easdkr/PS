/**
 * n : 참여자 수
 * words : 끝말잇기 단어 배열\
 * 참여자 번호 = (index % n + 1); 
 * 탈락 시 차례 = Math.ceil(index / n)
 */
function solution(n, words) {
  // Record<string, boolean>
  const appeard = {};
  
  for (let i = 0, len = words.length; i < len; ++i) {
     const word = words[i];
     if (appeard[word]) 
         return [(i % n + 1), Math.ceil((i + 1)/ n)];
      
     appeard[word] = true;
     
     if (i > 0  && words[i - 1].charAt(words[i - 1].length - 1) !== word.charAt(0))
         return [(i % n + 1), Math.ceil((i + 1) / n)];  
     
  }
    
  return [0, 0];
}