export interface IComponent {
  attachTo(patent: HTMLElement, position?: InsertPosition): void;
}

export class Component<T extends HTMLElement> implements IComponent {
  protected readonly element: T;
  constructor(tagString: string) {
    const template = document.createElement("template");
    template.innerHTML = tagString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
