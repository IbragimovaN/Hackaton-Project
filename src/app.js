import "./styles.css";
import { ContextMenu } from "./menu";

const menuItems = [
  { id: 1, text: "Сменить цвет экрана" },
  { id: 2, text: "Послушать рандомный звук" },
  { id: 3, text: "Запустить таймер" },
  { id: 4, text: "Постичай клики" },
  { id: 5, text: "Поиграть в игру" },
];
const contextMenu = new ContextMenu(".menu");
contextMenu.open();
contextMenu.render();
contextMenu.add();

contextMenu.close();
