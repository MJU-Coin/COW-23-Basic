function Carousel() {
  const $imageslide = document.querySelector('.imageslide');
  const $imageslideitem = $imageslide.querySelectorAll('.imageslideitem');
  const carouselIndicatorButtons = $imageslide.querySelectorAll('.imagesmallbutton button');

  let currentPageIndex = 0;
  const carouselInterval = 4000;
  let carouselTimer;

  function moveCarouselTo(index) {
    $imageslide.querySelector('.activebutton').classList.remove('activebutton');
    carouselIndicatorButtons[index].classList.add('activebutton');

    $imageslideitem.forEach(item => {
      item.style.display = 'none';
    });

    $imageslideitem[index].style.display = 'block';

    currentPageIndex = index;
  }

  function nextCarouselPage() {
    let nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex >= $imageslideitem.length) {
      nextPageIndex = 0;
    }
    moveCarouselTo(nextPageIndex);
  }

  function handleIndicatorButtonClick(event) {
    clearInterval(carouselTimer);

    const buttonIndex = Number(event.target.getAttribute('data-index'));
  
    if (!isNaN(buttonIndex) && buttonIndex >= 0 && buttonIndex < $imageslideitem.length) {
      moveCarouselTo(buttonIndex);
    }

    startCarouselTimer();
  }

  carouselIndicatorButtons.forEach((button, index) => {
    button.setAttribute('data-index', index);
  });

  function startCarouselTimer() {
    carouselTimer = setInterval(nextCarouselPage, carouselInterval);
  }

  carouselIndicatorButtons.forEach((button, index) => {
    button.addEventListener('click', handleIndicatorButtonClick);
    button.setAttribute('data-index', index);
  });

  moveCarouselTo(0);
  startCarouselTimer();
}


function changeTextColor() {
  let $headermenu = document.getElementsByClassName("headermenu");
  for (let i = 0; i < $headermenu.length; i++) {
    $headermenu[i].addEventListener("mouseover", function() {
      this.style.color = "green";
    });
    $headermenu[i].addEventListener("mouseout", function() {
      this.style.color = "";
    });
  }
}

function section2_2() {
  const $previousbutton2 = document.getElementById(`previousbutton2`);
  const $afterbutton2 = document.getElementById(`afterbutton2`);
  const $section2image2 = document.getElementById(`section2image2`);
  const $section2text2 = document.getElementById(`section2text2`);
  const section2imagearr2 = [
    `https://cdn.banksalad.com/content%2Fupload%2Fimages%2Fbookkeeping-615384_1920.jpg`,
    `https://cdn.banksalad.com/entities/content-tags1505890518445-coins-548949_1920.jpg`,
    `https://cdn.banksalad.com/entities/content-columns/1552907839719-save-3402476_1280.jpg`
  ];
  const section2textarr2 = [
    `BEST 입출금통장`,
    `BEST 자유적금`,
    `쉽게 모으는 BEST 잔돈저축`
  ];
  let section2count_2 = 0;

  $previousbutton2.addEventListener(`click`, (event) => {
    section2count_2 = (section2count_2+2)%3;
    $section2image2.style.backgroundImage = `url(${section2imagearr2[section2count_2]})`;
    $section2text2.textContent = section2textarr2[section2count_2];
  });

  $afterbutton2.addEventListener(`click`, (event) => {
    section2count_2 = (section2count_2+1)%3;
    $section2image2.style.backgroundImage = `url(${section2imagearr2[section2count_2]})`;
    $section2text2.textContent  = section2textarr2[section2count_2];
  });
}

function section2_3() {
  const $previousbutton3 = document.getElementById(`previousbutton3`);
  const $afterbutton3 = document.getElementById(`afterbutton3`);
  const $section2image3 = document.getElementById(`section2image3`);
  const $section2text3 = document.getElementById(`section2text3`);
  const section2imagearr3 = [
    `https://cdn.banksalad.com/entities/content-columns/1550647851678-code-1839406_1280.jpg`,
    `https://cdn.banksalad.com/favorite%2Fupload%2Fimages%2F15_CMA%EC%B6%94%EC%B2%9C.jpg`
  ];
  const section2textarr3 = [
    `투자 성향별 BEST 로보-어드바이저`,
    `증권사 CMA 체크카드`
  ];
  let section2count_3 = 0;

  $previousbutton3.addEventListener(`click`, (event) => {
    section2count_3 = 1-section2count_3;
    $section2image3.style.backgroundImage = `url(${section2imagearr3[section2count_3]})`;
    $section2text3.textContent = section2textarr3[section2count_3];
  });

  $afterbutton3.addEventListener(`click`, (event) => {
    section2count_3 = (section2count_3+1)%2 ;
    $section2image3.style.backgroundImage = `url(${section2imagearr3[section2count_3]})`;
    $section2text3.textContent  = section2textarr3[section2count_3];
  });
}

