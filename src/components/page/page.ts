import { IBasicComponent } from "./../common/basicComponent.js";
import { BasicComponent } from "../common/basicComponent.js";

export interface IComposible {
  addChild(child: IBasicComponent): void;
}

export class Page extends BasicComponent<HTMLElement> implements IComposible {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(child: IBasicComponent) {
    const list = new ItemWrapper();
    list.addChild(child);
    list.attachTo(this.element);
  }
}

export class ItemWrapper
  extends BasicComponent<HTMLElement>
  implements IComposible
{
  constructor() {
    super(
      `<li class="item">
        <section class="itemSection">
          <div class="itemBody"></div>
          <button class="itemController">&times;</button>
        </section>
      </li>`
    );
  }

  addChild(child: IBasicComponent) {
    const itemSection = this.element.querySelector(
      ".itemBody"
    )! as HTMLLIElement;
    child.attachTo(itemSection);
  }
}
