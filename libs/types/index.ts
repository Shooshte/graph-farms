export interface Line {
  quantity: number;
  itemId: string;
}

export interface Purchase {
  createdAt: Date;
  lines: Line[];
}

export interface UserTypeProfile {
  segment: string;
  pastMonthPurchases: Purchase[];
  basket: Purchase;
  createdAt: Date;
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
