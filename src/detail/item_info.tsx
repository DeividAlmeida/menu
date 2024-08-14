import { IItem } from "../types/cart";
import { currencyToString } from "../utils";
type PropsType = {
  item: IItem; 
  adicional_price: number;
};
export const ItemInfo = ({item, adicional_price}: PropsType ) => {
  return (
    <div className="title-subtitle-box">
      <div className="check-title" style={{color: "black"}}>{item.title}</div>
      <div className="check-subtitle">{item.description} </div>
        <div className="price" style={{color: "red"}} >
          + {
            currencyToString(adicional_price < item.price? item.price: 0)
          }
        </div>
    </div>
  );
};