export default class Header {
  private menus: HTMLElement | null;
  private onClick?: Function;
  constructor() {
    this.menus = document.querySelector(".menus");
    this.menus?.addEventListener("click", this.onMenuClick);
  }

  set injectMenuClick(onClick: Function) {
    this.onClick = onClick;
  }

  onMenuClick = (event: Event): void => {
    const target = event.target as HTMLElement;
    const className = target.classList.value;
    switch (className) {
      case "banage":
      case "note":
      case "task":
      case "video":
        this.onClick && this.onClick(className);
        break;

      default:
        throw new Error("타입에 없는 메뉴입니다.");
    }
  };
}
