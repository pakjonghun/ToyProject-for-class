import { Todo } from "./components/page/item/todo.js";
import { IComponent } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";

class App {
  constructor(appRoot: HTMLElement) {
    const img: IComponent = new ImageComponent(
      "https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "title"
    );
    const video: IComponent = new VideoComponent(
      "https://www.youtube.com/watch?v=D1Y5taXg9Vw",
      "good"
    );
    const todo: IComponent = new Todo("TItleTodo");
    const note: IComponent = new NoteComponent("title", "desc");

    img.attachTo(appRoot);
    video.attachTo(appRoot);
    note.attachTo(appRoot);
    todo.attachTo(appRoot);
  }
}

new App(document.querySelector("main") as HTMLElement);
