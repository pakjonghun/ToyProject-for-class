import { onClick } from "./../page/page.js";
import { IComponent, IComposible, IOnClick } from "./../../interfaces.js";
import { BaseComponent } from "./../../component.js";

type Constractor<T extends IComposible & IComponent & IOnClick> = {
  new (): T;
};

export class Header<T extends Constractor<HeaderLayout>>
  extends BaseComponent<HTMLElement>
  implements IComposible
{
  private layout: T;
  constructor(layout: T) {
    super(`<header></header>`);
    this.layout = layout;
  }

  addChild(section: IComponent) {
    const layout = new this.layout();
    layout.setOnClick = () => {
      layout.removeFrom(this.element);
    };

    layout.addChild(section);
    layout.attachTo(this.element);
  }
}

export class HeaderLayout
  extends BaseComponent<HTMLElement>
  implements IComposible, IOnClick
{
  private onClick?: onClick;
  constructor() {
    super("<div><button>btn2</button><div>");
    const btn = this.element.querySelector(".button")! as HTMLElement;
    btn.onclick = () => {
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

export class Button extends BaseComponent<HTMLButtonElement> {
  constructor() {
    super(`<button>button</button>`);
  }
}
