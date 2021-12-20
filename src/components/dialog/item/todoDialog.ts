import { BasicComponent } from "./../../common/basicComponent.js";
import { IInputDialog } from "../../app.js";
export class TodoDialog
  extends BasicComponent<HTMLElement>
  implements IInputDialog
{
  constructor() {
    super(`<div>
            <label for="todo">TODO</label>
            <input type="text" class="todo">
          </div>`);
  }

  get title() {
    const title = document.querySelector(".todo")! as HTMLInputElement;
    return title.value;
  }
}
