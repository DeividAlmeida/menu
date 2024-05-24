import { useParams } from "react-router-dom";
import { allItens } from "../App";
import  "./detail.css";
export const Item = () => {
  let  { id } = useParams();
  let index = id? parseInt(id) : 0;
  const item = allItens[index];

  return (
    <div className="product-details">
      <picture>
        <img src={item.image} alt="" />
      </picture>
      <div className="item-container">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  )
}