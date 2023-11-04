import {Module} from '../core/module'
import {getRandomColor} from '../utils'

export class BackgroundModule extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger() {  
        document.body.style.background = getRandomColor()
    }
    render(){
        const header = document.createElement('div')
        header.classList = 'header'

        const titleMini = document.createElement('h3')
        titleMini.classList = 'header-subtitle'
        titleMini.textContent = 'Демо-сайт'

        const titleBig = document.createElement('h1')
        titleBig.classList = 'header-title'
        titleBig.textContent = 'Чему можно научиться на первом модуле курса Джуниор Frontend-разработчик'

        

    

    }
    

}

