import { BasicComponent } from "../../common/basicComponent.js";

export class Image extends BasicComponent<HTMLElement> {
  constructor(url: string, title: string) {
    super(`<div>
            <h1 class="title"></h1>
            <img  class="img">
           </div>`);

    const img = this.element.querySelector(".img")! as HTMLImageElement;
    const h1 = this.element.querySelector(".title")! as HTMLHeadingElement;
    img.src = url;
    img.alt = title;
    h1.textContent = title;
  }
}
