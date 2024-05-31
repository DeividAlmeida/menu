import "./cart.css";
export const Cart = () => {
  return (
    <section className="cart">
      <div className="container">
        <h1 className="cart-title">Seu Pedido</h1>
        <details className="cart-item" open>
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
                  <p className="item-complement-price">R$ 5,00</p>
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

        {/* <div className="form-floating">
          <textarea className="form-control" placeholder="Comentário" ></textarea>
        </div> */}
      </div>
    </section>
  );
}