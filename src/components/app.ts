import { TodoDialog } from "./dialog/item/todoDialog.js";
import { NoteDialog } from "./dialog/item/notoDialog.js";
import { Video } from "./page/item/video.js";
import { VideoDialog } from "./dialog/item/videoDialog.js";
import { Dialog } from "./dialog/dialog.js";
import { IBasicComponent } from "./common/basicComponent.js";
import { IComposible, ItemWrapper, Page } from "./page/page.js";
import { Image } from "./page/item/image.js";
import { ImageDialog } from "./dialog/item/imageDialog.js";
import { Note } from "./page/item/note.js";
import { Todo } from "./page/item/todo.js";

class App {
  private readonly page: IBasicComponent & IComposible;
  constructor(main: HTMLElement) {
    // const img = new Image("https://picsum.photos/200/200", "good");
    // const note = new Note("hihi", "hihidesc");
    // const todo = new Todo("todotodo");
    // const video = new Video(
    //   "https://www.youtube.com/watch?v=kwS3twdVsko",
    //   "good"
    // );

    this.page = new Page(ItemWrapper);
    this.page.attachTo(main);
    const imageBtn = document.getElementById("imageBtn")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new Dialog();

      dialog.attachTo(document.body);
      const imageForm = new ImageDialog();
      dialog.addChild(imageForm);

      dialog.onToggleClick = () => {
        dialog.removeFrom(document.body);
      };

      dialog.onSubmitClick = () => {
        const { url = "", desc = "" } = imageForm.extractData();
        const img = new Image(url, desc);
        this.page.addChild(img);
        dialog.removeFrom(document.body);
      };
    });

    const videoBtn = document.getElementById("videoBtn")! as HTMLButtonElement;
    videoBtn.onclick = () => {
      const dialog = new Dialog();
      const videoDialog = new VideoDialog();
      dialog.addChild(videoDialog);
      dialog.attachTo(document.body);
      dialog.onSubmitClick = () => {
        const { url = "", title = "" } = videoDialog.extractData();
        const video = new Video(url, title);
        this.page.addChild(video);
        dialog.removeFrom(document.body);
      };

      dialog.onToggleClick = () => {
        dialog.removeFrom(document.body);
      };
    };

    const noteBtn = document.getElementById("noteBtn")! as HTMLElement;
    noteBtn.onclick = () => {
      const dialog = new Dialog();
      const noteDialog = new NoteDialog();
      dialog.addChild(noteDialog);

      dialog.onSubmitClick = () => {
        const { title = "", desc = "" } = noteDialog.extractData();
        const noteItem = new Note(title, desc);
        this.page.addChild(noteItem);
        dialog.removeFrom(document.body);
      };

      dialog.onToggleClick = () => {
        dialog.removeFrom(document.body);
      };

      dialog.attachTo(document.body);
    };

    const todoBtn = document.getElementById("todoBtn")! as HTMLButtonElement;
    todoBtn.onclick = () => {
      const dialog = new Dialog();
      const todoDialog = new TodoDialog();
      dialog.addChild(todoDialog);
      dialog.onToggleClick = () => {
        dialog.removeFrom(document.body);
      };
      dialog.onToggleClick = () => {
        dialog.removeFrom(document.body);
      };
      dialog.onSubmitClick = () => {
        console.log(todoDialog.title);
        const todoItem = new Todo(todoDialog.title);
        this.page.addChild(todoItem);
        dialog.removeFrom(document.body);
      };

      dialog.attachTo(document.body);
    };
  }
}

new App(document.querySelector(".main")! as HTMLDivElement);
