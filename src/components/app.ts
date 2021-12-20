import { TodoDialog } from "./dialog/item/todoDialog.js";
import { NoteDialog } from "./dialog/item/notoDialog.js";
import { Video } from "./page/item/video.js";
import { VideoDialog } from "./dialog/item/videoDialog.js";
import { Dialog } from "./dialog/dialog.js";
import { BasicComponent, IBasicComponent } from "./common/basicComponent.js";
import { IComposible, ItemWrapper, Page } from "./page/page.js";
import { Image } from "./page/item/image.js";
import { ImageDialog } from "./dialog/item/imageDialog.js";
import { Note } from "./page/item/note.js";
import { Todo } from "./page/item/todo.js";

type InputConstractor<T extends IInputDialog> = {
  new (): T;
};

export interface IInputDialog extends BasicComponent<HTMLElement> {
  readonly title?: string;
  readonly url?: string;
  readonly desc?: string;
}

class App {
  private readonly page: IBasicComponent & IComposible;
  private readonly rootBody;
  constructor(main: HTMLElement) {
    this.rootBody = document.body;
    this.page = new Page(ItemWrapper);
    this.page.attachTo(main);

    this.makeOnMenuClick<ImageDialog, Image>(
      "imageBtn",
      ImageDialog,
      (arg: ImageDialog) => new Image(arg.url, arg.desc)
    );
    this.makeOnMenuClick<VideoDialog, Video>(
      "videoBtn",
      VideoDialog,
      (arg: VideoDialog) => new Video(arg.url, arg.title)
    );
    this.makeOnMenuClick<TodoDialog, Todo>(
      "todoBtn",
      TodoDialog,
      (arg: TodoDialog) => new Todo(arg.title)
    );
    this.makeOnMenuClick<NoteDialog, Note>(
      "noteBtn",
      NoteDialog,
      (arg: NoteDialog) => new Note(arg.title, arg.desc)
    );
  }

  makeOnMenuClick<
    T extends IInputDialog,
    I extends Image | Note | Todo | Video
  >(id: string, Input: InputConstractor<T>, makeItem: (arg: T) => I) {
    const menu = document.getElementById(id)! as HTMLElement;
    menu.onclick = () => {
      const dialog = new Dialog();
      const input = new Input();
      dialog.addChild(input);
      dialog.onToggleClick = () => {
        dialog.removeFrom(this.rootBody);
      };
      dialog.onSubmitClick = () => {
        const item = makeItem(input);
        this.page.addChild(item);
        dialog.removeFrom(this.rootBody);
      };
      dialog.attachTo(this.rootBody);
    };
  }
}

new App(document.querySelector(".main")! as HTMLDivElement);
