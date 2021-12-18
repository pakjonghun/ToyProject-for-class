import { content } from "./types.js";

export interface IStore {
  save(data: content): void;
  load(): content[];
  delete(id: string): void;
}

export default class Store implements IStore {
  private saveToLocalstorage(data: string) {
    localStorage.setItem("data", data);
  }

  private getUpdatedData(): string | null {
    return localStorage.getItem("data");
  }

  load(): content[] {
    const temp = this.getUpdatedData();
    return temp == null ? [] : JSON.parse(temp);
  }

  save(data: content) {
    const curData = this.load();
    const readyToSave = JSON.stringify([data, ...curData]);
    localStorage.setItem("data", readyToSave);
  }

  delete(id: string): void {
    let isExsit = false;
    const newData = [];
    for (let item of this.load()) {
      if (item.id === id) {
        isExsit = true;
        continue;
      }
      newData.push(item);
    }

    if (!isExsit) throw new Error("삭제할 리스트가 없습니다.");
    this.saveToLocalstorage(JSON.stringify(newData));
  }
}
