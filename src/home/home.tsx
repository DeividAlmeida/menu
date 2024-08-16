import { useState, useContext } from 'react';
import { allItems, categories, CartContext } from "../App";
import './home.css';
import { currencyToString } from '../utils';
import { FloatButton, Tabs } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContextType } from '../types/cart';
export const Home = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  const navigate = useNavigate(); 

  return (
    <>
      <div className="home">
        <FloatButton badge={{ count: cart.length }} icon={<ShoppingCartOutlined />} onClick={() => navigate("/cart")}/>
        <Tabs
          // onChange={onChange}
          type="card"
          items=
          {
            [
              {
                label: "Todos",
                key: "0",
                children: (
                  <div className="menu">
                    <div className="card-container">
                      {
                        categories.map((item: any, index: number) => (            
                          <Link className="card" key={index} to={`/${index}`}>
                            <img src={item.image} alt={item.title} />
                            <div className="card-content">
                              <h4>{item.title}</h4>
                              <p >{item.description}</p>
                              <p className="price"> {currencyToString(item.price)}</p>
                            </div>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ),
              },
              {
                label: "Pizzas",
                key: "1",
                children: (
                  <div className="menu">
                    <div className="card-container">
                      {
                        categories.map((item: any, index: number) => (            
                          <Link className="card" key={index} to={`/${index}`}>
                            <img src={item.image} alt={item.title} />
                            <div className="card-content">
                              <h4>{item.title}</h4>
                              <p >{item.description}</p>
                              <p className="price"> {currencyToString(item.price)}</p>
                            </div>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ),
              },
              {
                label: "Bebidas",
                key: "2",
                children: (
                  <div className="menu">
                    <div className="card-container">
                      {
                        categories.map((item: any, index: number) => (            
                          <Link className="card" key={index} to={`/${index}`}>
                            <img src={item.image} alt={item.title} />
                            <div className="card-content">
                              <h4>{item.title}</h4>
                              <p >{item.description}</p>
                              <p className="price"> {currencyToString(item.price)}</p>
                            </div>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ),
              },
            ]
          }
        />
      </div>
    </>
  )
};