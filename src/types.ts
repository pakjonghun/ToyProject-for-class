import { IbaseComponent } from "./interfaces.js";

export type ButtonConstractor<T extends IbaseComponent> = {
  new (): T;
};
