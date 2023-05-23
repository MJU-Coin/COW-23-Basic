// carousel JS
const $container = document.getElementById('carousel-container');
const $button1 = document.getElementById('button1');
const $button2 = document.getElementById('button2');
const $button3 = document.getElementById('button3');
let count1 = 1;
$button1.addEventListener('click', () => {
    // carousel 1번 버튼 클릭 이벤트
    clickButton1();
});
$button2.addEventListener('click', () => {
    // carousel 2번 버튼 클릭 이벤트
    clickButton2();
});

$button3.addEventListener('click', () => {
    // carousel 3번 버튼 클릭 이벤트
    clickButton3();
});

const clickButton1 = () => {
    // carousel 1번 버튼 함수
    $container.style.transform = 'translateX(0)';
    $button1.style.backgroundColor = '#dddddd';
    $button2.style.backgroundColor = '#ffffff';
    $button3.style.backgroundColor = '#ffffff';
}

const clickButton2 = () => {
    // carousel 2번 버튼 함수
    $container.style.transform = 'translateX(-100vw)';
    $button2.style.backgroundColor = '#dddddd';
    $button1.style.backgroundColor = '#ffffff';
    $button3.style.backgroundColor = '#ffffff';
}

const clickButton3 = () => {
    // carousel 3번 버튼 함수
    $container.style.transform = 'translateX(-200vw)';
    $button3.style.backgroundColor = '#dddddd';
    $button1.style.backgroundColor = '#ffffff';
    $button2.style.backgroundColor = '#ffffff';
}

setInterval(() => {
    // 자동슬라이드를 위한 setInterval 함수
    if(count1 === 1) {clickButton2();}
    if(count1 === 2) {clickButton3();}
    if(count1 === 3) {clickButton1(); count1 = 0;}
    count1 ++;
}, 4000);


// third article JS
const $third_button2_right = document.getElementById('third-button2-right');
const $third_button2_left = document.getElementById('third-button2-left');
const $third_item2 = document.getElementById('third-item2');
const $third_content2 = document.getElementById('third-content2');
let count2_2 = 1;

$third_button2_right.addEventListener('click', () => {
    if(count2_2 === 1) {
        $third_item2.style.background = 'url(./assets/third-item-2-2.jpeg)';
        $third_item2.style.backgroundSize = '230px 140px';
        $third_content2.innerHTML = '<h1>쉽게 돈모으는 BEST 잔돈저축</h1>';
    }

    if(count2_2 === 2) {
        $third_item2.style.background = 'url(./assets/third-item-2-3.jpeg)';
        $third_item2.style.backgroundSize = '218.25px 140px';
        $third_content2.innerHTML = '<h1>BEST 자유적금</h1>';
    }

    if(count2_2 === 3) {
        $third_item2.style.background = 'url(./assets/third-item-2-1.jpeg)';
        $third_item2.style.backgroundSize = '218.25px 140px';
        $third_content2.innerHTML = '<h1>BEST 입출금통장</h1>';
        count2_2 = 0;
    }
    count2_2 ++;
});

$third_button2_left.addEventListener('click', () => {
    if(count2_2 === 2) {
        $third_item2.style.background = 'url(./assets/third-item-2-1.jpeg)';
        $third_item2.style.backgroundSize = '218.25px 140px';
        $third_content2.innerHTML = '<h1>BEST 입출금통장</h1>';
    }
    
    if(count2_2 === 3) {
        $third_item2.style.background = 'url(./assets/third-item-2-2.jpeg)';
        $third_item2.style.backgroundSize = '218.25px 140px';
        $third_content2.innerHTML = '<h1>쉽게 돈모으는 BEST 잔돈저축</h1>';
    }

    if(count2_2 === 1) {
        $third_item2.style.background = 'url(./assets/third-item-2-3.jpeg)';
        $third_item2.style.backgroundSize = '218.25px 140px';
        $third_content2.innerHTML = '<h1>BEST 자유적금</h1>';
        count2_2 = 3;
    }
    count2_2 --;
});

const $third_button3_right = document.getElementById('third-button3-right');
const $third_button3_left = document.getElementById('third-button3-left');
const $third_item3 = document.getElementById('third-item3');
const $third_content3 = document.getElementById('third-content3');
let count2_3 = 1;

$third_button3_right.addEventListener('click', () => {
    if(count2_3 === 1) {
        $third_item3.style.background = 'url(./assets/third-item-3-2.jpeg)';
        $third_item3.style.backgroundSize = 'cover';
        $third_content3.innerHTML = '<h1>증권사 CMA 체크카드</h1>';
    }

    if(count2_3 === 2) {
        $third_item3.style.background = 'url(./assets/third-item-3-1.jpeg)';
        $third_item3.style.backgroundSize = '218.25px 140px';
        $third_content3.innerHTML = '<h1>투자 성향별 BEST 로보-어드바이저</h1>';
        count2_3 = 0;
    }

    count2_3 ++;
});

$third_button3_left.addEventListener('click', () => {
    if(count2_3 === 2) {
        $third_item3.style.background = 'url(./assets/third-item-3-1.jpeg)';
        $third_item3.style.backgroundSize = '218.25px 140px';
        $third_content3.innerHTML = '<h1>투자 성향별 BEST 로보-어드바이저</h1>';
    }
    
    if(count2_3 === 1) {
        $third_item3.style.background = 'url(./assets/third-item-3-2.jpeg)';
        $third_item3.style.backgroundSize = 'cover';
        $third_content3.innerHTML = '<h1>증권사 CMA 체크카드</h1>';
        count2_3 = 3;
    }

    count2_3 --;
});

const $third_button4_right = document.getElementById('third-button4-right');
const $third_button4_left = document.getElementById('third-button4-left');
const $third_item4 = document.getElementById('third-item4');
const $third_content4 = document.getElementById('third-content4');
let count2_4 = 1;

