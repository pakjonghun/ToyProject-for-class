export interface IBasicComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BasicComponent implements IBasicComponent {
  protected element: HTMLTemplateElement;
  constructor() {
    this.element = document.createElement("template");
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
