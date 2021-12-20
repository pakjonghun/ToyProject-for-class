export class Todo {
  private readonly element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML =
      "<div><li><section><h1></h1><img/></section></li></div>";
    this.element = template.content.firstElementChild! as HTMLElement;

    const img = this.element.querySelector("img")! as HTMLImageElement;
    img.src = url;

    const h1 = this.element.querySelector("h1")! as HTMLHeadingElement;
    h1.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
  }
}
