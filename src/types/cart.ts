export type Cart = {
  type : number;
  tastes: number[];
  border?: number;
}

export type CartContextType = {
  cart: Cart[];
  total: number;
  addOrder: React.Dispatch<React.SetStateAction<Cart[] | []>>;
};

interface IItem {
  title: string;
  image: string;
  description: string;
  details?: any;
  flavor?: any;
}