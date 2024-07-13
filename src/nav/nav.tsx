import { Link } from "react-router-dom"
import "./nav.css"

export const Nav = () => {
  return (
    <nav className="nav-bar-down">

      <Link className='nav-btn' to="/">
        <i className="fa-solid fa-house"></i>
        Início
      </Link>

      {/* <a className='nav-btn' to="/my-order">
        <i className="fa-solid fa-clipboard-list"></i>
        Pedidos
      </a> */}

      <Link className='nav-btn' to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
        Carrinho
      </Link>

      <div className="animation-nav-btn start-home"></div>
    </nav>
  )
}