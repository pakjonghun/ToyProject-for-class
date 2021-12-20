import { BaseComponent } from "../../../component.js";

export class Note extends BaseComponent<HTMLScriptElement> {
  constructor(title: string, content: string) {
    super(
      `<section>
        <h1 class="title"></h1>
        <h2 class="content"></h2>
      </section>`
    );

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    const h2 = this.element.querySelector("h2")! as HTMLHeadingElement;
    h1.textContent = title;
    h2.textContent = content;
  }
}
