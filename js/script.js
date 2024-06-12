// 1. Search Functionality___________________________
// HTML Element Selection

const searchPage = document.querySelector(".search");
const tblSearch = document.querySelector(".trigger-search");
const closeSearch = document.querySelector(".close-search");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".clear-content");
const indikator = document.querySelector(".indikator");

//Event Listeners for Search
tblSearch.addEventListener("click", () => {
  searchPage.classList.toggle("hilang-muncul");
});
closeSearch.addEventListener("click", () => {
  searchPage.classList.toggle("hilang-muncul");
});
searchInput.addEventListener("input", function () {
  if (searchInput.value != "") {
    searchIcon.classList = "clear-content muncul";
  } else {
    searchIcon.classList = "clear-content hilang";
  }
});
searchIcon.addEventListener("click", function () {
  searchInput.value = "";
  originalElement.classList = "result sembunyikanResult";
  searchIcon.classList = "clear-content hilang";
  indikator.innerHTML = "";
});

// 2. SEARCH RESULT PROCESSING________________________
// Data Arrays and Keyword Generation

const result = ["Beranda", "Profile", "Sambutan Kepala Sekolah", "Sejarah Singkat", "Visi dan Misi", "Fasilitas", "Jurusan ATPH", "jurusan TKJ", "Foto", "Video"];
const linkAnchor = ["index.html", "beranda.html", "sambutan.html", "sejarah.html", "visidanmisi.html", "fasilitas.html", "atph.html", "tkj.html", "foto.html", "video.html"];
const keyWord = [];

// Membuat array keyword dengan huruf yang bertambah
result.forEach((kata) => {
  for (let i = 0; i < kata.length; i++) {
    let huruf = "";
    for (let j = 0; j <= i; j++) {
      huruf += kata[j];
    }
    keyWord.push(huruf.toLowerCase());
  }
});

// Creating Search Result Elements
const originalElement = document.querySelector(".result");
const parent = originalElement.parentNode;
let i = 0;
originalElement.classList = "result sembunyikanResult";

var newElement;
while (i < result.length) {
  newElement = originalElement.cloneNode(true);
  newElement.innerHTML = `${result[i]}`;
  parent.appendChild(newElement);
  i++;
}

// 3. SEARCH SYNCHRONIZATION_____________________________
// Input Synchronization and Data Combination
let inputSearchValue;
setInterval(() => {
  inputSearchValue = searchInput.value.toLowerCase();
}, 0);

let allData = [];
let keyBeranda = keyWord.slice(0, 7);
let keyProfile = keyWord.slice(7, 14);
let keySambutan = keyWord.slice(14, 37);
let keySejarah = keyWord.slice(37, 52);
let keyVisiMisi = keyWord.slice(52, 66);
let keyFasilitas = keyWord.slice(65, 74);
let keyAtph = keyWord.slice(74, 86);
let keyTkj = keyWord.slice(86, 97);
let keyFoto = keyWord.slice(97, 101);
let keyVideo = keyWord.slice(101, 106);

for (let i = 0; i < result.length; i++) {
  let data = {
    result: result[i],
    anchor: linkAnchor[i],
    keyWord: [],
  };

  switch (result[i]) {
    case "Beranda":
      data.keyWord = keyBeranda;
      break;
    case "Profile":
      data.keyWord = keyProfile;
      break;
    case "Sambutan Kepala Sekolah":
      data.keyWord = keySambutan;
      break;
    case "Sejarah Singkat":
      data.keyWord = keySejarah;
      break;
    case "Visi dan Misi":
      data.keyWord = keyVisiMisi;
      break;
    case "Fasilitas":
      data.keyWord = keyFasilitas;
      break;
    case "Jurusan ATPH":
      data.keyWord = keyAtph;
      break;
    case "jurusan TKJ":
      data.keyWord = keyTkj;
      break;
    case "Foto":
      data.keyWord = keyFoto;
      break;
    case "Video":
      data.keyWord = keyVideo;
      break;
  }

  allData.push(data);
}

