import {Menu} from './core/menu';
import { BackgroundModule } from './modules/background.module';
// import {AudioRandomModule} from './modules/AudioRandomModule';
import {CountDownTimerModule} from './modules/countdown-timer.module';
// import {GameModule} from './modules/game.module';
import {ClicksModule} from './modules/clicks.module';

export class ContextMenu extends Menu {    
#modules
    constructor(selector) {
        super(selector);

            this.backgroundModule = new BackgroundModule(1, 'Сменить цвет экрана'),
            //  this.gameModule = new GameModule(5, 'Поиграть в игру'),
            // this.audioRandomModule = new AudioRandomModule(2, 'Послушать рандомный звук'),
            this.countDownTimerModule = new CountDownTimerModule(3, 'Запустить таймер'),
            this.clicksModule = new ClicksModule(4, 'Постичай клики')

            this.#modules = [
                this.backgroundModule,
                //  this.gameModule,
                // this.audioRandomModule,
                this.countDownTimerModule,
                this.clicksModule
            ]

        this.el.addEventListener('click', (event) =>{
            let currentItem = event.target;
            let currentItemId = currentItem.dataset.type;
            if (currentItemId == 1){
                this.backgroundModule.trigger();
            } else if (currentItemId == 2){
                this.audioRandomModule.trigger();
            }else if(currentItemId == 3){
                this.countDownTimerModule.trigger();
            } else if(currentItemId == 4){
                this.clicksModule.trigger();
            }else if (currentItemId == 5){
                this.gameModule.trigger();
            }
            
        })

        this.el.className = 'menu hidden';
    }
    open(){
        document.addEventListener('contextmenu', (event) =>{
            event.preventDefault();

            const menuHeight = this.el.offsetHeight;
            const menuWidth = this.el.offsetWidth;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const topPosition = event.clientY;
            const leftPosition = event.clientX;

            if (topPosition + menuHeight > windowHeight) {
                this.el.style.top = `${topPosition - menuHeight}px`;
            } else {
                this.el.style.top = `${topPosition}px`;
            }

            if (leftPosition + menuWidth > windowWidth) {
                this.el.style.left = `${leftPosition - menuWidth}px`;
            } else {
                this.el.style.left = `${leftPosition}px`;
            }

            this.el.classList.remove('hidden');
        })
        
    }
    close(){
        document.addEventListener('click', (event) =>{
            if(event.button !== 2){
                this.el.classList.add('hidden');
            }
        })  
    }
    render(){
        this.backgroundModule.render();
        document.body.append(this.el);
    
    }
    add(modules){
        modules = this.#modules
        modules.forEach((item) => {
            let liHTML = item.toHTML();
            this.el.insertAdjacentHTML('beforeend', liHTML);
        });
    }
}