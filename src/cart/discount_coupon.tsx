import { useContext, useState } from "react";
import { Cart, CartContextType } from "../types/cart";
import { allItems, border, CartContext, categories, coupons } from "../App";
import { Calculator } from "../utils/calculator";
import { currencyToString } from "../utils";
import { Button, Input, Space } from 'antd';

export const DiscountCoupon = () => {
  const { cart, total, addOrder } = useContext(CartContext) as CartContextType;
  const { Search } = Input;

  const apply_coupon = (value: string) => {
    const new_discount = coupons[value.toLocaleLowerCase()] ??  0;
    addOrder(cart, new_discount * total);
  };

  return (
    <>
     <Space align="start"  className="item-size-box">
        <Search  placeholder="input search text" enterButton="Aplicar" onSearch={apply_coupon} />
     </Space>
    </>
  )
};