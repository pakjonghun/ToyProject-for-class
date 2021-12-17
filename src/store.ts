import { content } from "./types";

export interface IStore {
  save(data: content): void;
}

export default class Store implements IStore {
  private init: string | null;
  private id: string;

  constructor() {
    this.init = localStorage.getItem("data");
    this.id = "";
  }

  private idMaker() {
    this.id = `${Math.floor(Math.random() * 1000)}-${Date.now()}`;
  }

  private checkIsInitNull() {
    return this.init === null;
  }

  private initialDataMaker(data: content) {
    this.idMaker();
    this.init = JSON.stringify({ [this.id]: data });
  }

  private pushNewData(data: content) {
    this.idMaker();
    const item = JSON.parse(this.init as string);
    item[this.id] = data;
    this.init = JSON.stringify(item);
  }

  save(data: content) {
    switch (this.checkIsInitNull()) {
      case true:
        this.initialDataMaker(data);
        break;
      default:
        this.pushNewData(data);
        break;
    }

    localStorage.setItem("data", this.init as string);
  }
}
