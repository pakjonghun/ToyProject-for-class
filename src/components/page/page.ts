import { IComponent } from "./../../interfaces.js";
import { BaseComponent } from "../../component.js";

export class Page extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: IComponent) {
    const list = new ItemList();
    list.attachTo(this.element);
    list.addChild(section);
  }
}

export class ItemList extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<li><button class="times">&times;</button></li>`);

    const times = this.element.querySelector(".times")! as HTMLElement;
    times.onclick = () => {
      this.element.remove();
    };
  }

  addChild(section: IComponent) {
    section.attachTo(this.element);
  }
}
