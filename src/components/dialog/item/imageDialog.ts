import { IInputDialog } from "../../app.js";
import { BasicComponent } from "../../common/basicComponent.js";

export type extractType = {
  url?: string;
  desc?: string;
  title?: string;
};

export class ImageDialog
  extends BasicComponent<HTMLElement>
  implements IInputDialog
{
  constructor() {
    super(`<div>
              <label for="url">URL</label>
              <input id="url" type="text" class="titleInput">
              <label for="desc">DESC</label>
              <input id="desc type="text" class="descInput">
          </div>`);
  }

  get url() {
    const url = this.element.querySelector(".titleInput")! as HTMLInputElement;
    return url.value;
  }

  get desc() {
    const desc = this.element.querySelector(".descInput")! as HTMLInputElement;
    return desc.value;
  }
}
