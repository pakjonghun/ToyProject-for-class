import { BasicComponent } from "../basic.js";
export class PageComponent extends BasicComponent {
  constructor() {
    super("ul", "list");
    this.element.textContent = "this is test page";
  }
}
