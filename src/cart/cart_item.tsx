import { useContext, useState } from "react";
import { Cart, CartContextType } from "../types/cart";
import categories from "../models/categories.json";
import items from "../models/items.json";
import borders from "../models/borders.json";
import { Calculator } from "../utils/calculator";
import { currencyToString } from "../utils";
import { CartContext } from "../App";
import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

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
          <Popconfirm
            title="Remover item"
            description="Deseja realmente remover este item?"
            onConfirm={removeItem(index)}
            onCancel={void 0}
            okText="Sim"
            cancelText="Não"
          >
            <button className="danger">
              <DeleteOutlined />
            </button>
          </Popconfirm>
          <h2 className="item-name">{categories[item.type].title}</h2>
        </summary>
        <div className="item-body">
          <div className="content">
            {
              item.tastes.map((taste, taste_index) => {
                return (
                  <div className="item-info" key={`t-${index}${taste_index}`}>
                    <p className="item-taste">{items[taste].title}</p>
                    {
                      item.tastes.length > 1 ?
                      <Popconfirm
                        title="Remover item"
                        description="Deseja realmente remover este item?"
                        onConfirm={removeTaste(index, taste_index)}
                        onCancel={void 0}
                        okText="Sim"
                        cancelText="Não"
                      >
                        <p className="item-remove" >
                          <DeleteOutlined />
                        </p>
                      </Popconfirm>
                      : null
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        {
          item.border !== undefined
            ?<div className="item-footer" key={`b-${index}`}>
              <div className="content">
                <div className="item-info">
                  <p className="item-complement">
                    {borders[item.border].description}
                    <i className="item-complement-price"> - {currencyToString(borders[item.border].price)}</i>
                  </p>
                  <Popconfirm
                    title="Remover item"
                    description="Deseja realmente remover este item?"
                    onConfirm={removeBorder(index)}
                    onCancel={void 0}
                    okText="Sim"
                    cancelText="Não"
                  >
                    <p className="item-remove" >
                      <DeleteOutlined />
                    </p>
                  </Popconfirm>
                </div>
              </div>
            </div>
            : null
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