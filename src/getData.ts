import { content, Menu } from "./types.js";
import { idMaker } from "./utility.js";

export interface IGetData {
  getData(): content | void;
}

export default class GetData implements IGetData {
  private titleInput: HTMLInputElement | null;
  private descInput: HTMLInputElement | null;
  constructor() {
    this.titleInput = document.querySelector(".titleInput");
    this.descInput = document.querySelector(".descInput");
  }

  getData = (): content | void => {
    switch (true) {
      case this.titleInput == null:
      case this.descInput == null:
        throw new Error("element is null");

      default:
        const title = this.titleInput?.value;
        const desc = this.descInput?.value;
        const type = this.descInput?.dataset.type;
        if (!title || !desc) return alert("빈 공간은 입력 될 수 없습니다.");

        switch (type) {
          case "video":
          case "banage":
          case "note":
          case "task":
            return {
              id: idMaker(),
              type,
              title,
              desc,
            };
          default:
            throw new Error(
              "데이터를 입력받는 도중 알 수 없는 오류가 발생했습니다."
            );
        }
    }
  };
}
