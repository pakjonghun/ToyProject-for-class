import { BaseComponent } from "../../../component.js";

export class Image extends BaseComponent<HTMLLIElement> {
  constructor(url: string, title: string) {
    super(`<li>
            <img class="img">
            <h1 class="title"></h1>
          </li>`);

    const img = this.element.querySelector("img")! as HTMLImageElement;
    img.src = url;
    img.alt = title;

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    h1.textContent = title;
  }
}