function section2_4() {
  const $previousbutton4 = document.getElementById(`previousbutton4`);
  const $afterbutton4 = document.getElementById(`afterbutton4`);
  const $section2image4 = document.getElementById(`section2image4`);
  const $section2text4 = document.getElementById(`section2text4`);
  const section2imagearr4 = [
    `https://cdn.banksalad.com/entities/content-columns/1552789202508-money-2724241_1280.jpg`,
    `https://cdn.banksalad.com/entities/content-columns/1552790058640-robot-2937861_1280.jpg`
  ];
  const section2textarr4 = [
    `연금저축, 어디서 가입할까?`,
    `연금저축 로보어드바이저 추천`
  ];
  let section2count_4 = 0;

  $previousbutton4.addEventListener(`click`, (event) => {
    section2count_4 = 1-section2count_4;
    $section2image4.style.backgroundImage = `url(${section2imagearr4[section2count_4]})`;
    $section2text4.textContent = section2textarr4[section2count_4];
  });

  $afterbutton4.addEventListener(`click`, (event) => {
    section2count_4 = (section2count_4+1)%2;
    $section2image4.style.backgroundImage = `url(${section2imagearr4[section2count_4]})`;
    $section2text4.textContent  = section2textarr4[section2count_4];
  });
}

function section2_5() {
  const $previousbutton5 = document.getElementById(`previousbutton5`);
  const $afterbutton5 = document.getElementById(`afterbutton5`);
  const $section2image5 = document.getElementById(`section2image5`);
  const $section2text5 = document.getElementById(`section2text5`);
  const section2imagearr5 = [
    `https://cdn.banksalad.com/entities/content-columns/1551088106390-experience-3239623_1280.jpg`,
    `https://cdn.banksalad.com/entities/content-tags1506590141526-Main_%E1%84%80%E1%85%A1%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA%E1%84%91%E1%85%A8%20%E1%84%80%E1%85%A5%E1%84%85%E1%85%A2%E1%84%89%E1%85%A9%20%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20%281%29.jpg`,
    `https://cdn.banksalad.com/entities/content-columns/1513847496971-%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B3%E1%84%91%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%BA%E1%84%91%E1%85%A9%E1%86%B7%20%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD_main.jpeg`
  ];
  const section2textarr5 = [
    `케이뱅크VS카카오뱅크 비교분석`,
    `가상화폐 거래소 비교분석`,
    `4대 크라우드 펀딩 플랫폼 비교`
  ];
  let section2count_5 = 0;

  $previousbutton5.addEventListener(`click`, (event) => {
    section2count_5 = (section2count_5+2)%3;
    $section2image5.style.backgroundImage = `url(${section2imagearr5[section2count_5]})`;
    $section2text5.textContent = section2textarr5[section2count_5];
  });

  $afterbutton5.addEventListener(`click`, (event) => {
    section2count_5 = (section2count_5+1)%3;
    $section2image5.style.backgroundImage = `url(${section2imagearr5[section2count_5]})`;
    $section2text5.textContent  = section2textarr5[section2count_5];
  });
}
function section2_6() {
  const $previousbutton6 = document.getElementById(`previousbutton6`);
  const $afterbutton6 = document.getElementById(`afterbutton6`);
  const $section2image6 = document.getElementById(`section2image6`);
  const $section2text6 = document.getElementById(`section2text6`);
  const section2imagearr6 = [
    `https://cdn.banksalad.com/entities/content-columns/1567693701704-190904_%EB%B1%85%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C_30%EB%8C%80_%EC%A7%80%EC%BC%9C%EC%A4%98%28%ED%99%94%EC%9D%B4%ED%8A%B8%29305%20%281%29.jpg`,
    `https://cdn.banksalad.com/entities/content-columns/1552789362984-plane-841441_1280.jpg`,
    `https://cdn.banksalad.com/entities/content-columns/1552790264733-building-2583628_1280.jpg`,
    `https://cdn.banksalad.com/entities/content-columns/1553059727529-woman-792162_1280.jpg`
  ];
  const section2textarr6 = [
    `나만을 위한 내 돈 관리 앱!`,
    `항공사 마일리지 사용 팁`,
    `편의점 1+1 행사의 비밀`,
    `금융상품을 고를 때 가격 비교 쉽게하는 팁`
  ];
  let section2count_6 = 0;

  $previousbutton6.addEventListener(`click`, (event) => {
    section2count_6 = (section2count_6+3)%4;
    $section2image6.style.backgroundImage = `url(${section2imagearr6[section2count_6]})`;
    $section2text6.textContent = section2textarr6[section2count_6];
  });

  $afterbutton6.addEventListener(`click`, (event) => {
    section2count_6 = (section2count_6+1)%4;
    $section2image6.style.backgroundImage = `url(${section2imagearr6[section2count_6]})`;
    $section2text6.textContent  = section2textarr6[section2count_6];
  });
}

Carousel();
changeTextColor();
section2_2();
section2_3(); 
section2_4();
section2_5();
section2_6();

