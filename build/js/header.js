var Header = /** @class */ (function () {
    function Header(modal) {
        var _this = this;
        var _a;
        this.onMenuClick = function (event) {
            var target = event.target;
            var className = target.classList.value;
            switch (className) {
                case "banage":
                case "note":
                case "task":
                case "video":
                    _this.modal.toggle(className);
                    break;
                default:
                    throw new Error("타입에 없는 메뉴입니다.");
            }
        };
        this.modal = modal;
        this.menus = document.querySelector(".menus");
        (_a = this.menus) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.onMenuClick);
    }
    return Header;
}());
export default Header;
//# sourceMappingURL=header.js.map