import { BasicComponent } from "../basic.js";
export class PageComponent extends BasicComponent {
  constructor() {
    super("div");
    this.element.textContent = "this is test page";
  }
}
