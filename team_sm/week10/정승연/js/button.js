const prevButton = document.querySelectorAll(".prev");
const nextButton = document.querySelectorAll(".next");
const secondImage = document.querySelector(".section_content_image02");
const thirdImage = document.querySelector(".section_content_image03");
const fourthImage = document.querySelector(".section_content_image04");
const fifthImage = document.querySelector(".section_content_image05");
const sixthImage = document.querySelector(".section_content_image06");
const description = document.querySelectorAll(".section_content_description");
console.log(description);
let imageUrl;

// 뱅크샐러드 Pick 2번째 content 이미지들
const secondImages = [
  'url("https://cdn.banksalad.com/content%2Fupload%2Fimages%2Fbookkeeping-615384_1920.jpg")',
  'url("https://cdn.banksalad.com/entities/content-tags1505890518445-coins-548949_1920.jpg")',
  'url("https://cdn.banksalad.com/entities/content-columns/1552907839719-save-3402476_1280.jpg")',
];
// 뱅크샐러드 Pick 3번째 content 이미지들
const thirdImages = [
  'url("https://cdn.banksalad.com/entities/content-columns/1550647851678-code-1839406_1280.jpg")',
  'url("https://cdn.banksalad.com/favorite%2Fupload%2Fimages%2F15_CMA%EC%B6%94%EC%B2%9C.jpg")',
];
// 뱅크샐러드 Pick 4번째 content 이미지들
const fourthImages = [
  'url("https://cdn.banksalad.com/entities/content-columns/1552789202508-money-2724241_1280.jpg")',
  'url("https://cdn.banksalad.com/entities/content-columns/1552790058640-robot-2937861_1280.jpg")',
];
// 뱅크샐러드 Pick 5번째 content 이미지들
const fifthImages = [
  'url("https://cdn.banksalad.com/entities/content-columns/1551088106390-experience-3239623_1280.jpg")',
  'url("https://cdn.banksalad.com/entities/content-tags1506590141526-Main_%E1%84%80%E1%85%A1%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA%E1%84%91%E1%85%A8%20%E1%84%80%E1%85%A5%E1%84%85%E1%85%A2%E1%84%89%E1%85%A9%20%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%20%281%29.jpg")',
  'url("https://cdn.banksalad.com/entities/content-columns/1513847496971-%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B3%E1%84%91%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%BA%E1%84%91%E1%85%A9%E1%86%B7%20%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD_main.jpeg")',
];
// 뱅크샐러드 Pick 6번째 content 이미지들
const sixthImages = [
  'url("https://cdn.banksalad.com/entities/content-columns/1567693701704-190904_%EB%B1%85%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C_30%EB%8C%80_%EC%A7%80%EC%BC%9C%EC%A4%98%28%ED%99%94%EC%9D%B4%ED%8A%B8%29305%20%281%29.jpg")',
  'url("https://cdn.banksalad.com/entities/content-columns/1552789362984-plane-841441_1280.jpg")',
  'url("https://cdn.banksalad.com/entities/content-columns/1552790264733-building-2583628_1280.jpg")',
  'url("https://cdn.banksalad.com/entities/content-columns/1553059727529-woman-792162_1280.jpg")',
];
// 뱅크샐러드 Pick 2번째 content 설명
const secondDescription = [
  "Best 입출금 통장",
  "Best 자유적금",
  "쉽게 돈모으는 BEST 잔돈저축",
];
// 뱅크샐러드 Pick 3번째 content 설명
const thirdDescription = [
  "투자 성향별 BEST 로보-어드바이저",
  "증권사 CMA 체크카드",
];
// 뱅크샐러드 Pick 4번째 content 설명
const fourthDescription = [
  "연금저축, 어디서 가입할까?",
  "연금저축 로보어디바이저 추천",
];
// 뱅크샐러드 Pick 5번째 content 설명
const fifthDescription = [
  "케이뱅크VS카카오뱅크 비교분석",
  "가상화폐 거래소 비교분석",
  "4대 크라우드 펀딩 플랫폼 비교",
];
// 뱅크샐러드 Pick 5번째 content 설명
const sixthDescription = [
  "나만을 위한 내 돈 관리 앱!",
  "항공사 마알리지 사용 팁",
  "편의점 1+1 행사의 비밀",
  "금융상품 고를 때 가격 비교 쉽게 하는 팁",
];

