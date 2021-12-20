import { Video } from "./components/page/item/video.js";
import { ItemList, Page } from "./components/page/page.js";
class App {
  private readonly page: Page;

  constructor(root: HTMLElement) {
    this.page = new Page();
    this.page.attachTo(root);

    const vi = new Video("https://www.youtube.com/watch?v=NFi_-3KfiWA", "소금");
    const itemList = new ItemList(Video);
    itemList.addChild();
    this.page.addChild(itemList);
  }
}

new App(document.querySelector(".main")! as HTMLElement);
