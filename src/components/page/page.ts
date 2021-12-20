import { IComponent } from "./../../interfaces.js";
import { BaseComponent } from "../../component.js";

type ButtonConstractor = {
  new (): IComponent;
};

export class Page extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(child: IComponent) {
    child.attachTo(this.element);
  }
}

export class ItemList extends BaseComponent<HTMLLinkElement> {
  private readonly item: ButtonConstractor;
  constructor(item: ButtonConstractor) {
    super(`<li><button class="times">&times;</button></li>`);
    this.item = item;

    const times = this.element.querySelector(".times")! as HTMLLinkElement;
    times.onclick = () => {
      this.element.remove();
    };
  }

  addChild() {
    const item = new this.item();
    item.attachTo(this.element);
  }
}
