var tags = {
    banage: function (data) {
        return "<li class=\"content\">\n      <div\n        class=\"thumbnail\"\n        style=\"\n                background: url(" + data.title + ") center/cover\n                  no-repeat;\n              \"\n      ></div>\n      <div class=\"contentInfo\">" + data.desc + "</div>\n      <i class=\"fas fa-times\"></i>\n    </li>";
    },
    video: function (data) {
        return "<li class=\"content\">\n      <iframe src=\"" + data.title + "\" class=\"thumbnail\"></iframe>\n      <div class=\"content\">" + data.desc + "</div>\n      <i class=\"fas fa-times\"></i>\n    </li>";
    },
    note: function (data) {
        return "<li class=\"todoContent\">\n      <div>\n        <div class=\"todoTitle\">" + data.title + "</div>\n        <div class=\"todoInfo\">" + data.desc + "</div>\n      </div>\n      <i class=\"fas fa-times\"></i>\n    </li>";
    },
    task: function (data) {
        return "<li class=\"todoContent\">\n      <div>\n        <div class=\"todoTitle\">" + data.title + "</div>\n        <div class=\"todoInfo\">" + data.desc + "</div>\n      </div>\n      <i class=\"fas fa-times\"></i>\n    </li>";
    },
};
var PaintList = /** @class */ (function () {
    function PaintList() {
    }
    PaintList.prototype.paint = function (parentTag, data) {
        var readyToAppend = data.map(function (item) { return tags[item.type](item); });
        console.log(readyToAppend);
        parentTag.innerHTML = readyToAppend.join(",");
    };
    return PaintList;
}());
export default PaintList;
//# sourceMappingURL=paintList.js.map