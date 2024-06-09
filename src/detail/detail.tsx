import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { allItens, CartContext } from "../App";
import "./detail.css";
type CartContextType = {
  cart: IItem[];
  addOrder: React.Dispatch<React.SetStateAction<IItem[] | []>>;
};
interface IItem {
  title: string;
  image: string;
  description: string;
  details?: any;
  flavor?: any;
}
export const Item = () => {
  let { id } = useParams();
  let index = id ? parseInt(id) : 0;
  const item = allItens[index];
  const { cart , addOrder } = useContext(CartContext) as CartContextType;
  const addCart = () =>  {
    addOrder([allItens[index]])
    console.log(cart);
  }
  return (
    <div className="product-details">
      <div className="control">
        <div className="back-icon">
          <a href="/">
            <i className="fa-solid fa-left-long"></i>
          </a>
        </div>
        <div className="share-icon">
          <a href="#">
            <i className="fa-solid fa-share-from-square"></i>
          </a>
        </div>
      </div>
      <picture>
        <img src={item.image} alt="" />
      </picture>
      <div className="item-container">
        <div className="item-title">
          <h1>{item.title}</h1>
        </div>

        <div className="item-description">
          <p>Igredientes: {item.details?.igredients}</p>
        </div>
      </div>

      <div className="container-size">
        <details>
          <summary className="title-size">Tamanhos</summary>
          <div className="subtitle-box">
            <div className="select">
              <span className="subtitle"></span>
            </div>

          </div>
          <hr className="hr" />
          <div className="form-group-box">
            <div>
              <div>
                <div>
                  <div className="title-subtitle-box">
                    <div className="check-title">Pequena</div>
                    <div className="check-subtitle">4 Fatias</div>
                  </div>
                  <div className="price">R$ {item.flavor?.promotional?.small} {item.flavor?.special?.small}</div>
                </div>

                <hr className="hr" />

                <div>
                  <div className="title-subtitle-box">
                    <div className="check-title">Média</div>
                    <div className="check-subtitle">6 Fatias</div>
                  </div>
                  <div className="price">R$ {item.flavor?.promotional?.average} {item.flavor?.special?.average}</div>
                </div>

                <hr className="hr" />

                <div>
                  <div className="title-subtitle-box">
                    <div className="check-title">Grande</div>
                    <div className="check-subtitle">8 Fatias</div>
                  </div>
                  <div className="price">R$ {item.flavor?.promotional?.big} {item.flavor?.special?.big}</div>
                </div>

                <hr className="hr" />

                <div>
                  <div className="title-subtitle-box">
                    <div className="check-title">Família</div>
                    <div className="check-subtitle">12 Fatias</div>
                  </div>
                  <div className="price">R$ {item.flavor?.promotional?.family} {item.flavor?.special?.family}</div>
                </div>

                <hr className="hr" />

              </div>
            </div>
          </div>
        </details>
      </div>

      <div className="next-button-box">
        <a 
          className="next-button" 
          onClick={()=>addCart()}
        >
          Adicionar ao carrinho
        </a>
      </div>

    </div>


  )
}

/**
 * <div className="icon-title-box">
              <div className="select-on">Selecionado</div>
            </div>
 */