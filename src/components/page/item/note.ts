import { Component } from "../../component.js";

export class NoteComponent extends Component<HTMLElement> {
  constructor(title: string, desc: string) {
    super(`<div><h2 class="title"></h2><p class="content"></p></div>`);
    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLHeadingElement;
    const contentElement = this.element.querySelector(
      ".content"
    )! as HTMLParagraphElement;

    titleElement.textContent = title;
    contentElement.textContent = desc;
  }
}
