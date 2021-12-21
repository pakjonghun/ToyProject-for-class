import { Video } from "./components/page/item/video.js";
import { Todo } from "./components/page/item/todo.js";
import { MediaItem } from "./components/dialog/item/mediaItem.js";
import { Note } from "./components/page/item/note.js";
import { TextItem } from "./components/dialog/item/textItem.js";
import { Dialog } from "./components/dialog/dialog.js";
import { IComponent, IComposible, IGetInputValues } from "./interfaces.js";
import { ItemList, Page } from "./components/page/page.js";
import { Image } from "./components/page/item/image.js";

type InputConstractor<T extends IComponent & IGetInputValues> = {
  new (): T;
};

type Input = TextItem | MediaItem;
class App {
  private readonly body: HTMLElement;
  private readonly page: IComponent & IComposible;

  constructor(root: HTMLElement) {
    this.body = document.body;
    this.page = new Page(ItemList);
    this.page.attachTo(root);

    this.onMenuClick<TextItem>(
      "note",
      TextItem,
      (args: TextItem) => new Note(args.getTitle, args.getContent)
    );

    this.onMenuClick<TextItem>(
      "todo",
      TextItem,
      (args: TextItem) => new Todo(args.getTitle)
    );

    this.onMenuClick<MediaItem>(
      "image",
      MediaItem,
      (args: MediaItem) => new Image(args.getContent, args.getTitle)
    );

    this.onMenuClick<MediaItem>(
      "video",
      MediaItem,
      (args: MediaItem) => new Video(args.getContent, args.getTitle)
    );
  }

  private onMenuClick<T extends Input>(
    id: string,
    input: InputConstractor<T>,
    makeItem: (args: T) => IComponent
  ) {
    const element = document.getElementById(id)! as HTMLElement;
    element.onclick = () => {
      const dialog = new Dialog();
      const dialogInput = new input();
      dialog.addChild(dialogInput);
      dialog.setOnClick = () => dialog.removeFrom(this.body);
      dialog.setOnSubmit = () => {
        const item = makeItem(dialogInput);
        dialog.removeFrom(this.body);
        this.page.addChild(item);
      };
      dialog.attachTo(this.body, "afterbegin");
    };
  }
}

new App(document.querySelector(".main")! as HTMLElement);
