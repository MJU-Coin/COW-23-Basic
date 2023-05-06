
const time = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const recordButton = document.getElementById("record");
const resetButton = document.getElementById("reset");
const list_num = document.getElementById("list_num");
const totalTime_list = document.getElementById("totalTime_list");
const recordTime_list = document.getElementById("recordTime_list");
const recordBox = document.getElementById("recordTime");
let interval;
let minutes; // 분
let seconds; // 초
let milSec; // 밀리초
let startTime; // 시작 시간
let stopTime; // 중지 버튼을 눌렀을 당시 시간
let nowTime; // 시간
const totalTime = []; // 전체 흘러간 시간을 담아두는 배열
const recordTime = []; // 경과 시간을 담아둔 배열
let count = -1; // 구간 기록 클릭한 횟수 카운터

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
recordButton.addEventListener("click", record);
resetButton.addEventListener("click", reset);

function startTimer() {
    // 스탑워치를 시작할 때 사용하는 함수
    if (!startTime) {
        startTime = new Date().getTime(); // 맨 처음 시작할때
    } else {
        startTime += new Date() - stopTime; // 중지에서 시작을 다시 눌렀을때 시간
    }
    interval = setInterval(function () {
        nowTime = new Date(new Date().getTime() - startTime); // 현재 시간과 시작을 눌렀을때의 시점의 시간을 빼서 초를 셈

        minutes = addZero(nowTime.getMinutes());
        seconds = addZero(nowTime.getSeconds());
        milSec = addZero(Math.floor(nowTime.getMilliseconds() / 10));
        time.innerText = `${minutes}:${seconds}:${milSec}`;
    }, 1);
    startButton.disabled = true; // 시작을 누르면 중지가 시작 버튼 비활성화
    resetButton.disabled = true; // 시작 버튼 누르면 초기화 버튼 비활성화
    recordButton.disabled = false; // 시작 버튼 누르면 구간 기록 버튼 활성화
    stopButton.disabled = false; // 시작 버튼 누르면 초기화 버튼 활성화
}

function stopTimer() {
    // 스탑워치를 멈출 때 사용하는 함수
    stopTime = new Date().getTime(); // 중지 버튼을 눌렀을 시점의 시간 저장
    clearInterval(interval); // 중지 버튼을 누르면 iterval 중지시킴
    stopButton.disabled = true; // 중지 버튼 누르면 중지 버튼 비활성화
    recordButton.disabled = true; // 중지 버튼 누르면 구간 기록 비활성화
    startButton.disabled = false; // 중지 버튼 누르면 시작 버튼 활성화
    resetButton.disabled = false; // 중지 버튼 누르면 초기화 버튼 활성화
}

function record() {
    // 구간 기록을 할 때 사용하는 함수
    let clickTime = new Date().getTime(); // 구간 기록을 클릭했을 당시 시간
    recordTime.push(clickTime); // 구간 기록을 클릭했을 당시 시간을 배열에 담아줌

    let rcTime = new Date(recordTime[count + 1] - recordTime[count]); // 경과시간 =  현재 클릭한 시간 - 과거 클릭한 시간

    totalTime.push(`${minutes}:${seconds}:${milSec}`); // 전체시간
    count += 1; // 클릭한 순간 count =-1에서 0으로 증가하며 클릭할때 마다 1씩 증가

    let rcMinutes = addZero(rcTime.getMinutes());
    let rcSeconds = addZero(rcTime.getSeconds());
    let rcMilSec = addZero(Math.floor(rcTime.getMilliseconds() / 10));

    let num = document.createElement("li"); // 리스트의 순서를 기록하는 리스트 생성
    let record_listTime = document.createElement("li"); // 전체 시간을 기록하는 리스트 생성
    let total_listTime = document.createElement("li"); // 경과 시간을 기록하는 리스트 생성

    num.innerText = `${addZero(count + 1)}`;
    list_num.prepend(num); // 리스트에 추가할 때 먼저 추가한 리스트가 아래로 가게 할려고 prepend 사용

    record_listTime.innerText = `${recordTime.length == 1
            ? `${minutes}:${seconds}:${milSec}` // recordTime의 길이가 1이라면 처음 구간을 기록했으므로 구간 기록은 전체 시간과 같음
            : `${rcMinutes}:${rcSeconds}:${rcMilSec}` // 아니라면 2개 이상이라는 소리 즉 방금 클릭한 시간에서 과거에 클릭한 시간을 뺀 시간을 넣어줌
        }`;
    recordTime_list.prepend(record_listTime); // 리스트에 추가할 때 먼저 추가한 리스트가 아래로 가게 할려고 prepend 사용

    total_listTime.innerText = `${totalTime[count]}`;
    totalTime_list.prepend(total_listTime); // ul에 li 추가 prepend는 선택한 요소의 첫번째에 새로운 요소나 컨텐츠를 추가한다. 즉 새로 추가할때마다 기존 요소 위에 추가됨

    recordBox.classList.remove("hide"); // 리스트 글자 보이게 하기
}

function reset() {
    removeList(list_num); // 리스트의 내용들 삭제
    removeList(recordTime_list);
    removeList(totalTime_list);
    startTime = undefined; // timer를 다시 처음 시작함
    time.innerText = "00:00:00"; // timer 다시 초기로 세팅
    clearInterval(interval);

    totalTime.splice(0, totalTime.length); // 기록한 시간들 모두 초기화
    recordTime.splice(0, recordTime.length); // 기록한 시간들 모두 초기화
    count = -1; // 카운트 값 초기화를 통해 배열에 담기는 값들을 다시 처음부터 담기게 함
    recordBox.classList.add("hide"); // 리스트 글자 다시 사라지게 하기
}

function removeList(targetList) {
    // 리스트 초기화 함수
    while (targetList.firstChild) {
        targetList.removeChild(targetList.firstChild); // ul의 자식요소인 li 요소들 모두 삭제
    }
}

function addZero(num) {
    // 숫자를 00 형식으로 보이게 하기 위한 함수
    return num < 10 ? "0" + num : "" + num;
}
