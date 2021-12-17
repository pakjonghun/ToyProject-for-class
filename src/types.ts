export type banage = "banage";
export type video = "video";
export type note = "note";
export type task = "task";
export type Element = HTMLElement | HTMLInputElement | null;

type mediaContent = {
  desc: string;
  url: string;
};

type textContent = {
  title: string;
  desc: string;
};

export type content = {
  readonly title?: string;
  readonly desc?: string;
  readonly url?: string;
};

export type Menu = banage | video | note | task;

export type Data<M extends Menu> = M extends banage
  ? mediaContent
  : M extends video
  ? mediaContent
  : M extends note
  ? textContent
  : M extends task
  ? task
  : "적합한 메뉴타입이 아닙니다.";
