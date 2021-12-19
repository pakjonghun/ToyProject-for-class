import { IBasicComponent } from "./common/basicComponent.js";
import { Video } from "./page/item/video.js";
import { Todo } from "./page/item/todo.js";
import { IComposible, Page } from "./page/page.js";
import { Image } from "./page/item/image.js";
import { Note } from "./page/item/note.js";

class App {
  private readonly page: IBasicComponent & IComposible;
  constructor(root: HTMLElement) {
    const img = new Image("https://picsum.photos/200/200", "good");
    const note = new Note("hihi", "hihidesc");
    const todo = new Todo("todotodo");
    const video = new Video(
      "https://www.youtube.com/watch?v=kwS3twdVsko",
      "good"
    );
    this.page = new Page();

    this.page.addChild(video);
    this.page.addChild(note);
    this.page.addChild(todo);
    this.page.addChild(img);
    this.page.attachTo(root);
  }
}

new App(document.querySelector(".main")! as HTMLDivElement);
