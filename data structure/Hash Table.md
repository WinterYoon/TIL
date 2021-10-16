# Hash Table

## Hash Table이란?
1.  검색하고자 하는 key값(문자, 숫자, fileData등)을 입력받는다
2.  해쉬 함수(특정한 규칙을 이용해 입력받은 key값에 따라 hashcode를 만들어준다)를 돌려서 hashcode를 생성한다.
3.  그 hashcode를 배열의 index로 환산한 후 데이터로 받는다.
4.  검색 시간이 O(1) 만큼 걸리는데, collison이 일어난 경우 O(n) 만큼 더 걸릴 수 있다.

### 장점
-   검색 속도가 빠르다 → hashcode는 정수여서 배열 공간을 고정된 크기만큼 미리 만들어두고 hashcode 자체를 배열의 index로 사용하기에 바로 그 위치에 해당하는 값에 바로 접근이 가능하다.
-   배열의 공간을 규칙에 맞게 잘 만들어 놔야 한다. → hash Algorithmn → collison

## Hash 함수
-   서로 다른 key값인데 동일한 hash code가 만들어지기도 한다.
	 why? key값은 무한하지만 hash code는 정수개만큼만 만들어져서
	 이러한 경우를 Collision(충돌) 이라고 한다.
	 그래서 좋은 hash 함수를 만들어야한다.
-   키의 일부분을 참조하여 해쉬 값을 만들지 않고 키 전체를 참조하여 해쉬 값을 만들어 낸다.

### collision(충돌) 해결 방법
        
#### 1.open address 방식(개방 주소법)
충돌 발생시, 다른 해시 버킷(데이터를 저장하기 위한 공간)에 해당 자료를 삽입하는 방식
collision이 발생하면 데이터를 저장할 장소(비어있는 버킷)을 찾을 때 까지 계속 탐색한다.
#### 2.  separate chaining 방식(분리 연결법)
open address 방식의 경우 이 방법보다 느리다.
- linked list를 사용하는 방식

- tree(red black tree)를 사용하는 방식
tree 방식을 사용하는 경우는 해시 버킷에 할당된 key-value 쌍의 갯수에 따라 결정 된다.
데이터의 갯수가 적을 경우 linked list를 사용한다.
(키 값 쌍의 갯수가 6, 8개 인 경우)
