export function checkIsDataNull(element) {
    return element.every(function (item) { return item == null; });
}
export function idMaker() {
    return Math.floor(Math.random() * 1000) + "-" + Date.now();
}
//# sourceMappingURL=utility.js.map