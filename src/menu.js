import {Menu} from './core/menu';
import { BackgroundModule } from './modules/background.module';
import {GameModule} from './modules/GameModule';

export class ContextMenu extends Menu {
    constructor(selector,blocks) {
        super(selector)

        blocks.forEach(item => {
            let listItem = document.createElement('li');
            listItem.className = 'menu-item';
            listItem.dataset.type = item.id;
            listItem.innerText = item.text;
            this.el.append(listItem);
            this.backgroundeModule = new BackgroundModule(item.id, item.text)
            this.gameModule = new GameModule(item.id, item.text)
        
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
                this.backgroundeModule.trigger()
            } else if (currentItemId == 5){
                this.GameModule.trigger()
            }
        })
    }
}