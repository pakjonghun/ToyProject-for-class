import { IModal } from "./modal";
export default class Header {
    private menus;
    private modal;
    constructor(modal: IModal);
    onMenuClick: (event: Event) => void;
}
