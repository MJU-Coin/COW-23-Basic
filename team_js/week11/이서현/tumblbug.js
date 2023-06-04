const $carouselSlide = document.querySelector('.carouselslide');
const $order = document.querySelector('.order b');
const $buttonleft = document.querySelector('.left');
const $buttonright = document.querySelector('.right');
const $time = document.querySelector('#time');
const $category = document.querySelector('#first');
const $hoverWrap= document.querySelector('.hoverWrap');
const $search =document.querySelector('.search');
const $clicksearch =document.querySelector('.clicksearch');
const $x = document.querySelector('#x');
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
setInterval(()=>{
    let data = new Date();
    let year = data.getFullYear()-(parseInt(data.getFullYear()/100)*100);
    let month = data.getMonth();
    let day = data.getDay();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let timestring = `${year}. ${month}. ${day} ${hours} : ${minutes} : ${seconds} 기준`;
    $time.textContent= timestring;
    console.log(timestring);
},1000);
$category.addEventListener('mouseover',hover);
function hover(){
    $hoverWrap.style.visibility='visible';
}
$category.addEventListener('mouseleave',leave)
function leave(){
    $hoverWrap.style.visibility='hidden';
}
$search.addEventListener('click',()=>{
    $clicksearch.style.visibility ='visible';
})
$x.addEventListener('click',()=>{
    $clicksearch.style.visibility='hidden';
})
