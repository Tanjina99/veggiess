import React, { useState } from 'react';
import products from "../../staticData/product";
import ProductDescription from './ProductDescription'
import { Link } from 'react-router-dom'; 

const Organic = () => {
  const [productsList, setProductsList] = useState(products);
  const [productItems, setProductsItems] = useState(products);
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilters = (type) => {
    const items = productsList.filter(item => item.type === type);
    setProductsItems(items);
    setActiveFilter(type);
    setSelectedProduct(null);
  }

  const showAllProducts = () => {
    setProductsItems(products);
    setActiveFilter(null);
    setSelectedProduct(null);
  };

  const showProductDescription = (product) => {
    // console.log('Product clicked:', product);
    setSelectedProduct(product);
  }

  return (
    <div className="organic">
      <div className="organic-wrapper container">
        <h6 className='pt-20'>&#9900; &#9900; &#9900; Fresh From Our Farm</h6>
        <div className="headerbtn-cls">
          <h1 className="organic-heading pt-10">Our Organic Products</h1>
          <div className="flex justify-between">
            <div className="headerbtn-wrap">
              <button
                onClick={showAllProducts}
                className={`prim-btn ${activeFilter === null ? 'active' : ''}`}
              >
                All
              </button>
              <button
                onClick={() => handleFilters('vegetable')}
                className={`prim-btn ${activeFilter === 'vegetable' ? 'active' : ''}`}
              >
                Vegetable
              </button>
              <button
                onClick={() => handleFilters('fruit')}
                className={`prim-btn ${activeFilter === 'fruit' ? 'active' : ''}`}
              >
                Fruits
              </button>
            </div>
          </div>
        </div>

        <div className="all-item">   
          {productItems.map((item, i) => (
            <Link
              key={i}
              to={`/product/${item.id}`}  
              className="organic-container"
              style={{textDecoration: 'none'}}
              >
              <div className="full-cls">
                <div className="card-organic">
                  <div className="vege-info">
                    <div className="vege-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="vege-info">
                    <div className="org-section">
                      <div className="meat">
                        MEATS<span className="discount-organic">{item.discount}</span>
                      </div>
                    </div>
                    <div className="color-star">★★★★<span className="light-star">☆ (4.0)</span></div>
                    <h4 className="item-name">{item.name}</h4>
                    <div className="current-price">${item.currentPrice}<s className="prev-price">${item.prevPrice}</s></div>
                  </div>
                </div>
              </div>
              </Link>
              ))}
        </div>
        {selectedProduct && (
          <ProductDescription product={selectedProduct} />
        )}
      </div>
    </div>
  );
};

export default Organic;
