let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis")
const appendSeconds = document.getElementById("seconds")
const appendMinutes = document.getElementById("minutes")
const buttonStart = document.getElementById("bt__start")
const buttonStop = document.getElementById("bt__stop")
const buttonReset = document.getElementById("bt__reset")
const buttonRecord = document.getElementById("bt__record")
let intervalId;
let records = [];
	
buttonRecord.onclick = function () {
	records += document.getElementById("time").innerText + "\n";
	document.getElementById("recordList").innerText = records;
};

//start 버튼 누를때마다 어떤 동작을 진행하게끔.
buttonStart.onclick = function(){ 
    clearInterval(intervalId) // 기존에 있던 아이디는 제거를 하고 셋인터벌 들어가게. --> 아이디가 중복될 수 있어서.
    intervalId = setInterval(operateTimer, 10)
}

buttonStop.onclick = function(){
    clearInterval(intervalId) // 셋 인터벌이 반환한 아이디를 전달해주면 그 아이디를 가진 셋인터벌이 동작을 멈춤.
}

// 모든 시간이 0이 되어야 함.
buttonReset.onclick = function(){
    clearInterval(intervalId)
    tenMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
    records = []; // RECORD 기록 초기화
    document.getElementById("recordList").innerText = ""; // 화면에 표시된 기록도 초기화

}

buttonRecord.onclick = function () {
    records.push(document.getElementById("time").innerText);
    const recordList = document.getElementById("recordList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${records.length}. ${records[records.length - 1]}</span>`;
    listItem.style.listStyleType = "none"; // 검정색 점 없애기
    listItem.style.color = "white"; // 글자색 흰색으로 변경
    recordList.appendChild(listItem);
};

recordList.style.cssText = "font-size: 30px; line-height: 1.5em; white-space: pre-wrap;";
/*  font-size는 recordList 요소의 글자 크기를 16px로.
    line-height는 행 간격을 1.5em으로.
    white-space는 요소 내부의 공백 문자를 어떻게 처리할지 설정.
    pre-wrap 값은 공백 문자를 유지하면서 줄 바꿈 하게끔 설정. */

    

/* 10ms 마다 시간에 대한 숫자가 증가하게.
   밀리초가 일정 시간 올라가면 초가 올라가게.
   초가 일정 시간 올라가면 분도 올라가게. */
function operateTimer(){
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis // 한 자리 수의 초일때 앞에 0을 붙여주는 역할
    if(tenMillis > 99){
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        tenMillis = 0; // 초가 올라갔으니 밀리초는 초기화되게끔.
        appendTens.textContent = "00"
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        seconds = 0; 
        appendSeconds.textContent = "00"
    }
}