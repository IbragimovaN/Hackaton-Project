import {Menu} from './core/menu'

class ContextMenuRender {
    constructor(){
        this.menu = document.createElement('ul');
        this.menu.className = 'menu hidden'; 
    
    }

    render(){
        const listItem1 = document.createElement('li')
        listItem1.className = 'menu-item';
        listItem1.textContent = 'блок 1';

        const listItem2 = document.createElement('li')
        listItem2.className = 'menu-item';
        listItem2.textContent = 'блок 2';

        const listItem3 = document.createElement('li')
        listItem3.className = 'menu-item';
        listItem3.textContent = 'блок 3';

        const listItem4 = document.createElement('li')
        listItem4.className = 'menu-item';
        listItem4.textContent = 'блок 4';

        const listItem5 = document.createElement('li')
        listItem5.className = 'menu-item';
        listItem5.textContent = 'блок 4';

        this.menu.append(listItem1, listItem2, listItem3, listItem4, listItem5);
        document.body.append(this.menu)
        return this.menu
    }
}

const ContextMenuObj = new ContextMenuRender
const menuHTML = ContextMenuObj.render()


export class ContextMenu extends Menu {
    constructor(menuHTML) {
        super(menuHTML)
    }
    open(){
        document.addEventListener('contextmenu', (event) =>{
            event.preventDefault();
            console.log(event)
            menuHTML.style.top = `${event.clientY}px`
            menuHTML.style.left = `${event.clientX}px`
            menuHTML.classList.remove('hidden')
        })
        
    }
    close(){
        document.addEventListener('click', (event) =>{
            if(event.button !== 2){
                menuHTML.classList.add('hidden')
            }
        })
        
    }
}


// function renderMenu (){
//     const body = document.querySelector('body')
//     const menuWindow = document.createElement('div')
//     menuWindow.style.border = '5px solid black';
//     menuWindow.innerText = 'допустим Тут будет меню'
//     body.append(menuWindow)
//     // return menuWindow
// }
