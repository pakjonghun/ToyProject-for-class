import { Page } from "./page/page.js";
import { Image } from "./page/item/image.js";

class App {
  constructor(root: HTMLElement) {
    const img = new Image("https://picsum.photos/200/200", "good");
    const page = new Page();

    page.addChild(img);
    page.attachTo(root);
  }
}

new App(document.querySelector(".main")! as HTMLDivElement);
