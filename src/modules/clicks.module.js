import { Module } from '../core/module'
import { addButtonAndClose } from '../utils.js'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.numderOfClick = 0;
        // this.screen = document.querySelector("body");
        this.screen = document.createElement("div");
        this.screen.className = "hidden screen";

        const btnBlockNumderOfClick = document.createElement('div');
        btnBlockNumderOfClick.className = "start-button";
        this.blockNumderOfClick = document.createElement("div");
        this.screen.append(this.blockNumderOfClick);
        document.body.append(this.screen);
        this.screen.style.backgroundColor = "#DEDBFB";
      }
      trigger() {
        this.screen.classList.remove("hidden");
        addButtonAndClose(this.screen);
        this.screen.addEventListener("click", (e) => {
          
          this.numderOfClick ++;
          this.blockNumderOfClick.style.fontSize = Math.floor(Math.random() * 1920 / 3) + "px";
          this.blockNumderOfClick.style.position = "fixed";
          this.blockNumderOfClick.style.color = "#605FF6";
          this.screen.setAttribute("onmousedown", "return false");
          this.screen.setAttribute("onselectstart", "return false");
          this.blockNumderOfClick.textContent = `${this.numderOfClick} `;

        });
        setTimeout(() => {
          this.blockNumderOfClick.style.fontSize = "100px";
          this.blockNumderOfClick.style.position = "fixed";
          this.screen.setAttribute("onmousedown", "return false");
          this.screen.setAttribute("onselectstart", "return false");
          this.blockNumderOfClick.textContent = `Вы кликнули ${this.numderOfClick} раз`;
    
          this.blockNumderOfClick.style.top = `${
            (this.screen.offsetHeight - this.blockNumderOfClick.offsetHeight) / 2
          }px`;
          this.blockNumderOfClick.style.left = `${
            (this.screen.offsetWidth - this.blockNumderOfClick.offsetWidth) / 2
          }px`;
        }, 3000);
        setTimeout(() => {
          this.blockNumderOfClick.remove();
        }, 6000);
        // setTimeout(() => {
        //     location.reload();
        //               }, 6001);
                     
      }
    }