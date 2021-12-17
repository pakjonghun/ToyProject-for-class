var IConeetne = /** @class */ (function () {
    function IConeetne() {
    }
    // private url?: string;
    // private desc?: string;
    // private title?: string;
    // set contentTitle(title: string) {
    //   this.title = title;
    // }
    // set imageUrl(url: string) {
    //   this.url = url;
    // }
    // set contentDesc(desc: string) {
    //   this.desc = desc;
    // }
    IConeetne.prototype.elementMaker = function (menu, data) {
        switch (menu) {
            case 'banage':
                break;
            case "task":
            case "note":
                break;
            case "video":
                break;
            default:
                throw new Error("테그를 만들 수 없어요.");
                var tag = this.tagMaker(menu, data);
        }
    };
    IConeetne.prototype.tagMaker = function (menu, data) {
        switch (menu) {
            case "banage":
                return "<li class=\"content\">\n                  <div class=\"thumbnail\" style='background : url(" + data + "}) center/contain no-repeat'></div>\n                  <div class=\"contentInfo\">" + data.desc + "</div>\n                  <i class=\"fas fa-times\"></i>\n                </li>";
            case "task":
            case "note":
                return "<li class=\"todoContent\">\n                  <div class=\"todoDetail\">\n                    <div class=\"todoTitle\">" + data.title + "</div>\n                    <div class=\"todoInfo\">" + data.desc + "</div>\n                  </div>\n                  <i class=\"fas fa-times\"></i>\n                </li>";
            case "video":
                return "<li class=\"content\">\n                  <iframe\n                    src=\"" + data.url + "\"\n                    class=\"thumbnail\"></iframe>\n                  <div class=\"contentInfo\">" + data.desc + "</div>\n                  <i class=\"fas fa-times\"></i>\n                </li>";
            default:
                throw new Error("테그를 만들 수 없어요.");
        }
    };
    return IConeetne;
}());
export {};
//# sourceMappingURL=content.js.map