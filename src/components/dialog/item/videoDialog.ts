import { IDialogItem, extractType } from "./imageDialog.js";
import { BasicComponent } from "../../common/basicComponent.js";

export class VideoDialog
  extends BasicComponent<HTMLElement>
  implements IDialogItem
{
  constructor() {
    super(`<div>
            <label for="url">URL</label>
            <input id="url" type="text" class="url">
            <label for="title">TITLE</label>
            <input id="title" type="text" class="title">
          </div>`);
  }

  extractData(): extractType {
    const url = this.element.querySelector(".url")! as HTMLInputElement;
    const title = this.element.querySelector(".title")! as HTMLInputElement;

    return {
      url: url.value,
      title: title.value,
    };
  }
}
