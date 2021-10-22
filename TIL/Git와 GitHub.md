# Git

> 코드 버전을 관리하는 시스템(version control system)

오픈소스에 기여를 하기 위해서

- 코드 버전을 관리하는 이유는?
    - 수정할 때 마다 파일을 새로 만들면 관리가 힘들다.
    - 언제든 이전 버전의 코드로 돌아갈 수 있다.
    - 이력을 남기기 위해서 (commit)
    - 원격저장소와 로컬을 분리함으로써 여러 개발자가 분산작업을 원활하게 할 수 있다.
    - 비선형적인 개발을 위해 브랜치 시스템을 도입하였다. ( 동시에 몇 개의 개발이 이루어져 시간의 제약을 받지 않고 각각의 개발이 순환된다. )
    

## git flow

![git-flow_overall_graph.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57a3e22a-d51b-4323-935b-072351caf9f5/git-flow_overall_graph.png)

- **master** : 기준이 되는 브랜치로 제품을 배포하는 브랜치
- **develop** : 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 merge 시킨다.
- **feature** : 단위 기능을 개발하는 브랜치로 기능 개발이 완료되면 develop 브랜치에 합친다.
- **release** : 배포를 위해 master 브랜치로 보내기 전에 먼저 QA(품질검사)를 하기위한 브랜치
- **hotfix** : master 브랜치로 배포를 했는데 버그가 생겼을 떄 긴급 수정하는 브랜치

기본적으로  master와 develop 브랜치가 존재한다. 

- develop 브랜치 : master에서 시작된 브랜치

- 새로운 기능 추가 작업이 있는 경우(회원가입기능, 장바구니만들기 등) develop 브랜치에서 feature 브랜치를 생성
    - feature 브랜치 : develop 브랜치에서 시작된 브랜치
    - 기능 추가 작업이 완료되었다면 (프로젝트시 pr 리뷰를 받고, modify 완료 되고, merge 받은 cycle) feature 브랜치는 develop 브랜치로 merge 된다.

- develop에 이번 버전에 포함되는 모든 기능이 merge 되었다면 QA를 하기 위해 develop 브랜치에서부터 release 브랜치를 생성
    - QA를 진행하면서 발생한 버그들은 release 브랜치에 수정된다. QA를 무사히 통과했다면 release 브랜치를 master와 develop 브랜치로 merge 한다.

- 마지막으로 출시된 master 브랜치에서 버전 태그를 추가

프로젝트 시 git을 어떻게 사용했나요?

→ fork : 프로젝트를 통째로 외부로 복제해서 개발을 하는 방식 

git init ... 

fork → git clone → (git remote) git clone시 origin에 remote 되어 있다. 그러므로 메인 저장소를 바라보는 remote main 를 추가 → git remote add main → git branch 생성 → pull request → code review → merge 

# GitHub

- git을 사용할 수 있는 리모트(원격) 공간 / 저장소를 제공해준다.