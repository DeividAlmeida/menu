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

        <div className="item-description">
          <p>Igredientes: {item.details?.igredients}</p>
        </div>
      </div>
      <hr className="hr" />
      <div className="container-size">
        <details>
          <summary className="title-size">Adicionais</summary>
          <div className="subtitle-box">
            <div className="select">
              <span className="subtitle">Bordas</span>
            </div>
            <div className="icon-title-box">
              <div className="select-on">Selecionado</div>
            </div>
          </div>
          <hr className="hr" />
          <div className="form-group-box">
            <div>
              <div>
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Mussarela</div>
                    <div className="check-subtitle">R$ 5,00</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Catupiry</div>
                    <div className="check-subtitle">R$ 5,00</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Cheddar</div>
                    <div className="check-subtitle">R$ 5,00</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Doce de Leite</div>
                    <div className="check-subtitle">R$ 5,00</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
                <label htmlFor="">
                  <div className="title-subtitle-box">
                    <div className="check-title">Brigadeiro</div>
                    <div className="check-subtitle">R$ 5,00</div>
                  </div>
                  <input className="check-icon" type="radio" name="size" id="" />
                </label>
                <hr className="hr" />
              </div>
            </div>
          </div>
        </details>
      </div>

      <hr className="hr" />

      <div className="next-container">

      </div>


    </div>


  )
}