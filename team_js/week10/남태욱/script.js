document.querySelector('.carouselBtn1').addEventListener('click', ()=>{
    document.querySelector('.carouselContainer').style.transform = 'translate(0)';
});

document.querySelector('.carouselBtn2').addEventListener('click', ()=>{
    document.querySelector('.carouselContainer').style.transform = 'translate(-100vw)';
});

document.querySelector('.carouselBtn3').addEventListener('click', ()=>{
    document.querySelector('.carouselContainer').style.transform = 'translate(-200vw)';
});

document.querySelector('.carouselBtn4').addEventListener('click', ()=>{
    document.querySelector('.carouselContainer').style.transform = 'translate(-300vw)';
});
