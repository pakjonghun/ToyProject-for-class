import { content } from "./types";

export interface IPageComponent {
  render(parent: Element, data: content): void;
}

export default class PageComponent {
  render(parent: Element, data: content) {
    parent.innerHTML = `<span>${data.desc}</span>`;
  }
}
