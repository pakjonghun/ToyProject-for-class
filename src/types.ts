export type banage = "banage";
export type video = "video";
export type note = "note";
export type task = "task";

export type Menu = banage | video | note | task;

export type content = {
  readonly id: string;
  readonly type: Menu;
  readonly title?: string;
  readonly desc?: string;
  readonly url?: string;
};

export type Tags = {
  banage(data: content): string;
  video(data: content): string;
  note(data: content): string;
  task(data: content): string;
};
