import { Menu } from "./types";
export interface IModal {
    toggle(menu?: Menu): void;
}
export default class Modal implements IModal {
    private dialog;
    private close;
    private submit;
    private onToggle?;
    constructor();
    private createDesc;
    set onClick(func: Function);
    toggle: (menu?: Menu | undefined) => void;
}
