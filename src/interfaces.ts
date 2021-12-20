export interface IbaseComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export interface IaddChildComponent {
  addChild(child: IbaseComponent): void;
}
