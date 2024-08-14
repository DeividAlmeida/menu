import { useContext, useState } from "react";
import { Cart, CartContextType } from "../types/cart";
import { allItems, border, CartContext, categories } from "../App";
import { Calculator } from "../utils/calculator";
import { currencyToString } from "../utils";

type PropsType = {
  item: Cart;
  index: number;
};
export const CartItem = ({ item, index }: PropsType) => {
  const { cart , addOrder } = useContext(CartContext) as CartContextType;
  const [key , setKey] = useState(index);

  const removeItem = (index: number) => () => {
    cart.splice(index, 1)
    addOrder(cart);
    setKey((prev) => prev + 1);
  };

  const removeTaste = (item_index: number, taste_index: number) => () => {
   cart[item_index].tastes.splice(taste_index, 1);
   cart[item_index].sub_total = new Calculator([
    cart[item_index]
  ]).calcTotal();
    addOrder(cart);
    setKey((prev) => prev + 1);
  };

  const removeBorder = (index: number) => () => {
    cart[index].border = undefined;
    cart[index].sub_total = new Calculator([
      cart[index]
    ]).calcTotal();
    addOrder(cart);
    setKey((prev) => prev + 1);
  };

  return (
    <>
      <details className="cart-box" open key={key}>
        <summary className="item-header">
            <button className="danger" onClick={removeItem(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <h2 className="item-name">{categories[item.type].title}</h2>
        </summary>
        <div className="item-body">
          <div className="content">
            {
              item.tastes.map((taste, taste_index) => {
                return (
                  <div className="item-info" key={`t-${index}${taste_index}`}>
                    <p className="item-taste">{allItems[taste].title}</p>
                    {
                      item.tastes.length > 1 ?
                      <p className="item-remove" onClick={removeTaste(index, taste_index)}>
                        <i className="fa-solid fa-xmark"></i>
                      </p>: null
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        {
          item.border ?
          <div className="item-footer" key={`b-${index}`}>
            <div className="content">
              <div className="item-info">
                <p className="item-complement">
                  {border[item.border].description}
                  <i className="item-complement-price"> - {currencyToString(border[item.border].price)}</i>
                </p>
                  <p className="item-remove" onClick={removeBorder(index)}>
                    <i className="fa-solid fa-xmark" />
                  </p>
              </div>
            </div>
          </div>: null
        }
      </details>
      <div className="sub-total">
        <p className="sub-total-lable">
          Sub-total
        </p>
        <p className="sub-total-price">
          {currencyToString(item.sub_total)}
        </p>
      </div>
    </>
  )
};