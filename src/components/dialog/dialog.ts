import { onClick } from "./../page/page.js";
import { IComponent, IComposible } from "./../../interfaces.js";
import { BaseComponent } from "./../../component.js";

export class Dialog extends BaseComponent<HTMLElement> implements IComposible {
  private onClick?: onClick;
  private onSubmit?: onClick;
  constructor() {
    super(
      `<div class="dialog">
        <div class="container">
          <button class="close">&times;</button>
          <div class="body"></div>
          <button class="add">Add</button>
        </div>
      </div>`
    );

    const close = this.element.querySelector(".close")! as HTMLButtonElement;
    const add = this.element.querySelector(".add")! as HTMLButtonElement;

    close.onclick = () => {
      this.onClick && this.onClick();
    };

    add.onclick = () => {
      this.onSubmit && this.onSubmit();
    };
  }
  addChild(section: IComponent) {
    const body = this.element.querySelector(".body")! as HTMLElement;
    section.attachTo(body);
  }

  set setOnClick(onClick: onClick) {
    this.onClick = onClick;
  }

  set setOnSubmit(onSubmit: onClick) {
    this.onSubmit = onSubmit;
  }
}
