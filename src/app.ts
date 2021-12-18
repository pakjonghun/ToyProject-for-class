import { ImageComponent } from "./components/page/item/image.js";

class App {
  private readonly img: ImageComponent;

  constructor(appRoot: HTMLElement) {
    this.img = new ImageComponent(
      "https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "title"
    );

    this.img.attachTo(appRoot);
  }
}

new App(document.querySelector("main") as HTMLElement);
