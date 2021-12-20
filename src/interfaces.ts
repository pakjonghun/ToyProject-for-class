export interface IbaseComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export interface Icomposible {
  addChild(child: IbaseComponent): void;
}
