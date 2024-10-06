import React, { useState } from 'react';
import heart from '../assets/heart.png';
import one from '../assets/Item1.jpg'
import two from '../assets/Item2.jpg'
import Item3 from '../assets/Item3.jpg'
import Item4 from '../assets/Item4.jpg'
import Item5 from '../assets/Item5.jpg'
import Item6 from '../assets/Item6.jpg'
import Item7 from '../assets/Item7.jpg'
import Item8 from '../assets/Item8.jpg'

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "item1",
      image: one,
      description: "This is an item",
      stock: 2,
      like: false,
    },
    {
      id: 2,
      name: "item2",
      image: two,
      description: "This is an item",
      stock: 1,
      like: false,
    },
    {
      id: 3,
      name: "item3",
      image: Item3,
      description: "This is an item",
      stock: 0,
      like: false,
    },
    {
      id: 4,
      name: "item4",
      image: Item4,
      description: "This is an item",
      stock: 5,
      like: false,
    },
    {
      id: 5,
      name: "item5",
      image: Item5,
      description: "This is an item",
      stock: 3,
      like: false,
    },
    { 
      id: 6,
      name: "item6",
      image: Item6,
      description: "This is an item",
      stock: 2,
      like: false
    },
    {
      id: 7,
      name: "item7",
      image: Item7,
      description: "This is an item",
      stock: 1,
      like: false
    },
    {
      id: 8,
      name:"Item8",
      image: Item8,
      description: "This is an item",
      stock: 0,
      like: false
    }
  ]);

  const handleLikes = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, like: !product.like } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className='product-box'>
      {products.map((item) => (
        <div className="product-container" key={item.id}>
          <div className="product">
            <img src={item.image} alt="Item image" className="product-image" /><br />
            <div className="product-description">
              <span className="product-name">{item.name}</span>
              <h5 className='product-desc'>{item.description}</h5>
              <div id="like" onClick={() => handleLikes(item.id)}>
                <img
                  src={heart}
                  alt="Heart"
                  width={25}
                  height={25}
                  style={{ opacity: item.like ? 1 : 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
