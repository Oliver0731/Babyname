// Baby Names Start
// 2020 Alberta Baby Names
// https://open.alberta.ca/opendata/frequency-and-ranking-of-baby-names-by-year-and-gender

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");
let input = document.getElementById("input");

// Initialize Array of Baby Names from Text File
let babyNames = await loadTextFile("data/baby-names.txt");

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "exact-length") {
    searchExactLength();
  } else if (selection === "range-length") {
    searchRangeLength();
  }
}

// Display All Characters
function displayAll() {
  document.getElementById("name-count").innerHTML = babyNames.length;
  for (let i = 0; i < babyNames.length; i++) {
    console.log(i);
    container.innerHTML += `<div>${babyNames[i]}</div>`;
  }
  console.log(babyNames.length);
}

// Display Names with Starting Letter
function searchStartingLetter() {
  container.innerHTML = `<div></div>`;

  let char = input.value.charAt(0).toLocaleUpperCase();
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].charAt(0) === char) {
      container.innerHTML += `<div>${babyNames[i]}</div>`;
    }
  }
  console.log(char);
}

// Display Names with Exact Length
function searchExactLength() {
  container.innerHTML = `<div></div>`;
  let val = input.value;
  for (let names of babyNames) {
    if (names.length == val) {
      container.innerHTML += `<div>${names}</div>`;
    } else {
      console.log(val);
    }
  }
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  container.innerHTML = `<div></div>`;
  let min = +prompt("Enter Min");
  let max = +prompt("Enter Max");
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].length <= max && babyNames[i].length >= min) {
      container.innerHTML += `<div>${babyNames[i]}</div>`;
    } else {
      console.log("error");
    }
  }
}

setInterval(blink, 1000);

function blink() {
  if (document.getElementById("go-btn").style.backgroundColor === "pink") {
    document.getElementById("go-btn").style.backgroundColor =
      "rgb(99, 146, 235)";
  } else {
    document.getElementById("go-btn").style.backgroundColor = "pink";
  }
}
