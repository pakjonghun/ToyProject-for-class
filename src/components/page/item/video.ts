import { Component } from "../../component.js";

export class VideoComponent extends Component<HTMLElement> {
  constructor(url: string, desc: string) {
    const readToInsertUrl = parseToEmbededUrl(url);
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
  const regExp =
    /(?:https?\:\/\/)?(?:www\.)?(?:youtu(?:be)?\.(?:com\/)?(?:be\/)?(?:embed\/)?(?:watch(?:\=)?)?(?:\?v=)?(?:\?d\=)?)?([a-zA-z0-9]{11})/;

  const temp = rawUrl.match(regExp);
  const id = temp && temp[1];
  return !!id ? `https://www.youtube.com/embed/${id}` : rawUrl;
}

// https://www.youtube.com/embed/VIDEO_ID
// <iframe id="ytplayer" type="text/html" width="640" height="360"
//   src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
//   frameborder="0"></iframe>
