import { Component } from "../../component.js";

export class Todo extends Component<HTMLElement> {
  constructor(title: string) {
    super(
      `<div><input type="checkbox" class="checkboxInput"><h2 class="todoTitle"></h2></div>`
    );

    const checkboxInput = this.element.querySelector(
      ".checkboxInput"
    )! as HTMLInputElement;

    checkboxInput.insertAdjacentText("afterend", title);
  }
}
