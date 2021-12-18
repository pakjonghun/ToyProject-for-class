import { content } from "./types";
export interface IPaintList {
    paint(parentTag: Element, data: content[]): void;
}
export default class PaintList implements IPaintList {
    paint(parentTag: HTMLElement, data: content[]): void;
}
