import { IComposible, IComponent, IOnClick } from "./../../interfaces.js";
import { BaseComponent } from "../../component.js";

export type onClick = () => void;

type list<I extends IComposible & IComposible & IOnClick> = {
  new (): I;
};

export class Page<T extends list<ItemList>>
  extends BaseComponent<HTMLUListElement>
  implements IComposible
{
  private readonly list: T;
  constructor(list: T) {
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

    this.element.addEventListener("dragstart", (e) => {
      console.log(1);
    });
  }

  set setOnClick(onClick: onClick) {
    this.onClick = onClick;
  }

  addChild(section: IComponent) {
    section.attachTo(this.element);
  }
}