$third_button4_right.addEventListener('click', () => {
    if(count2_4 === 1) {
        $third_item4.style.background = 'url(./assets/third-item-4-2.jpeg)';
        $third_item4.style.backgroundSize = 'cover';
        $third_content4.innerHTML = '<h1>연금저축 로보어드바이저 추천</h1>';
    }

    if(count2_4 === 2) {
        $third_item4.style.background = 'url(./assets/third-item-4-1.jpg)';
        $third_item4.style.backgroundSize = '218.25px 140px';
        $third_content4.innerHTML = '<h1>연금저축, 어디서 가입할까?</h1>';
        count2_4 = 0;
    }

    count2_4 ++;
});

$third_button4_left.addEventListener('click', () => {
    if(count2_4 === 2) {
        $third_item4.style.background = 'url(./assets/third-item-4-1.jpg)';
        $third_item4.style.backgroundSize = '218.25px 140px';
        $third_content4.innerHTML = '<h1>연금저축, 어디서 가입할까?</h1>';
    }
    
    if(count2_4 === 1) {
        $third_item4.style.background = 'url(./assets/third-item-4-2.jpeg)';
        $third_item4.style.backgroundSize = 'cover';
        $third_content4.innerHTML = '<h1>연금저축 로보어드바이저 추천</h1>';
        count2_4 = 3;
    }

    count2_4 --;
});

const $third_button5_right = document.getElementById('third-button5-right');
const $third_button5_left = document.getElementById('third-button5-left');
const $third_item5 = document.getElementById('third-item5');
const $third_content5 = document.getElementById('third-content5');
let count2_5 = 1;

$third_button5_right.addEventListener('click', () => {
    if(count2_5 === 1) {
        $third_item5.style.background = 'url(./assets/third-item-5-2.jpg)';
        $third_item5.style.backgroundSize = '230px 140px';
        $third_content5.innerHTML = '<h1>가상화폐 거래소 비교분석</h1>';
    }

    if(count2_5 === 2) {
        $third_item5.style.background = 'url(./assets/third-item-5-3.jpg)';
        $third_item5.style.backgroundSize = '218.25px 140px';
        $third_content5.innerHTML = '<h1>4대 크라우드 펀딩 플랫폼 비교</h1>';
    }

    if(count2_5 === 3) {
        $third_item5.style.background = 'url(./assets/third-item-5-1.jpg)';
        $third_item5.style.backgroundSize = '218.25px 140px';
        $third_content5.innerHTML = '<h1>케이뱅크VS카카오뱅크</h1><h1>비교분석</h1>';
        count2_5 = 0;
    }
    count2_5 ++;
});

$third_button5_left.addEventListener('click', () => {
    if(count2_5 === 2) {
        $third_item5.style.background = 'url(./assets/third-item-5-1.jpg)';
        $third_item5.style.backgroundSize = '218.25px 140px';
        $third_content5.innerHTML = '<h1>케이뱅크VS카카오뱅크</h1><h1>비교분석</h1>';
    }
    
    if(count2_5 === 3) {
        $third_item5.style.background = 'url(./assets/third-item-5-2.jpg)';
        $third_item5.style.backgroundSize = '218.25px 140px';
        $third_content5.innerHTML = '<h1>가상화폐 거래소 비교분석</h1>';
    }

    if(count2_5 === 1) {
        $third_item5.style.background = 'url(./assets/third-item-5-3.jpg)';
        $third_item5.style.backgroundSize = '218.25px 140px';
        $third_content5.innerHTML = '<h1>4대 크라우드 펀딩 플랫폼 비교</h1>';
        count2_5 = 3;
    }
    count2_5 --;
});

const $third_button6_right = document.getElementById('third-button6-right');
const $third_button6_left = document.getElementById('third-button6-left');
const $third_item6 = document.getElementById('third-item6');
const $third_content6 = document.getElementById('third-content6');
let count2_6 = 1;

$third_button6_right.addEventListener('click', () => {
    if(count2_6 === 1) {
        $third_item6.style.background = 'url(./assets/third-item-6-2.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>항공사 마일리지 사용 팁</h1>';
    }

    if(count2_6 === 2) {
        $third_item6.style.background = 'url(./assets/third-item-6-3.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>편의점 1 + 1 행사의 비밀</h1>';
    }

    if(count2_6 === 3) {
        $third_item6.style.background = 'url(./assets/third-item-6-4.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>금융상품 고를 때 가격 비교 쉽게 하는 팁</h1>';
    }

    if(count2_6 === 4) {
        $third_item6.style.background = 'url(./assets/third-item-6-1.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>나만을 위한 내 돈 관리 앱!</h1>';
        count2_6 = 0;
    }
    count2_6 ++;
});

$third_button6_left.addEventListener('click', () => {
    if(count2_6 === 3) {
        $third_item6.style.background = 'url(./assets/third-item-6-2.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>항공사 마일리지 사용 팁</h1>';
    }

    if(count2_6 === 4) {
        $third_item6.style.background = 'url(./assets/third-item-6-3.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>편의점 1 + 1 행사의 비밀</h1>';
    }

    if(count2_6 === 5) {
        $third_item6.style.background = 'url(./assets/third-item-6-4.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>금융상품 고를 때 가격 비교 쉽게 하는 팁</h1>';
    }

    if(count2_6 === 2) {
        $third_item6.style.background = 'url(./assets/third-item-6-1.jpg)';
        $third_item6.style.backgroundSize = '218.25px 140px';
        $third_content6.innerHTML = '<h1>나만을 위한 내 돈 관리 앱!</h1>';
        count2_6 = 4;
    }

    count2_6 --;
});

