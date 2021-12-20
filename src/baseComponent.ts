import { IbaseComponent } from "./interfaces.js";
export class BaseComponent implements IbaseComponent {
  protected readonly element: HTMLElement;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as HTMLElement;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
  }
}
