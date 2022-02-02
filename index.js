'use strict'


let wordList = [
  'sushi',
  'crabs',
  'patio',
  'darts',
  'horse',
  'piano',
  'couch',
  'candy',
  'tests',
];

let randomIndex = Math.floor(Math.random() * wordList.length);
let secret = wordList[randomIndex];

let currentAttempt = '';
let history = [];

let grid = document.getElementById('grid');

function buildGrid() {
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < 5; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = 'x';
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

buildGrid();


let wordList = [
  // 'abandon',
  // 'abandoned',
  // 'patio',
  // 'darts',
  // 'horse',
  'piano',
];

let randomIndex = Math.floor(Math.random() * wordList.length);
let secret = wordList[randomIndex];

let attempts = ['peni'];
let currentAttempt = '';

updateGrid();
// let counter = 0;

function updateGrid() {
  let row = grid.firstChild
  for (let attempt of attempts) {
    drawPastAttempt(row, attempt);
    row = row.nextSibling;
  }
  drawCurrentAttempt(row, currentAttempt);
}

function drawPastAttempt(row, attempt) {
  for (let i = 0; i < 5; i++) {
    let cell = row.children[i];
    if (attempt[i] !== undefined) {
      cell.textContent = attempt[i]
    } else {
      cell.textContent = '_'
    }
    cell.style.backgroundColor = getBgColor(attempt, i);

    // console.log('test');
    // cell.style.backgroundColor = getBgColor(attempt, i);
  }
}

function drawCurrentAttempt(row, attempt) {
  for (let i = 0; i < 5; i++) {
    let cell = row.children[i];
    cell.textContent = attempt[i] || '_';
    cell = cell.nextSibling;
  }
}

function getBgColor(attempt, i) {
  let correctLetter = secret[i];
  let attemptLetter = attempt[i];
  if (attemptLetter === undefined || 
    secret.indexOf(attemptLetter) === -1
    ) {
    return;
    }
  if (correctLetter === attemptLetter) {
    return 'green';
  }
  return 'yellow';
}

// document.addEventListener('click', updateGrid);
