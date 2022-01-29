export interface Line {
  quantity: number;
  itemId: string;
}

export interface Purchase {
  createdAt: string;
  lines: Line[];
}

export type UserSegment = 'retired' | 'blue-collar' | 'admin' | 'regular';

export interface UserProfile {
  segment: UserSegment;
  pastMonthPurchases: Purchase[];
  basket: Purchase;
  createdAt: string;
}

export interface Item {
  id: string;
  name: string;
  defaultPrice: number;
  availableQuantity: number;
  imageURL: string;
}

export interface ItemGroup {
  name: string;
  itemIds: string[];
}
