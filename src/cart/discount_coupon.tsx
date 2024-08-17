import { useContext } from "react";
import { CartContextType } from "../types/cart";
import { CartContext, coupons } from "../App";
import { Input, Modal, Space } from 'antd';

export const DiscountCoupon = () => {
  const { cart, total, addOrder } = useContext(CartContext) as CartContextType;
  const { Search } = Input;

  const apply_coupon = (value: string) => {
    const new_discount = coupons[value.toLocaleLowerCase()] ??  0;
    if (new_discount === 0) {
      const alert = Modal.error({
        content: "Cupom inválido",
        footer: null
      });
      setTimeout(() => {
        alert.destroy();
      }, 2000);
      return
    } else {
      const alert = Modal.success({
        content: `Cupom de ${new_discount*100}% de desconto aplicado com sucesso!!`,
        footer: null
      });
      setTimeout(() => {
        alert.destroy();
      }, 2000);
    }
    addOrder(cart, new_discount * total);
  };

  return (
    <>
     <Space align="start"  className="coupon-box">
        <Search  placeholder="Cupon de desconto" enterButton="Aplicar" onSearch={apply_coupon} size="large" />
     </Space>
    </>
  )
};