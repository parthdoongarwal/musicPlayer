const forwordEl = document.querySelector("#next-button");
const audioEl = document.querySelector("#audio");
const backwordEl = document.querySelector("#backword-button");
const h1El = document.querySelector("#h11");
const Image = document.querySelector("#imageee");

let count = 0;

const data = [
  {
    img: "/Cindrella.jpg",
    name: "Full『Cinderella",
    url: "/[MP3FY] Komi-san Can't Communicate - Opening Full『Cinderella』by Cidergirl.mp3",
  },

  {
    img: "/Cradles.jpg",
    name: "Cradles",
    url: "/[MP3FY] Sub Urban - Cradles [Official Music Video].mp3",
  },

  {
    img: "/ErasedEn.jpg",
    name: "Erased ending song",
    url: "/[MP3FY] Sayuri - Sore wa Shiisana Hikari no Youna _ Boku Dake Ga Inai Machi (ERASED) FULL ENDING.mp3",
  },

  {
    img: "https://i.ytimg.com/vi/foKNT2tLfl8/hqdefault.jpg",
    url: "/[MP3FY] FullMetal Alchemist Brotherhood ED 1 (1).mp3",
    name: "Full metal Brotherhood",
  },
  {
    img: "https://s.yimg.com/ny/api/res/1.2/bj.C.kc8dq5eHOFW4W4PwQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/spin_digital_media/6bb28b3a3d14ca8b87df83dea3e1d3d3",
    url: `/XXXTENTACION_-_Jocelyn_Flores_Audio[ConverteZilla.com].mp3`,
    name: "xxxtentacion",
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
