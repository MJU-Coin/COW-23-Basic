const $timeStamp = document.querySelector(".timeStamp");
const $hour = document.querySelector(".hour")
const $min = document.querySelector(".min")
const $sec = document.querySelector(".sec")
const $startButtonId = document.querySelector("#startButtonId");
const $labButton = document.querySelector(".labButton");
const $resetButton = document.querySelector(".labButton");
const $lab_list = document.querySelector(".lab_list");

let minutes = 0; //분
let seconds = 0; //초
let milliSec = 0; //밀리초
let startTime;
let endTime = 0; // stop 한 시점의 시간
let count = 1;

// 시작하고 중단하고 재시작한 후 랩하면 이상



// 시작 버튼
$startButtonId.addEventListener('click', function() {

    if (this.classList.contains('startButton')) {
        // 첫 시작
        if (!startTime) {
            this.classList.remove('startButton');
            this.classList.add('stopButton');
            this.innerText = '중단';

            startTime = Date.now();
        }

        // 재시작할 때
        else {
            this.classList.remove('startButton');
            this.classList.add('stopButton');
            this.innerText = '중단';

            // 재시작 시간은 재시작 버튼을 누른 시점의 시각에서 정지버튼을 누른 시각의 간격만큼을 더해준 시간
            startTime += (Date.now() - endTime); 
        }

        timer = setInterval(function () {
            const nowTime = new Date(Date.now() - startTime);
            
            milliSec = Math.floor(nowTime.getMilliseconds()/10);
            seconds = nowTime.getSeconds();
            minutes = nowTime.getMinutes();
            showTimer();
        }, 1);

        if ($labButton.classList.contains('labButton')) {
            $labButton.addEventListener('click', recordTime);
        }
        else {
            $resetButton.classList.add('labButton');
            $labButton.classList.remove('resetButton');
            $labButton.innerText = '랩';
            $resetButton.removeEventListener('click', resetTimer);
            $labButton.addEventListener('click', recordTime);
        }

    }
    


    // start 후 중단버튼 실행 -> 랩 자리에 reset 버튼
    else if (this.classList.contains('stopButton')) {
        endTime = Date.now();
        clearInterval(timer);
        this.classList.remove('stopButton');
        this.classList.add('startButton');
        this.innerText = '시작';

        // 리셋버튼 구현
        $labButton.classList.add('resetButton');
        $resetButton.classList.remove('labButton');
        $resetButton.innerText = '리셋';
        $resetButton.addEventListener('click', resetTimer);
        $labButton.removeEventListener('click', recordTime);
    }
    
});



// 화면에 표시(자릿수 맞게 표시)
function showTimer() {
    $hour.innerText = `${minutes < 10 ? "0" + minutes : minutes}`;
    $min.innerText = `${seconds < 10 ? "0" + seconds : seconds}`;
    $sec.innerText = `${milliSec < 10 ? "0" + milliSec : milliSec}`; //시간을 화면에 표시하는함수
}

// 리셋 버튼
function resetTimer() {
    startTime = 0;
    minutes = 0;
    seconds = 0;
    milliSec = 0;
    count = 1;
    showTimer();
    $startButtonId.innerText = '시작';
    $labButton.innerText = '랩';
    $lab_list.innerHTML = '';
    $labButton.removeEventListener('click', recordTime);
    $resetButton.removeEventListener('click', resetTimer);
}

// 랩으로 저장하는 함수
function recordTime() {
    const $div = document.createElement('div');
    const $labTime = document.createElement('div');
    const $labCount = document.createElement('div');

    $labCount.innerText = `랩 ${count}`

    $labTime.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
    }:${milliSec < 10 ? "0" + milliSec : milliSec}`;   

    $div.append($labCount ,$labTime);
    
    $lab_list.appendChild($div);
    count += 1;
}