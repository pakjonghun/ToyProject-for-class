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
  private startY?: number;
  private overY?: number;
  private children? = new Set<IItemList>();
  private curMoving?: (IComponent & IItemList) | null;
  private curOvering?: (IComponent & IItemList) | null;
  private readonly list: T;
  constructor(list: T) {
    super('<ul class="page"></ul>');
    this.list = list;

    this.element.addEventListener("drop", (event: DragEvent) => {
      this.onDrop(event);
    });

    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.onDragOver(event);
    });
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    console.log(event.clientY);

    if (!this.curOvering || !this.curMoving) return;
    if (this.curOvering === this.curMoving) return;

    if (this.startY && this.overY && this.startY - this.overY < 0) {
      this.curMoving.removeFrom(this.element);
      this.curOvering.attach(this.curMoving, "afterend");
    } else {
      this.curOvering.attach(this.curMoving, "beforebegin");
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  toggleMute() {
    this.children?.forEach((item) => {
      item.toggleMute();
    });
  }

  addChild(section: IComponent) {
    const list = new this.list();
    list.setOnClick = () => {
      list.removeFrom(this.element);
      this.children?.delete(list);
    };
    list.addChild(section);
    list.attachTo(this.element);
    this.children?.add(list);
    list.setOnStateListener(
      (
        target: IItemList & IComposible & IComponent,
        state: DragState,
        y?: number
      ) => {
        switch (state) {
          case "end":
            this.curMoving = null;
            this.toggleMute();
            break;
          case "leave":
            this.curOvering = null;
            break;
          case "over":
            this.overY = y;
            this.curOvering = target;
            break;
          case "start":
            this.startY = y;
            this.curMoving = target;
            this.toggleMute();
            break;
          default:
            throw new Error("올바른 상태값이 아닙니다.");
        }
      }
    );
  }
}
//y 192, 754
//cliy 192, 754
//offsety -93,31
//scrolly 362,865
type DragState = "start" | "end" | "over" | "leave";
type OnCloseListener = () => void;
type StateListener<T extends IComponent> = (
  component: T,
  state: DragState,
  y?: number
) => void;

interface IItemList {
  setOnStateListener(listener: StateListener<ItemList>): void;
  setOnCloseListener(listener: OnCloseListener): void;
  toggleMute(): void;
}

export class ItemList
  extends BaseComponent<HTMLElement>
  implements IComposible, IItemList
{
  private onClick?: onClick;
  private stateListener?: StateListener<ItemList>;
  private onCloseListener?: OnCloseListener;
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

    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.onDragOver(event);
    });

    this.element.addEventListener("dragleave", (event: DragEvent) => {
      this.onDragLeave(event);
    });
  }

  setOnStateListener(listener: StateListener<ItemList>) {
    this.stateListener = listener;
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.onCloseListener = listener;
  }

  onDragStart(_: DragEvent) {
    this.listenerObserver("start", _.clientY);
  }

  onDragEnd(_: DragEvent) {
    this.listenerObserver("end");
  }

  onDragOver(_: DragEvent) {
    this.listenerObserver("over", _.clientY);
  }

  onDragLeave(_: DragEvent) {
    this.listenerObserver("leave");
  }

  listenerObserver(state: DragState, y?: number) {
    this.stateListener && this.stateListener(this, state, y);
    state === "end" && this.onCloseListener && this.onCloseListener();
  }

  set setOnClick(onClick: onClick) {
    this.onClick = onClick;
  }

  addChild(section: IComponent) {
    section.attachTo(this.element);
  }

  toggleMute() {
    this.element.classList.toggle("mute");
  }
}
