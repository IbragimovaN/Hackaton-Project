import {Menu} from './core/menu';
// import { BackgroundModule } from './modules/background.module';
// import {AudioRandomModule} from './modules/AudioRandomModule';
// import {CountDownTimerModule} from './modules/countdown-timer.module'
// import {GameModule} from './modules/game.module';
import {ClicksModule} from './modules/clicks.module'

export class ContextMenu extends Menu {
    constructor(selector,blocks) {
        super(selector)

        blocks.forEach(item => {
            let listItem = document.createElement('li');
            listItem.className = 'menu-item';
            listItem.dataset.type = item.id;
            listItem.innerText = item.text;
            this.el.append(listItem);
            // this.backgroundeModul = new BackgroundModule(item.id, item.text)
            // this.gameModule = new GameModule(item.id, item.text)
            // this.audioRandomModule = new AudioRandomModule(item.id, item.text)
            // this.countDownTimerModule = new CountDownTimerModule(item.id, item.text)
            this.clicksModule = new ClicksModule(item.id, item.text)
        
        }) 
        this.el.className = 'menu hidden'
        
    }
    open(){
        document.addEventListener('contextmenu', (event) =>{
            event.preventDefault();
            this.el.style.top = `${event.clientY}px`
            this.el.style.left = `${event.clientX}px`
            this.el.classList.remove('hidden')
        })
        
    }
    close(){
        document.addEventListener('click', (event) =>{
            if(event.button !== 2){
                this.el.classList.add('hidden')
            }
        })
        
    }
    render(){
            document.body.append(this.el)
    
    }
    add(){
        this.el.addEventListener('click', (event) =>{
            let currentItem = event.target
            let currentItemId = currentItem.dataset.type
            if (currentItemId == 1){
                this.backgroundModule.trigger()
            } else if (currentItemId == 2){
                this.audioRandomModule.trigger()
            }else if(currentItemId == 3){
                this.countDownTimerModule.trigger()
            } else if(currentItemId == 4){
                this.clicksModule.trigger()
            }else if (currentItemId == 5){
                this.gameModule.trigger()
            }
        })
    }
}