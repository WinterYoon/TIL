- var
    1. 선언하기 전에 값을 할당 하여도 출력이 가능하다. 
    2. block scope가 없어 {} 안에 값을 선언하여도 {} 밖에서 호출이 가능하다. 
    - var는 함수 레벨 스코프라서 함수 외부에서 선언되었을 때는 전역 스코프를 갖는다.
    1. 호이스팅(** 꼭 얘기하기)
        - 변수를 선언하고 초기화 했을때 선언부분이 최상단으로 끌어올려지는 현상
        - 예를들어, 코드 상단에서 console.log(a)를 찍고 하단에서 var a=1; 이라고 하였을때 a는 undefined라고 나온다. 이런 현상을 호이스팅 이라고 한다. 함수의 경우 함수 표현식은 호이스팅이 적용되지 않으나 일반 함수 선언문은 함수 호이스팅이 적용된다.
- let
    1. 값을 할당한 이후에도 값이 변경될 수 있다. = mutable type
    2. block scope가 있어 {} 안에 선언한 값은 , {} 밖에서는 접근할 수 없다.
- const
    1. 값을 한번 할당하면 값이 절대로 변하지 않는다. = immutable type 
    2. 사용하는 이유
        - 다양한 thread들이 동시에 변수의 값을 변경시킬수 있기 때문에 위험성을 낮추기 위해 사용한다.
        - 개발자가 코드를 변경할때도 실수를 줄이기 위해서 사용한다.