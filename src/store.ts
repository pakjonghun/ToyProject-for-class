import { content } from "./types.js";
import { idMaker } from "./utility.js";

export interface IStore {
  save(data: content): void;
  delete(id: string): void;
}

export default class Store implements IStore {
  private init: string | null | undefined;

  constructor() {
    this.getUpdatedDataes();
  }

  private pushInitialData(data: content) {
    const readyToSave: string = JSON.stringify({ id: idMaker(), data });
    this.saveToLocalstorage(readyToSave);
  }

  private pushNewData(data: content, init: string) {
    const item = JSON.parse(init);
    const readyToSave = JSON.stringify((item[idMaker()] = data));
    this.saveToLocalstorage(readyToSave);
  }

  private saveToLocalstorage(data: string) {
    localStorage.setItem("data", data);
  }

  private deleteById(id: string) {}

  private getUpdatedDataes() {
    this.init = localStorage.getItem("data");
  }

  save(data: content) {
    if (this.init == null) {
      this.pushInitialData(data);
      return;
    }

    this.init && this.pushNewData(data, this.init);
  }

  delete(id: string): void {
    if (this.init == null) throw new Error("지울 데이터가 없습니다.");

    this.deleteById(id);
  }
}
