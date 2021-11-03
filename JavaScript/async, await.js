


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