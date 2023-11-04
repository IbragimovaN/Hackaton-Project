import './styles.css'
import {ContextMenu} from './menu'

const menuItems = [
    { id: 1, text: 'Сменить цвет экрана' },
    { id: 2, text: 'блок2' },
    { id: 3, text: '3' },
    { id: 4, text: 'Посчитаем клики?' },
    { id: 5, text: 'игра' }
];
const contextMenu = new ContextMenu('.menu', menuItems);
contextMenu.render()
contextMenu.open()
contextMenu.close()
contextMenu.add()