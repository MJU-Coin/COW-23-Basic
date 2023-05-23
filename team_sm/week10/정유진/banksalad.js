let count = 1;
let bankCount = 0;
let investmentCount = 0;
let pensionCount = 0;
let techCount = 0;
let magazineCount = 0;
const slide = () =>{
    console.log("slide");
    if (count < 4){
        document.querySelector(".carousel").style = `transform: translateX(-${count}00%);`;
        count++;
    } else {
        document.querySelector(".carousel").style = "transform: translateX(0%);";
        count = 1;
    }
}

setInterval(slide, 4 * 1000);

const preButton2Slide = () =>{
    if (bankCount === 0){
        document.getElementById("image22").style.backgroundImage = "url('./assets/핑크돼지.jpeg')";
        document.getElementById("contentBox2").innerHTML = "은행 <br> 쉡게 돈모으는 BEST 잔돈저축";
        bankCount = 2;
    } else if (bankCount === 1) {
        document.getElementById("image22").style.backgroundImage = "url('./assets/노트북.jpg')";
        document.getElementById("contentBox2").innerHTML = "은행 <br> BEST 입출금통장";
        bankCount--;
    } else if (bankCount === 2) {
        document.getElementById("image22").style.backgroundImage = "url('./assets/식물.jpeg')";
        document.getElementById("contentBox2").innerHTML = "은행 <br> BEST 자유적금";
        bankCount--;
    }
}
const nextButton2Slide = () =>{
    if (bankCount === 0){
        document.getElementById("image22").style.backgroundImage = "url('./assets/식물.jpeg')";
        document.getElementById("contentBox2").innerHTML = "은행 <br> BEST 자유적금";
        bankCount++;
    } else if (bankCount === 1) {
        document.getElementById("image22").style.backgroundImage = "url('./assets/핑크돼지.jpeg')";
        document.getElementById("contentBox2").innerHTML = "은행 <br> 쉡게 돈모으는 BEST 잔돈저축";
        bankCount++;
    } else if (bankCount === 2) {
        document.getElementById("image22").style.backgroundImage = "url('./assets/노트북.jpg')";
        document.getElementById("contentBox2").innerHTML = "은행 <br> BEST 입출금통장";
        bankCount = 0;
    }
}
const preButton3Slide = () =>{
    if(investmentCount === 0){
        document.getElementById("image33").style.backgroundImage = "url('./assets/증권사문서.jpeg')";
        document.getElementById("contentBox3").innerHTML = "투자 <br> 증권사 CMA 체크카드";
        investmentCount = 1;
    } else if (investmentCount === 1) {
        document.getElementById("image33").style.backgroundImage = "url('./assets/코딩.jpg')";
        document.getElementById("contentBox3").innerHTML = "투자 <br> 투자 성향별 BEST 로보-어드바이저";
        investmentCount--;
    }
}
const nextButton3Slide = () =>{
    if(investmentCount === 0){
        document.getElementById("image33").style.backgroundImage = "url('./assets/증권사문서.jpeg')";
        document.getElementById("contentBox3").innerHTML = "투자 <br> 증권사 CMA 체크카드";
        investmentCount++;
    } else if (investmentCount === 1) {
        document.getElementById("image33").style.backgroundImage = "url('./assets/코딩.jpg')";
        document.getElementById("contentBox3").innerHTML = "투자 <br> 투자 성향별 BEST 로보-어드바이저";
        investmentCount = 0;
    }
}
const preButton4Slide = () =>{
    if(pensionCount === 0){
        document.getElementById("image44").style.backgroundImage = "url('./assets/로봇.jpeg')";
        document.getElementById("contentBox4").innerHTML = "연금 <br> 연금저축 오보어드바이저 추천";
        pensionCount = 1;
    } else if (pensionCount === 1) {
        document.getElementById("image44").style.backgroundImage = "url('./assets/저금통.jpg')";
        document.getElementById("contentBox4").innerHTML = "연금 <br> 연금저축, 어디서 가입할까?";
        pensionCount--;
    }
}
const nextButton4Slide = () =>{
    if(pensionCount === 0){
        document.getElementById("image44").style.backgroundImage = "url('./assets/로봇.jpeg')";
        document.getElementById("contentBox4").innerHTML = "연금 <br> 연금저축 오보어드바이저 추천";
        pensionCount++;
    } else if (pensionCount === 1) {
        document.getElementById("image44").style.backgroundImage = "url('./assets/저금통.jpg')";
        document.getElementById("contentBox4").innerHTML = "연금 <br> 연금저축, 어디서 가입할까?";
        pensionCount=0;
    }
}
const preButton5Slide = () => {
    if (techCount === 0){
        document.getElementById("image55").style.backgroundImage = "url('./assets/축제.jpeg')";
        document.getElementById("contentBox5").innerHTML = "핀테크 <br> 4대 크라우드 펀딩 플랫폼 비교";
        techCount = 2;
    } else if (techCount === 1) {
        document.getElementById("image55").style.backgroundImage = "url('./assets/표정.jpg')";
        document.getElementById("contentBox5").innerHTML = "핀테크 <br> 케이뱅크VS카카오뱅크 비교분석";
        techCount--;
    } else if (techCount === 2) {
        document.getElementById("image55").style.backgroundImage = "url('./assets/비트코인.jpeg')";
        document.getElementById("contentBox5").innerHTML = "핀테크 <br> 가상화폐 거래소 비교분석";
        techCount--;
    }
}
const nextButton5Slide = () =>{
    if (techCount === 0){
        document.getElementById("image55").style.backgroundImage = "url('./assets/비트코인.jpeg')";
        document.getElementById("contentBox5").innerHTML = "핀테크 <br> 가상화폐 거래소 비교분석";
        techCount++;
    } else if (techCount === 1) {
        document.getElementById("image55").style.backgroundImage = "url('./assets/축제.jpeg')";
        document.getElementById("contentBox5").innerHTML = "핀테크 <br> 4대 크라우드 펀딩 플랫폼 비교";
        techCount++;
    } else if (techCount === 2) {
        document.getElementById("image55").style.backgroundImage = "url('./assets/표정.jpg')";
        document.getElementById("contentBox5").innerHTML = "핀테크 <br> 케이뱅크VS카카오뱅크 비교분석";
        techCount =0;
    }
}
const preButton6Slide = () =>{
    if (magazineCount === 0) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/필기.jpeg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 금융상품 고를 때 가격 비교 쉽게 하는 팁";
        magazineCount = 3;
    } else if (magazineCount === 1) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/광고.jpg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 나만을 위한 내 돈 관리앱!";
        magazineCount--;
    } else if (magazineCount === 2) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/비행기.jpeg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 항공사 마일리지 사용 팁";
        magazineCount--;
    }else if (magazineCount === 3) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/패밀리마트.jpeg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 편의점 1+1 행사의 비밀";
        magazineCount--;
    }
}
const nextButton6Slide = () => {
    if (magazineCount === 0){
        document.getElementById("image66").style.backgroundImage = "url('./assets/비행기.jpeg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 항공사 마일리지 사용 팁";
        magazineCount++;
    } else if (magazineCount === 1) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/패밀리마트.jpeg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 편의점 1+1 행상의 비밀";
        magazineCount++;
    } else if (magazineCount === 2) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/필기.jpeg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 금융상품 고를 때 가격 비교 쉽게 하는 팁";
        magazineCount++;
    } else if (magazineCount === 3) {
        document.getElementById("image66").style.backgroundImage = "url('./assets/광고.jpg')";
        document.getElementById("contentBox6").innerHTML = "핀테크 <br> 나만을 위한 내 돈 관리앱!";
        magazineCount = 0;
    }
}

document.getElementById("preButton2").addEventListener('click', preButton2Slide);
document.getElementById("nextButton2").addEventListener('click', nextButton2Slide);
document.getElementById('preButton3').addEventListener('click', preButton3Slide);
document.getElementById('nextButton3').addEventListener('click', nextButton3Slide);
document.getElementById('preButton4').addEventListener('click', preButton4Slide);
document.getElementById('nextButton4').addEventListener('click', nextButton4Slide);
document.getElementById('preButton5').addEventListener('click', preButton5Slide);
document.getElementById('nextButton5').addEventListener('click', nextButton5Slide);
document.getElementById('preButton6').addEventListener('click', preButton6Slide);
document.getElementById('nextButton6').addEventListener('click', nextButton6Slide);