import { IComponent } from "./../../interfaces";
import { BaseComponent } from "./../../component.js";
export class Layout extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div><h1>title</h1></div>`);
  }

  addChild(child: IComponent) {
    child.attachTo(this.element, "afterbegin");
  }
}
