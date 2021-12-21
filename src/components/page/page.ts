import { IComposible, IComponent } from "./../../interfaces.js";
import { BaseComponent } from "../../component.js";

export type onClick = () => void;

type list = {
  new (): ItemList;
};

export class Page
  extends BaseComponent<HTMLUListElement>
  implements IComposible
{
  private readonly list: list;
  constructor(list: list) {
    super('<ul class="page"></ul>');
    this.list = list;
  }

  addChild(section: IComponent) {
    const list = new this.list();
    list.setOnClick = () => list.removeFrom(this.element);
    list.addChild(section);
    list.attachTo(this.element);
  }
}

export class ItemList
  extends BaseComponent<HTMLElement>
  implements IComposible
{
  private onClick?: onClick;
  constructor() {
    super(`<li><button class="times">&times;</button></li>`);

    const times = this.element.querySelector(".times")! as HTMLElement;
    times.onclick = () => {
      this.onClick && this.onClick();
    };
  }

  set setOnClick(onClick: onClick) {
    this.onClick = onClick;
  }

  addChild(section: IComponent) {
    section.attachTo(this.element);
  }
}
