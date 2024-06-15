import "./nav.css"

export const Nav = () => {
  return (
    <nav className="nav-bar-down">

      <a className='nav-btn' href="/">
        <i className="fa-solid fa-house"></i>
        Início
      </a>

      {/* <a className='nav-btn' href="/my-order">
        <i className="fa-solid fa-clipboard-list"></i>
        Pedidos
      </a> */}

      <a className='nav-btn' href="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
        Carrinho
      </a>

      <div className="animation-nav-btn start-home"></div>
    </nav>
  )
}