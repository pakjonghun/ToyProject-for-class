export interface IComponent {
  attachTo(patent: HTMLElement, position?: InsertPosition): void;
  appendTo(child: HTMLElement): void;
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

  appendTo(child: HTMLElement) {
    this.element.appendChild(child);
  }
}
