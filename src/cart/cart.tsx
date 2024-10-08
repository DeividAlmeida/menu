
import { CartContext } from "../App";
import "./cart.css";
import { CartContextType } from "../types/cart";
import { Link } from "react-router-dom";
import { CartItem } from "./cart_item";
import { CartForm } from "./cart_form";
import { useContext } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const Cart = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  
  return (
    <div className="container">
      <div className="back-box">
        <Link to="/" className="back">
          <ArrowLeftOutlined />
        </Link>
      </div>
      <h1 className="cart-title">Seu pedido</h1>
     { 
      cart.length === 0 ?
        <div className="empty-cart">
          <p className="empty-cart-text">Seu carrinho está vazio =(</p>
        </div>:
        <> 
          {
            cart.map((item, index) => {
              return (
                <CartItem item={item} index={index} key={index}/>
              )
            })
          } 
          <CartForm />
        </>
      }
    </div>
  );
}