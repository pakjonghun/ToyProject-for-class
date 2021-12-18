import GetData, { IGetData } from "./getData.js";
import Header from "./header.js";
import Modal, { IModal } from "./modal.js";
import Store, { IStore } from "./store.js";
import { content } from "./types.js";

const getData: IGetData = new GetData();
const modal: IModal = new Modal();
const store: IStore = new Store();

function onSubmit() {
  const data: content | void = getData.getData();
  if (data == null) return;
  store.save(data);
}
modal.injectOnSubmit = onSubmit;

const header = new Header();
header.injectMenuClick = modal.toggle;
