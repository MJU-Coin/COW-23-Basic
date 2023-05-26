$header1 = document.querySelector('.header1');
$circle1 = document.querySelector('#circle1');
$circle2 = document.querySelector('#circle2');
$circle3 = document.querySelector('#circle3');
$art2=document.querySelector(".art2 > img");
$back1 = document.querySelector('#back1');
$back2 = document.querySelector('#back2');
$back3 = document.querySelector('#back3');
$back4 = document.querySelector('#back4');
$back5 = document.querySelector('#back5');
$back6 = document.querySelector('#back6');
$go1 = document.querySelector('#go1');
$go2 = document.querySelector('#go2');
$go3 = document.querySelector('#go3');
$go4 = document.querySelector('#go4');
$go5 = document.querySelector('#go5');
$go6 = document.querySelector('#go6');
$b1 = document.querySelector('.b1');
$b2 = document.querySelector('.b2');
var count=0;
   setInterval(()=>{
      switch(count){
         case 0:
            $header1.style.transform ='translateX(-100vw)'
            count++;
            break;
         case 1:
            $header1.style.transform ='translateX(-200vw)'
            count++;
            break;
         case 2:
            $header1.style.transform ='translateX(0)'
            count=0;
            break;
      }
   },4000)

$circle1.addEventListener('click', ()=>{
   $header1.style.transform == 'translateX(-100vw)';
});
$circle2.addEventListener('click', ()=>{
    $header1.style.transform == 'translateX(-200vw)';
 });
 $circle3.addEventListener('click', ()=>{
    $header1.style.transform == 'translateX(0)';
 });
 var count2=0;
 var count2_1=0;
 var count3=0;
 var count3_1=0;
 var count4=0;
 var count4_1=0;
 var count5=0;
 var count5_1=0;
 var count6=0;
 var count6_1=0;
 
 $back2.addEventListener('click', () => {
   console.log(count2);
   if(count2%3===0){
      document.querySelector('.art2 > img').src='img/pig.jpeg';
      document.querySelector('.art2 > p').innerHTML = '은행<br>쉽게 돈모으는 BEST <br>잔돈저축';

   }else if(count2%3===1){
      document.querySelector('.art2 > img').src='img/fresh.jpeg';
      document.querySelector('.art2 > p').innerHTML = '은행<br>BEST 자유적금';
   }else if(count2%3===2){
      document.querySelector('.art2 >img').src='img/calculator.jpg';
      document.querySelector('.art2 > p').innerHTML = '은행<br>BEST 입출금 통장';
   }
   count2++;
 });
 $go2.addEventListener('click', () => {
   if(count2_1%3===2){
      document.querySelector('.art2 > img').src='img/pig.jpeg';
      document.querySelector('.art2 > p').innerHTML = '은행<br>쉽게 돈모으는 BEST <br>잔돈저축';

   }else if(count2_1%3===1){
      document.querySelector('.art2 > img').src='img/fresh.jpeg';
      document.querySelector('.art2 > p').innerHTML = '은행<br>BEST 자유적금';
   }else if(count2_1%3===0){
      document.querySelector('.art2 >img').src='img/calculator.jpg';
      document.querySelector('.art2 > p').innerHTML = '은행<br>BEST 입출금 통장';
   }
   count2_1++;
 });

 $back3.addEventListener('click', () => {
   if(count3%2===0){
      document.querySelector('.art3 > img').src='img/report.jpeg';
      document.querySelector('.art3 > p').innerHTML = '투자<br>증권사 CMA 체크카드';
   }else if(count3%2===1){
      document.querySelector('.art3 > img').src='img/coding.jpg';
      document.querySelector('.art3 > p').innerHTML = '투자<br>투자 성향별 BEST로드-어바이저';
   }
   count3++;
   });
