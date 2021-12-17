import { content } from "./types";
import { checkIsDataNull, idMaker } from "./utility";

export interface IStore {
  save(data: content): void;
}

export default class Store implements IStore {
  private init: string | null;

  constructor() {
    this.init = localStorage.getItem("data");
  }

  private initialDataMaker(data: content) {
    this.init = JSON.stringify({ [idMaker()]: data });
  }

  private pushNewData(data: content) {
    const item = JSON.parse(this.init as string);
    item[idMaker()] = data;
    this.init = JSON.stringify(item);
  }

  save(data: content) {
    switch (checkIsDataNull([this.init])) {
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
