import { idMaker } from "./utility.js";
var Store = /** @class */ (function () {
    function Store() {
        this.getUpdatedDataes();
    }
    Store.prototype.pushInitialData = function (data) {
        var readyToSave = JSON.stringify({ id: idMaker(), data: data });
        this.saveToLocalstorage(readyToSave);
    };
    Store.prototype.pushNewData = function (data, init) {
        var item = JSON.parse(init);
        var readyToSave = JSON.stringify((item[idMaker()] = data));
        this.saveToLocalstorage(readyToSave);
    };
    Store.prototype.saveToLocalstorage = function (data) {
        localStorage.setItem("data", data);
    };
    Store.prototype.deleteById = function (id) { };
    Store.prototype.getUpdatedDataes = function () {
        this.init = localStorage.getItem("data");
    };
    Store.prototype.save = function (data) {
        if (this.init == null) {
            this.pushInitialData(data);
            return;
        }
        this.init && this.pushNewData(data, this.init);
    };
    Store.prototype.delete = function (id) {
        if (this.init == null)
            throw new Error("지울 데이터가 없습니다.");
        this.deleteById(id);
    };
    return Store;
}());
export default Store;
//# sourceMappingURL=store.js.map