import { IComposible, IComponent } from "./../../interfaces.js";
import { BaseComponent } from "../../component.js";

export class Page
  extends BaseComponent<HTMLUListElement>
  implements IComposible
{
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: IComponent) {
    const list = new ItemList();
    list.addChild(section);
    list.attachTo(this.element);
  }
}

export class ItemList
  extends BaseComponent<HTMLElement>
  implements IComposible
{
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
