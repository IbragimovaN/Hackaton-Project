import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.numderOfClick = 0;
        this.screen = document.querySelector("body");
        this.blockNumderOfClick = document.createElement("div");
        this.screen.append(this.blockNumderOfClick);
      }
      trigger() {
        this.screen.addEventListener("click", (e) => {
          this.numderOfClick ++;
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
      }
    }