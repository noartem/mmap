export interface Card {
  id: string;
  name: string;
  body: string;
  tags: string[];
}

export interface Column {
  id: string;
  name: string;
  cards: Card[];
}
