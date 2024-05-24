import React,{ useState, }  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Item } from "./detail/detail";
import { SpeedInsights } from "@vercel/speed-insights/react"
export const allItens = [
  {
    title: "Gourmet Burger",
    description: "Experience the taste of gourmet burgers with this simple yet delicious recipe.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Italian Pasta",
    description: "Indulge in a classNameic Italian pasta dish, perfect for any occasion.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  },
  {
    title: "Healthy Salad",
    description: "Stay healthy and fit with this fresh and nutritious salad recipe.",
    image: "https://media.istockphoto.com/id/1349560406/pt/foto/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull.jpg?s=612x612&w=is&k=20&c=OfRpIVyzFVSwQ5FhZRrdNbyggQYDOC0s18IHMQHpvRM="
  }
];

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item/>} />
        </Routes>
      </main>
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
      <footer>
        <p>&copy; 2024 Gui Pizza</p>
      </footer>
    </div>
  )};
export default App;
