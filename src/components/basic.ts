export interface IBasicComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BasicComponent implements IBasicComponent {
  protected element: HTMLElement;
  constructor(tagName: keyof HTMLElementTagNameMap, className: string) {
    this.element = document.createElement(tagName);
    this.element.setAttribute("class", className);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
