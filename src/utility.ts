import { Element } from "./types";

export function checkIsElementNull(element: Element[]) {
  return element.every((item) => item === null);
}
