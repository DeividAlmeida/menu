import { Cart } from "../types/cart";
import { allItems, border, categories } from "../App";
export class Calculator  {
  private total: number = 0;
  private adicional_price: number = 0;
  constructor( 
    private cart: Cart[] = []
  ) {
    this.cart = cart;
  }

  public calcTastePrice(tastes: number[]) {
    return tastes.reduce((acc, item) => {
      return acc > allItems[item].price? acc : allItems[item].price;
    }, 0);
  }

  public calcTotal() {
    this.total = this.cart.reduce((acc, item) => {
      const base_price = categories[item.type].price;
      this.adicional_price = this.calcTastePrice(item.tastes);
      const border_price = item.border !== undefined ? border[item.border].price : 0;
      return acc + (base_price + this.adicional_price + border_price);
    }, 0);
    return this.total;
  }
  
}