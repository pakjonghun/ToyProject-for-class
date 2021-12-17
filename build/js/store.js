var Store = /** @class */ (function () {
    function Store() {
        this.init = localStorage.getItem("data");
        this.id = "";
    }
    Store.prototype.idMaker = function () {
        this.id = Math.floor(Math.random() * 1000) + "-" + Date.now();
    };
    Store.prototype.checkIsInitNull = function () {
        return this.init === null;
    };
    Store.prototype.initialDataMaker = function (data) {
        var _a;
        this.idMaker();
        this.init = JSON.stringify((_a = {}, _a[this.id] = data, _a));
    };
    Store.prototype.pushNewData = function (data) {
        this.idMaker();
        var item = JSON.parse(this.init);
        item[this.id] = data;
        this.init = JSON.stringify(item);
    };
    Store.prototype.save = function (data) {
        switch (this.checkIsInitNull()) {
            case true:
                this.initialDataMaker(data);
                break;
            default:
                this.pushNewData(data);
                break;
        }
        localStorage.setItem("data", this.init);
    };
    return Store;
}());
export default Store;
//# sourceMappingURL=store.js.map