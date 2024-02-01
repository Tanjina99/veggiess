import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import productDescriptions from "../../staticData/productdescrptions";
import AboutUs from './AboutUs';

const ProductDescription = () => {
    const { id } = useParams(); 
    const [selectedProduct, setSelectedProduct] = useState(null);
    const location = useLocation();
  
    useEffect(() => {
      const product = productDescriptions.find(item => item.id === parseInt(id));
      console.log('Selected Product:', product);
      setSelectedProduct(product);
    }, [id]);
  
    if (!selectedProduct) {
      return <div>No product data found</div>;
    }
  
    return (
      <>
        <Navbar />
        
        <div className="product-description-container">
          <div className="product-image">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          <div className='all-product'>
            <div className="product-details">
              <div className='name-type'>
                <h2 className='product-name'>{selectedProduct.name}</h2>
              </div>
       
              <Link
                  to={{
                      pathname: `/product/${id}/checkout-form`,
                      state: { selectedProduct },
                  }}
                  className="primary-btn mt-10"
                  style={{ textDecoration: 'none' }}
                  >
                  Proceed to Checkout
              </Link>
  
              <div className='hr'>
                <hr />
              </div>
  
              <div className='des-sec'>
                <p className='description'>{selectedProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
  
        <AboutUs />
      </>
    );
  };
  
  export default ProductDescription;