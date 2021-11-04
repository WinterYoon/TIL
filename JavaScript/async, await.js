


async function func1(){
    // 함수 안에서 Promise 사용하기
    var event = new Promise(function(resolve, reject){
        var addfunc = 1 + 1
        reject(100);
    })

    // then 대신 사용하는 await
    // await 이라는 키워드는 프로미스가 해결되길 기다려달라는 의미이다. 
    // await 의 경우 프로미스 실패시 에러나고 멈춘다. try, catch 사용
    // try : 일단 이걸 실행해보세요 
    try {var result = await event;
        console.log(result);
    }
    // catch : 그리고 안되면 얘를 실행해주세요
    catch {
        console.log("에러입니다")
    }
}
fun1();


// promise 와의 비교
// async는 선언만 해도 promise 를 사용할 수 있다. await는 promise가 처리될 때까지 대기하고, 콜백함수 없이 비동기 처리가 가능하다.
// 비동기 작업을 수행하고자 하는 함수 앞에 async를 표기하고 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await 를 표기하여 뒤의 내용을 promise로 전환시키고 해당 내용이 resolve 된 이후에 다음으로 진행한다. 