 8주차 정기활동 대체 과제(Js를 활용한 구현)

## 웹 스톱워치 구현하기

- **ios** (참고 reference)
  - <img src="https://user-images.githubusercontent.com/106325839/235596078-0dafce73-db94-45ef-8308-96a30c21d107.png" height = "400px"> <img src="https://user-images.githubusercontent.com/106325839/235596562-a249f0c8-9d7c-401c-b1f3-1c386cbf24b8.png" height = "400px">
- **android** (참고 reference)
  - <img src="https://user-images.githubusercontent.com/106325839/235596713-1260b4ba-b6f3-4eec-af8c-7e31c0d6c052.jpeg" height="400px"> <img src="https://user-images.githubusercontent.com/106325839/235596690-cc2de5d6-db42-483f-8cc6-388236e2776d.jpeg" height="400px">
### 요구사항
- [o] 시작, 중지, 리셋, 랩 버튼이 있는 타이머 표시 영역을 만들기
  - [o] 각 버튼 및 영역에 대한 스타일 적용
- [o] 타이머를 시작하고 중지하는 기능 구현하기
  - [o] 초기 화면은 시작 버튼 활성화
  - [o] 타이머 시작 시 중지, 랩 버튼 활성화
  - [o] 타이머 중지 시 시작, 리셋 버튼 활성화
- [o] 경과 시간을 표시하는 기능 구현하기 
- [o] 랩타임 기능 구현하기: 사용자가 현재 경과 시간에 대한 랩타임을 저장하고 나중에 볼 수 있도록 화면 상에 표시하기
  - [o] 새로 생기는 랩타임은 위에 추가되도록 기록
- [o] 밀리초까지 정확한 타이머 구현하기: setInterval() 함수와 new Date() 객체를 이용하여 밀리초까지 정확한 타이머 구현하기
  - https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
