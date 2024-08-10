export type Cart = {
  type : number;
  tastes: number[];
  border?: number;
  sub_total: number;
}

export type CartContextType = {
  cart: Cart[];
  discount: number;
  total: number;
  addOrder: (cart: Cart[], new_discount?: number) => void;
};

export interface IItem {
  id: number;
  title: string;
  image: string;
  description: string;
  details?: any;
  price: number;
}