// 자바스크립트는 동기식 처리, Synchronous
    // 한번에 코드 한 줄 씩 차례로 실행
    console.log(1);
    console.log(2);
    console.log(3);

    // 비동기식 처리,
    console.log(1);
    setTimeout(()=> { console.log(2)}, 1000);
    element.addEventListner('click', function(){})
    $.ajax() // 이렇게 오래걸리는 코드들을 WebAPI에 담아둔다. 


    // 자바스크립트를 순차적으로 실행하려면? => 콜백함수를 사용한다. => 콜백함수 : 함수 안에 들어가는 함수
    console.log(1);
    setTimeout( () =>{ console.log(2) }, 1000);
    console.log(3);
    addEventListner('click', function(){}) // 클릭되었을때, function 내부 실행해주세요 ~ 이것도 콜백함수
    addEventListener('click', 함수); // 함수 이름만 넣어야한다. 함수를 실행해버리면 안됨.


    // 첫번째 함수가 실행된 다음에 두번째함수가 실행되게 해주세요 => 그래서 콜백함수 사용 => 콜백함수는 함수 디자인 패턴일 뿐이다. 동기/비동기와 관련 없음

    function func1(구멍){
        console.log(1)
        구멍(); // 이 자리에 둘째함수가 들어간다. 
    }
    function func2(){
        console.log(2)
    }
    func1(func2);

    // 콜백함수의 문제점 : 이걸 개선하기 위한 Promise 패턴 사용
    func1(function(){
        func2(function(){
            func3(function(){
                console.log(1)
            })
        })
    })