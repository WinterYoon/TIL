
findpwTest = e => {
    // e.preventDafault 사용한 이유 :  form 태그로 감싸진 데이터를 실행하는 함수였기 때문에, form 내부에 submit 이벤트가 발생하면 page가 새로고침이 되므로 그것을 막기 위함이다. 
    e.preventDefault();
    const { account, name, email } = this.state;
    fetch(`${BASE_URL}/users/password`, {
      method: 'PATCH',
      body: JSON.stringify({ account, name, email }),
    })
    // res.json 사용한 이유 : res.json은 "응답이 왔을떄" HTTP body 내부에 내용이 필요할 때 JSON 형태의 response를 자바스크립트 객체로 변환하기 위함이다. 
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE) {
          alert('당신의 비밀번호는 ' + result.MESSAGE + ' 입니다.');
        }
      })
}


// .then 메서드는 promise를 리턴 하기 때문에 = fetch로 요청을 하고 "응답이 왔을떄" 라는 조건이 성립하는 것이다. 