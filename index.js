const forwordEl = document.querySelector("#next-button");
const audioEl = document.querySelector("#audio");
const backwordEl = document.querySelector("#backword-button");
const h1El = document.querySelector("#h11");
const Image = document.querySelector("#imageee");

let count = 0;

const data = [
  {
    img: "/images/Cindrella.jpg",
    name: "Full『Cinderella』by",
    url: "/audio/[MP3FY] Komi-san Can't Communicate - Opening Full『Cinderella』by Cidergirl.mp3",
  },

  {
    img: "/images/Cradles.jpg",
    name: "Cradles",
    url: "/audio/[MP3FY] Sub Urban - Cradles [Official Music Video].mp3",
  },

  {
    img: "/images/ErasedEn.jpg",
    name: "Erased ending song",
    url: "/audio/[MP3FY] Sayuri - Sore wa Shiisana Hikari no Youna _ Boku Dake Ga Inai Machi (ERASED) FULL ENDING.mp3",
  },

  {
    img: "https://i.ytimg.com/vi/foKNT2tLfl8/hqdefault.jpg",
    url: "/audio/[MP3FY] FullMetal Alchemist Brotherhood ED 1 (1).mp3",
    name: "Full metal Brotherhood",
  },
];

function Next() {
  if (count >= data.length - 1) {
    count = 0;
  } else {
    count++;
  }

  h1El.textContent = data[count].name;
  console.log(count);
  audioEl.src = data[count].url;
  audioEl.play();
  Image.src = data[count].img;
}

function Previus() {
  if (count <= 0) {
    count = data.length - 1;
  } else {
    count--;
  }

  Image.src = data[count].img;
  h1El.textContent = data[count].name;
  console.log(count);
  audioEl.src = data[count].url;
  audioEl.play();
}
