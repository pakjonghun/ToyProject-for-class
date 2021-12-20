import { IComponent } from "./interfaces.js";
export class BaseComponent<T extends HTMLElement> implements IComponent {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (this.element.parentElement !== parent) {
      throw new Error("부모와 자식 관계가 성립되지 않습니다.");
    }
    parent.removeChild(this.element);
  }
}
