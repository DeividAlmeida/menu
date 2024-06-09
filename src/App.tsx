import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Item } from "./detail/detail";
import { Cart } from "./cart/cart";
import { Order } from "./myOrder/myOrder"
import { Nav } from "./nav/nav"
interface IItem {
  title: string;
  image: string;
  description: string;
  details?: any;
  flavor?: any;
}
export const allItens: IItem[] = [
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Luzense",
    flavor: {
      special: {
        family: "32,00",
        big: "27,00",
        average: "22,00",
        small: "17,00"
      }
    },
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 35gr de Carne, 5gr de Banana-da-Terra, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Gourmet Burger",
    flavor: {
      promotional: {
        family: "30,00",
        big: "25,00",
        average: "20,00",
        small: "15,00"
      }
    },
    description: "Calabresa Acebolada",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 40gr de Calabresa, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Luzense",
    flavor: {
      special: {
        family: "32,00",
        big: "27,00",
        average: "22,00",
        small: "17,00"
      }
    },
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 35gr de Carne, 5gr de Banana-da-Terra, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  },
  {
    title: "Luzense",
    flavor: {
      special: {
        family: "32,00",
        big: "27,00",
        average: "22,00",
        small: "17,00"
      }
    },
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://img.freepik.com/free-photo/pepperoni-pizza-with-olives-wooden-board_140725-5374.jpg?t=st=1717086846~exp=1717090446~hmac=069b7adc9a0c9955a2d53207a67ca63d6cfceb78e8f21904d93bfe507dbdbd7f&w=740",
    details: {
      pizza_dough: "515gr",
      igredients: "30gr de Muçarela, 35gr de Carne, 5gr de Banana-da-Terra, 2 Azeitonas, Orégano",
      total_weight: "587"
    }
  }
];
type CartContextType = {
  cart: IItem[];
  addOrder: React.Dispatch<React.SetStateAction<IItem[] | []>>;
};
export const CartContext = createContext<CartContextType | any[]>([]);
function App() {
  const [cart, setCart] = useState<any[]>([]);
    const addOrder = (cart: any) => {
      setCart(cart)
    }
  return (
    <Router>
      <CartContext.Provider value={{ cart, addOrder }}>
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
          <Nav />
        </main>
      </CartContext.Provider>
    </Router>
  );
}
export default App;
