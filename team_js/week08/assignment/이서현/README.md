# README

# 8주차 정기활동 대체 과제(Js를 활용한 구현)

## 웹 스톱워치 구현하기

- [*] 시작, 중지, 리셋, 랩 버튼이 있는 타이머 표시 영역을 만들기
    - [*] 각 버튼 및 영역에 대한 스타일 적용
- [*] 타이머를 시작하고 중지하는 기능 구현하기
    - [*] 초기 화면은 시작 버튼 활성화
    - [*] 타이머 시작 시 중지, 랩 버튼 활성화
    - [*] 타이머 중지 시 시작, 리셋 버튼 활성화
- [*] 경과 시간을 표시하는 기능 구현하기
- [*] 랩타임 기능 구현하기: 사용자가 현재 경과 시간에 대한 랩타임을 저장하고 나중에 볼 수 있도록 화면 상에 표시하기
    - [*] 새로 생기는 랩타임은 위에 추가되도록 기록
- [*] 밀리초까지 정확한 타이머 구현하기: setInterval() 함수와 new Date() 객체를 이용하여 밀리초까지 정확한 타이머 구현하기

## timer.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SeonyStopWatch</title>
    <link rel="stylesheet" href="timer.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />    
</head>
<body>
    <div class="timer">
        <div class="head">
        <span class="nowTime"><i class="far fa-clock"></i> 00 H 00 M<i class="far fa-clock"></i></span>
        <span class="welcome"> <i class="fas fa-paw"></i>  welcome to seony stopwatch <i class="fas fa-bone"></i></span>
        <span class="logo"><i class="fas fa-heartbeat"></i> SEONY <i class="fas fa-heartbeat"></i></span>
    </div>
    <div class="time">00:00:00:00</div>
    <div class="button">
        <span class="record">랩</span>
        <span class="record2">시작</span>
    </div>
    <div class="text"></div>
    </div>
    <script src="timer.js"></script>
</body>
</html>
```

## timer.css

```css
body{
    background-color: rgb(241, 197, 220);
    margin:0;
    text-align: center;
}
.timer{
    box-sizing:border-box;
}
.head{
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    color:rgb(241, 197, 220);
    line-height: 50px;
    font-weight: 800;
}
.nowTime{
    width: 140px;
    height: 50px;
    color:rgb(223, 150, 187);
}
.nowTime:hover{
    color: rgb(250, 84, 167);
}
.welcome{
    height: 50px;
}
.welcome:hover{
    color: rgb(250, 84, 167);
}
.welcome i{
    color:rgb(223, 150, 187);
}
.logo{
    width: 100px;
    height: 50px;
    padding-right: 10px;
    color:rgb(223, 150, 187);
}
.logo:hover{
    color:rgb(250, 84, 167);
}
.time{
    color:white;
    font-weight: 900;
    height: 200px;
    line-height: 200px;
    font-size: 70px;
}
.time:hover{
    color:rgb(250, 84, 167);
}
.button{
    display: flex;
    justify-content: space-evenly;
    height: 75px;
    line-height: 75px;
}
.record{
    width:75px;
    height:75px;
    background-color: white;
    color:rgb(241, 197, 220);
    font-weight: 900;
    font-size:x-large;
    border-radius: 5%;
}
.record:hover{
    color:rgb(250, 84, 167);
}
.record2{
    width:75px;
    height:75px;
    background-color: white;
    color:rgb(241, 197, 220);
    font-weight: 900;
    font-size:x-large;
    border-radius: 5%;
}
.record2:hover{
    color:rgb(250, 84, 167);
}
.text{
    text-align: center;
    height: 20px;
    margin-top: 30px;
    color:white;
    line-height: 100px;
    font-weight: 800;    
    font-size: x-large;
}
```

## timer.js

```jsx
const $nowTime= document.querySelector('.nowTime');
const $record = document.querySelector('.record');
const $record2 = document.querySelector('.record2');
const $time = document.querySelector('.time');
const $text = document.querySelector('.text');
let hours =0; 
let minutes =0;
let seconds=0;
let miliseconds =0;
let startOrStop=0;
let interval=0;
let repOrClear=0;
let recordTime=null;
// 웹페이지 로드되면 1초마다 왼쪽 상단 현재 시간 표시하기
window.onload= function(){
    setInterval(setTime,1000);
}
// head 왼쪽 상단 현재시간 계산하는 함수
function setTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    $nowTime.innerHTML = `<i class="fas fa-clock"></i> ${hours}H ${minutes}M <i class="fas fa-clock"></i>`;
}
// 타이머의 시작, 중단, 재시작 등 오른쪽 버튼 기능 구현 함수
function repeat(){
    if(startOrStop===0){
        interval=setInterval(setdetailTime,10);
        $record2.textContent='중지';
        $record.textContent='랩';
        repOrClear=0;
        startOrStop=1;
        }else if(startOrStop===1){
            clearInterval(interval);
            startOrStop=2;
            $record2.textContent='재시작';
            $record.textContent='초기화';
            repOrClear=1;
        }else if(startOrStop===2){
            interval=setInterval(setdetailTime,10);
            $record2.textContent='중지';
            $record.textContent='랩'
            repOrClear=0;
            startOrStop=1;
        }
}
// 랩 및 초기화 왼쪽 버튼 기능 구현 함수
function record(){
    if(repOrClear===0){
        $text.innerHTML+=recordTime;
    }else if(repOrClear===1){
        clearInterval(interval);
        $time.innerText = '00:00:00:00';
        $record.textContent='랩';
        $record2.textContent='시작';
        repOrClear=0;
        startOrStop=0;
        hours=0;
        minutes=0;
        seconds=0;
        miliseconds=0;
        $text.textContent="";
    }
}
// 지난 시간 측정하는 함수
function setdetailTime(){
    ++miliseconds;
    if(miliseconds>99){
        miliseconds=0;
        ++seconds;
    }
    if(seconds>59){
        seconds=0;
        ++minutes;
    }
    if(minutes>59){
        minutes=0;
        ++hours;
    }
    recordTime=`${hours} : ${minutes} : ${seconds} : ${miliseconds}<br>`;
    $time.innerText = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
}
$record2.addEventListener('click',repeat);
$record.addEventListener('click',record);
```