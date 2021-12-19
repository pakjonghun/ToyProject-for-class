import { BasicComponent } from "../../common/basicComponent.js";

export class Note extends BasicComponent<HTMLElement> {
  constructor(title: string, desc: string) {
    super(
      `<div>
        <h1 class="title"></h1>
        <h2 class="desc"></h2>
      </div>`
    );

    const h1 = this.element.querySelector(".title")! as HTMLHeadingElement;
    const h2 = this.element.querySelector(".desc")! as HTMLHeadingElement;
    h1.textContent = title;
    h2.textContent = desc;
  }
}
