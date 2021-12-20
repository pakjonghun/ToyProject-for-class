import { IComposible } from "../page/page.js";
import { BasicComponent, IBasicComponent } from "./../common/basicComponent.js";
type onClose = () => void;

export interface IDialog extends BasicComponent<HTMLElement>, IComposible {
  onToggleClick: onClose;
  onSubmitClick: onClose;
}

export class Dialog extends BasicComponent<HTMLElement> implements IDialog {
  private onClick?: onClose;
  private onSubmit?: onClose;
  constructor() {
    super(
      `<div class="dialogContainer">
        <div class="dialog">
          <button class="close">&times;</button>
          <div class="body"></div>
          <button class="add">add</button>
        </div>
      </div>`
    );

    const add = this.element.querySelector(".add")! as HTMLButtonElement;
    const close = this.element.querySelector(".close")! as HTMLButtonElement;

    add.onclick = () => {
      this.onSubmit && this.onSubmit();
    };

    close.onclick = () => {
      this.onClick && this.onClick();
    };
  }

  set onToggleClick(func: onClose) {
    this.onClick = func;
  }

  set onSubmitClick(func: onClose) {
    this.onSubmit = func;
  }

  addChild(child: IBasicComponent) {
    const body = this.element.querySelector(".body")! as HTMLDivElement;
    child.attachTo(body);
  }
}
