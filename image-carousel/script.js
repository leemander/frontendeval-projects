const imageEl = document.getElementById("image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = [];
let index = 0;

async function getImages() {
  const results = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
  const data = await results.json();
  if (data) {
    data.data.children.forEach((child) => {
      if (child.data.post_hint === "image") {
        images.push(child.data.url_overridden_by_dest);
      }
    });
  }
  if (images.length > 0) {
    imageEl.style.backgroundImage = `url(${images[index]})`;
  }
}

function changeImage(direction) {
  if (direction === "next") {
    index + 1 < images.length ? index++ : (index = 0);
  } else if (direction === "prev") {
    index > 0 ? index-- : (index = images.length - 1);
  }
  imageEl.style.backgroundImage = `url(${images[index]})`;
}

getImages();

let autoChange = setInterval(() => changeImage("next"), 3000);

prevBtn.addEventListener("click", () => {
  clearInterval(autoChange);
  changeImage("prev");
  autoChange = setInterval(() => changeImage("next"), 3000);
});
nextBtn.addEventListener("click", () => {
  clearInterval(autoChange);
  changeImage("next");
  autoChange = setInterval(() => changeImage("next"), 3000);
});
