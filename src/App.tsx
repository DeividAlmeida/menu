import { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { FloatButton } from 'antd';
import { Home } from "./home/home";
import { Item } from "./detail/item";
import { Cart } from "./cart/cart";
import { CartContextType, Cart as CartType, IItem} from "./types/cart";
import { Order } from "./myOrder/myOrder"
import { Calculator } from './utils/calculator';
import { Contact } from './contact/contact';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const allItems: IItem[] = [
  {
    id: 0,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    },
    price: 5.00,
  },
  {
    id: 1,
    title: "Luzense",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 35gr de Carne, 5gr de Banana-da-Terra, 2 Azeitonas, Orégano",
      total_weight: "587"
    },
    price: 0.00,
  },
  {
    id: 2,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 0.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 3,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    },
    price: 5.00,
  },
  {
    id: 4,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 0.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 5,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    },
    price: 5.00,
  },
  {
    id: 6,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 0.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 7,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 5.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 8,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 5.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 9,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 5.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 10,
    title: "Gourmet Burger",
    description: "Calabresa Acebolada",
    price: 5.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 11,
    title: "Luzense",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    price: 5.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 35gr de Carne, 5gr de Banana-da-Terra, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    id: 12,
    title: "Luzense",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    price: 5.00,
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 35gr de Carne, 5gr de Banana-da-Terra, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  }
];


export const categories = [
  {
    id: 0,
    type: "small_size",
    title: "Pizza Pequena",
    description: "4 fatias e uma opção de sabor",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    tastes: 1,
    size: 4,
    price: 15.00,
  },
  {
    id: 1,
    type: "medium_size",
    title: "Pizza Média",
    description: "6 fatias e até duas opções de sabores",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    tastes: 2,
    size: 6,
    price: 20.00,
  },
  {
    id: 2,
    type: "large_size",
    title: "Pizza Grande",
    description: "8 fatias e até duas opções de sabores",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    tastes: 2,
    size: 8,
    price: 20.00,
  },
  {
    id: 3,
    type: "family_size",
    title: "Pizza Família",
    description: "12 fatias e até três opções de sabores",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    tastes: 3,
    size:12,
    price: 20.00,
  },
]

export const border = [
  {
    key: 0,
    description: "Cheddar", 
    price: 5.00
  },
  {
    key: 1,
    description: "Catupiry",
    price: 5.00
  },
  {
    key: 2,
    description: "Mussarela",
    price: 5.00
  },
  {
    key: 3,
    description: "Brigadeiro",
    price: 5.00
  },
  {
    key: 4,
    description: "Doce de leite",
    price: 5.00
  }
];

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
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/:id" element={<Item />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path='contact/:number' element={<Contact />} />
                </Routes>
              </div>
            </section>
          </main>
      </Router>
    </CartContext.Provider>
  );
}
export default App;
