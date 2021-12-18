var GetData = /** @class */ (function () {
    function GetData() {
        var _this = this;
        this.getData = function () {
            var _a, _b;
            switch (true) {
                case _this.titleInput == null:
                case _this.descInput == null:
                    throw new Error("element is null");
                default:
                    var title = (_a = _this.titleInput) === null || _a === void 0 ? void 0 : _a.value;
                    var desc = (_b = _this.descInput) === null || _b === void 0 ? void 0 : _b.value;
                    if (!title || !desc)
                        return alert("빈 공간은 입력 될 수 없습니다.");
                    return {
                        title: title,
                        desc: desc,
                    };
            }
        };
        this.titleInput = document.querySelector(".titleInput");
        this.descInput = document.querySelector(".descInput");
    }
    return GetData;
}());
export default GetData;
//# sourceMappingURL=getData.js.map