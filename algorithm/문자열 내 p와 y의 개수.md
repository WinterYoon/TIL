
# [오늘의 알고리즘]

  

## 프로그래머스 level 1 - 문자열 내 p와 y의 개수

  

### 나의 풀이

  
    function solution(s){
    
        let word = s.toUpperCase().split('')
        let wordP = 0;
        let wordY = 0;
        let answer = true;
      
        for(let i=0; i<word.length; i++){
          if( word[i] === 'P'){
            wordP = wordP + 1
          }
        }
      
        for(let i=0; i<word.length; i++){
          if( word[i] === 'Y'){
            wordY = wordY + 1
          }
        }
      
      wordP === wordY ? answer = true : answer = false
      return answer;
    } 
