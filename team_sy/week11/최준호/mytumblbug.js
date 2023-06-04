function initCarousel() {
  const carousel = document.querySelector('.imageslide');
  const $imageslideitem = carousel.querySelectorAll('.imageslideitem');
  const $imagesmallbutton = carousel.querySelectorAll('.imagesmallbutton');
  const $prevbutton = carousel.querySelector('.prev-button');
  const $nextbutton = carousel.querySelector('.next-button');
  const $pageinfo = document.querySelector(`.pageinfo`);

  let currentPageIndex = 0;
  const carouselInterval = 4000;
  let carouselTimer;

  function moveCarouselTo(index) {
    $imageslideitem.forEach(item => {
      item.style.display = 'none';
    });
    $imageslideitem[index].style.display = 'block';
    currentPageIndex = index;
    $pageinfo.textContent = `${currentPageIndex + 1} / ${$imageslideitem.length}`;
  }

  function nextCarouselPage() {
    let nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex >= $imageslideitem.length) {
      nextPageIndex = 0;
    }
    moveCarouselTo(nextPageIndex);
  }

  function prevCarouselPage() {
    let prevPageIndex = currentPageIndex - 1;
    if (prevPageIndex < 0) {
      prevPageIndex = $imageslideitem.length - 1;
    }
    moveCarouselTo(prevPageIndex);
  }

  function handleIndicatorButtonClick(event) {
    clearInterval(carouselTimer);
    const buttonIndex = Number(event.target.getAttribute('data-index'));
    if (!isNaN(buttonIndex) && buttonIndex >= 0 && buttonIndex < $imageslideitem.length) {
      moveCarouselTo(buttonIndex);
    }
    startCarouselTimer();
  }

  $prevbutton.addEventListener('click', prevCarouselPage);
  $nextbutton.addEventListener('click', nextCarouselPage);

  $imagesmallbutton.forEach((button, index) => {
    button.addEventListener('click', handleIndicatorButtonClick);
    button.setAttribute('data-index', index);
  });

  function startCarouselTimer() {
    carouselTimer = setInterval(nextCarouselPage, carouselInterval);
  }

  moveCarouselTo(0);
  startCarouselTimer();
}

function timetotime() {
  const $timetotime = document.querySelector(`.timetotime`);
  let currenttime = new Date();
  let year = currenttime.getFullYear().toString().slice(2);
  let month = (currenttime.getMonth() + 1).toString().padStart(2, '0');
  let day = currenttime.getDate().toString().padStart(2, '0');
  let hours = currenttime.getHours().toString().padStart(2, '0');
  let minutes = currenttime.getMinutes().toString().padStart(2, '0');
  
  $timetotime.textContent = `${year}.${month}.${day} ${hours}:${minutes}기준`;
}

function loadJSON() {
  const requestURL = "db.json";

  fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      bannertext(data);
      navbar(data);
      popular_projects(data);
      notable_projects(data);
      initCarousel();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function bannertext(arrayjson) {
  const containerName = '.imageslide';
  const imageSlide = document.querySelector(containerName);
  const imageSlideUl = imageSlide.querySelector('.imageslideul');

  for (let i = 0; i < arrayjson.banners.length; i++) {
    console.log(`hi`);
    const banner = arrayjson.banners[i];

    const li = document.createElement('li');
    li.classList.add(`imageslideli${i + 1}`, 'imageslideitem');
    li.setAttribute('data-index', i);

    const bannertitle = document.createElement('div');
    bannertitle.classList.add(`bannertitle`);
    bannertitle.textContent = banner.title;

    const bannersubTitle = document.createElement('div');
    bannersubTitle.classList.add(`bannersubtitle`);
    bannersubTitle.textContent = banner.sub_title;
    

    li.appendChild(bannertitle);
    li.appendChild(bannersubTitle);
    li.style.color = banner.text_color;
    li.style.justifyContent = "center";

    imageSlideUl.appendChild(li);
  }
}

function navbar(arrayjson) {
  const $navbar = document.querySelector(`.navbar`);
  
  
  for(let i = 0; i<arrayjson.categories.length; i++){
    const categories = arrayjson.categories[i];
    console.log(categories);
    const my_li = document.createElement(`li`);
    const my_span = document.createElement(`span`);
    my_li.classList.add(`navbarcontent`);
    my_span.classList.add(`navcontentcontainer`);

    my_span.textContent=categories;
    $navbar.appendChild(my_li);
    my_li.appendChild(my_span);
  }
}

function popular_projects(arrayjson) {
  for(let i = 0; i<arrayjson.popular_projects.length; i++) {
    console.log(`hihihihi${i}`);
    const $sinfocategories = document.querySelector(`.sinfocategoriespop${i+1}`);
    const $sinfocreater = document.querySelector(`.sinfocreaterpop${i+1}`);
    const $biginfo = document.querySelector(`.biginfopop${i+1}`);
    const $percentigy = document.querySelector(`.percentigypop${i+1}`);
    const projects = arrayjson.popular_projects[i];
    
    $sinfocategories.textContent = projects.category;
    $sinfocreater.textContent = projects.creator;
    $biginfo.textContent = projects.title;
    $percentigy.textContent = projects.sponsorship_rate + "% 달성";
    $percentigy.style.color = "red";
  }
}
function notable_projects(arrayjson) {
  for(let i = 0; i<arrayjson.notable_projects.length; i++) {
    const $sinfocategories = document.querySelector(`.sinfocategoriesnot${i+1}`);
    const $sinfocreater = document.querySelector(`.sinfocreaternot${i+1}`);
    const $biginfo = document.querySelector(`.biginfonot${i+1}`);
    const $percentigy = document.querySelector(`.percentigynot${i+1}`);
    const projects = arrayjson.notable_projects[i];
    
    $sinfocategories.textContent = projects.category;
    $sinfocreater.textContent = projects.creator;
    $biginfo.textContent = projects.title;
    $percentigy.textContent = projects.sponsorship_rate + "% 달성";
    $percentigy.style.color = "red";
  }
}
loadJSON();
timetotime();
