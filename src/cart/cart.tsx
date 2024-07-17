import { useContext } from "react";
import { allItems, border, categories, CartContext } from "../App";
import "./cart.css";
import { CartContextType } from "../types/cart";
import { currencyToString } from "../utils";
import { Link } from "react-router-dom";
import { Calculator } from "../utils/calculator";
import { Item } from "../detail/detail";
import { ItemCart } from "./item_cart";
export const Cart = () => {
  const { cart , total, addOrder } = useContext(CartContext) as CartContextType;
  
  const removeItem = (index: number) => () => {
    addOrder(cart.splice(index, 1));
  };

  const removeTaste = (item_index: number, taste_index: number) => () => {
   cart[item_index].tastes.splice(taste_index, 1);
   cart[item_index].sub_total = new Calculator([
    cart[item_index]
  ]).total;
    addOrder(cart);
  };

  const removeBorder = (index: number) => () => {
    cart[index].border = undefined;
    cart[index].sub_total = new Calculator([
      cart[index]
    ]).total;
    addOrder(cart);
  };
  return (
    <>
      <div className="back-box">
        <Link to="/" className="back">
          <i className="fa-solid fa-arrow-left" />
        </Link>
      </div>
      <h1 className="cart-title">Seu pedido</h1>
     {
      cart.map((item, index) => {
        return (
          <ItemCart item={item} index={index} key={index}/>
        )
      })
     }
      <h1 className="cart-title">Endereço de entrega</h1>
      <div className="cart-box cart-form">
        <div className="cart-form-row">
          <div className="cart-form-column">
            <input type="text" name="name" placeholder="Nome" />
          </div>
          <div className="cart-form-column">
            <input type="number" name="phone" id="" placeholder="Whatsapp" />
          </div>

          <div className="cart-form-column">
            <input type="text" name="address" id="" placeholder="Endereço" />
          </div>
          <div className="cart-form-column">
            <input type="text" name="number" id="" placeholder="Número"/>
          </div>

          <div className="cart-form-column">
            <label htmlFor="number" className="radio-lable">Enderço de entrega é fora da cidade?</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="out_town" id="yes"/>
              <label className="form-check-label" htmlFor="yes">
                  Sim
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="out_town" id="no"/>
              <label className="form-check-label" htmlFor="no">
                  Não
              </label>
            </div>
          </div>
          <div className="cart-form-column" id="complement">
            <textarea  name="complement" id="" placeholder="Complemento"/>
          </div>
        </div>
      </div>

      <div className="total-price">
        <div className="price-box">
          <span className="total-price-label">Sub-Total</span>
          <strong className="total-price-value">{currencyToString(total)}</strong>
        </div>
        <div className="price-box">
          <span className="total-price-label">Taxa de entrega</span>
          <strong className="total-price-value">R$ 35,00</strong>
        </div>
        <div className="price-box">
          <span className="total-price-label">Total</span>
          <strong className="total-price-value">R$ 35,00</strong>
        </div>
      </div>
    </>
  );
}