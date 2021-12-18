export declare type banage = "banage";
export declare type video = "video";
export declare type note = "note";
export declare type task = "task";
export declare type Value = string | null;
declare type mediaContent = {
    desc: string;
    url: string;
};
declare type textContent = {
    title: string;
    desc: string;
};
export declare type content = {
    readonly title?: string;
    readonly desc?: string;
    readonly url?: string;
};
export declare type Menu = banage | video | note | task;
export declare type Data<M extends Menu> = M extends banage ? mediaContent : M extends video ? mediaContent : M extends note ? textContent : M extends task ? task : "적합한 메뉴타입이 아닙니다.";
export {};
