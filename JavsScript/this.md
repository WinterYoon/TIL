
# 자바스크립트에서의 this의 의미


## 1. window 객체

- console.log (this) 출력시 window 객체가 출력되는 것을 볼 수 있다. 
- 일반함수를 만들고 내부의 this 호출시에도 window 객체가 출력된다.  하지만, 'use strict' 즉 strict mode 사용시 undefined이다. 


## 2. object 내 사용

object 내 함수(= 메서드) 에서 this를 사용하면 그 함수를 가지고 있는 object를 출력한다. 


## 2-1. object 내 함수가 arrow function이라면? 

- arrow function은 상위 값의 this를 물려받기 때문에 object를 출력한다. 
- arrow function 특징 : 내부의 this값을 변화시키지 않고 외부의 this값을 재사용 한다. 

## 3. 이벤트리스너 안에서는 e.currentTarget 메서드와 동일하다

- e.currentTarget은 지금 이벤트가 동작하고 있는 요소를 의미한다.