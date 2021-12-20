import { IaddChildComponent } from "./../../interfaces";
import { IbaseComponent } from "../../interfaces.js";
import { BaseComponent } from "./../../baseComponent.js";
export class Header extends BaseComponent implements IaddChildComponent {
  constructor() {
    super(
      `<header class="header">
        <h1 class="header__title">Motion</h1>
        <ul class="header__btns"></ul>
      </header>`
    );
  }

  addChild(child: IbaseComponent) {
    const btns = this.element.querySelector(
      ".header__btns"
    )! as HTMLUListElement;

    child.attachTo(btns);
  }
}
