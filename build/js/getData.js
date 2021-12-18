import { idMaker } from "./utility.js";
var GetData = /** @class */ (function () {
    function GetData() {
        var _this = this;
        this.getData = function () {
            var _a, _b, _c;
            switch (true) {
                case _this.titleInput == null:
                case _this.descInput == null:
                    throw new Error("element is null");
                default:
                    var title = (_a = _this.titleInput) === null || _a === void 0 ? void 0 : _a.value;
                    var desc = (_b = _this.descInput) === null || _b === void 0 ? void 0 : _b.value;
                    var type = (_c = _this.descInput) === null || _c === void 0 ? void 0 : _c.dataset.type;
                    if (!title || !desc)
                        return alert("빈 공간은 입력 될 수 없습니다.");
                    switch (type) {
                        case "video":
                        case "banage":
                        case "note":
                        case "task":
                            return {
                                id: idMaker(),
                                type: type,
                                title: title,
                                desc: desc,
                            };
                        default:
                            throw new Error("데이터를 입력받는 도중 알 수 없는 오류가 발생했습니다.");
                    }
            }
        };
        this.titleInput = document.querySelector(".titleInput");
        this.descInput = document.querySelector(".descInput");
    }
    return GetData;
}());
export default GetData;
//# sourceMappingURL=getData.js.map