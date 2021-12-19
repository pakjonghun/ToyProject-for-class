export interface IBasicComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BasicComponent<T extends HTMLElement> implements IBasicComponent {
  protected readonly element: HTMLElement;
  constructor(tagHtml: string) {
    const template = document.createElement("template");
    template.innerHTML = tagHtml;
    this.element = template.content.firstElementChild as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
