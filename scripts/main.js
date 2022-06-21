const headerNav = document.getElementById("header__nav");
const headerNavMobile = document.getElementById("header__nav--mobile");

const carouselDiv = document.getElementById("carousel");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
let pos = 0;

const imgPaths = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
];

const image = document.createElement("img");
image.className = "carousel__img";
image.src = imgPaths[pos];
carouselDiv.appendChild(image);

window.onload = () => {
  if (window.innerWidth < 720) {
    headerNavMobile.style.display = "block";
    headerNav.style.display = "none";
  } else {
    headerNavMobile.style.display = "none";
    headerNav.style.display = "block";
  }
};

window.onresize = () => {
  if (window.innerWidth < 720) {
    headerNavMobile.style.display = "block";
    headerNav.style.display = "none";
  } else {
    headerNavMobile.style.display = "none";
    headerNav.style.display = "block";
  }
};

const showNextImg = () => {
  if (pos >= imgPaths.length - 1) {
    pos = 0;
  } else {
    pos += 1;
  }
  image.src = imgPaths[pos];
};

const showPrevImg = () => {
  if (pos == 0) {
    pos = imgPaths.length - 1;
  } else {
    pos -= 1;
  }
  image.src = imgPaths[pos];
};

btnNext.addEventListener("click", showNextImg);
btnPrev.addEventListener("click", showPrevImg);

const showNav = () => {
  const headerEl = document.querySelector("header");
};

headerNavMobile.addEventListener("click", showNav);

setInterval(showNextImg, 1000);
