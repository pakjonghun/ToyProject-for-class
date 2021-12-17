import { checkIsElementNull } from "./utility";
var InsertData = /** @class */ (function () {
    function InsertData() {
        this.titleInput = document.querySelector(".titleInput");
        this.descInput = document.querySelector(".descInput");
    }
    InsertData.prototype.gettData = function () {
        var isElementNull = checkIsElementNull([this.titleInput, this.descInput]);
        switch (isElementNull) {
            case false:
                var title = this.titleInput.value;
                var desc = this.descInput.value;
            default:
                throw new Error("null 요소가 있습니다. 클레스나 아이디를 다시 확인하세요.");
        }
    };
    return InsertData;
}());
//# sourceMappingURL=insertData.js.map