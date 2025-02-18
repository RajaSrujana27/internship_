
const categories = {
  fruits: ["🍎", "🍌", "🍇", "🍊", "🍓", "🍍", "🥭", "🍒"],
  emojis: ["😀", "😎", "🤩", "😍", "🥳", "🤠", "😜", "😇"],
  animals: ["🐶", "🐱", "🐼", "🦁", "🐧", "🐘", "🦒", "🐠"],
  planets: ["🌍", "🌕", "🪐", "🌞", "🌙", "⭐", "🌌", "🌠"],
  flags: ["🇺🇸", "🇨🇦", "🇯🇵", "🇫🇷", "🇧🇷", "🇮🇳", "🇦🇺", "🇿🇦"]
};

let selectedCategory = [];
let flippedCards = [];
let matchedCards = [];
let score = 0;
let timer;
let timeLeft = 30;

const landingPage = document.querySelector(".landing-page");
const gameContainer = document.querySelector(".game-container");
const cardsGrid = document.querySelector(".cards-grid");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");
const gameResult = document.getElementById("game-result");
const gameOverScreen = document.querySelector(".game-over");
const restartButton = document.getElementById("restart-button");
const exitButton = document.getElementById("exit-button");

document.querySelectorAll(".category-buttons button").forEach(button => {
  button.addEventListener("click", () => {
      selectedCategory = categories[button.dataset.category];
      landingPage.classList.add("hidden");
      gameContainer.classList.remove("hidden");
      startGame();
  });
});

function startGame() {
  const cards = [...selectedCategory, ...selectedCategory];
  cards.sort(() => Math.random() - 0.5);
  cardsGrid.innerHTML = cards.map(card => `
      <div class="card">
          <div class="card-inner">
              <div class="card-front"></div>
              <div class="card-back">${card}</div>
          </div>
      </div>
  `).join("");
  cardsGrid.querySelectorAll(".card").forEach(card => card.addEventListener("click", handleCardClick));
  

  cardsGrid.querySelectorAll(".card").forEach(card => card.classList.add("flipped"));
  
  setTimeout(() => {
      cardsGrid.querySelectorAll(".card").forEach(card => card.classList.remove("flipped"));
      startTimer();
  }, 4000);
}
function handleCardClick(event) {
  const card = event.currentTarget;
  if (flippedCards.length < 2 && !flippedCards.includes(card) && !card.classList.contains("matched")) {
      card.classList.add("flipped");
      flippedCards.push(card);
      document.getElementById("flip-sound").play();

      if (flippedCards.length === 2) {
          setTimeout(checkMatch, 1000);
      }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const card1Content = card1.querySelector(".card-front").textContent;
  const card2Content = card2.querySelector(".card-front").textContent;
  if (card1.querySelector(".card-back").textContent === card2.querySelector(".card-back").textContent) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards.push(card1, card2);

      if (matchedCards.length === selectedCategory.length * 2) {
          endGame(true);
      }
  } else {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
  }
  flippedCards = [];
}


 function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.querySelector(".card-back").textContent === card2.querySelector(".card-back").textContent) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards.push(card1, card2);
      score += 10;
      scoreDisplay.textContent = score;
      document.getElementById("match-sound").play();

      card1.style.backgroundColor = "#4caf50";
      card2.style.backgroundColor = "#4caf50";

      card1.querySelector(".card-back").style.visibility = "visible";
      card2.querySelector(".card-back").style.visibility = "visible";

      if (matchedCards.length === selectedCategory.length * 2) {
          endGame(true);
      }
  } else {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
  }
  flippedCards = [];
} 

function startTimer() {
  timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft === 0) {
          endGame(false);
      }
  }, 1000);
}

function endGame(isWin) {
  clearInterval(timer);
  gameOverScreen.classList.remove("hidden");
  finalScoreDisplay.textContent = score;
  gameResult.textContent = isWin ? "Congratulations! You won!" : "Time's up! You lost!";
  document.getElementById("game-over-sound").play();
}

restartButton.addEventListener("click", () => {
  location.reload();
});

exitButton.addEventListener("click", () => {
  window.close(); 
});