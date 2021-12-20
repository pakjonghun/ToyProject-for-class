import { extractType, IDialogItem } from "./imageDialog.js";
import { BasicComponent } from "./../../common/basicComponent.js";
export class TodoDialog
  extends BasicComponent<HTMLElement>
  implements IDialogItem
{
  constructor() {
    super(`<div>
            <label for="todo">TODO</label>
            <input type="text" class="todo">
          </div>`);
  }

  extractData(): extractType {
    const title = document.querySelector(".todo")! as HTMLInputElement;
    return {
      title: title.value,
    };
  }
}
