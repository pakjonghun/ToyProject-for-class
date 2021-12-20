import { IComponent } from "./../../interfaces.js";
import { BaseComponent } from "./../../component.js";
export class Container extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<header></header>`);
  }

  addChild(child: IComponent) {
    child.attachTo(this.element);
  }
}
