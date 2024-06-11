import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { allItens, border, categories, CartContext } from "../App";
import "./detail.css";
import { currencyToString } from "../utils/index";
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
    <>
      <div className="control">
        <div className="back-icon">
          <a href="/">
            <i className="fa-solid fa-arrow-left" />
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

        <details className="item-size-box" open >
          <summary className="item-header item-size-header">
            <h2 className="item-name item-size-name">Tamanho</h2>
          </summary>
          <div className="item-body">
            <div className="content">
              {
                categories.map((item: any, index: number) => {
                  return (
                    <div className="item-info size-body-box" key={index}>
                      <div className="title-subtitle-box">
                        <div className="check-title">{item.description}</div>
                        <div className="price">
                          {
                            currencyToString(item.normal)
                          }
                        </div>
                        <div className="check-subtitle">{item.size} Fatias e até {item.tastes} sabores </div>
                      </div>
                      <p>
                        <input type="radio" id={item.type} name="size" />
                        <label htmlFor={item.type}></label>
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </details>


        <details className="item-size-box" >
          <summary className="item-header item-size-header">
            <h2 className="item-name item-size-name">Borda</h2>
          </summary>
          <div className="item-body">
            <div className="content">
              {
                border.map((item, index) => {
                  return (
                    <div className="item-info size-body-box" key={index}>
                      <div className="title-subtitle-box">
                        <div className="check-title">{item.description}</div>
                        <div className="price">
                          {
                            currencyToString(item.price)
                          }
                        </div>
                      </div>
                      <p className="border-input">
                        <input type="radio" id={item.key} name="border" />
                        <label htmlFor={item.key}></label>
                      </p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </details>
        <footer style={{height: "50px", backgroundColor: "#fff"}}></footer>
      <div className="next-button-box">
        <a 
          className="next-button" 
          onClick={()=>addCart()}
        >
          Adicionar ao carrinho
        </a>
      </div>
    </>
  )
}

/**
 * <div className="icon-title-box">
              <div className="select-on">Selecionado</div>
            </div>
 */