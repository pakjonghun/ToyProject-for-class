export default class Header {
    private menus;
    private onClick?;
    constructor();
    set injectMenuClick(onClick: Function);
    onMenuClick: (event: Event) => void;
}
