

# spread operator (...)


1. Array에 붙히면 대괄호를 제거해준다. 
2. 문자에 붙히면 문자를 하나하나씩 펼쳐준다.
3. iterable object도 분리해준다..?!  

## Array 합치기 -> Deep Copy 

    let array1 = [1,2,3];
    let array2 = array1 // 이거는 복사가 아니라 그냥 array1의 값을 공유하겠다는 의미
    let array2 = [...array1] // 이게 "복사" 하여 독립적인 자료를 만드는 Deep Copy 이다. 

## Object 합치기 => Deep Copy

    let obj1 = { a : 'apple' , b : 'banana' };
    let obj2 = { ...obj1, c : 'carrot' }


## 함수 파라미터 넣을 때 사용

    function test(a,b,c){
        console.log( a + b + c )
    }

    let numbers = [1,2,3] // Array 안에 있는 값들을 함수에 넣고 싶을 때 사용한다.
    test(...numbers)


### apply() 

    test.apply(undefined, numbers) // test 함수를 실행할 때, 첫 파라미터(undefined) 자리에 numbers 를 넣어서 실행

    let obj3 = {
        sayHello : function(){
            console.log(this.name + "Hello?")
        }
    }

    let obj4 = {
        name : "김겨울"
    }

    // obj3의 sayHello 함수를 obj4 에 적용하기
    obj3.sayHello.apply(obj4, [1,2])
    
