import GetData from "./getData.js";
import Header from "./header.js";
import Modal from "./modal.js";
import Store from "./store.js";
var getData = new GetData();
var modal = new Modal();
var store = new Store();
function onSubmit() {
    var data = getData.getData();
    if (data == null)
        return;
    store.save(data);
}
modal.injectOnSubmit = onSubmit;
var header = new Header();
header.injectMenuClick = modal.toggle;
//# sourceMappingURL=main.js.map