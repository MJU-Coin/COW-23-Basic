const clockMin = document.getElementById("min");
const clockSec = document.getElementById("sec");
const clockMsec = document.getElementById("msec");

const lapSection = document.getElementById("lapSection");

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const pauseBtn = document.getElementById('pauseBtn');

let stTime, endTime; // 시간 계산에 필요한 정보를 담는 변수
let clockId; // 스톱워치 인터벌 id를 저장할 변수
let min, sec, msec; // 시간을 저장할 변수
let lapCount = 0; // 랩 인덱스 번호를 저장할 변수

// 스톱워치 시작
const startClock = () => {
    if (!stTime) { // 처음 스톱워치를 시작하는 경우
        stTime = Date.now();
    } else { // 멈췄다 다시 시작하는 경우
        stTime += (Date.now() - endTime); // 기존 시간을 빼고 더해준다
    }
    clockId = setInterval(() => {
        let curTime = new Date(Date.now() - stTime); // 현재 시간과 시작 시간의 차이를 구해서 시간을 계산한다

        min = addZero(curTime.getMinutes());
        sec = addZero(curTime.getSeconds());
        msec = addZero(curTime.getMilliseconds()/10|0);

        updateClock(min, sec, msec);
    }, 1); // 1/1000초로 인터벌을 설정

    // 버튼 교체
    startBtn.style.display="none";
    pauseBtn.style.display="block";
    resetBtn.style.display="none";
    lapBtn.style.display="block";
}

// 스톱워치 중지
const pauseClock = () => {
    if (clockId) { // 진행중인 인터벌이 있을 경우
        clearInterval(clockId);
        endTime = Date.now();
    }
    // 버튼 교체
    pauseBtn.style.display="none";
    startBtn.style.display="block";
    lapBtn.style.display="none";
    resetBtn.style.display="block";
}

// 스톱워치 초기화
const resetClock = () => {
    updateClock('00', '00', '00');
    stTime = 0;
    clockId = null;
    min, sec, msec = 0;
    lapCount = 0;
    lapSection.innerHTML = '';
    // 버튼 교체
    resetBtn.style.display="none";
    lapBtn.style.display="block";
}

// 랩 기능 함수
const lapClock = () => {
    if (clockId) { // 인터벌이 동작할 때 작동
        lapSection.innerHTML += `<div><span>랩${lapCount}</span><span>${min}:${sec}.${msec}</span></div>`;
        lapCount += 1; // 랩 인덱스를 1 증가
    }
}

// 시간 숫자 형식 변환 함수
const addZero = (time) => {
    return (time < 10 ? '0'+time : ''+time);
}

// 스톱워치 시간 표시 함수
const updateClock = (min, sec, msec) => {
    clockMin.innerText = min;
    clockSec.innerText = sec;
    clockMsec.innerText = msec;
}

// 각 버튼에 이벤트 리스너 추가
startBtn.addEventListener('click', startClock);
pauseBtn.addEventListener('click', pauseClock);
resetBtn.addEventListener('click', resetClock);
lapBtn.addEventListener('click', lapClock);