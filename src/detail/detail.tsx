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
              <div className="item-info size-body-box">
                <div className="title-subtitle-box">
                  <div className="check-title">Pequena</div>
                  <div className="price">
                    R$ {item.flavor?.promotional?.small} {item.flavor?.special?.small}
                  </div>
                  <div className="check-subtitle">4 Fatias e até 2 sabores </div>
                </div>
                <p>
                  <input type="radio" id="small-size" name="size" />
                  <label htmlFor="small-size"></label>
                </p>
              </div>

              <div className="item-info size-body-box" >
                <div className="title-subtitle-box">
                  <div className="check-title">Média</div>
                  <div className="price">R$ {item.flavor?.promotional?.average} {item.flavor?.special?.average}</div>
                  <div className="check-subtitle">6 Fatias e até 3 sabores </div>
                </div>
                <p>
                  <input type="radio" id="medium-size" name="size" />
                  <label htmlFor="medium-size"></label>
                </p>
              </div>

              <div className="item-info size-body-box">
                <div className="title-subtitle-box">
                  <div className="check-title">Grande</div>
                  <div className="price">R$ {item.flavor?.promotional?.big} {item.flavor?.special?.big}</div>
                  <div className="check-subtitle">8 Fatias e até 3 sabores </div>
                </div>
                <p>
                  <input type="radio" id="large-size" name="size" />
                  <label htmlFor="large-size"></label>
                </p>
              </div>

              <div className="item-info size-body-box" >
                <div className="title-subtitle-box">
                  <div className="check-title">Família</div>
                  <div className="price">R$ {item.flavor?.promotional?.family} {item.flavor?.special?.family}</div>
                  <div className="check-subtitle">12 Fatias e até 4 sabores </div>
                </div>
                <p>
                  <input type="radio" id="family-sized" name="size" />
                  <label htmlFor="family-sized"></label>
                </p>
              </div>

            </div>
          </div>
        </details>


        <details className="item-size-box" >
          <summary className="item-header item-size-header">
            <h2 className="item-name item-size-name">Borda</h2>
          </summary>
          <div className="item-body">
            <div className="content">
              <div className="item-info size-body-box">
                <div className="title-subtitle-box">
                  <div className="check-title">Catupiry</div>
                  <div className="price">
                    + R$ 5,00
                  </div>
                </div>
                <p className="border-input">
                  <input type="radio" id="catupiry" name="border" />
                  <label htmlFor="catupiry"></label>
                </p>
              </div>

              <div className="item-info size-body-box" >
                <div className="title-subtitle-box">
                  <div className="check-title">Cheddar</div>
                  <div className="price">+ R$ 5,00</div>
                </div>
                <p className="border-input">
                  <input type="radio" id="cheddar" name="border" checked />
                  <label htmlFor="cheddar"></label>
                </p>
              </div>

              <div className="item-info size-body-box">
                <div className="title-subtitle-box">
                  <div className="check-title">Mussarela</div>
                  <div className="price">+ R$ 5,00</div>
                </div>
                <p className="border-input">
                  <input type="radio" id="mussarela" name="border" checked />
                  <label htmlFor="mussarela"></label>
                </p>
              </div>

              <div className="item-info size-body-box" >
                <div className="title-subtitle-box">
                  <div className="check-title">Leite Ninho</div>
                  <div className="price">+ R$ 5,00</div>
                </div>
                <p className="border-input">
                  <input type="radio" id="leite-ninho" name="border" checked />
                  <label htmlFor="leite-ninho"></label>
                </p>
              </div>

              <div className="item-info size-body-box" >
                <div className="title-subtitle-box">
                  <div className="check-title">Sem Borda</div>
                </div>
                <p className="border-input">
                  <input type="radio" id="no" name="border" checked />
                  <label htmlFor="no"></label>
                </p>
              </div>

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