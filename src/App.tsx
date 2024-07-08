import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Item } from "./detail/detail";
import { Cart } from "./cart/cart";
import { Order } from "./myOrder/myOrder"
import { Nav } from "./nav/nav"
import { Calculator } from './utils/calculator';
interface IItem {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  details?: any;
}

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
  }
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

type CartContextType = {
  cart: any[];
  total: number;
  addOrder: React.Dispatch<React.SetStateAction<IItem[] | [

  ]>>;
};
export const CartContext = createContext<CartContextType | any[]>([]);
function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
    const addOrder = (cart: any) => {
      setCart(cart)
      const calc = new Calculator(cart).total;
      setTotal(calc);
    }
  return (
    <Router>
      <CartContext.Provider value={{ cart, total, addOrder }}>
        <main>
          <section>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Item />} />
                <Route path="cart" element={<Cart />} />
                <Route path='my-order' element={<Order />} />
              </Routes>
            </div>
          </section>
        </main>
      </CartContext.Provider>
    </Router>
  );
}
export default App;
