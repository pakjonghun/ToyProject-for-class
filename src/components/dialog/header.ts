import { List } from "./../page/page";
import { BasicComponent, IBasicComponent } from "./../common/basicComponent";
class Header extends BasicComponent<HTMLElement> {
  constructor(private list: List) {
    super(` <ul class="buttons"></ul>`);
  }

  addChild(section: IBasicComponent) {
    const list = new this.list();
    list.addChild(section);
    list.attachTo(this.element);
  }
}
