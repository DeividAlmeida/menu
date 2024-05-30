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
        </details>
        <div className="sub-total">
        <p className="sub-total-lable">
            Sub-total
          </p>
          <p className="sub-total-value">
            R$ 30,00
          </p>
        </div>
      </div>
    </section>
  );
}