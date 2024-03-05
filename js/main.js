// home-first-slider
var swiper = new Swiper("#home-first-slider .mySwiper", {
  loop: true,
  pagination: {
    el: "#home-first-slider .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

swiper.on("paginationClick", function (swiper, event) {
  var clickedBulletIndex = Array.from(swiper.pagination.bullets).indexOf(
    event.target
  );
  swiper.slideTo(clickedBulletIndex);
});

// home-products
var swiper = new Swiper("#home-products .mySwiper", {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: "#home-products .button-next",
    prevEl: "#home-products .button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});

// home-featured-reels
var swiper = new Swiper("#home-featured-reels .mySwiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: "#home-featured-reels .button-next",
    prevEl: "#home-featured-reels .button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

const videos = document.querySelectorAll('video');
const playPauseBtns = document.querySelectorAll('.play-pause-btn');

playPauseBtns.forEach(playPauseBtn => {
  playPauseBtn.addEventListener('click', togglePlayPause);
});

videos.forEach(video => {
  video.addEventListener('play', handleVideoPlay);
  video.addEventListener('pause', handleVideoPause);
});

swiper.on('slideChange', handleSlideChange);

function togglePlayPause() {
  const video = this.parentElement.querySelector('video');
  const playIcon = this.querySelector('.fa-play');
  const pauseIcon = this.querySelector('.fa-pause');

  if (video.paused) {
    video.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
  } else {
    video.pause();
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';
  }
}

function handleVideoPlay() {
  playPauseBtns.forEach(playPauseBtn => {
    const playIcon = playPauseBtn.querySelector('.fa-play');
    const pauseIcon = playPauseBtn.querySelector('.fa-pause');

    if (playPauseBtn.parentElement.querySelector('video') !== this) {
      const otherVideo = playPauseBtn.parentElement.querySelector('video');
      otherVideo.pause();
      playIcon.style.display = 'inline-block';
      pauseIcon.style.display = 'none';
    }
  });
}

function handleVideoPause() {
  const playPauseBtn = this.parentElement.querySelector('.play-pause-btn');
  const playIcon = playPauseBtn.querySelector('.fa-play');
  const pauseIcon = playPauseBtn.querySelector('.fa-pause');

  playIcon.style.display = 'inline-block';
  pauseIcon.style.display = 'none';
}

function handleSlideChange() {
  videos.forEach(video => {
    video.pause();
  });

  playPauseBtns.forEach(playPauseBtn => {
    const playIcon = playPauseBtn.querySelector('.fa-play');
    const pauseIcon = playPauseBtn.querySelector('.fa-pause');
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';
  });
}

// home-partners
var swiper = new Swiper('#home-partners .mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '#home-partners .swiper-pagination',
    clickable: true,
  },
});


// home-statistics
function animateCounters() {
  let valueDisplays = document.querySelectorAll('#home-statistics .count');
  let interval = 1400;

  valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
              clearInterval(counter);
          }
      }, duration);
  });
}

function isCountersInViewport() {
  let valueDisplays = document.querySelectorAll('#home-statistics .count');
  for (let valueDisplay of valueDisplays) {
      let rect = valueDisplay.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          return true; 
      }
  }
  return false; 
}

window.addEventListener('load', function() {
  if (isCountersInViewport()) {
      animateCounters();
  }
});

let animationStarted = false;

window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (!animationStarted && isCountersInViewport() && currentScrollPos > lastScrollTop) {
      animateCounters();
      animationStarted = true; 
  }
  lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
});

window.addEventListener('DOMContentLoaded', function(event) {
  animateCounters();
});

//layout.js

const closeBtn = document.getElementById('menuClose');
const menuBtn = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const bottom_overlay=document.getElementById('bottom-overlay')
menuBtn.addEventListener('click', function () {
    menu.classList.add('active')
    bottom_overlay.classList.add('active')

  });
  closeBtn.addEventListener('click', function () {
    menu.classList.remove('active')
    bottom_overlay.classList.remove('active')



  });
  function toggleList(listId) {
    var list = document.getElementById(listId);

    if (!list.classList.contains('open')) {
        list.classList.add('open');
        list.style.maxHeight = list.scrollHeight + 'px';
    } else {
        list.classList.remove('open');
        list.style.maxHeight = '0';
    }
}
window.addEventListener('scroll', function () {
    var header = document.getElementById('header');

    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
