
// window.location.href 를 이용하여 현재 페이지의 url 을 변수에 집어넣음
const pageUrl = window.location.href;

const [copySuccess, setCopySuccess] = useState('');

// async 를 활용. try단에서 navigator.clipboard 를 이용해 시스템 클립보드에 접근한다. 실패시 catch 단에서 실패 메세지 띄움. 
const copyToClipBoard = async copyMe => {
try {
    await navigator.clipboard.writeText(copyMe);
      setCopySuccess(alert('링크가 복사되었습니다!'));
    } catch (err) {
      setCopySuccess(alert('실패했습니다!'));
    }
  };
  return (
    <Wrapper>
      <Content>
        <CloseBtn onClick={props.copymodalHandler}>X</CloseBtn>
        <UrlBox>{pageUrl}</UrlBox>
        <ShareBtn onClick={() => copyToClipBoard(pageUrl)}>공유하기</ShareBtn>
        {copySuccess}
      </Content>
    </Wrapper>
  );
}