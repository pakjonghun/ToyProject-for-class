import { Menu } from "./types";

export interface IModal {
  toggle(menu?: Menu): void;
}

export default class Modal implements IModal {
  private dialog: Element | null;
  private close;
  private submit;
  private onToggle?: Function;
  constructor() {
    this.dialog = document.querySelector(".dialog");
    this.close = this.dialog?.querySelector(".fa-times");
    this.submit = this.dialog?.querySelector(".modalForm");
    this.close?.addEventListener("click", () => this.toggle());
    this.submit?.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      this.toggle();
      this.onToggle && this.onToggle();
    });
  }

  private createDesc = (menu: Menu) => {
    const desc = this.dialog?.querySelector(".descLabel") as HTMLElement;
    desc.textContent = menu;
  };

  set onClick(func: Function) {
    this.onToggle = func;
  }

  toggle = (menu?: Menu): void => {
    menu && this.createDesc(menu);
    this.dialog?.classList.toggle("none");
  };
}
