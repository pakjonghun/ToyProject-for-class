import { content, Tags } from "./types";

export interface IPaintList {
  paint(parentTag: Element, data: content[]): void;
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
      <i class="fas fa-times"></i>
    </li>`,
  video: (data: content) =>
    `<li class="content">
      <iframe src="${data.title}" class="thumbnail"></iframe>
      <div class="content">${data.desc}</div>
      <i class="fas fa-times"></i>
    </li>`,
  note: (data: content) =>
    `<li class="todoContent">
      <div>
        <div class="todoTitle">${data.title}</div>
        <div class="todoInfo">${data.desc}</div>
      </div>
      <i class="fas fa-times"></i>
    </li>`,
  task: (data: content) =>
    `<li class="todoContent">
      <div>
        <div class="todoTitle">${data.title}</div>
        <div class="todoInfo">${data.desc}</div>
      </div>
      <i class="fas fa-times"></i>
    </li>`,
};

export default class PaintList implements IPaintList {
  paint(parentTag: HTMLElement, data: content[]) {
    const readyToAppend = data.map((item) => tags[item.type](item));
    console.log(readyToAppend);
    parentTag.innerHTML = readyToAppend.join(",");
  }
}
