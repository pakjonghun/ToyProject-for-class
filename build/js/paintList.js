var tags = {
    banage: function (data) {
        return "<li class=\"content\">\n      <div\n        class=\"thumbnail\"\n        style=\"\n                background: url(" + data.title + ") center/cover\n                  no-repeat;\n              \"\n      ></div>\n      <div class=\"contentInfo\">" + data.desc + "</div>\n      <i class=\"fas fa-times\" data-id=\"" + data.id + "\"></i>\n    </li>";
    },
    video: function (data) {
        return "<li class=\"content\">\n      <iframe src=\"" + data.title + "\" class=\"thumbnail\"></iframe>\n      <div class=\"content\">" + data.desc + "</div>\n      <i class=\"fas fa-times\" data-id=\"" + data.id + "\"></i>\n    </li>";
    },
    note: function (data) {
        return "<li class=\"todoContent\">\n      <div>\n        <div class=\"todoTitle\">" + data.title + "</div>\n        <div class=\"todoInfo\">" + data.desc + "</div>\n      </div>\n      <i class=\"fas fa-times\" data-id=\"" + data.id + "\"></i>\n    </li>";
    },
    task: function (data) {
        return "<li class=\"todoContent\">\n      <div>\n        <div class=\"todoTitle\">" + data.title + "</div>\n        <div class=\"todoInfo\">" + data.desc + "</div>\n      </div>\n      <i class=\"fas fa-times\" data-id=\"" + data.id + "\"></i>\n    </li>";
    },
};
var PaintList = /** @class */ (function () {
    function PaintList() {
        var _this = this;
        var _a;
        this.deleteBtns = document.querySelector(".list");
        (_a = this.deleteBtns) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            if (!event.target)
                return;
            var target = event.target;
            if (target.matches(".fa-times")) {
                console.log("id", target.dataset.id);
                _this.onDelete && _this.onDelete(target.dataset.id);
            }
        });
    }
    Object.defineProperty(PaintList.prototype, "onDeleteClick", {
        set: function (func) {
            this.onDelete = func;
        },
        enumerable: false,
        configurable: true
    });
    PaintList.prototype.paint = function (parentTag, data) {
        var readyToAppend = data.map(function (item) { return tags[item.type](item); });
        parentTag.innerHTML = readyToAppend.join(",");
    };
    return PaintList;
}());
export default PaintList;
//# sourceMappingURL=paintList.js.map