
// Promise

var getData = new Promise(function(resolve, reject){
    var add  = 1 + 1 ;
    resolve(add); // 이 함수가 실행되면 프로미스 성공 => .then 실행 + 파라미터에 결과를 담아서 then함수까지 결과같이 가기 떄문에 결과 데이터 또한 전달이 가능하다. 
    reject(); // 이 함수가 실행되면 프로미스 실패 => .catch 실행
})
getData.then(function(결과){
    console.log(결과, "성공했어요") // Promise가 성공일 경우 실행하는 .then 코드
}).catch(function(){
    console.log("실패했어요") // Promise가 실패할 경우 실행하는 .catch 코드 
})


// Promise의 3가지 상태
// 성공하면 <resolved>
// 실패하면 <rejected>
// 판정 대기중이면 <pending>



