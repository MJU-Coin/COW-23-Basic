$carouselSlide = document.querySelector('.carouselslide');
$order = document.querySelector('.order b');
$buttonleft = document.querySelector('.left');
$buttonright = document.querySelector('.right');
let count=0;
setInterval(()=>{
    let incount=(-766)*count;
    $carouselSlide.style.transform=`translateX(${incount}px)`;
    $order.textContent=`${count+1}`;
    count++;
    if(count==5){
        count=0;
    }
},4000)
$buttonright.addEventListener("click",(event)=>{
    event.preventDefault();
    let incount= (-766)*count;
    $order.textContent=`${count+1}`;
    count++;
    if(count==5){
        count=0;
    }
    $carouselSlide.style.transform=`translateX(${incount}px)`;
});
$buttonleft.addEventListener("click",(event)=>{
    event.preventDefault();
    let incount= (-766)*count;
    $order.textContent=`${count+1}`;
    count--;
    if(count==-1){
        count=4;
    }
    $carouselSlide.style.transform=`translateX(${incount}px)`;
});
