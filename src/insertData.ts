import { content } from "./types";
import { checkIsElementNull } from "./utility";

interface IInsertData {
  getData(): content;
}

class InsertData {
  private titleInput: HTMLInputElement | null;
  private descInput: HTMLInputElement | null;
  constructor() {
    this.titleInput = document.querySelector(".titleInput");
    this.descInput = document.querySelector(".descInput");
  }

  gettData() {
    const isElementNull = checkIsElementNull([this.titleInput, this.descInput]);

    switch (isElementNull) {
      case false:
        const title = this.titleInput!.value;
        const desc = this.descInput!.value;

      default:
        throw new Error(
          "null 요소가 있습니다. 클레스나 아이디를 다시 확인하세요."
        );
    }
  }
}
