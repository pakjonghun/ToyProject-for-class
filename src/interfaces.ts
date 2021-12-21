import { onClick } from "./components/page/page.js";

export interface IComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export interface IComposible {
  addChild(section: IComponent): void;
}

export interface IOnClick {
  setOnClick: onClick;
}

export interface IGetInputValues {
  getTitle: string;
  getContent: String;
}
