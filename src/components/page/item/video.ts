import { BaseComponent } from "../../../component.js";

export class Video extends BaseComponent<HTMLScriptElement> {
  constructor(title: string, url: string) {
    super(
      `<section>
        <iframe class="video"></iframe>
        <h1 class="title"></h1>
      </section>`
    );

    const iframe = this.element.querySelector("iframe")! as HTMLIFrameElement;
    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;

    h1.textContent = title;
    iframe.src = this.parseUrl(url);
  }

  private parseUrl(url: string): string {
    const regExp =
      /^(?:https?\:\/\/)?(?:www\.)?(?:youtu(?:be)\.com)?(?:\/watch\??v?d?\=)?([a-zA-Z0-9_-]{11})/;
    const temp = url.match(regExp);
    if (!temp || !temp[1]) return url;
    const id = temp[1];
    return `https://www.youtube.com/embed/${id}`;
  }
}
