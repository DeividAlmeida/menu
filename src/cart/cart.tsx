import "./cart.css";
export const Cart = () => {
  return (
    <section className="cart">
      <div className="container">
        <h1 className="cart-title">Seu Pedido</h1>
        <details className="cart-box" open>
          <summary className="item-header">
              <button className="fa-trash ">lixo</button>
              <h2 className="item-name">Pizza Media</h2>
            <div className="item-header">
            </div>
          </summary>
          <div className="item-body">
            <div className="content">
              <div className="item-info">
                <p className="item-taste">Pepperoni Pizza</p>
                <p className="item-remove">x</p>
              </div>
              <div className="item-info">
                <p className="item-taste">Pepperoni Pizza</p>
                <p className="item-remove">x</p>
              </div>
              <div className="item-info">
                <p className="item-taste">Pepperoni Pizza</p>
                <p className="item-remove">x</p>
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
                  <p className="item-remove">x</p>
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
        <div className="cart-box">
          <h2 className="cart-title">Endereço de entrega</h2>
          <div className="cart-form-row">
            <div className="cart-form-column">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" />
            </div>
            <div className="cart-form-column">
              <label htmlFor="phone">Whatsapp</label>
              <input type="number" name="phone" id="" />
            </div>
          
            <div className="cart-form-column">
              <label htmlFor="address">Endereço</label>
              <input type="text" name="address" id="" />
            </div>
            <div className="cart-form-column">
              <label htmlFor="number">Número</label>
              <input type="text" name="number" id="" />
            </div>
          
            <div className="cart-form-column">
              <label htmlFor="complement">Complemento</label>
              <input type="text" name="complement" id="" />
            </div>
          </div>
          <button className="btn btn-primary">Finalizar Pedido</button>
        </div>
      </div>
    </section>
  );
}