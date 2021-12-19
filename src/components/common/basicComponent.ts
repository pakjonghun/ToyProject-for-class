export interface IBasicComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
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

  removeFrom(parent: HTMLElement) {
    console.log(parent);
    console.log(this.element.parentElement);
    if (parent !== this.element.parentElement) {
      throw new Error("잘못된 동작 입니다.");
    }
    parent.removeChild(this.element);
  }
}
