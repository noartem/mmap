export interface Card {
  id: string;
  name: string;
  body: string;
  tags: string[];
}

export interface Cards {
  [id: string]: Card;
}

export interface Column {
  id: string;
  name: string;
  cardsIds: string[];
}

export interface Columns {
  [id: string]: Column;
}
