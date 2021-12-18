import { content } from "./types.js";
export interface IGetData {
    getData(): content | void;
}
export default class GetData implements IGetData {
    private titleInput;
    private descInput;
    constructor();
    getData: () => content | void;
}
