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

    if (!this.curOvering || !this.curMoving) return;
    if (this.curOvering === this.curMoving) return;

    const endY = event.clientY;
    const startY = this.curMoving.getY();

    this.curOvering.attach(
      this.curMoving,
      startY - endY < 0 ? "afterend" : "beforebegin"
    );
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  toggleMute() {
    this.children?.forEach((item) => {
      item.toggleClass("mute");
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
      (target: IItemList & IComposible & IComponent, state: DragState) => {
        switch (state) {
          case "end":
            this.curMoving = null;
            this.toggleMute();
            target.toggleClass("moving");
            this.curOvering?.toggleClass("overing");
            break;
          case "leave":
            this.curOvering = null;
            target.toggleClass("overing");
            break;
          case "over":
            this.curOvering = target;
            target.toggleClass("overing");
            break;
          case "start":
            this.curMoving = target;
            this.toggleMute();
            target.toggleClass("moving");
            break;
          default:
            throw new Error("올바른 상태값이 아닙니다.");
        }
      }
    );
  }
}

type DragState = "start" | "end" | "over" | "leave";
type OnCloseListener = () => void;
type StateListener<T extends IComponent> = (
  component: T,
  state: DragState
) => void;

interface IItemList {
  setOnStateListener(listener: StateListener<ItemList>): void;
  setOnCloseListener(listener: OnCloseListener): void;
  toggleClass(className: string): void;
  getY(): number;
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

    this.element.addEventListener("dragenter", (event: DragEvent) => {
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
    this.listenerObserver("start");
  }

  onDragEnd(_: DragEvent) {
    this.listenerObserver("end");
  }

  onDragOver(_: DragEvent) {
    this.listenerObserver("over");
  }

  onDragLeave(_: DragEvent) {
    this.listenerObserver("leave");
  }

  listenerObserver(state: DragState) {
    this.stateListener && this.stateListener(this, state);
    state === "end" && this.onCloseListener && this.onCloseListener();
  }

  set setOnClick(onClick: onClick) {
    this.onClick = onClick;
  }

  addChild(section: IComponent) {
    section.attachTo(this.element);
  }

  toggleClass(className: string) {
    this.element.classList.toggle(className);
  }

  getY(): number {
    return this.element.getBoundingClientRect().y;
  }
}