// Search Result Display
let isFirstRun = true; // variabel penanda

searchInput.addEventListener("input", () => {
  const inputLower = searchInput.value.toLowerCase();
  let found = false;
  let keySama = false;

  for (let i = 0; i < allData.length; i++) {
    if (allData[i].keyWord.includes(inputLower)) {
      keySama = true;
      found = true;

      newElement.innerHTML = `${allData[i].result}`;
      newElement.classList = "result munculkanResult";
      newElement.onclick = () => {
        location.href = `${allData[i].anchor}`;
      };

      // hanya dijalankan sekali
      if (isFirstRun) {
        if (allData[i + 1] && allData[i + 1].keyWord.includes(inputLower)) {
          let newElementClone = originalElement.cloneNode(true);
          parent.appendChild(newElementClone);
          newElementClone.innerHTML = `${allData[i + 1].result}`;
          newElementClone.classList = "result munculkanResult";
          newElementClone.onclick = () => {
            location.href = `${allData[i + 1].anchor}`;
          };

          isFirstRun = false; // ubah penanda menjadi false
        }
      }
      break;
    }
  }

  if (!found) {
    indikator.innerHTML = "Tidak ada hasil";
    newElement.classList = "result sembunyikanResult";
  }

  if (inputLower === "") {
    indikator.innerHTML = "";
  } else if (found) {
    indikator.innerHTML = "hasil";
  } else {
    indikator.innerHTML = "tidak ada hasil";
  }
});

setInterval(() => {});
// 4. MENU TOGGLE
// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("nav-tinggi");
});

// 5. MODE SWITCH DARK AND LIGHT
// Mode Toggle
const modeToggle = document.querySelector(".mode-btn");
const icon = document.querySelector(".icon");
const components = document.querySelectorAll(".mode");

modeToggle.addEventListener("click", function () {
  icon.classList.toggle("geser");
  components.forEach((el) => {
    el.classList.toggle("light-mode");
  });
});

// 6. GALLERY IMAGE DISPLAY
// Gallery Image Functions
let petImg1 = document.querySelector(".pet1");
let petImg2 = document.querySelector(".pet2");
let petImg3 = document.querySelector(".pet3");
let computerImg1 = document.querySelector(".computer1");
let computerImg2 = document.querySelector(".computer2");
let computerImg3 = document.querySelector(".computer3");
let workingImg1 = document.querySelector(".working1");
let workingImg2 = document.querySelector(".working2");
let workingImg3 = document.querySelector(".working3");

function semua() {
  computerImg1.style.display = "block";
  computerImg2.style.display = "block";
  computerImg3.style.display = "block";
  petImg1.style.display = "block";
  petImg2.style.display = "block";
  petImg3.style.display = "block";
  workingImg1.style.display = "block";
  workingImg2.style.display = "block";
  workingImg3.style.display = "block";
}

function computer() {
  computerImg1.style.display = "block";
  computerImg2.style.display = "block";
  computerImg3.style.display = "block";
  petImg1.style.display = "none";
  petImg2.style.display = "none";
  petImg3.style.display = "none";
  workingImg1.style.display = "none";
  workingImg2.style.display = "none";
  workingImg3.style.display = "none";
}

function working() {
  workingImg1.style.display = "block";
  workingImg2.style.display = "block";
  workingImg3.style.display = "block";
  computerImg1.style.display = "none";
  computerImg2.style.display = "none";
  computerImg3.style.display = "none";
  petImg1.style.display = "none";
  petImg2.style.display = "none";
  petImg3.style.display = "none";
}

function pet() {
  petImg1.style.display = "block";
  petImg2.style.display = "block";
  petImg3.style.display = "block";
  computerImg1.style.display = "none";
  computerImg2.style.display = "none";
  computerImg3.style.display = "none";
  workingImg1.style.display = "none";
  workingImg2.style.display = "none";
  workingImg3.style.display = "none";
}
