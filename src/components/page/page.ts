import { BaseComponent } from "../../component.js";
export class Page extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page"></ul>');
  }
}

export class ItemList extends BaseComponent<HTMLElement> {
  constructor() {
    super("");
  }
}
