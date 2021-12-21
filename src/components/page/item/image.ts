import { BaseComponent } from "../../../component.js";

export class Image extends BaseComponent<HTMLScriptElement> {
  constructor(title: string, url: string) {
    super(`<section>
            <img class="img">
            <h1 class="title"></h1>
          </section>`);

    const img = this.element.querySelector("img")! as HTMLImageElement;
    img.src = url;
    img.alt = title;

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    h1.textContent = title;
  }
}
