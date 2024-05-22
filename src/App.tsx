import React,{ useState, }  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Item } from "./detail/detail";
export const allItens = [
  {
    title: "Gourmet Burger",
    description: "Experience the taste of gourmet burgers with this simple yet delicious recipe.",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    title: "Healthy Salad",
    description: "Stay healthy and fit with this fresh and nutritious salad recipe.",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Delicious Gui Pizza</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Item/>} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Gui Pizza</p>
        </footer>
      </div>
    </Router>
  );
}

const Home = () => {
  const [filteredItens, setFilteredItens] = useState(allItens);
  function searchItem(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setFilteredItens (
        allItens.filter(item => {
          return item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
      })
    );
  }
  return (  
    <div className="menu">
      <div className="filter">
        <input type="text" placeholder="Encontre sua pizza" onChange={searchItem} className="search" />
      </div>
      <div className="card-container">
        {filteredItens.map((item: any, index: number) => (
          <a className="card" key={index}  href={`/${index}`}>
            <img src={item.image} alt={item.title}/>
            <div className="card-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )};
export default App;
