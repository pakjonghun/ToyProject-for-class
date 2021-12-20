import { BasicComponent } from "./../../common/basicComponent.js";
import { IInputDialog } from "../../app.js";
export class NoteDialog
  extends BasicComponent<HTMLElement>
  implements IInputDialog
{
  constructor() {
    super(`<div>
            <label for="title">TITLE</label>
            <input type="text" class="title">
            <label for="desc">DESC</label>
            <input type="text" class="desc">
          </div>`);
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
