export class BasicComponent {
    constructor(tagName, className) {
        this.element = document.createElement(tagName);
        this.element.setAttribute("class", className);
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
//# sourceMappingURL=basic.js.map