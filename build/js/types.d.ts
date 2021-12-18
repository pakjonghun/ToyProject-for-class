export declare type banage = "banage";
export declare type video = "video";
export declare type note = "note";
export declare type task = "task";
export declare type Menu = banage | video | note | task;
export declare type content = {
    readonly id: string;
    readonly type: Menu;
    readonly title?: string;
    readonly desc?: string;
    readonly url?: string;
};
export declare type Tags = {
    banage(data: content): string;
    video(data: content): string;
    note(data: content): string;
    task(data: content): string;
};
