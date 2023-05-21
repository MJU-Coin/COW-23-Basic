let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis")
const appendSeconds = document.getElementById("seconds")
const appendMinutes = document.getElementById("minutes")
const buttonStart = document.getElementById("start_btn")
const buttonStop = document.getElementById("stop_btn")
const buttonReset = document.getElementById("reset_btn")
const buttonRecord = document.getElementById("record_btn")
let intervalId; // buttonStop은 setInterval을 통해 반복적으로 실행되고있는 operator 함수를 멈추기 위한 기능을 추가하기 위해 setInterval이 반환하는 id를 알아야함 -> IntervalId 변수 추가
let records = [];

buttonRecord.onclick = function () { // 버튼을 클릭할 때마다 함수 블록 내의 코드가 실행
	records += document.getElementById("time").innerText + "\n"; // time 요소의 내용을 records 변수에 추가, time 요소는 document.getElementById 메서드를 사용하여 ID를 기반으로 찾아지며, innerText 속성을 사용하여 해당 요소의 내용을 가져옴
	document.getElementById("recordList").innerText = records; // recordList ID를 가진 요소의 innerText를 records 변수의 현재 값으로 설정, 이는 버튼이 클릭될 때마다 recordList 요소가 새 records 변수 값으로 업데이트되며, 이 값은 모든 기록된 시간의 목록을 포함
};

buttonStart.onclick = function(){ // Start 버튼 누를 때마다 함수 호출
    clearInterval(intervalId) // buttonStart 버튼을 의도치 않게 2번 이상 누르게 되는 경우에 setInterval이 반복되면서 id가 겹치는 현상 발생 가능 -> setInterval을 호출할 때마다 기존의 intervalID 제거 후 intervalID 최신화
    intervalId = setInterval(operateTimer, 10) // setInterval(함수, 10) -> 10ms마다 동작하는 함수 만들어 시간 표현, // setInterval 메서드 : 반복실행 함수를 등록하는 타이머 메서드, 주어진 반복실행 함수를 등록하면서 0이 아닌 정수값을 반환함 -> 반복실행 함수의 id 의미
}

buttonStop.onclick = function(){
    clearInterval(intervalId) // 반복실행 함수의 id는 clearInterval 메서드를 통해 제거 가능 -> clearInterval 메서드에 setInterval이 반환한 id를 인자로 전달하면 그 아이디를 가진 setInterval이 동작을 멈춤
}

buttonReset.onclick = function(){
    clearInterval(intervalId)
    tenMillis = 0; seconds = 0; minutes = 0; // 시간에 대한 모든 변수 0으로 초기화
    appendTens.textContent = "00" // 표시도 00으로 바꿈
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
    records = []; 
    document.getElementById("recordList").innerText = ""; 
}

function HandleRecord(event) {
  if (count == 0) { // count 변수가 0이면 이벤트의 기본 동작을 막음, 이벤트가 발생하면 이벤트가 취소되고 더 이상 실행되지 않음
    event.preventDefault(); 
  } else if (count !== 0 && labBtn.value == "랩") { // count 변수가 0이 아니고 labBtn 의 값이 "랩"인 경우를 처리 -> li 요소와 span 요소를 생성하여 span 요소에 분, 초, 밀리초를 표시 -> li 요소에 span 요소를 추가하고, recordList 요소의 맨 위에 추가
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${milisec < 10 ? "0" + milisec : milisec}`;
    li.appendChild(span);
    records.prepend(li); 
  } else { // HandleReset 함수를 호출 -> count 변수가 0이 아니고 labBtn의 값이 "랩"이 아닌 경우에 해당, HandleReset 함수는 타이머를 초기화하고 모든 랩 기록을 제거
    HandleReset(); 
  }
}

function operateTimer(){ // operateTimer : 10ms 마다 시간에 대한 숫자 증가
    tenMillis++; // tenMillis 증가
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis // 증가된 tenMillis를 appendTens에 표시, 한자릿수여도 앞에 0을 붙여 두자릿수처럼 표현
    if(tenMillis > 99){ // 밀리초가 99보다 커지면 seconds 증가
        seconds++; 
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds // 한자릿수여도 앞에 0을 붙여 두자릿수처럼 표현
        tenMillis = 0; 
        appendTens.textContent = "00"
    }
    if(seconds > 59){ // 초가 59보다 커지면 minutes 증가
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes // 한자릿수여도 앞에 0을 붙여 두자릿수처럼 표현
        seconds = 0; // minutes 증가 후 seconds 초기화
        appendSeconds.textContent = "00"
    }
}