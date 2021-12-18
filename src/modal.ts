import { Menu } from "./types";

export interface IModal {
  toggle(menu?: Menu): void;
  injectOnSubmit: Function;
}

export default class Modal implements IModal {
  private dialog: HTMLDivElement | null;
  private close?: HTMLLIElement | null;
  private submit?: HTMLFormElement | null;
  private onSubmit?: Function;

  constructor() {
    this.dialog = document.querySelector(".dialog");
    this.close = this.dialog?.querySelector(".fa-times");
    this.submit = this.dialog?.querySelector(".modalForm");
    this.close?.addEventListener("click", () => this.toggle());
    this.submit?.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      this.toggle();
      this.onSubmit && this.onSubmit();
    });
  }

  private createDesc = (menu: Menu) => {
    const desc = this.dialog?.querySelector(".descLabel") as HTMLElement;
    const descInput = this.dialog?.querySelector(".descInput") as HTMLElement;
    descInput.dataset.type = menu;
    desc.textContent = menu;
  };

  set injectOnSubmit(func: Function) {
    this.onSubmit = func;
  }

  toggle = (menu?: Menu): void => {
    menu && this.createDesc(menu);
    this.dialog?.classList.toggle("none");
  };
}