function prev(selected) {
  if (selected == 1) {
    imageUrl = window
      .getComputedStyle(secondImage)
      .getPropertyValue("background-image");
    if (imageUrl == secondImages[0]) {
      // 만약 첫번째 사진에서 prev 누르면 가장 마지막 사진 및 설명을 보여줌
      secondImage.style.backgroundImage = secondImages[secondImages.length - 1];
      description[1].innerText =
        secondDescription[secondDescription.length - 1];
    } else if (imageUrl !== secondImages[0]) {
      // 아니라면 현재 인덱스 -1 사진을 보여줌
      let index = secondImages.indexOf(imageUrl);
      secondImage.style.backgroundImage = secondImages[index - 1];
      description[1].innerText = secondDescription[index - 1];
    }
  } else if (selected == 2) {
    imageUrl = window
      .getComputedStyle(thirdImage)
      .getPropertyValue("background-image");
    if (imageUrl == thirdImages[0]) {
      // 만약 첫번째 사진에서 prev 누르면 가장 마지막 사진 및 설명을 보여줌
      thirdImage.style.backgroundImage = thirdImages[thirdImages.length - 1];
      description[2].innerText = thirdDescription[thirdDescription.length - 1];
    } else if (imageUrl !== thirdImages[0]) {
      // 아니라면 현재 인덱스 -1 사진을 보여줌
      let index = thirdImages.indexOf(imageUrl);
      thirdImage.style.backgroundImage = thirdImages[index - 1];
      description[2].innerText = thirdDescription[index - 1];
    }
  } else if (selected == 3) {
    imageUrl = window
      .getComputedStyle(fourthImage)
      .getPropertyValue("background-image");
    if (imageUrl == fourthImages[0]) {
      // 만약 첫번째 사진에서 prev 누르면 가장 마지막 사진 및 설명을 보여줌
      fourthImage.style.backgroundImage = fourthImages[fourthImages.length - 1];
      description[3].innerText =
        fourthDescription[fourthDescription.length - 1];
    } else if (imageUrl !== fourthImages[0]) {
      // 아니라면 현재 인덱스 -1 사진을 보여줌
      let index = fourthImages.indexOf(imageUrl);
      fourthImage.style.backgroundImage = fourthImages[index - 1];
      description[3].innerText = fourthDescription[index - 1];
    }
  } else if (selected == 4) {
    imageUrl = window
      .getComputedStyle(fifthImage)
      .getPropertyValue("background-image");
    if (imageUrl == fifthImages[0]) {
      // 만약 첫번째 사진에서 prev 누르면 가장 마지막 사진 및 설명을 보여줌
      fifthImage.style.backgroundImage = fifthImages[fifthImages.length - 1];
      description[4].innerText = fifthDescription[fifthDescription.length - 1];
    } else if (imageUrl !== fifthImages[0]) {
      // 아니라면 현재 인덱스 -1 사진을 보여줌
      let index = fifthImages.indexOf(imageUrl);
      fifthImage.style.backgroundImage = fifthImages[index - 1];
      description[4].innerText = fifthDescription[index - 1];
    }
  } else if (selected == 5) {
    imageUrl = window
      .getComputedStyle(sixthImage)
      .getPropertyValue("background-image");
    if (imageUrl == sixthImages[0]) {
      // 만약 첫번째 사진에서 prev 누르면 가장 마지막 사진 및 설명을 보여줌
      sixthImage.style.backgroundImage = sixthImages[sixthImages.length - 1];
      description[5].innerText = sixthDescription[sixthDescription.length - 1];
    } else if (imageUrl !== sixthImages[0]) {
      // 아니라면 현재 인덱스 -1 사진을 보여줌
      let index = sixthImages.indexOf(imageUrl);
      sixthImage.style.backgroundImage = sixthImages[index - 1];
      description[5].innerText = sixthDescription[index - 1];
    }
  }
}

