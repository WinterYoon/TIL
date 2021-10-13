
# [오늘의 알고리즘]

  

## 프로그래머스 level 1 - 문자열 다루기 기본

  

### 나의 풀이

  

    function solution(s) {
    
    let answer = false;    
    if(s != parseInt(s))    
        return false    
    if(s.length === 4 || s.length == 6)    
        if(!isNaN(s))   
            answer = true   
        return answer    
    }

  

> parseInt()
> 
> 문자열을 정수로 바꿔주는 메서드, 계속 테스트케이스에서 실패하여 이유를 찾다가 'e' 때문이란것을 알게되어 parseInt로 e가 정수변환이 되면 원래의 형태와 달라지므로 그걸 조건으로 걸었다.
