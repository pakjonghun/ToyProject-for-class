import { IComposible, IComponent, IOnClick } from "./../../interfaces.js";
import { BaseComponent } from "../../component.js";

export type onClick = () => void;

type list<I extends IComposible & IComposible & IOnClick> = {
  new (): I;
};

export class Page<T extends list<ItemList>>
  extends BaseComponent<HTMLUListElement>
  implements IComposible
{
  private readonly list: T;
  constructor(list: T) {
    super('<ul class="page"></ul>');
    this.list = list;

    this.element.addEventListener("drop", (event: DragEvent) => {
      this.drop(event);
    });

    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.dragover(event);
    });
  }

  addChild(section: IComponent) {
    const list = new this.list();
    list.setOnClick = () => list.removeFrom(this.element);
    list.addChild(section);
    list.attachTo(this.element);
  }

  drop(event: DragEvent) {
    event.preventDefault();
    console.log("drop", event);
  }

  dragover(event: DragEvent) {
    event.preventDefault();
    console.log("dragover", event);
  }
}

export class ItemList
  extends BaseComponent<HTMLElement>
  implements IComposible
{
  private onClick?: onClick;
  constructor() {
    super(`<li draggable="true"><button class="times">&times;</button></li>`);

    const times = this.element.querySelector(".times")! as HTMLElement;
    times.onclick = () => {
      this.onClick && this.onClick();
    };

    this.element.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });

    this.element.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });
  }

  onDragStart(event: DragEvent) {
    console.log(event);
  }

  onDragEnd(event: DragEvent) {
    console.log(event);
  }

  set setOnClick(onClick: onClick) {
    this.onClick = onClick;
  }

  addChild(section: IComponent) {
    section.attachTo(this.element);
  }
}
