const $conTime = document.querySelector('.conTime');
const $difTime = document.querySelector('.difTime');
const $appear = document.querySelectorAll('.appear');
const $list = document.querySelector('.list');
const $left = document.querySelector('.left');
const $right = document.querySelector('.right');


let startTime;
let minutes;
let seconds;
let milliseconds;

let sectionTime;
let sectionMin;
let sectionSec;
let sectionMilli;
let listNum = 1;

function changeColor(tag, color, fontcolor) { //색상을 변경하는 메서드
    tag.style.backgroundColor = color;
    tag.style.color = fontcolor;
}

$left.addEventListener('click', onClickLeft); //왼쪽 버튼 이벤트 리스너
function onClickLeft() { //왼쪽 버튼 클릭 메서드
    if(this.innerText === '구간 기록'){ //구간기록
        $appear.forEach(element => {
            element.classList.add("expanded");
            element.removeAttribute("hidden");
        });
        sectionTime = Date.now();
        record();
    }else if(this.innerText === '초기화'){ //초기화
        reset();
    }
}

function miniTimer() { //구간기록 시간 메서드
    let newTime = new Date(Date.now() - sectionTime);

    sectionMin = newTime.getMinutes();
    sectionSec = newTime.getSeconds();
    sectionMilli = Math.floor(newTime.getMilliseconds() / 10);
    $difTime.innerText = `${addZero(sectionMin)} : ${addZero(sectionSec)} . ${addZero(sectionMilli)}`;
}

function record() { //구간 기록 메서드
    let div = document.createElement('div');
    div.classList.add('divLi');
    let numSpan = document.createElement('span');
    let sectionSpan = document.createElement('span');
    let timeSpan = document.createElement('span');
    numSpan.innerText = addZero(listNum);
    sectionSpan.innerText = `${addZero(sectionMin)}:${addZero(sectionSec)}.${addZero(sectionMilli)}`;
    timeSpan.innerText = `${addZero(minutes)}:${addZero(seconds)}.${addZero(milliseconds)}`;
    div.append(numSpan);
    div.append(sectionSpan);
    div.append(timeSpan);
    if(!$list.firstChild){
        $list.append(div);
    }else{
        $list.insertBefore(div, $list.firstChild);
    }
    listNum++;
}

function reset() { //초기화 메서드
    $appear.forEach(element => {
        element.classList.remove("expanded");
        element.classList.add("exiting");
        setTimeout(() => {
            element.classList.remove("exiting");
            element.setAttribute("hidden", true);
        }, 500);
    });
    changeColor($right, "#0780ff", "white");
    changeColor($left, "gray", "#082c60");
    startTime = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    $conTime.innerText = '00 : 00 . 00';
    $difTime.innerText = '00 : 00 . 00';
    $left.innerText = '구간 기록';
    $right.innerText = '시작';
    $list.innerHTML = '';
    $left.setAttribute('disabled', '');
    listNum = 1;
}


$right.addEventListener('click', onClickRight); //오른쪽 버튼 이벤트 리스너
function onClickRight() { //오른쪽 버튼 클릭 메서드
    if(this.innerText === '시작' || this.innerText === '계속'){ //시작 or 계속
        startOrcontinue();
    }else if(this.innerText === '중지'){ //중지
        stopTimer();
    }
}

function startOrcontinue() { //시작 or 계속 메서드
    $left.removeAttribute('disabled');
    if(!startTime){ //시작
        sectionTime = Date.now();
        startTime = Date.now();
    } else { //계속
        startTime += (Date.now() - endTime);
        sectionTime += (Date.now() - endTime);
        $left.innerText = '구간 기록';
    }
    changeColor($right, "red", "white");
    changeColor($left, "white", "#0780ff");
    miniTimerStart = setInterval(miniTimer, 1);
    timerStart = setInterval(startTimer, 1);
    $right.innerText = '중지';
}

function startTimer() { //타이머 시작 메서드
    let newTime = new Date(Date.now() - startTime);

    minutes = newTime.getMinutes();
    seconds = newTime.getSeconds();
    milliseconds = Math.floor(newTime.getMilliseconds() / 10);
    $conTime.innerText = `${addZero(minutes)} : ${addZero(seconds)} . ${addZero(milliseconds)}`;
    /*
    시작 버튼을 누르는 순간에 변수 startTime에 현재시간을 불러오고 그 시간을 timestamp값으로 저장한다.
    그리고 시작 시점부터 1ms마다 계속해서 현재시간의 timestamp값을 새로 불러와 nowTime에 저장한다.
    nowTime에서 startTime를 뺀 timestamp값을 분, 초, 밀리초로 변환하여 $conTime안에 대입한다.
    */
}

function stopTimer() { //타이머 중지 메서드
    clearInterval(timerStart);
    clearInterval(miniTimerStart);
    endTime = Date.now();
    changeColor($right, "#0780ff", "white");
    changeColor($left, "rgb(26, 26, 26)", "#0780ff");
    $left.innerText = '초기화';
    $right.innerText = '계속';
    /*
    중지버튼을 눌렀을 때 전역변수 endTime에 중지시점의 시각을 timestamp로 저장하고
    계속 버튼을 눌렀을 때의 시각에서 중지시점의 시각을 뺀다. (=> 중지를 누르고 흘러간 시간 C)
    이 흘러간 시간을 startTime에 더해주고 startTime + C(Date.now() - endTime)한 값을
    1ms마다 호출한 시간에서 빼주면 원하는 시점부터 재시작을 할 수 있다.
    */
}

function addZero(num) { //숫자 앞에 0을 추가하는 메서드
    return (num < 10 ? '0'+num : ''+num);
}


