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

