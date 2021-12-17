import { Element, Value } from "./types";

export function checkIsElementNull(element: Element[]): boolean {
  return element.every((item) => item === null);
}

export function checkIsDataOk(element: Value[]): boolean {
  return element.every((item) => item == null);
}

export function idMaker(): string {
  return `${Math.floor(Math.random() * 1000)}-${Date.now()}`;
}
