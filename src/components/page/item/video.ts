import { Component } from "../../component.js";

export class VideoComponent extends Component<HTMLElement> {
  constructor(url: string, desc: string) {
    super(`<div><iframe class="video"></iframe><p class="desc"></p></div>`);
    const video = this.element.querySelector(".video")! as HTMLIFrameElement;
    const content = this.element.querySelector(
      ".desc"
    )! as HTMLParagraphElement;
    video.src = url;
    content.textContent = desc;
  }
}
