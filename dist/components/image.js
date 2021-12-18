import { BasicComponent } from "./basic.js";
export class ImageComponent extends BasicComponent {
    constructor() {
        super("img", "img");
        this.element.setAttribute("src", "https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
        this.element.setAttribute("style", "width:300px;");
    }
}
//# sourceMappingURL=image.js.map