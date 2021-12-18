import { content, Tags } from "./types";

export interface IPaintList {
  paint(parentTag: Element, data: content[]): void;
  onDeleteClick: Function;
}

const tags: Tags = {
  banage: (data: content) =>
    `<li class="content">
      <div
        class="thumbnail"
        style="
                background: url(${data.title}) center/cover
                  no-repeat;
              "
      ></div>
      <div class="contentInfo">${data.desc}</div>
      <i class="fas fa-times" data-id="${data.id}"></i>
    </li>`,
  video: (data: content) =>
    `<li class="content">
      <iframe src="${data.title}" class="thumbnail"></iframe>
      <div class="content">${data.desc}</div>
      <i class="fas fa-times" data-id="${data.id}"></i>
    </li>`,
  note: (data: content) =>
    `<li class="todoContent">
      <div>
        <div class="todoTitle">${data.title}</div>
        <div class="todoInfo">${data.desc}</div>
      </div>
      <i class="fas fa-times" data-id="${data.id}"></i>
    </li>`,
  task: (data: content) =>
    `<li class="todoContent">
      <div>
        <div class="todoTitle">${data.title}</div>
        <div class="todoInfo">${data.desc}</div>
      </div>
      <i class="fas fa-times" data-id="${data.id}"></i>
    </li>`,
};

export default class PaintList implements IPaintList {
  private onDelete?: Function;
  private deleteBtns?: Element | null;
  constructor() {
    this.deleteBtns = document.querySelector(".list");

    this.deleteBtns?.addEventListener("click", (event) => {
      if (!event.target) return;
      const target = event.target as HTMLElement;
      if (target.matches(".fa-times")) {
        console.log("id", target.dataset.id);
        this.onDelete && this.onDelete(target.dataset.id);
      }
    });
  }

  set onDeleteClick(func: Function) {
    this.onDelete = func;
  }

  paint(parentTag: HTMLElement, data: content[]) {
    const readyToAppend = data.map((item) => tags[item.type](item));
    parentTag.innerHTML = readyToAppend.join(",");
  }
}
