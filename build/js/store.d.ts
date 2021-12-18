import { content } from "./types.js";
export interface IStore {
    save(data: content): void;
    load(): content[];
    delete(id: string): void;
}
export default class Store implements IStore {
    private saveToLocalstorage;
    private getUpdatedData;
    load(): content[];
    save(data: content): void;
    delete(id: string): void;
}
