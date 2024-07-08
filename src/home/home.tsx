import { useState, useContext } from 'react';
import { allItems, categories, CartContext } from "../App";
import './home.css';
import { currencyToString } from '../utils';
import { Nav } from '../nav/nav';
export const Home = () => {
  return (
    <>
      <div className="home">
        <header>
          <h1>Delicious Gui Pizza</h1>
          {/* <div className="filter">
            <input type="text" placeholder="Encontre sua pizza" onChange={searchItem} className="search" />
          </div> */}
        </header>
        <div className="menu">
          <div className="card-container">
            {categories.map((item: any, index: number) => (            
              <a className="card" key={index} href={`/${index}`}>
                <img src={item.image} alt={item.title} />
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p >{item.description}</p>
                  <p className="price"> {currencyToString(item.price)}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Nav />
    </>
  )
};