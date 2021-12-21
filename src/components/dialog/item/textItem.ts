import { BaseComponent } from "./../../../component.js";
export class TextItem extends BaseComponent<HTMLElement> {
  constructor() {
    super(
      `<div>
        <label for="title">Title</label>
        <input id="title" type="text" class="title" />
        <label for="title">Content</label>
        <input id="content" type="text" class="content" />
      </div>`
    );
  }

  get getTitle(): string {
    const title = this.element.querySelector("#title")! as HTMLInputElement;
    return title.value;
  }

  get getContent(): string {
    const content = this.element.querySelector("#content")! as HTMLInputElement;
    return content.value;
  }
}
