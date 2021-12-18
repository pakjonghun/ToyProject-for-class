import { Component } from "../../component.js";

export class NoteComponent extends Component<HTMLElement> {
  constructor(title: string, desc: string) {
    super(`<div><p class="title"></p><p class="content"></p></div>`);
    const titleElement = this.element.querySelector(
      ".title"
    )! as HTMLParagraphElement;
    const contentElement = this.element.querySelector(
      ".content"
    )! as HTMLParagraphElement;

    titleElement.textContent = title;
    contentElement.textContent = desc;
  }
}
