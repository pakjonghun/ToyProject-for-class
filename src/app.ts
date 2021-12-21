import { Note } from "./components/page/item/note.js";
import { TextItem } from "./components/dialog/item/textItem.js";
import { Dialog } from "./components/dialog/dialog.js";
import { IComposible, IComponent } from "./interfaces.js";
import { ItemList, Page } from "./components/page/page.js";

class App {
  private readonly body: HTMLElement;
  private readonly page: IComposible & IComponent;

  constructor(root: HTMLElement) {
    this.body = document.body;
    this.page = new Page(ItemList);
    this.page.attachTo(root);

    const imageBtn = document.getElementById("image")! as HTMLImageElement;
    imageBtn.onclick = () => {
      const dialog = new Dialog();
      const noteInput = new TextItem();
      dialog.addChild(noteInput);
      dialog.setOnClick = () => dialog.removeFrom(this.body);
      dialog.setOnSubmit = () => {
        const note = new Note(noteInput.getTitle, noteInput.getContent);
        this.page.addChild(note);
        dialog.removeFrom(this.body);
      };
      dialog.attachTo(this.body, "afterbegin");
    };
  }
}

new App(document.querySelector(".main")! as HTMLElement);
