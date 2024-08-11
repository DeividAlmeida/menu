import { Cart } from "../types/cart";
import { allItems, border, categories } from "../App";
export class Calculator  {
  public total: number = 0;
  constructor( 
    private cart: Cart[]
  ) {
    this.cart = cart;
    this.calcTotal();
  }

  private calcTastePrice(tastes: number[]) {
    return tastes.reduce((acc, item) => {
      return acc + allItems[item].price;
    }, 0);
  }

  private calcTotal() {
    this.total = this.cart.reduce((acc, item) => {
      const base_price = categories[item.type].price;
      const taste_price = this.calcTastePrice(item.tastes);
      const border_price = item.border !== undefined ? border[item.border].price : 0;
      return acc + (base_price + taste_price + border_price);
    }, 0);
    return this.total;
  }
  
}