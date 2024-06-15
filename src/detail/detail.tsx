import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { allItens, border, categories, CartContext } from "../App";
import "./detail.css";
import { currencyToString } from "../utils/index";
type CartContextType = {
  cart: any[];
  addOrder: React.Dispatch<React.SetStateAction<any[] | []>>;
};
interface IItem {
  title: string;
  image: string;
  description: string;
  details?: any;
  flavor?: any;
}
export const Item = () => {
  const [tastesState, setTastesState] = useState(false);
  const [tastes, setTastes] = useState<number[]>([]);
  const [selectedBorder, setSelectedBorder] = useState<string>();
  const [borderState, setBorderState] = useState(false);
  let { id } = useParams();
  let index = id ? parseInt(id) : 0;
  const item = categories[index];
 
  useEffect(() => {
    setTastesState(item.tastes <= tastes.length) 
  }, [item.tastes, tastes]);
  
  useEffect(() => {
    console.log(selectedBorder);
    setBorderState(a=> !a); 
  }, [selectedBorder]);

  const { cart , addOrder } = useContext(CartContext) as CartContextType;
  const addCart = () =>  {
    addOrder([{
      type: item.id,
      tastes,
      border,
    }])
  }

  function setCart(params: any, row: { id: number; }) {
    if(params) {
      setTastes(a=> [...a, row.id]);
    } else {
      setTastes(a => [ ...a.filter((item) => item !== row.id)]);
    }
  }

  function addBorder(params:any, row: { key: string; }) {
    if(params) {
      setSelectedBorder(row.key);
      setBorderState(true);
    } else {
      setSelectedBorder(undefined);
    }
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
                        <input disabled={tastesState && !tastes.includes(item.id)} type="checkbox" id={typeKey}  onChange={(e)=> setCart(e.target.checked, item) }/>
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
                        <input disabled={!!selectedBorder && selectedBorder !== item.key } type="checkbox" id={"b"+item.key} name="border" onChange={(e)=> addBorder(e.target.checked, item) }/>
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

      <footer style={{height: "75px", backgroundColor: "#fff"}}></footer>
      <div className="next-button-box">
        <button 
          className="next-button" 
          onClick={()=>addCart()}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </>
  )
}
