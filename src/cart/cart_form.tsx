import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext, valid_ddds } from "../App";
import { CartContextType } from "../types/cart";
import { currencyToString } from "../utils";
import { DiscountCoupon } from "./discount_coupon";
import { Modal, message as alert } from 'antd';
import InputMask from "react-input-mask";
import { Message } from "../utils/message";
import { LoadingOutlined } from "@ant-design/icons";

export const CartForm = () => {
  const [number, setNumber] = useState("");
  const [delivery_fee, setDeliveryFee] = useState<number>(0);
  const [number_error, setNumberError] = useState(false);
  const [error_info, setErrorInfo] = useState("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const {cart, discount, total, addOrder } = useContext(CartContext) as CartContextType;
  const [alertApi, contextHolder] = alert.useMessage();
  const [modal, contextModalHolder] = Modal.useModal();
  const navigate = useNavigate();

  const sucess_modal = (number: string) => {
    modal.success({
      title: 'Pedido enviado com sucesso !!',
      content: (<p>Você receberá uma mensagem de confirmação do seu pedido em instantes no whatsapp <b>{number}</b></p>),
      onOk: () => {
        addOrder([]);
        navigate("/");
      },
      styles: {}
    });
  };
  

  const set_delivery_fee = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeliveryFee(parseInt(event.target.value));
  }

  const cart_value = () => {
    if (cart.length === 0) return "";
    return JSON.stringify(cart);
  };

  const submit =  async (event:  React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.target as HTMLFormElement);
      number_validation();
      if (number_error) throw new Error("Número inválido");
      
      setDisabled(true);
      alertApi.open({
        type: "loading",
        content: "Processando seu pedido",
        duration: 0,
      });

      const message =  new Message(data);
      var { messages } = await message.send_message();
      if(messages[0]?.message_status !== "accepted") throw new Error("Erro ao enviar pedido");
      
      var { messages } = await message.send_message(process.env.REACT_APP_PHONE_NUMBER, "o cliente", number);
      if(messages[0]?.message_status !== "accepted") throw new Error("Erro ao enviar pedido");
      
      alertApi.destroy();
      sucess_modal(number);
      
      setDisabled(false);     
    } catch (error) {

      alertApi.destroy();
      setDisabled(false);
      alertApi.error(`Erro ao enviar pedido ${error}`);
    }
  }

  const number_validation = () => {
    const ddd = number.substring(0, 2);
    const number_length = number.length !== 11;
    const right_ddd = !valid_ddds.includes(ddd);
    const third_number = number[2] !== "9";
    setNumberError(
      number_length
      || right_ddd 
      || third_number );
    if (number_length) return setErrorInfo("O número deve conter 11 dígitos");
    if (right_ddd) return setErrorInfo("DDD inválido");
    if (third_number) return setErrorInfo("Após o DDD o número deve começar com 9");
  }

  return (
    <>
      {contextHolder}
      {contextModalHolder}
      <h1 className="cart-title">Endereço de entrega</h1>
      <form lang="pt" onSubmit={submit} >
        <div className="cart-box cart-form">
          <div className="cart-form-row">

            <div className="cart-form-column">
              <label className="form-lable">Número do Whatsapp: </label>
              <InputMask
                name="phone"
                required
                type="tel"
                mask="(99) 99999-9999"
                placeholder="Adicione o DDD + Número"
                maskChar={"_"}
                alwaysShowMask={false}
                onChange={(event) =>{
                  setNumber(event.target.value = event.target.value.replace(/\D/g, ""))}
                } 
              />
              {
                number_error ? 
                  <small className="form-helper">Número inválido. <b>{error_info}</b></small>:
                  null
              }
            </div>

            <div className="cart-form-column">
              <label className="form-lable">Nome: </label>
              <input className="form-field" type="text" name="name" placeholder="Seu nome" required onFocus={number_validation} />
            </div>

            <div className="cart-form-column">
              <label className="form-lable">Endereço de entrega: </label>
              <input className="form-field" type="text" name="address" placeholder="Seu Endereço" required onFocus={number_validation} />
            </div>

            <div className="cart-form-column">
              <label className="form-lable">Forma de Pagamento: </label>
              <select 
                name="payment"
                className="form-field"
                defaultValue=""
                required
                onFocus={number_validation}
              > 
                <option value="" hidden>Selecione uma opção</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Pix">Pix</option>
                <option value="Cartão">Cartão</option>
              </select>
            </div>

            <div className="cart-form-column">
              <label className="form-lable">Endereço de entrega é fora da cidade?</label>
              <select
                className="form-field"
                name="delivery_fee"
                defaultValue=""
                required 
                onFocus={number_validation} 
                onChange={set_delivery_fee}
              > 
                <option value="" hidden>Selecione uma opção</option>
                <option value="0">Sim</option>
                <option value="3">Não</option>
              </select>
            </div>
            <div className="cart-form-column" id="complement">
              <label className="form-lable">Complemento: </label>
              <textarea className="form-field" name="complement" placeholder="Informações adicionais" onFocus={number_validation} />
            </div>
            <input className="form-field" type="hidden" name="cart" value={cart_value()} required/>
            <input className="form-field" type="hidden" name="total" value={total}/>
            <input className="form-field" type="hidden" name="discount" value={discount}/>
          </div>
        </div>
        <DiscountCoupon />
        <div className="total-price">
          <div className="price-box">
            <span className="total-price-label">Sub-Total</span>
            <strong className="total-price-value">{currencyToString(total)}</strong>
          </div>
          <div className="price-box">
            <span className="total-price-label">Disconto</span>
            <strong className="total-price-value">{ ` - ${currencyToString(discount)}`}</strong>
          </div>
          <div className="price-box">
            <span className="total-price-label">Taxa de entrega</span>
            <strong className="total-price-value">{delivery_fee  > 0 ? currencyToString(delivery_fee) : "A combinar"}</strong>
          </div>
          <div className="price-box">
            <span className="total-price-label">Total</span>
            <strong className="total-price-value">{currencyToString(total + delivery_fee - discount)}</strong>
          </div>
        </div>
        <div className="next-button-box">
          <button 
            disabled={disabled}
            className="next-button" 
            type="submit"
          >
             
           {disabled?  <LoadingOutlined />: "Finalizar pedido"}
          </button>
        </div>
      </form>
    </>
  );
};