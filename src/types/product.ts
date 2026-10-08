//Akhane API theke product-er data exactly ei structure-e ashe.
// Type define kore rakhle pore component bananor somoy TypeScript
// Ar amader wrong property name ba wrong data type use kora theke bachabe.

export type ProductChange = {
  dir: "up" | "down" | "flat";
  pct: number;
};

export type MarketPrice = {
  market: string;
  division: string;
  min: number;
  max: number;
};

export type Product = {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: ProductChange;
  markets: MarketPrice[];
};