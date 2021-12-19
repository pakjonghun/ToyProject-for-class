import { Component } from "../../component.js";

export class VideoComponent extends Component<HTMLElement> {
  constructor(url: string, desc: string) {
    const readToInsertUrl = parseToEmbededUrl(url);
    console.log(readToInsertUrl);
    super(`<div><iframe class="video"></iframe><p class="desc"></p></div>`);
    const video = this.element.querySelector(".video")! as HTMLIFrameElement;
    const content = this.element.querySelector(
      ".desc"
    )! as HTMLParagraphElement;
    video.src = readToInsertUrl;
    content.textContent = desc;
  }
}

function parseToEmbededUrl(rawUrl: string): string {
  if (rawUrl.includes("embed")) return rawUrl;
  const temp = rawUrl.split("/");
  const id: string = temp[temp.length - 1]! as string;
  return `https://www.youtube.com/embed/${
    id.includes("?") ? id.split("=").slice(-1)[0] : id
  }`;
}
