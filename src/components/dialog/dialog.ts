import { BasicComponent } from "../common/basicComponent.js";
export class Dialog extends BasicComponent<HTMLElement> {
  constructor() {
    super(
      `<div><div class="dialog">
      
        <button class="close">&times;</button>
        <button class="add">add</button>
      </div></div>`
    );

    const dialog = this.element.querySelector(".dialog")! as HTMLDivElement;

    dialog.addEventListener("click", (event) => {
      const item = event.target! as HTMLElement;
      switch (true) {
        case item.matches(".close"):
        case item.matches(".add"):
          dialog.classList.toggle("none");
          break;
        default:
          throw new Error("모달창 클레스명을 다시 확인하세요.");
      }
    });
  }

  toggle() {
    this.element.querySelector(".dialog")! as HTMLButtonElement;
  }
}
