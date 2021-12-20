import { BaseComponent } from "../../../component.js";

export class Video extends BaseComponent<HTMLLinkElement> {
  constructor(url: string, title: string) {
    super(
      `<li>
        <iframe class="video"></iframe>
        <h1 class="title"></h1>
      </li>`
    );

    const iframe = this.element.querySelector("iframe")! as HTMLIFrameElement;
    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;

    h1.textContent = title;
    iframe.src = this.parseUrl(url);
    console.log(iframe.src);
  }

  private parseUrl(url: string): string {
    const regExp =
      /^(?:https?\:\/\/)?(?:www\.)?(?:youtu(?:be)\.com)?(?:\/watch\??v?d?\=)?([a-zA-Z0-9_-]{11})/;
    const temp = url.match(regExp);
    if (!temp || !temp[1]) return url;
    const id = temp[1];
    console.log(id);
    return `https://www.youtube.com/embed/${id}`;
  }
}
