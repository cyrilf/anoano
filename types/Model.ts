export type BaseModel = {
  id: number;
  range: number[];
};

export type Model = BaseModel & {
  measure: string;
  diameter: number;
  model: string;
  soft: string;
  href: string;
  hrefSoft: string;
};

export type SelectedModel = Model & {
  isSoft: boolean;
};

export type DiyModel = BaseModel & {
  size: number;
  measure: string;
};

export type Header = {
  name: string;
  key: string;
  tooltip?: string;
};
