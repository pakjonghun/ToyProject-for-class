import { BaseComponent } from "../../../component.js";

export class Todo extends BaseComponent<HTMLScriptElement> {
  constructor(todo: string) {
    super("<section><h1></h1></section>");

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    h1.textContent = todo;
  }
}
