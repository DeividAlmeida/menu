import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import categories from "../models/categories.json";
import all_items from "../models/items.json";
import borders from "../models/borders.json";
import "./item.css";
import { currencyToString } from "../utils/index";
import { Calculator } from "../utils/calculator";
import { CartContextType, IItem } from "../types/cart";
import { ItemInfo } from "./item_info";
import { Button, FloatButton, Modal } from "antd";
import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../App";


export const Item = () => {
  const { id, category } = useParams();
  const index = id ? parseInt(id) : 0;
  const category_type = category?? "pizza";
  const item = categories[index];
  const items = all_items.filter((item) => item.type === category_type);
  const [filteredItems, setFilteredItems] = useState(items);
  const [adicional_price, setAdicionalPrice] = useState(0);
  const [tastesState, setTastesState] = useState(false);
  const [tastes, setTastes] = useState<number[]>([]);
  const [selectedBorder, setSelectedBorder] = useState<number>();
  const [modal, contextModalHolder] = Modal.useModal();
  const navigate = useNavigate();  
  const { cart, total, addOrder } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    setTastesState(item.tastes <= tastes.length) 
  }, [item.tastes, tastes]);
  
  const addCart = () =>  {
    addOrder([
      ...cart??[],
      {
      type: item.id,
      tastes,
      border: selectedBorder,
      sub_total: subTotal()
    }])
    setTastesState(false);
    setTastes([]);
    setSelectedBorder(undefined);
    sucess_modal();
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
      ]
    ).calcTotal();
    } else {

      return 0;
    }
  }

  function setCart(params: boolean, row:IItem) {
    setTastes(
      a => {
        let new_tastes: number[];
        if(params) {
          new_tastes = [...a, row.id];
        } else {
          new_tastes =  a.filter((item) => item !== row.id);
        }
        setAdicionalPrice(new Calculator().calcTastePrice(new_tastes));
        return new_tastes;
    });
  }

  function addBorder(params:any, row: { key: number; }) {
    if(params) {
      setSelectedBorder(row.key);
    } else {
      setSelectedBorder(undefined);
    }
  }

  function searchItem(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setFilteredItems(
      items.filter(item => {
        if( tastes.includes(item.id)) {
          return true;
        } else {
          return item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
        }
      })
    );
  }

  const sucess_modal = () => {
    modal.success({
      title: "Adicionado ao Carrinho!!",
      content: (<p>Deseja finalizar o pedido?</p>),
      okText: "Finalizar Pedido",
      onOk: () => {
        navigate("/cart");
      },
      
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <Button>
            <Link to={"/"}>
              Voltar
            </Link>
          </Button>
          <CancelBtn />
          <OkBtn />
        </>
      ),
    });
  };

  const warning_modal = () => {
    modal.warning({
      title: "Esse item não foi adicionado ao carrinho!!",
      content: (<p>Deseja adicionar ao carrinho antes de finalizar o pedido?</p>),
      okText: "Adicionar",
      onOk: () => {
        addOrder([
          ...cart??[],
          {
          type: item.id,
          tastes,
          border: selectedBorder,
          sub_total: subTotal()
        }])
        navigate("/cart");
      },
      
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <Button>
            <Link to={"/cart"}>
              Não Adicionar
            </Link>
          </Button>
          <CancelBtn />
          <OkBtn />
        </>
      ),
    });
  };

  return (
    <div className="container">
      <FloatButton badge={{ count: cart.length }} icon={<ShoppingCartOutlined />} onClick={() => {
        if(tastes.length > 0) {
          warning_modal();
        } else {
          navigate("/cart");
        }
      }}/>
      {contextModalHolder}
      <picture>
      <div className="control" >
        <div className="back-icon">
          <Link to="/">
            <ArrowLeftOutlined />
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
                filteredItems.map((item: IItem, index: number) => {
                  const typeKey = index.toString();
                  return (
                    <label 
                      htmlFor={typeKey}
                      className={`item-info size-body-box 
                        ${tastesState && !tastes.includes(item.id)
                          ? "disactive"
                          : "active"}`
                      }
                      key={index}
                    >
                      <ItemInfo item={item} adicional_price={adicional_price} />
                      <p>
                        <input checked={tastes.includes(item.id)} disabled={tastesState && !tastes.includes(item.id)} type="checkbox" id={typeKey}  onChange={(e)=> setCart(e.target.checked, item) }/>
                        <label htmlFor={typeKey}></label>
                      </p>
                    </label>
                  )
                })
              }
            </div>
          </div>
        </details>
        {
          category_type === "pizza"? (
            <details className="item-size-box" >
              <summary className="item-header item-size-header">
                <h2 className="item-type-info">Opcional</h2>
                <h2 className="item-name item-size-name" style={{width: "33%"}}>Borda</h2>
              </summary>
              <div className="item-body">
                <div className="content">
                  {
                    borders.map((item, index) => {
                      return (
                        <label
                          htmlFor={"b"+item.key}
                          className={`item-info size-body-box 
                            ${selectedBorder !== undefined && selectedBorder !== item.key
                              ? "disactive"
                              : "active"}`
                          }
                          key={index}
                        >
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
                        </label>
                      )
                    })
                  }
    
                </div>
              </div>
            </details>
          ) : null
        }
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
        
      </div>
    </div>
  )
}
