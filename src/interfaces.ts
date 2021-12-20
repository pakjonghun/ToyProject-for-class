export interface IComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export interface Composible {
  addChild(section: IComponent): void;
}
