import GetData from "./getData.js";
import Header from "./header.js";
import Modal from "./modal.js";
import PaintList from "./paintList.js";
import Store from "./store.js";
var getData = new GetData();
var modal = new Modal();
var store = new Store();
var paintList = new PaintList();
window.addEventListener("load", function () {
    var parent = document.querySelector(".list");
    if (parent == null)
        return;
    paintList.paint(parent, store.load());
});
function onSubmit() {
    var data = getData.getData();
    var parent = document.querySelector(".list");
    if (!parent || data == null)
        return;
    store.save(data);
    paintList.paint(parent, store.load());
}
modal.injectOnSubmit = onSubmit;
var header = new Header();
header.injectMenuClick = modal.toggle;
//# sourceMappingURL=main.js.map