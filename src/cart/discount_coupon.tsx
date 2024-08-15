import { useContext } from "react";
import { CartContextType } from "../types/cart";
import { CartContext, coupons } from "../App";
import { Input, message, Space } from 'antd';

export const DiscountCoupon = () => {
  const { cart, total, addOrder } = useContext(CartContext) as CartContextType;
  const [messageApi, contextHolder] = message.useMessage();
  const { Search } = Input;

  const apply_coupon = (value: string) => {
    const new_discount = coupons[value.toLocaleLowerCase()] ??  0;
    if (new_discount === 0) {
      messageApi.open({
        type: "error",
        content: "Cupom inválido",
      });
      return;
    } else {
      messageApi.open({
        type: "success",
        content: `Cupom de ${new_discount*100}% de desconto aplicado com sucesso!!`,
      });
    }
    addOrder(cart, new_discount * total);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  return (
    <>
    {contextHolder}
     <Space align="start"  className="coupon-box">
        <Search  placeholder="Cupon de desconto" enterButton="Aplicar" onSearch={apply_coupon} size="large" />
     </Space>
    </>
  )
};