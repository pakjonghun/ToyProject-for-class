export interface IBasicComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BasicComponent implements IBasicComponent {
  protected element: HTMLElement;
  constructor(tagName: keyof HTMLElementTagNameMap) {
    this.element = document.createElement(tagName);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
