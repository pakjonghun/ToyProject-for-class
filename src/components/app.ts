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

type InputConstractor<T = ImageDialog | NoteDialog | TodoDialog | VideoDialog> =
  {
    new (): T;
  };

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

    this.onClickFunc<Image, ImageDialog>(
      "imageBtn",
      ImageDialog,
      (args: ImageDialog) => new Image(args.url, args.desc)
    );

    this.onClickFunc<Video, VideoDialog>(
      "videoBtn",
      VideoDialog,
      (args: VideoDialog) => new Video(args.url, args.title)
    );

    this.onClickFunc<Note, NoteDialog>(
      "noteBtn",
      NoteDialog,
      (args: NoteDialog) => new Note(args.title, args.desc)
    );

    this.onClickFunc<Todo, TodoDialog>(
      "todoBtn",
      TodoDialog,
      (input: TodoDialog) => new Todo(input.title)
    );
  }

  private onClickFunc<
    I extends Video | Image | Todo | Note,
    T extends ImageDialog | NoteDialog | TodoDialog | VideoDialog
  >(id: string, Input: InputConstractor<T>, makeItem: (args: T) => I) {
    const btn = document.getElementById(id)! as HTMLElement;
    btn.onclick = () => {
      const dialog = new Dialog();
      const inputDialog = new Input();
      dialog.addChild(inputDialog);
      dialog.onToggleClick = () => {
        dialog.removeFrom(document.body);
      };
      dialog.onSubmitClick = () => {
        const component = makeItem(inputDialog);
        this.page.addChild(component);
        dialog.removeFrom(document.body);
      };
      dialog.attachTo(document.body);
    };
  }
}

new App(document.querySelector(".main")! as HTMLDivElement);
