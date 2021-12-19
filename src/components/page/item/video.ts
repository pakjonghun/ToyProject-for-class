import { BasicComponent } from "./../../common/basicComponent.js";
export class Video extends BasicComponent<HTMLElement> {
  constructor(url: string, title: string) {
    super(
      `<div>
        <iframe class="iframe"></iframe>
        <h1 class="title"></h1>
      </div>`
    );

    const iframe = this.element.querySelector(".iframe")! as HTMLIFrameElement;
    const h1 = this.element.querySelector(".title")! as HTMLHeadingElement;
    iframe.src = this.parseUrlToInsert(url);
    h1.textContent = title;
  }

  parseUrlToInsert(url: string): string {
    const regExp =
      /(?:https?\:\/\/)?(?:www\.)?(?:youtu(?:be)?\.com)?(?:\/?\??)?(?:watch\??\=?(?:v\=)?(?:d\=)?)?([a-zA-Z0-9]{11})/;
    const temp = url.match(regExp);
    const id = temp && temp[1];
    return !!id ? `https://www.youtube.com/embed/${id}` : url;
  }
}
