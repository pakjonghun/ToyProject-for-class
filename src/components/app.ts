import { Video } from "./page/item/video.js";
import { VideoDialog } from "./dialog/item/videoDialog.js";
import { Dialog } from "./dialog/dialog.js";
import { IBasicComponent } from "./common/basicComponent.js";
import { IComposible, ItemWrapper, Page } from "./page/page.js";
import { Image } from "./page/item/image.js";
import { ImageDialog } from "./dialog/item/imageDialog.js";

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
  }
}

new App(document.querySelector(".main")! as HTMLDivElement);
