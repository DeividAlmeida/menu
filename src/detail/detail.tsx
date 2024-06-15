import { useParams } from "react-router-dom";
import { useContext, useState } from 'react';
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
  const item = categories[index];
  const { cart , addOrder } = useContext(CartContext) as CartContextType;
  const addCart = () =>  {
    addOrder([allItens[index]])
    console.log(cart);
  }
  const [filteredItens, setFilteredItens] = useState(allItens);
  function searchItem(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setFilteredItens(
      allItens.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
      })
    );
  }
  return (
    <>
      <picture>
      <div className="control" >
        <div className="back-icon">
          <a href="/">
            <i className="fa-solid fa-arrow-left" />
          </a>
        </div>
      </div>
        <img src={item.image} alt="" />
      </picture>
      <div className="item-container">
        <div className="item-title">
          <h1>{item.title}</h1>
        </div>

        <div className="item-description">
          <p>{item.description}</p>
        </div>
      </div>

      <div className="options">
        <details className="item-size-box" open >
          <summary className="item-header item-size-header">
            <h2 className="item-size-name item-type-info">Obrigatório</h2>
            <h2 className="item-size-name" style={{width: "33%"}}>Sabores</h2>
            <br />
          </summary>
          <div className="filter">
            <input type="text" placeholder="Encontre o sabor" onChange={searchItem} className="search" />
          </div>
          <div className="item-body">
            <div className="content">
              {
                filteredItens.map((item: any, index: number) => {
                  const typeKey = index.toString();
                  console.log(item);
                  return (
                    <div className="item-info size-body-box" key={index}>
                      <div className="title-subtitle-box">
                        <div className="check-title" style={{color: "black"}}>{item.title}</div>
                        <div className="check-subtitle">{item.description} </div>
                          <div className="price" style={{color: "red"}}>
                            + {
                              currencyToString(item.fee)
                            }
                          </div>
                      </div>
                      <p>
                        <input type="radio" id={typeKey}   />
                        <label htmlFor={typeKey}></label>
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
            <h2 className="item-type-info">Opcional</h2>
            <h2 className="item-name item-size-name" style={{width: "33%"}}>Borda</h2>
          </summary>
          <div className="item-body">
            <div className="content">
              {
                border.map((item, index) => {
                  return (
                    <div className="item-info size-body-box" key={index}>
                      <div className="title-subtitle-box">
                        <div className="check-title" style={{color: "black"}}>{item.description}</div>
                        <div className="price" style={{color: "red"}}>
                          + {
                            currencyToString(item.price)
                          }
                        </div>
                      </div>
                      <p className="border-input">
                        <input type="radio" id={"b"+item.key} name="border" />
                        <label htmlFor={"b"+item.key}></label>
                      </p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </details>
      </div>

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