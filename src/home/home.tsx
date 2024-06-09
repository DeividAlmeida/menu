import { useState, useContext } from 'react';
import { allItens, CartContext } from "../App";
import './home.css';
export const Home = () => {

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
      <footer>
        <p>&copy; 2024 Gui Pizza</p>
      </footer>
    </div>
  )
};