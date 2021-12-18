import { content } from "./types";

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

        if (!title || !desc) return alert("빈 공간은 입력 될 수 없습니다.");
        return {
          title,
          desc,
        };
    }
  };
}
