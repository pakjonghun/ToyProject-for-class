var Input = /** @class */ (function () {
    function Input(parent) {
        this.parent = parent;
        this.create = function (menu) {
            switch (menu) {
                case "banage":
                case "note":
                case "task":
                case "video":
                    var descLabel = document.querySelector(".descLabel");
                    var input = document.createElement("input");
                    input.setAttribute("class", "descInput");
                    input.setAttribute("id", "descInput");
                    return descLabel;
                default:
                    throw new Error("일치하지 않는 메뉴 입니다.");
            }
        };
        this.save = function (data) { };
    }
    return Input;
}());
export {};
//# sourceMappingURL=insert.js.map