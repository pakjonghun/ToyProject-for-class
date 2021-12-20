import { BasicComponent } from './../common/basicComponent';
import { IDialog } from './dialog.js';
import { IDialogItem } from './item/imageDialog.js';

type DialogConstractor = {
  new():IDialog
}


type DialogInputConstractor = {
  new():IDialogItem
}


export class OnClickMenuDialog {
  private item?:BasicComponent<HTMLElement>
  constructor(private readonly bodyRoot = document.body, dialog: DialogConstractor, input: DialogInputConstractor, item: BasicComponent<HTMLElement>) {
    this.item = item;
    const body = new dialog();
    const todoDialog = new input();
    body.addChild(todoDialog);
    body.onToggleClick = () => {
      body.removeFrom(this.bodyRoot);
    };
    body.onToggleClick = () => {
      body.removeFrom(bodyRoot);
    };
    body.onSubmitClick = () => {
      const todoItem = this.item&& new this.item(todoDialog.title)
      this.page.addChild(todoItem);
      dialog.removeFrom(document.body);
    };

    dialog.attachTo(document.body);
  }
  

  const todoBtn = document.getElementById("todoBtn")! as HTMLButtonElement;
  todoBtn.onclick = () => {
    
  };

}
