import { BasicComponent } from "../../common/basicComponent.js";
import { IInputDialog } from "../../app.js";

export class VideoDialog
  extends BasicComponent<HTMLElement>
  implements IInputDialog
{
  constructor() {
    super(`<div>
            <label for="url">URL</label>
            <input id="url" type="text" class="url">
            <label for="title">TITLE</label>
            <input id="title" type="text" class="title">
          </div>`);
  }

  get url() {
    const url = this.element.querySelector(".url")! as HTMLInputElement;
    return url.value;
  }

  get title() {
    const title = this.element.querySelector(".title")! as HTMLInputElement;
    return title.value;
  }
}
