var Modal = /** @class */ (function () {
    function Modal() {
        var _this = this;
        var _a, _b, _c, _d;
        this.createDesc = function (menu) {
            var _a;
            var desc = (_a = _this.dialog) === null || _a === void 0 ? void 0 : _a.querySelector(".descLabel");
            desc.textContent = menu;
        };
        this.toggle = function (menu) {
            var _a;
            menu && _this.createDesc(menu);
            (_a = _this.dialog) === null || _a === void 0 ? void 0 : _a.classList.toggle("none");
        };
        this.dialog = document.querySelector(".dialog");
        this.close = (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.querySelector(".fa-times");
        this.submit = (_b = this.dialog) === null || _b === void 0 ? void 0 : _b.querySelector(".modalForm");
        (_c = this.close) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return _this.toggle(); });
        (_d = this.submit) === null || _d === void 0 ? void 0 : _d.addEventListener("submit", function (event) {
            event.preventDefault();
            _this.toggle();
            _this.onSubmit && _this.onSubmit();
        });
    }
    Object.defineProperty(Modal.prototype, "injectOnSubmit", {
        set: function (func) {
            this.onSubmit = func;
        },
        enumerable: false,
        configurable: true
    });
    return Modal;
}());
export default Modal;
//# sourceMappingURL=modal.js.map