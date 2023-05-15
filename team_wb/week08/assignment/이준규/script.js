let min = 0;
let sec = 0;
let tenMil = 0;
let intervalId = null; 
let lapCount = 1;

const $min = document.getElementById('min');
const $sec = document.getElementById('sec');
const $tenMil = document.getElementById('tenMil');
const $start = document.getElementById('start');
const $stop = document.getElementById('stop');
const $reset = document.getElementById('reset');
const $lap = document.getElementById('lap');
const $result = document.getElementById('result');

// 시작
$start.addEventListener('click', (event) => {
  event.preventDefault();

  if(intervalId != null) {
    clearInterval(intervalId);
    // 클릭의 중복을 막기 위해 사용
  }

  intervalId = setInterval(() => {
    tenMil++;
    $tenMil.textContent = tenMil > 9 ? tenMil : '0' + tenMil; // 00, 01 이런 식으로 보이기 위한 삼항연산자 

    if(tenMil > 99) {
      sec++;
      $sec.textContent = sec > 9 ? sec : '0' + sec;
      tenMil = 0;
      $tenMil.textContent = "00";
    }

    if(sec > 59) {
      min++;
      $min.textContent = min > 9 ? min : '0' + min;
      sec = 0;
      $sec.textContent = "00";
    }
  }, 10);
});

// 중지
$stop.addEventListener('click', () => {
  clearInterval(intervalId);
});

// 초기화
$reset.addEventListener('click', () => {
  clearInterval(intervalId);
  tenMil = 0;
  sec = 0;
  min = 0;
  $tenMil.textContent = "00";
  $sec.textContent = "00";
  $min.textContent = "00";
  lapCount = 1; 
  $lap.innerHTML = "랩"; 
  $result.innerText = '';
});

// 랩 기능
$lap.addEventListener('click', () => {
  const lapTime = `${formatTime(min)} : ${formatTime(sec)} : ${formatTime(tenMil)}`;
  const $lapItem = document.createElement('h3');

  $lapItem.textContent = `기록 ${lapCount}: ${lapTime}`;
  $result.append($lapItem);
  lapCount++;
});

// 시간 형식화를 위한 함수
function formatTime(value) {
  return value.toString().padStart(2, "0");
}

