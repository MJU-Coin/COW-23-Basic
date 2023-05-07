## 8주차 정기활동 대체 과제(Js를 활용한 구현)

### 웹 스톱워치 구현하기

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StopWatch</title>
    <link href="./style.css" rel="stylesheet">
</head>
<body>
    <div class = "container">
        <header class = "home">
            <div class = "timeStamp">
                <div class = "hour">00</div>
                :
                <div class = "min">00</div>
                :
                <div class = "sec">00</div>
            </div>
            <div class = "control">
                <button class = "labButton button ball">랩</button>
                <!-- <input type="button" value="재설정" class = "restart ball"> -->
                <button id = "startButtonId" class = "button startButton ball">시작</button>
            </div>
            <p></p>
            <div class = "lab_col">
                <div class = "lab_list"></div>
            </div>
        </header>
    </div>

    <script type="text/javascript" src="script.js"></script>
</body>
</html>
```

**style.css**

```css
* {
    background-color: black;
    color: aliceblue;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.timeStamp {
    display: flex;
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: 1000;
}

.hour, .min, .sec {
    display: flex;
    justify-content: center;
    width: 90px;
}

.control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
}

.ball {
    display: inline-block;
    border: 2px solid black;
    border-radius: 50%;
    background: rgba(56, 55, 55, 0.8);
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 17px;
    text-align: center;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.startButton {
    background-color: rgba(25, 176, 68, 0.5);
    color: rgb(113, 252, 48);
}

.stopButton {
    background-color: rgba(255, 16, 16, 0.3);
    color: rgb(250, 49, 49);
}

.lab_list {
    display: flex;
    flex-direction: column-reverse;
    font-size: 15px;
    font-weight: 500;
}

.lab_list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
```

**script.js**

```js
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
```




