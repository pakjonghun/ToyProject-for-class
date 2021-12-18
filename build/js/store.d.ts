import { content } from "./types.js";
export interface IStore {
    save(data: content): void;
    delete(id: string): void;
}
export default class Store implements IStore {
    private init;
    constructor();
    private pushInitialData;
    private pushNewData;
    private saveToLocalstorage;
    private deleteById;
    private getUpdatedDataes;
    save(data: content): void;
    delete(id: string): void;
}
