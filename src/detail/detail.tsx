import { useParams } from "react-router-dom";
import { allItens } from "../App";
import "./detail.css";
export const Item = () => {
  let { id } = useParams();
  let index = id ? parseInt(id) : 0;
  const item = allItens[index];

  return (
    <div className="product-details">
      <picture>
        <img src={item.image} alt="" />
      </picture>
      <div className="item-container">
        <div className="item-title">
          <h1>{item.title}</h1>
        </div>
        <div className="item-valor">
          <p>{item.details?.price}</p>
        </div>
        <div className="item-description">
          <p>Tamanho: {item.details?.size}</p>

          <p>Igredientes: {item.details?.igredients}</p>

        </div>
      </div>
      <hr className="hr" />
      <div className="container-size">
        <details>
          <summary className="title-size">Tamanhos</summary>
          <div className="subtitle-box">
            <div className="select">
              <span className="subtitle">Escolha 1 Tamanho</span>
            </div>
            <div className="icon-title-box">
              <div className="select-on">Seleciondo</div>
            </div>
          </div>
          <hr className="hr" />
          <div className="form-group-box">
            <div>
              <div>
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Família</div>
                    <div className="check-subtitle">12 Fatias</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Grande</div>
                    <div className="check-subtitle">8 Fatias</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Média</div>
                    <div className="check-subtitle">6 Fatias</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Pequena</div>
                    <div className="check-subtitle">4 Fatias</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>

              </div>
            </div>
          </div>
        </details>
      </div>
      <hr className="hr" />


      <div className="container-size">
        <details>
          <summary className="title-size">Sabores Adicionais</summary>
          <div className="subtitle-box">
            <div className="select">
              <span className="subtitle">Escolha até mais 2 sabores</span>
            </div>
            <div className="icon-title-box">
              <div className="select-on">Seleciondo</div>
            </div>
          </div>
          <hr className="hr" />
          <details>
            <summary className="title-size">Sabores Promocionais</summary>

          </details>  
          <hr className="hr" />
          <details>
            <summary className="title-size">Sabores Especiais</summary>
            
          </details>

        </details>
      </div>



    </div>


  )
}