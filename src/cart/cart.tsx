import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "./cart.css";
import { CartContextType } from "../types/cart";
import { currencyToString } from "../utils";
import { Link, useLocation } from "react-router-dom";
import { ItemCart } from "./item_cart";
import { Message } from "../utils/message";
import { message as alert } from 'antd';
export const Cart = () => {
  const [order_status, setOrderStatus] = useState("Seu carrinho está vazio =(");
  const [alertApi, contextHolder] = alert.useMessage();
  const { cart, total } = useContext(CartContext) as CartContextType;
  
  const data = new URLSearchParams(useLocation().search);
  
  useEffect(() => {
    if (data.size === 7) {
      alertApi.open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      });
      setOrderStatus("Porcessando seu pedido..");
      new Message(data);
    }
  }, [])


  return (
    <>
      {contextHolder}
      <div className="back-box">
        <Link to="/" className="back">
          <i className="fa-solid fa-arrow-left" />
        </Link>
      </div>
      <h1 className="cart-title">Seu pedido</h1>
     { 
      cart.length === 0 ?
        <div className="empty-cart">
          <p className="empty-cart-text">{order_status}</p>
        </div>:
        cart.map((item, index) => {
          return (
            <ItemCart item={item} index={index} key={index}/>
          )
        })
      }
      <h1 className="cart-title">Endereço de entrega</h1>
      <form lang="pt">
        <div className="cart-box cart-form">
          <div className="cart-form-row">
            <div className="cart-form-column">
              <input type="text" name="name" placeholder="Nome" required />
            </div>
            <div className="cart-form-column">
              <input type="number" pattern="\d{10,11}" name="phone" id="" placeholder="Whatsapp ex.: 7599999999" required />
            </div>

            <div className="cart-form-column">
              <input type="text" name="address" id="" placeholder="Endereço" required />
            </div>

            <div className="cart-form-column">
              <label htmlFor="number" className="radio-lable">Enderço de entrega é fora da cidade?</label>
              <br />
              <div className="form-check">
                <input className="form-check-input" type="radio" name="out_town" id="yes" required/>
                <label className="form-check-label check-address" htmlFor="yes">
                    Sim
                </label>
              </div>
              <br/>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="out_town" id="no" required/>
                <label className="form-check-label check-address" htmlFor="no">
                    Não
                </label>
              </div>
            </div>
            <div className="cart-form-column" id="complement">
              <textarea  name="complement" id="" placeholder="Complemento"/>
            </div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
            <input type="hidden" name="total" value={total}/>
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
        <div className="next-button-box">
          <button 
            disabled={cart.length === 0}
            className="next-button" 
            type="submit"
          >
            Finalizar pedido
          </button>
        </div>
      </form>
    </>
  );
}