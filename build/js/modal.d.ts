import { Menu } from "./types";
export interface IModal {
    toggle(menu?: Menu): void;
    injectOnSubmit: Function;
}
export default class Modal implements IModal {
    private dialog;
    private close?;
    private submit?;
    private onSubmit?;
    constructor();
    private createDesc;
    set injectOnSubmit(func: Function);
    toggle: (menu?: Menu | undefined) => void;
}
