// <button id="${className}" class="${className}">
//   ${className}
// </button>

import { BasicComponent, IBasicComponent } from "./../common/basicComponent.js";
import { IComposible } from "./../page/page.js";
export class DialogWrapper
  extends BasicComponent<HTMLElement>
  implements IComposible
{
  constructor() {
    super(
      `<li>
        <div class="body"></div>
      </li>`
    );
  }

  addChild(child: IBasicComponent): void {
    const body = document.querySelector(".body")! as HTMLDivElement;
    child.attachTo(body);
  }
}
