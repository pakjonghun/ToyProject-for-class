var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.prototype.saveToLocalstorage = function (data) {
        localStorage.setItem("data", data);
    };
    Store.prototype.getUpdatedData = function () {
        return localStorage.getItem("data");
    };
    Store.prototype.load = function () {
        var temp = this.getUpdatedData();
        return temp == null ? [] : JSON.parse(temp);
    };
    Store.prototype.save = function (data) {
        var curData = this.load();
        var readyToSave = JSON.stringify(__spreadArray([data], curData));
        localStorage.setItem("data", readyToSave);
    };
    Store.prototype.delete = function (id) {
        var isExsit = false;
        var newData = [];
        for (var _i = 0, _a = this.load(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                isExsit = true;
                continue;
            }
            newData.push(item);
        }
        if (!isExsit)
            throw new Error("삭제할 리스트가 없습니다.");
        this.saveToLocalstorage(JSON.stringify(newData));
    };
    return Store;
}());
export default Store;
//# sourceMappingURL=store.js.map