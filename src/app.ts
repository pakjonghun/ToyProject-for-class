import { IComposible, IComponent } from "./interfaces.js";
import { Video } from "./components/page/item/video.js";
import { ItemList, Page } from "./components/page/page.js";
class App {
  private readonly page: IComposible & IComponent;

  constructor(root: HTMLElement) {
    this.page = new Page(ItemList);
    this.page.attachTo(root);
    const section = new Video("1", "1");
    this.page.addChild(section);
  }
}

new App(document.querySelector(".main")! as HTMLElement);
