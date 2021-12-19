import { IBasicComponent } from "./../common/basicComponent.js";
import { BasicComponent } from "../common/basicComponent.js";

export interface IComposible {
  addChild(child: IBasicComponent): void;
}

export interface IItemWrapper extends IBasicComponent, IComposible {
  onCloseFunc: onCloseListener;
}

type List = {
  new (): IItemWrapper;
};

export class Page extends BasicComponent<HTMLElement> implements IComposible {
  constructor(private list: List) {
    super('<ul class="page"></ul>');
  }

  addChild(child: IBasicComponent) {
    const list = new this.list();
    list.onCloseFunc = () => {
      list.removeFrom(this.element);
    };
    list.addChild(child);
    list.attachTo(this.element);
  }
}

type onCloseListener = () => void;

export class ItemWrapper
  extends BasicComponent<HTMLElement>
  implements IItemWrapper
{
  private onClose?: onCloseListener;
  constructor() {
    super(
      `<li class="item">
        <section class="itemSection">
          <div class="itemBody"></div>
          <button class="itemController">&times;</button>
        </section>
      </li>`
    );

    const close = this.element.querySelector(
      ".itemController"
    )! as HTMLButtonElement;
    close.addEventListener("click", () => {
      this.onClose && this.onClose();
    });
  }

  addChild(child: IBasicComponent) {
    const itemSection = this.element.querySelector(
      ".itemBody"
    )! as HTMLLIElement;
    child.attachTo(itemSection);
  }

  set onCloseFunc(func: onCloseListener) {
    this.onClose = func;
  }
}
