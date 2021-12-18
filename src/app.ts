import { ImageComponent } from "./components/image.js";
import { IBasicComponent } from "./components/basic.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: IBasicComponent;
  private readonly img: IBasicComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.img = new ImageComponent();
    this.img.attachTo(appRoot);
  }
}

new App(document.querySelector("main") as HTMLElement);
