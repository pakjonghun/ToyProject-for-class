import { Todo } from "./item/todo.js";
export class Page {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.classList.add("page");
    this.element.textContent = "this is ";
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
    const todo = new Todo("hihi", "desc");
    todo.attachTo(this.element);
  }
}
