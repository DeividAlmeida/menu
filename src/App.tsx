import React, { useState, } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Item } from "./detail/detail";
import { Cart } from "./cart/cart";
import { Order } from "./myOrder/myOrder"
import { Nav } from "./nav/nav"
export const allItens = [
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

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item />} />
          <Route path="cart" element={<Cart />} />
          <Route path='my-order' element={<Order />} />
        </Routes>
        <Nav />
      </main>
    </Router>
  );
}

const Home = () => {
  const [filteredItens, setFilteredItens] = useState(allItens);
  function searchItem(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setFilteredItens(
      allItens.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
      })
    );
  }
  return (
    <div className="home">
      <header>
        <h1>Delicious Gui Pizza</h1>
        <div className="filter">
          <input type="text" placeholder="Encontre sua pizza" onChange={searchItem} className="search" />
        </div>
      </header>
      <div className="menu">
        <div className="card-container">
          {filteredItens.map((item: any, index: number) => (
            <a className="card" key={index} href={`/${index}`}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* <Nav /> */}
      <footer>
        <p>&copy; 2024 Gui Pizza</p>
      </footer>
    </div>
  )
};
export default App;
