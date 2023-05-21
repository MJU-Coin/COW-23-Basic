const timeStamp = document.querySelector(".timestamp");
const recordList = document.querySelector(".record-list");
const startBtn = document.querySelector(".start-btn");
const labBtn = document.querySelector(".lab-btn");

let minutes = 0; //분
let seconds = 0; //초
let milisec = 0; //밀리초
let count = 0; //시간 세는 변수
let timer; //setInterval 값을 넣어 나중에 clearInterval하기위한 변수

function countTime() {
  if (startBtn.value == "시작") {
    startBtn.value = "중단";
    startBtn.className = "stop-btn";
    labBtn.value = "랩";
    labBtn.className = "lab-btn"; // class를 lab-btn으로 바꿈
    timer = setInterval(function () {
      count += 1;
      minutes = Math.floor(count / 6000);
      let namuzi1 = count % 6000;
      seconds = Math.floor(namuzi1 / 100);
      let namuzi2 = namuzi1 % 100;
      milisec = namuzi2;
      ClockPaint();
    }, 10);
  } else if (startBtn.value == "중단" && count != 0) {
    clearInterval(timer);
    startBtn.value = "시작";
    startBtn.className = "start-btn";
    labBtn.value = "재설정";
    labBtn.className = "reset-btn"; //class를 reset-btn으로 바꿈
  }
}

function ClockPaint() {
  timeStamp.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }:${milisec < 10 ? "0" + milisec : milisec}`; //시간을 화면에 표시하는함수
}

function HandleRecord(event) {
  if (count == 0) {
    event.preventDefault(); //시간이 있지 않을때는 이벤트 막기
  } else if (count !== 0 && labBtn.value == "랩") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }:${milisec < 10 ? "0" + milisec : milisec}`;
    li.appendChild(span);
    recordList.prepend(li); //가장 최신의 레코드를 위로 출력하기 위해 위로삽입
  } else {
    HandleReset(); // 랩이 아닌 재설정을 클릭하였을때 일어나는 함수
  }
}

function HandleReset() {
  count = 0;
  minutes = 0;
  seconds = 0;
  milisec = 0;
  if (document.querySelector(".record-list li")) {
    const li = document.querySelectorAll("li"); //li로 된 태그 전부를 배열로 받음
    for (let i = 0; i < li.length; i++) {
      recordList.removeChild(li[i]); //li배열을 다 돌며 li 전체 삭제하기
    }
  }
  ClockPaint(); // 초기화 후 화면에 표시
}

function init() {
  startBtn.addEventListener("click", countTime); // 스타트버튼 클릭시 countTime함수 실행
  labBtn.addEventListener("click", HandleRecord);
}

init(); //처음에 클릭이벤트를 실행하기 위해서 만들어둔 함수
