
# Tree

## Tree란? 

- 부모 자식 관계를 가지는 구조
- 계층이 있고 그룹이 있다.
- 노드가 하나이상의 자식을 갖는다. 
	자식이 더이상 없는 노드 → leaf node

###  Binary Tree (이진 트리)
child node가 최소 0개 ~ 최대 2개까지만 붙는 tree 이다. (3개면 ternary tree)
 
### Binary Search Tree (이진 검색 트리)
- 왼쪽 노드와 그 이하 차일드 노드들은 현재 노드보다 작아야한다.
- 오른쪽 노드 그 이하 차일드 노드들은 현재 노드보다 커야한다.
        
####   BST - Red Black Tree
-   search, insert, delete 에 O(log n)의 시간복잡도가 소요된다.
-   동일한 노드의 개수일 떄, depth를 최소화하여 시간 복잡도를 줄이는 것이다. → depth가 최소화 되는 경우는 tree가 complete binary tree 인 경우
-   Red Black Tree의 성질         

	1.  각 노드는 Red 또는 Black 이라는 색을 가진다.
	2.  Root node의 색은 Black 이다.
	3.  각 leaf node의 색은 Black 이다.
	4.  어떠한 노드의 색이 Red 라면, 두개의 Children의 색은 모두 Black 이다.
	5.  black-height : Root node 에서 leaf node까지의 black node의 개수는 언제나 동일하다.

  - Red Black Tree의 특징
      1. Binary Search Tree 이므로 BST의 특징을 모두 갖는다.
      2.  Root node 부터 leaf node 까지의 모든 경로 중 최소 경로와 최대 경로의 크기 비율은 2보다 크지 않다 → balanced 상태
      3.  노드의 child가 없을 경우, child를 가리키는 포인터는 NIL 값을 저장한다 → NIL을 leaf node 로 간주한다.
      4.  삽입 및 삭제
	      -   BST의 특성을 유지하면서 노드를 삽입하고, 삽입한 노드의 색을 RED로 지정한다. 만약 특성에 위배된다면 색을 조정하고, black-height가 위배된다면 rotation을 통해 height를 조정한다.
            -   BST의 특성을 유지하면서 노드를 삭제하고, 삭제될 노드의 child의 개수에 따라 rotation 방법이 달라진다. 만약 지워진 노드의 색이 black 이라면 black-height가 1 감소한 경로에 black node가 추가되도록 rotation하고 노드의 색을 조정한다. 지워진 노드의 색이 red라면 조정 과정을 거치지 않아도 된다.
            
###   Balance
tree에서 밸런스가 맞는 경우
 -   Red Black Tree
-   AVL tree
###   complete Binary Tree (완전 이진 트리)
-   모든 노드들이 레벨별로 왼쪽부터 채워져 있을 때.
-   마지막 레벨의 경우 왼쪽부터 채워져 있으면 완전 이진 트리이다.
###   Full Binary Tree
-   노드들의 차일드가 하나도 없거나 , 노드들의 차일드가 두개 인 경우
###   Perfect Binary Tree
-   모든 노드가 두개의 자식을 가지고 레벨도 완전한 피라미드 구조일 때