import {Module} from '../core/module';
import {getRandomColor} from '../utils';

export class BackgroundModule extends Module {
    constructor(type, text){
        super(type, text);
    }
    trigger() {  
        document.body.style.background = getRandomColor();
    }
    render(){
        const header = document.createElement('div');
        header.classList = 'header';

        const titleMini = document.createElement('h3');
        titleMini.classList = 'header-subtitle';
        titleMini.textContent = 'Демо-сайт';
        header.append(titleMini)

        const titleBig = document.createElement('h1');
        titleBig.classList = 'header-title';
        titleBig.textContent = 'Чему можно научиться на первом модуле курса Джуниор Frontend-разработчик?';
        header.append(titleBig);

        const box = document.createElement('div');
        box.className = 'main-box';
        box.textContent = 'Кликни правой кнопкой мыши по любой части экрана :)';

        let wrapperImg = document.createElement('div');
        wrapperImg.classList = 'main-wrapper-img'
        header.append(wrapperImg);

        const mainImg = document.createElement('img');
        mainImg.src = '../../img/main.png';
        header.append(mainImg);
        
        document.body.append(header, box);
    }
}

