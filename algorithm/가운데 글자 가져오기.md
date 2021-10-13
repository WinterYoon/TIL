# [오늘의 알고리즘]

## 프로그래머스 level 1 - 가운데 글자 가져오기


### 나의 풀이

  

    function solution(s) {
    
    let answer = '';
    
    if(s.length % 2 === 0){ 
      let index = s.length / 2;
      let string = s.slice(index - 1, index + 1)
      answer = string;
      return answer 
    } {
      let index = s.length / 2;
      let string2 = s.slice(index, index + 1);
      answer = string2;
      return answer
    }
  }
