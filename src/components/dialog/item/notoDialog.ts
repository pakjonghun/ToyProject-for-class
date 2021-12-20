import { extractType, IDialogItem } from "./imageDialog.js";
import { BasicComponent } from "./../../common/basicComponent.js";
export class NoteDialog
  extends BasicComponent<HTMLElement>
  implements IDialogItem
{
  constructor() {
    super(`<div>
            <label for="title">TITLE</label>
            <input type="text" class="title">
            <label for="desc">DESC</label>
            <input type="text" class="desc">
          </div>`);
  }

  extractData(): extractType {
    const title = this.element.querySelector(".title")! as HTMLInputElement;
    const desc = this.element.querySelector(".desc")! as HTMLInputElement;

    return {
      title: title.value,
      desc: desc.value,
    };
  }

  get title() {
    const title = this.element.querySelector(".title")! as HTMLInputElement;
    return title.value;
  }

  get desc() {
    const desc = this.element.querySelector(".desc")! as HTMLInputElement;
    return desc.value;
  }
}
