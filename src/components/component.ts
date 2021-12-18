export class Component<T extends HTMLElement> {
  protected readonly element: T;
  constructor(tagString: string) {
    const template = document.createElement("template");
    template.innerHTML = tagString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: T, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
