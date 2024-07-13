import { useContext } from "react";
import { allItems, border, categories, CartContext } from "../App";
import "./cart.css";
import { CartContextType } from "../types/cart";
import { currencyToString } from "../utils";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart , total, addOrder } = useContext(CartContext) as CartContextType;
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
          <>
            <details className="cart-box" open key={index}>
              <summary className="item-header">
                  <button className="danger" >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <h2 className="item-name">{categories[item.type].title}</h2>
              </summary>
              <div className="item-body">
                <div className="content">
                  {
                    item.tastes.map((taste, taste_index) => {
                      return (
                        <div className="item-info" key={`t-${taste_index}`}>
                          <p className="item-taste">{allItems[taste].title}</p>
                          <p className="item-remove">
                            <i className="fa-solid fa-xmark"></i>
                          </p>
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
                        <p className="item-remove">
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
                {currencyToString(categories[item.type].price + item.tastes.reduce((acc, taste) => acc + allItems[taste].price, 0) + (item.border !== undefined ? border[item.border].price : 0))}
              </p>
            </div>
          </>
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