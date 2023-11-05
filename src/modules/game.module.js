import { Module } from "../core/module.js";
import "../styles/gameStyles.css";
import { addButtonAndClose } from "../utils.js";


let gameIsInited = false;

export class GameModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  
  trigger() {
    if (isGameOver && !gameIsInited) {
      initGame();
      gameIsInited = true;
    }
  }
}


let isGameOver = true;
let score = 0;
let scoreTimer;

let gameElement;
let gameContainer;
let gameOverDiv;
let scoreElement;
let startButton;
let dinoElement;
let cactusElement;

let closeButton; // Добавляем кнопку для закрытия

const initGame = () => {

  
  // контейнер для модуля игры
  gameContainer = document.createElement("div")
  gameContainer.classList.add("game-container")
  document.body.appendChild(gameContainer)
  
  startButton = document.createElement("button");
  startButton.className = "start-button";
  const spanElement = document.createElement("span");
  spanElement.textContent = "Старт";
  startButton.appendChild(spanElement);
  
  startButton.addEventListener("click", () => {
    if (isGameOver) {
      showGame();
    }
  });
  
  gameContainer.appendChild(startButton);

   
  gameOverDiv = document.createElement("div");
  gameOverDiv.className = "game-over-div";
  const gameOverImage = document.createElement("img");
  gameOverImage.src = "/src/img/game_over_2.png";
  gameOverImage.className = "game-over-image";
  gameOverDiv.appendChild(gameOverImage);
  gameContainer.appendChild(gameOverDiv);
  
  gameElement = document.createElement("div");
  gameElement.className = "game";
  
  dinoElement = document.createElement("div");
  dinoElement.id = "dino";
  gameElement.appendChild(dinoElement);
  
  cactusElement = document.createElement("div");
  cactusElement.id = "cactus";
  gameElement.appendChild(cactusElement);
  
  gameContainer.appendChild(gameElement);
  
  scoreElement = document.createElement("div");
  scoreElement.className = "score";
  gameContainer.appendChild(scoreElement);



  const jump = () => {
    if (dinoElement.classList != "jump") {
      dinoElement.classList.add("jump");
    }
    setTimeout(() => {
      dinoElement.classList.remove("jump");
    }, 300);
  };

  document.addEventListener("keydown", (event) => {
    jump();
  });

  addButtonAndClose(gameContainer)
  
}

const showGame = () => {
  startButton.style.display = "none"
  gameElement.style.display = "block"
  

  score = 0;
  startScoreTimer();
  isGameOver = false;

  const isAlive = setInterval(() => {
    const dinoComputedStyle = window.getComputedStyle(dinoElement);
    const dinoTop = parseInt(dinoComputedStyle.getPropertyValue("top"));

    const dinoLeft = parseInt(dinoComputedStyle.getPropertyValue("left"));

    const dinoWidth = parseInt(dinoComputedStyle.getPropertyValue("width"));

    const cactusLeft = parseInt(
      window.getComputedStyle(cactusElement).getPropertyValue("left")
    );


    if (
      dinoLeft + dinoWidth > cactusLeft &&
      dinoTop >= 240 &&
      !(cactusLeft < 80)
    ) {
      clearInterval(isAlive);
      gameOver();
    }
  }, 10);

  hideStartButton();
  updateScore();
  

};

const clearGame = () => {
  gameElement.style.display = "none"
};

const gameOver = () => {
  isGameOver = true;
  clearGame();
  stopScoreTimer();
  
  gameOverDiv.style.display = "block";

  setTimeout(() => {
    gameOverDiv.style.display = "none";
    startButton.style.display = "flex"
    showStartButton();
  }, 3000);
};

const showStartButton = () => {
  startButton.style.display = "flex"
};

const updateScore = () => {
  let scoreElement = document.querySelector(".score");
  scoreElement.textContent = `Время игры: ${Math.floor(score)}`;
};

function startScoreTimer() {
  scoreTimer = setInterval(() => {
    score += 1; 
    updateScore();
  }, 1000);
}

function stopScoreTimer() {
  clearInterval(scoreTimer);
}

const hideStartButton = () => {
  startButton.style.display = "none"
};


