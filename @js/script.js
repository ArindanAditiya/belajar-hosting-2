// 1. Search Functionality___________________________
// HTML Element Selection

const searchPage = document.querySelector(".search");
const tblSearch = document.querySelector(".trigger-search");
const closeSearch = document.querySelector(".close-search");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".clear-content");
const indikator = document.querySelector(".indikator");
const loadingPage = document.querySelector(".loading");

// Event Listeners for Search
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
  updateResults();
});
searchIcon.addEventListener("click", function () {
  searchInput.value = "";
  indikator.innerHTML = "";
  searchIcon.classList.remove("muncul");
  searchIcon.classList.add("hilang");
  updateResults();
});

// 2. SEARCH RESULT PROCESSING________________________
// Data Arrays and Keyword Generation

const result = ["Beranda", "Profile", "Sambutan Kepala Sekolah", "Sejarah Singkat", "Visi dan Misi", "Fasilitas", "Jurusan ATPH", "Jurusan TKJ", "Foto", "Video", "Informasi Pendaftaran"];
const linkAnchor = ["index.html", "beranda.html", "sambutan.html", "sejarah.html", "visidanmisi.html", "fasilitas.html", "atph.html", "tkj.html", "foto.html", "video.html", "infopendaftaran.html"];
const keyWord = [];

console.table(keyWord);

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
originalElement.classList.add("result", "sembunyikanResult");

// 3. SEARCH SYNCHRONIZATION_____________________________
// Input Synchronization and Data Combination

let allData = [];
let keyBeranda = keyWord.slice(0, 7);
let keyProfile = keyWord.slice(7, 14);
let keySambutan = keyWord.slice(14, 37);
let keySejarah = keyWord.slice(37, 52);
let keyVisiMisi = keyWord.slice(52, 66);
let keyFasilitas = keyWord.slice(66, 74);
let keyAtph = keyWord.slice(74, 86);
let keyTkj = keyWord.slice(86, 97);
let keyFoto = keyWord.slice(97, 101);
let keyVideo = keyWord.slice(101, 106);
let keyPendaftaran = keyWord.slice(106, 127);

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
    case "Jurusan TKJ":
      data.keyWord = keyTkj;
      break;
    case "Foto":
      data.keyWord = keyFoto;
      break;
    case "Video":
      data.keyWord = keyVideo;
      break;
    case "Informasi Pendaftaran":
      data.keyWord = keyPendaftaran;
      break;
  }

  allData.push(data);
}

// 4. Search Result Display
searchInput.addEventListener("input", updateResults);

function updateResults() {
  const inputLower = searchInput.value.toLowerCase();
  let found = false;

  // Remove previous results
  parent.querySelectorAll(".result").forEach((element) => {
    if (element !== originalElement) {
      element.remove();
    }
  });

  if (inputLower === "") {
    indikator.innerHTML = "";
    return;
  }

  for (let i = 0; i < allData.length; i++) {
    if (allData[i].keyWord.some((keyword) => keyword.includes(inputLower))) {
      found = true;

      let newElement = originalElement.cloneNode(true);
      newElement.innerHTML = `${allData[i].result}`;
      newElement.classList.remove("sembun58YyikanResult");
      newElement.classList.add("munculkanResult");
      newElement.onclick = () => {
        loadingPage.classList = "munculkan-loading";
        location.href = `morepage/${allData[i].anchor}`;
      };
      parent.appendChild(newElement);
    }
  }

  if (!found) {
    indikator.innerHTML = "Tidak ada hasil";
  } else {
    indikator.innerHTML = "hasil";
  }
}

// 5. MENU TOGGLE
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("nav-tinggi");
});

// 6. MODE SWITCH DARK AND LIGHT2
const modeToggle = document.querySelector(".mode-btn");
const icon = document.querySelector(".icon");
const components = document.querySelectorAll(".mode");

modeToggle.addEventListener("click", function () {
  icon.classList.toggle("geser");
  components.forEach((el) => {
    el.classList.toggle("light-mode");
  });
});

// 7. GALLERY IMAGE DISPLAY
const petImg1 = document.querySelector(".pet1");
const petImg2 = document.querySelector(".pet2");
const petImg3 = document.querySelector(".pet3");
const computerImg1 = document.querySelector(".computer1");
const computerImg2 = document.querySelector(".computer2");
const computerImg3 = document.querySelector(".computer3");
const workingImg1 = document.querySelector(".working1");
const workingImg2 = document.querySelector(".working2");
const workingImg3 = document.querySelector(".working3");

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
