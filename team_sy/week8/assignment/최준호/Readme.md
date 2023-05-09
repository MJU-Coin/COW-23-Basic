# 스톱워치 구현

### HTML

1. 타이머 부분 : 타이머만 보이고 주변에 아무것도 없어야함 ⇒ p태그 사용
2. 버튼 : 시작/중단 , 랩타임기록/리셋 버튼 그룹화할것이기에 2개만 표현
3. 랩타임을 기록할 ul태그

### CSS

1.  기본 배경 black
2. 타이머 부분 : 가운데 정렬
3. 시작 버튼 : 초록색으로, 중단 버튼 : 빨간색으로
4. 랩, 재설정 버튼 : 회색으로

### JavaScript

![https://user-images.githubusercontent.com/127816010/236644062-03e5943d-a750-4fdd-9586-7c8af16242d0.jpg](https://user-images.githubusercontent.com/127816010/236644062-03e5943d-a750-4fdd-9586-7c8af16242d0.jpg)

- [x]  시작, 중지, 리셋, 랩 버튼이 있는 타이머 표시 영역을 만들기
    - [x]  각 버튼 및 영역에 대한 스타일 적용
        
        ul태그 안 li에서 머리 지우기
        
        lap타임 추가마다 랩/재설정 버튼 옆에 붙는다 → flex 가운데 배치로 해결 →
        
        랩타임 가로로 배치됌 → 방향 column으로 해결
        
- [x]  타이머를 시작하고 중지하는 기능 구현하기
    - [x]  초기 화면은 시작 버튼 활성화
        
        → disabled = true로 설정
        
    - [x]  타이머 시작 시 중지, 랩 버튼 활성화
        
        → disabled = false로 설정
        
    - [x]  타이머 중지 시 시작, 리셋 버튼 활성화
- [x]  경과 시간을 표시하는 기능 구현하기
    
    ⇒ 포매팅해서 구현하기 → 00:00:00으로 구현하고싶은데 1:3:32식으로 한자리로 바뀐다.
    
    ⇒ padStart() 이용하여 milisecond, second, minutes가 한 자리일때 앞에 0붙이도록 함.
    
    *[https://sisiblog.tistory.com/238](https://sisiblog.tistory.com/238)* 
    
- [x]  랩타임 기능 구현하기: 사용자가 현재 경과 시간에 대한 랩타임을 저장하고 나중에 볼 수 있도록 화면 상에 표시하기
    - [x]  새로 생기는 랩타임은 위에 추가되도록 기록
        
        → insertBefore() 사용 
        
        랩타임 기록시 appendChlid한다. → ul태그의 첫 자손이 된다.
        
        insertBefore( 랩타임, ul태그선택자.firstChild) → ul태그의 첫 자손 앞에 들어간다.
        
- [x]  밀리초까지 정확한 타이머 구현하기: setInterval() 함수와 new Date() 객체를 이용하여 밀리초까지 정확한 타이머 구현하기