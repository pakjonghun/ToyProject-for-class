import { BasicComponent } from "./../../common/basicComponent.js";
export class Todo extends BasicComponent<HTMLElement> {
  constructor(todo: string) {
    super(
      `<div>
        <div type="checkbox" class="input"></div>
      </div>`
    );

    const checkbox = this.element.querySelector(".input")! as HTMLInputElement;
    checkbox.insertAdjacentText("afterend", todo);
  }
}
