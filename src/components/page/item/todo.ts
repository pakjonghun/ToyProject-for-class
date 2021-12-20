import { BaseComponent } from "../../../component.js";

export class Todo extends BaseComponent<HTMLLIElement> {
  constructor(todo: string) {
    super("<li><h1></h1></li>");

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    h1.textContent = todo;
  }
}
