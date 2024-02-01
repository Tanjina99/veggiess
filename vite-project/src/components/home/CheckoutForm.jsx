import React from 'react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import StarRating from './StarRating';

const CheckoutForm = ({ location }) => {
  // Check if location exists and has a state property
  if (!location || !location.state) {
    // Handle the case where the location or state is not available
    return <div>No product data found</div>;
  }

  const { selectedProduct } = location.state;

  if (!selectedProduct || !selectedProduct.id) {
    // Handle the case where the product data is incomplete
    return <div>Invalid product data</div>;
  }

  console.log("Selected Product:", selectedProduct);

  return (
    <>
      <Navbar />

      <div className="main-container container">
        <div className="sidebar">
          <div className="sidebar-section">
            <h3 className="info">Basic Information</h3>
          </div>
          <div className="sidebar-section">
            <h3 className="info">Address</h3>
          </div>
          <div className="sidebar-section">
            <h3 className="info">Order List</h3>
          </div>
          <div className="sidebar-section">
            <h3 className="info">Review</h3>
          </div>
          <div className="sidebar-section">
            <h3 className="info">Change Password</h3>
          </div>
        </div>

        <div className="product-list">
          <div key={selectedProduct.id} className="product-item">
            <div className="product-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="all-product">
              <div className="product-details">
                <div className="name-type">
                  <h2 className="product-name">{selectedProduct.name}</h2>
                  <p className="type">Type: {selectedProduct.type}</p>
                </div>
                <div className="rating">
                  <StarRating rating={selectedProduct.rating} />
                </div>
                <div className="price">
                  <div className="current-price">
                    Price: ${selectedProduct.currentPrice}
                    <s className="prev-price">
                      ${selectedProduct.prevPrice}
                    </s>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutUs />
      </div>
    </>
  );
};

export default CheckoutForm;
