import { Component } from "../../component.js";

export class ImageComponent extends Component<HTMLElement> {
  constructor(url: string, title: string) {
    super(`<div><img class="a"/></div>`);
    const img = this.element.querySelector(".a")! as HTMLImageElement;
    console.log(img);
    img.src = url;
    img.alt = title;
  }
}

// export class ImageComponent {
//   private element: HTMLElement;
//   constructor(title: string, url: string) {
//     const template = document.createElement("template");
//     template.innerHTML = `<section class="image">
//     <div class="image__holder"><img class="image__thumbnail"></div>
//     <p class="image__title"></p>
//   </section>`;
//     this.element = template.content.firstElementChild! as HTMLElement;
//     console.log(this.element);

//     const imageElement = this.element.querySelector(
//       ".image__thumbnail"
//     )! as HTMLImageElement;
//     console.log(imageElement);
//     imageElement.src = url;
//     imageElement.alt = title;

//     const titleElement = this.element.querySelector(
//       ".image__title"
//     )! as HTMLParagraphElement;
//     titleElement.textContent = title;
//   }
//   attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
//     parent.insertAdjacentElement(position, this.element);
//   }
// }
