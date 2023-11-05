
import "./styles.css";
import { ContextMenu } from "./menu";

const contextMenu = new ContextMenu(".menu");
contextMenu.open();
contextMenu.render();
contextMenu.add();
contextMenu.close();
