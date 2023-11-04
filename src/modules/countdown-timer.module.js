import {Module} from '../core/module'
//import '../css/timer.css'

export class CountDownTimerModule extends Module {
  constructor(type = 'timer', text = 'Таймер отсчета') {
        super(type, text)
      }
 
  renderTimerBlock() {
    this.timerContainer = document.createElement('div');
    this.timerContainer.className = 'timer-block';
    this.timerContainer.id = 'timer';
        
    const titleTimerBlock = document.createElement('h1');
    titleTimerBlock.className = 'timer-block-title';
    titleTimerBlock.textContent = 'Привет, друг!'
        
    const textTimerBlock = document.createElement('p');
    textTimerBlock.className = 'timer-block-text';
    textTimerBlock.textContent = 'Напиши время в секундах:';
        
    const inputTimerBlock = document.createElement('input');
    inputTimerBlock.className = 'timer-block-input';
    inputTimerBlock.type = 'number';
    inputTimerBlock.min = '1';
    inputTimerBlock.value = '10';
        
    const divButtonsTimerBlock = document.createElement('div');
    divButtonsTimerBlock.className = 'timer-block-div-buttons';
        
    const startBtnTimerBlock = document.createElement('button');
    startBtnTimerBlock.className = 'timer-block-button';
    startBtnTimerBlock.textContent = 'Погнали!';
    startBtnTimerBlock.addEventListener('click', () => this.startTimer(inputTimerBlock));
        
    const stopBtnTimerBlock = document.createElement('button');
    stopBtnTimerBlock.className = 'timer-block-button';
    stopBtnTimerBlock.textContent = 'Не хочу!';
    stopBtnTimerBlock.addEventListener('click', () => this.stopTimer(this.timerContainer));
        
    divButtonsTimerBlock.append(startBtnTimerBlock, stopBtnTimerBlock);
    this.timerContainer.append(titleTimerBlock, textTimerBlock, inputTimerBlock, divButtonsTimerBlock);
    document.body.append(this.timerContainer);
  }

  startTimer(input) {
    let countTime = parseInt(input.value);
    this.timerContainer.innerHTML = '';
    const counter = document.createElement('h1');
    counter.innerText = `${countTime}`;
    counter.className = 'timer-block-count';

    const timeCounter = setInterval(() => {
      if (countTime >= 0) {
        counter.innerText = `${countTime - 1}`;
      }

      countTime--;
      if (countTime === -1) {
        counter.innerText = 'Ура! Счёт закончен'
      }
      if (countTime <= -4) {
        clearInterval(timeCounter)
        this.stopTimer(this.timerContainer)
      }
    }, 1000)

    this.timerContainer.append(counter)
  }

  stopTimer(element) {
    element.innerHTML = ''
    element.remove()
  }
}