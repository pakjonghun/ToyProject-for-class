import { IGetInputValues } from "../../../interfaces.js";
import { BaseComponent } from "./../../../component.js";
export class MediaItem
  extends BaseComponent<HTMLElement>
  implements IGetInputValues
{
  constructor() {
    super(
      `<div>
        <label for="title">Title</label>
        <input id="title" type="text" class="title" />
        <label for="content">Url</label>
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
