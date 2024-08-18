import { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Item } from "./detail/item";
import { Cart } from "./cart/cart";
import { CartContextType, Cart as CartType} from "./types/cart";
import { Calculator } from './utils/calculator';
import { Contact } from './contact/contact';

export const coupons: Record<string, number> = {
  "5off": 0.05,
};

export const valid_ddds = [
  "11", "12", "13", "14", "15", "16", "17", "18", "19", // São Paulo
  "21", "22", "24", // Rio de Janeiro
  "27", "28", // Espírito Santo
  "31", "32", "33", "34", "35", "37", "38", // Minas Gerais
  "41", "42", "43", "44", "45", "46", // Paraná
  "47", "48", "49", // Santa Catarina
  "51", "53", "54", "55", // Rio Grande do Sul
  "61", // Distrito Federal
  "62", "64", // Goiás
  "63", // Tocantins
  "65", "66", // Mato Grosso
  "67", // Mato Grosso do Sul
  "68", // Acre
  "69", // Rondônia
  "71", "73", "74", "75", "77", // Bahia
  "79", // Sergipe
  "81", "87", // Pernambuco
  "82", // Alagoas
  "83", // Paraíba
  "84", // Rio Grande do Norte
  "85", "88", // Ceará
  "86", "89", // Piauí
  "91", "93", "94", // Pará
  "92", "97", // Amazonas
  "95", // Roraima
  "96", // Amapá
  "98", "99" // Maranhão
];

export const CartContext = createContext<CartContextType | []>([]);
function App() {
  const [cart, setCart] = useState<CartType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const addOrder = (cart: CartType[], new_discount?: number) => {     
    setCart(cart)
    const calc = new Calculator(cart).calcTotal();
    setDiscount(new_discount?? discount);
    setTotal(calc);
  }

  return (
    <CartContext.Provider value={{ cart, discount, total, addOrder }}>
      <Router>
          <main>
            <section>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category/:id" element={<Item />} />
                <Route path="cart" element={<Cart />} />
                <Route path='contact/:number' element={<Contact />} />
              </Routes>
            </section>
          </main>
      </Router>
    </CartContext.Provider>
  );
}
export default App;
