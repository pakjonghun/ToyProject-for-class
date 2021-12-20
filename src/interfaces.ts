export interface IComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export interface IComposible {
  addChild(section: IComponent): void;
}
