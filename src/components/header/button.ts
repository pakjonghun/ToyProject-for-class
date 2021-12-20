import { BaseComponent } from "./../../baseComponent.js";
export class Button extends BaseComponent {
  constructor(id: string, className: string, content: string) {
    super(
      `<li class="header__btn">
        <button></button>
      </li>`
    );

    const button = this.element.querySelector("button")! as HTMLButtonElement;
    button.textContent = content;
    button.id = id;
    button.classList.add(className);
  }
}