$go3.addEventListener('click', () => {
   if(count3_1%2===0){
      document.querySelector('.art3 > img').src='img/report.jpeg';
      document.querySelector('.art3 > p').innerHTML = '투자<br>증권사 CMA 체크카드';
   }else if(count3_1%2===1){
      document.querySelector('.art3 > img').src='img/coding.jpg';
      document.querySelector('.art3 > p').innerHTML = '투자<br>투자 성향별 BEST로드-어바이저';
   }
   count3_1++;
});
$back4.addEventListener('click', () => {
   if(count4%2===0){
      document.querySelector('.art4 > img').src='img/robot.jpeg';
      document.querySelector('.art4 > p').innerHTML = '연금<br>연금저축 로드어드바이저 추천';
   }else if(count4%2===1){
      document.querySelector('.art4 > img').src='img/money.jpg';
      document.querySelector('.art4 > p').innerHTML = '연금<br>연금저축, 어디서가입할까?';
   }
   count4++;
});
$go4.addEventListener('click', () => {
   if(count4_1%2===0){
      document.querySelector('.art4 > img').src='img/robot.jpeg';
      document.querySelector('.art4 > p').innerHTML = '연금<br>연금저축 로드어드바이저 추천';
   }else if(count4_1%2===1){
      document.querySelector('.art4 > img').src='img/money.jpg';
      document.querySelector('.art4 > p').innerHTML = '연금<br>연금저축, 어디서가입할까?';
   }
   count4_1++;
});
$back5.addEventListener('click', () => {
   if(count5%3===0){
      document.querySelector('.art5 > img').src='img/festival.jpg';
      document.querySelector('.art5 > p').innerHTML = '핀테크<br>4대 크라우드 펀딩<br>플랫폼 비교';
   }else if(count5%3===1){
      document.querySelector('.art5 > img').src='img/coin.jpg';
      document.querySelector('.art5 > p').innerHTML = '핀테크<br>가상화폐 거래소<br>비교분석';
   }else if(count5%3===2){
      document.querySelector('.art5 >img').src='img/face.jpg';
      document.querySelector('.art5 > p').innerHTML = '핀테크<br>케이뱅크VS카카오뱅크<br>비교분석';
   }
   count5++;
});    
$go5.addEventListener('click', () => {
   if(count5_1%3===2){
      document.querySelector('.art5 > img').src='img/festival.jpg';
      document.querySelector('.art5 > p').innerHTML = '핀테크<br>4대 크라우드 펀딩<br>플랫폼 비교';
   }else if(count5_1%3===1){
      document.querySelector('.art5 > img').src='img/coin.jpg';
      document.querySelector('.art5 > p').innerHTML = '핀테크<br>가상화폐 거래소<br>비교분석';
   }else if(count5_1%3===0){
      document.querySelector('.art5 >img').src='img/face.jpg';
      document.querySelector('.art5 > p').innerHTML = '핀테크<br>케이뱅크VS카카오뱅크<br>비교분석';
   }
   count5_1++;
});     
$back6.addEventListener('click', () => {
   if(count6%4===0){
      document.querySelector('.art6 > img').src='img/pen.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>금융상품 고를 때 가격비교<br>쉽게 하는 팁';
   }else if(count6%4===1){
      document.querySelector('.art6 > img').src='img/mart.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>편의점 1+1 행사의비밀';
   }else if(count6%4===2){
      document.querySelector('.art6 >img').src='img/airplane.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>항공사 마일리지 사용팁';
   }else if(count6%4===3){
      document.querySelector('.art6 > img').src='img/save.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>나만을 위한 내 돈 관리 앱!';
   }
   count6++;
});    
$go6.addEventListener('click', () => {
   if(count6_1%4===3){
      document.querySelector('.art6 > img').src='img/pen.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>금융상품 고를 때 가격비교<br>쉽게 하는 팁';
   }else if(count6_1%4===2){
      document.querySelector('.art6 > img').src='img/mart.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>편의점 1+1 행사의비밀';
   }else if(count6_1%4===1){
      document.querySelector('.art6 >img').src='img/airplane.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>항공사 마일리지 사용팁';
   }else if(count6_1%4===0){
      document.querySelector('.art6 > img').src='img/save.jpg';
      document.querySelector('.art6 > p').innerHTML = '매거진<br>나만을 위한 내 돈 관리 앱!';
   }
   count6_1++;
});   