import { Component } from "./../../component.js";

export class ImageComponent extends Component<HTMLElement> {
  constructor(url: string, title: string) {
    super(`<div><img class="img"/><h2 class="title"></h2></div>`);
    const imgElement = this.element.querySelector(".img")! as HTMLImageElement;
    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    imgElement.src = url;
    imgElement.alt = title;
    titleElement.textContent = title;
  }
}
