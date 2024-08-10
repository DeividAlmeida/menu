import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { allItems, border, categories, CartContext } from "../App";
import "./detail.css";
import { currencyToString } from "../utils/index";
import { Calculator } from "../utils/calculator";
import { Cart, CartContextType } from "../types/cart";

export const Item = () => {
  const [key, setKey] = useState(0);
  const [tastesState, setTastesState] = useState(false);
  const [tastes, setTastes] = useState<number[]>([]);
  const [selectedBorder, setSelectedBorder] = useState<number>();
  let { id } = useParams();
  let index = id ? parseInt(id) : 0;
  const item = categories[index];
 
  useEffect(() => {
    setTastesState(item.tastes <= tastes.length) 
  }, [item.tastes, tastes]);
  
  const { cart, total, addOrder } = useContext(CartContext) as CartContextType;
  const addCart = () =>  {
    
    addOrder([
      ...cart??[],
      {
      type: item.id,
      tastes,
      border: selectedBorder,
      sub_total: subTotal()
    }])
    setKey((prev)=> prev + 1)
    setTastesState(false);
    setTastes([]);
    setSelectedBorder(undefined);

  }

  const subTotal = () => {
    if (tastes.length > 0 ) {
      return new Calculator([
        {
          type: item.id,
          tastes,
          border: selectedBorder,
          sub_total: 0
        }
      ]).total;
    } else return 0;
  }

  function setCart(params: any, row: { id: number; }) {
    if(params) {
      setTastes(a=> [...a, row.id]);
    } else {
      setTastes(a => [ ...a.filter((item) => item !== row.id)]);
    }
  }

  function addBorder(params:any, row: { key: number; }) {
    if(params) {
      setSelectedBorder(row.key);
    } else {
      setSelectedBorder(undefined);
    }
  }

  const [filteredItems, setFilteredItems] = useState(allItems);
  function searchItem(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setFilteredItems(
      allItems.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
      })
    );
  }
  return (
    <div key={key}>
      <picture>
      <div className="control" >
        <div className="back-icon">
          <Link to="/">
            <i className="fa-solid fa-arrow-left" />
          </Link>
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
                filteredItems.map((item: any, index: number) => {
                  const typeKey = index.toString();
                  return (
                    <div className="item-info size-body-box" key={index}>
                      <div className="title-subtitle-box">
                        <div className="check-title" style={{color: "black"}}>{item.title}</div>
                        <div className="check-subtitle">{item.description} </div>
                          <div className="price" style={{color: "red"}}>
                            + {
                              currencyToString(item.price)
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
                        <input disabled={selectedBorder !== undefined && selectedBorder !== item.key } type="checkbox" id={"b"+item.key} name="border" onChange={(e)=> addBorder(e.target.checked, item) }/>
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
          disabled={tastes.length === 0}
        >
          Adicionar
          <b>{ " " + currencyToString(subTotal() + total)}</b>
        </button>
        <Link 
          to="/cart"
          className="order-button" 
        >
          <center>Ver Pedido <i className="fa fa-shopping-cart" aria-hidden="true"></i></center> 
        </Link>
        
      </div>
    </div>
  )
}
