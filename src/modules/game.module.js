import { Module } from '../core/module';

export class GameModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    if (isGameOver) {
      showGame();
    }
  }
}

let isGameOver = true;

const showGame = () => {
  clearGame();

  const gameElement = document.createElement("div");
  gameElement.className = "game";

  const dinoElement = document.createElement("div");
  dinoElement.id = "dino";
  gameElement.append(dinoElement);

  const cactusElement = document.createElement("div");
  cactusElement.id = "cactus";
  gameElement.append(cactusElement);

  document.body.append(gameElement);

  document.addEventListener("keydown", () => jump());

  const jump = () => {
    if (dinoElement.classList != "jump") {
      dinoElement.classList.add("jump");
    }
    setTimeout(() => {
      dinoElement.classList.remove("jump");
    }, 300);
  };

  const isAlive = setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dinoElement).getPropertyValue("top"));
    const cactusLeft = parseInt(window.getComputedStyle(cactusElement).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      gameOver();
    }
  }, 10);

  showStartButton();
};

const clearGame = () => {
  const gameElement = document.querySelector(".game");
  if (gameElement) {
    gameElement.remove();
  }
};

const gameOver = () => {
  isGameOver = true;
  clearGame();
  alert("GAME OVER!! Нажмите 'Старт', чтобы начать игру заново.");
};

const showStartButton = () => {
  const startButton = document.createElement("button");
  startButton.textContent = "Старт";
  startButton.className = "start-button";

  startButton.addEventListener("click", () => {
    if (isGameOver) {
      showGame();
    }
  });

  document.body.append(startButton);
};