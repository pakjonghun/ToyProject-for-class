import { IModal } from "./modal";

export default class Header {
  private menus: HTMLElement | null;
  private modal;
  constructor(modal: IModal) {
    this.modal = modal;
    this.menus = document.querySelector(".menus");
    this.menus?.addEventListener("click", this.onMenuClick);
  }

  onMenuClick = (event: Event): void => {
    const target = event.target as HTMLElement;
    const className = target.classList.value;
    switch (className) {
      case "banage":
      case "note":
      case "task":
      case "video":
        this.modal.toggle(className);
        break;

      default:
        throw new Error("타입에 없는 메뉴입니다.");
    }
  };
}
