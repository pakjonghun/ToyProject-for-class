import { content } from "./types";
export interface IStore {
    save(data: content): void;
}
export default class Store implements IStore {
    private init;
    private id;
    constructor();
    private idMaker;
    private checkIsInitNull;
    private initialDataMaker;
    private pushNewData;
    save(data: content): void;
}
