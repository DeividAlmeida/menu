import "./cart.css";
export const Cart = () => {
  return (
    <>
      <div className="back-box">
        <a href="/" className="back">
          <i className="fa-solid fa-arrow-left" />
        </a>
      </div>
      <h1 className="cart-title">Seu pedido</h1>
      <details className="cart-box" open>
        <summary className="item-header">
            <button className="danger" >
              <i className="fa-solid fa-trash"></i>
            </button>
            <h2 className="item-name">Pizza Media</h2>
        </summary>
        <div className="item-body">
          <div className="content">
            <div className="item-info">
              <p className="item-taste">Pepperoni Pizza</p>
              <p className="item-remove"><i className="fa-solid fa-xmark"></i></p>
            </div>
            <div className="item-info">
              <p className="item-taste">Pepperoni Pizza</p>
              <p className="item-remove">
                <i className="fa-solid fa-xmark"></i>
              </p>
            </div>
            <div className="item-info">
              <p className="item-taste">Pepperoni Pizza</p>
              <p className="item-remove"><i className="fa-solid fa-xmark"></i></p>
            </div>
            
          </div>
        </div>
        <div className="item-footer">
          <div className="content">
            <div className="item-info">
              <p className="item-complement">
                Borda de cheddar
                <i className="item-complement-price"> - R$ 5,00</i>
              </p>
                <p className="item-remove">
                  <i className="fa-solid fa-xmark" />
                </p>
            </div>
          </div>
        </div>
      </details>
      <div className="sub-total">
        <p className="sub-total-lable">
          Sub-total
        </p>
        <p className="sub-total-price">
          R$ 30,00
        </p>
      </div>
      <h1 className="cart-title">Endereço de entrega</h1>
      <div className="cart-box cart-form">
        <div className="cart-form-row">
          <div className="cart-form-column">
            <input type="text" name="name" placeholder="Nome" />
          </div>
          <div className="cart-form-column">
            <input type="number" name="phone" id="" placeholder="Whatsapp" />
          </div>
        
          <div className="cart-form-column">
            <input type="text" name="address" id="" placeholder="Endereço" />
          </div>
          <div className="cart-form-column">
            <input type="text" name="number" id="" placeholder="Número"/>
          </div>
          
          <div className="cart-form-column">
            <label htmlFor="number" className="radio-lable">Enderço de entrega é fora da cidade?</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="out_town" id="yes"/>
              <label className="form-check-label" htmlFor="yes">
                  Sim
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="out_town" id="no"/>
              <label className="form-check-label" htmlFor="no">
                  Não
              </label>
            </div>
          </div>          
          <div className="cart-form-column" id="complement">
            <textarea  name="complement" id="" placeholder="Complemento"/>
          </div>
        </div>
      </div>

      <div className="total-price">
        <div className="price-box">
          <span className="total-price-label">Sub-Total</span>
          <strong className="total-price-value">R$ 35,00</strong>
        </div>
        <div className="price-box">
          <span className="total-price-label">Taxa de entrega</span>
          <strong className="total-price-value">R$ 35,00</strong>
        </div>
        <div className="price-box">
          <span className="total-price-label">Total</span>
          <strong className="total-price-value">R$ 35,00</strong>
        </div>
      </div>
    </>
  );
}