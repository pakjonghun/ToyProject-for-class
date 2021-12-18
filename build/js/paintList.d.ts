import { content } from "./types";
export interface IPaintList {
    paint(parentTag: Element, data: content[]): void;
    onDeleteClick: Function;
}
export default class PaintList implements IPaintList {
    private onDelete?;
    private deleteBtns?;
    constructor();
    set onDeleteClick(func: Function);
    paint(parentTag: HTMLElement, data: content[]): void;
}