function next(selected) {
  if (selected == 1) {
    imageUrl = window
      .getComputedStyle(secondImage)
      .getPropertyValue("background-image");
    if (imageUrl == secondImages[secondImages.length - 1]) {
      // 가장 마지막 사진에서 next 누르면 첫번째 사진 및 설명을 보여줌
      secondImage.style.backgroundImage = secondImages[0];
      description[1].innerText = secondDescription[0];
    } else {
      // 아니라면 현재 index +1 의 사진 및 설명을 보여줌
      let index = secondImages.indexOf(imageUrl);
      secondImage.style.backgroundImage = secondImages[index + 1];
      description[1].innerText = secondDescription[index + 1];
    }
  } else if (selected == 2) {
    imageUrl = window
      .getComputedStyle(thirdImage)
      .getPropertyValue("background-image");
    if (imageUrl == thirdImages[thirdImages.length - 1]) {
      // 가장 마지막 사진에서 next 누르면 첫번째 사진 및 설명을 보여줌
      thirdImage.style.backgroundImage = thirdImages[0];
      description[2].innerText = thirdDescription[0];
    } else {
      // 아니라면 현재 index +1 의 사진 및 설명을 보여줌
      let index = thirdImages.indexOf(imageUrl);
      thirdImage.style.backgroundImage = thirdImages[index + 1];
      description[2].innerText = thirdDescription[index + 1];
    }
  } else if (selected == 3) {
    imageUrl = window
      .getComputedStyle(fourthImage)
      .getPropertyValue("background-image");
    if (imageUrl == fourthImages[fourthImages.length - 1]) {
      // 가장 마지막 사진에서 next 누르면 첫번째 사진 및 설명을 보여줌
      fourthImage.style.backgroundImage = fourthImages[0];
      description[3].innerText = fourthDescription[0];
    } else {
      // 아니라면 현재 index +1 의 사진 및 설명을 보여줌
      let index = fourthImages.indexOf(imageUrl);
      fourthImage.style.backgroundImage = fourthImages[index + 1];
      description[3].innerText = fourthDescription[index + 1];
    }
  } else if (selected == 4) {
    imageUrl = window
      .getComputedStyle(fifthImage)
      .getPropertyValue("background-image");
    if (imageUrl == fifthImages[fifthImages.length - 1]) {
      // 가장 마지막 사진에서 next 누르면 첫번째 사진 및 설명을 보여줌
      fifthImage.style.backgroundImage = fifthImages[0];
      description[4].innerText = fifthDescription[0];
    } else {
      // 아니라면 현재 index +1 의 사진 및 설명을 보여줌
      let index = fifthImages.indexOf(imageUrl);
      fifthImage.style.backgroundImage = fifthImages[index + 1];
      description[4].innerText = fifthDescription[index + 1];
    }
  } else if (selected == 5) {
    imageUrl = window
      .getComputedStyle(sixthImage)
      .getPropertyValue("background-image");
    if (imageUrl == sixthImages[sixthImages.length - 1]) {
      // 가장 마지막 사진에서 next 누르면 첫번째 사진 및 설명을 보여줌
      sixthImage.style.backgroundImage = sixthImages[0];
      description[5].innerText = sixthDescription[0];
    } else {
      // 아니라면 현재 index +1 의 사진 및 설명을 보여줌
      let index = sixthImages.indexOf(imageUrl);
      sixthImage.style.backgroundImage = sixthImages[index + 1];
      description[5].innerText = sixthDescription[index + 1];
    }
  }
}

for (let i = 1; i < 6; i++) {
  prevButton[i].addEventListener("click", () => {
    prev(i); // 매개 변수 i는 어떤 prevButton을 눌렀는지 전달해줌
  });

  nextButton[i].addEventListener("click", () => {
    next(i); // 매개 변수 i는 어떤 nextButton을 눌렀는지 전달해줌
  });
}
