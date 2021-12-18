import GetData, { IGetData } from "./getData.js";
import Header from "./header.js";
import Modal, { IModal } from "./modal.js";
import PaintList, { IPaintList } from "./paintList.js";
import Store, { IStore } from "./store.js";
import { content } from "./types.js";

const getData: IGetData = new GetData();
const modal: IModal = new Modal();
const store: IStore = new Store();
const paintList: IPaintList = new PaintList();

const parent = document.querySelector(".list");

window.addEventListener("load", () => {
  const parent = document.querySelector(".list");
  if (parent == null) return;
  paintList.paint(parent, store.load());
});

function onSubmit() {
  const data: content | void = getData.getData();
  if (!parent || data == null) return;
  store.save(data);
  paintList.paint(parent, store.load());
}
modal.injectOnSubmit = onSubmit;

function onDeleteItem(id: string) {
  if (!parent) return;
  store.delete(id);
  paintList.paint(parent, store.load());
}
paintList.onDeleteClick = onDeleteItem;
const header = new Header();
header.injectMenuClick = modal.toggle;
