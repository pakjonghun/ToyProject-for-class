import { IComposible, IComponent } from "./interfaces.js";
import { Video } from "./components/page/item/video.js";
import { Page } from "./components/page/page.js";
class App {
  private readonly page: IComposible & IComponent;

  constructor(root: HTMLElement) {
    this.page = new Page();
    this.page.attachTo(root);
    const section = new Video("1", "1");
    this.page.addChild(section);
  }
}

new App(document.querySelector(".main")! as HTMLElement);
