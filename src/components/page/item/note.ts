import { BaseComponent } from "../../../component.js";

export class Note extends BaseComponent<HTMLLIElement> {
  constructor(title: string, content: string) {
    super(
      `<li>
        <h1 class="title"></h1>
        <h2 class="content"></h2>
      </li>`
    );

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    const h2 = this.element.querySelector("h2")! as HTMLHeadingElement;
    h1.textContent = title;
    h2.textContent = content;
  }
}
