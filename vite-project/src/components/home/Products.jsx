import React from 'react';

const Products = () => {
  return (
    <div className="products mt-30">
      <div className="products-wrapper container">
        <h6 className='pt-20'>&#9900; &#9900; &#9900; Fresh From Our Farm</h6>
        <div className="headerbtn-cls">
          <h1 className="product-heading pb-15">Good Organic Products</h1>
          <button className='primary-btn mt-10 mb-20'>View More &rarr;</button>
        </div>

        <div className="card">
          <div className="row">
            <div className="tomatoe">
              <div className="header-section">
                <h5>MEATS</h5>
                <h6 className="negetive">-27%</h6>
              </div>

              <div className="middle">
                <img src='/images/product/tomato.png' alt='' />
              </div>

              <div className="details-section">
                {/* <h4 className="stars"><strong>★★★★☆(4.0)</strong></h4> */}
                <div className="stars">
                <strong>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="grey-star">☆ (4.0)</span>
              </strong>
                </div>
                <h4 className="bottom">Organic Cabbage</h4>
                <h4 className="last-bottom">$50.00 <s className="discount">$65.00</s></h4>
              </div>
            </div>

            <div className="tomatoe">
              <div className="header-section">
                <h5>MEATS</h5>
                <h6 className="negetive">-27%</h6>
              </div>

              <div className="middle">
                <img className="avacado"src='/images/product/avocado.png' alt='' />
              </div>

              <div className="details-section">
                <div className="stars">
                <strong>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="grey-star">☆ (4.0)</span>
              </strong>
                </div>
                <h4 className="bottom">Organic Cabbage</h4>
                <h4 className="last-bottom">$50.00 <s className="discount">$65.00</s></h4>
              </div>
              </div>

              <div className="tomatoe">
              <div className="header-section">
                <h5>MEATS</h5>
                <h6 className="negetive">-27%</h6>
              </div>

              <div className="middle">
                <img src='/images/product/cabbage.png' alt='' />
              </div>

              <div className="details-section">
                <div className="stars">
                <strong>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="grey-star">☆ (4.0)</span>
              </strong>
                </div>
                <h4 className="bottom">Organic Cabbage</h4>
                <h4 className="last-bottom">$50.00 <s className="discount">$65.00</s></h4>
              </div>
            </div>

            <div className="tomatoe">
              <div className="header-section">
                <h5>MEATS</h5>
                <h6 className="negetive">-27%</h6>
              </div>

              <div className="middle">
                <img src='/images/product/potato.png' alt='' />
              </div>

              <div className="details-section">
                <div className="stars">
                <strong>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="orange-star">★</span>
                  <span className="grey-star">☆ (4.0)</span>
              </strong>
                </div>
                <h4 className="bottom">Organic Cabbage</h4>
                <h4 className="last-bottom">$50.00 <s className="discount">$65.00</s></h4>
              </div>
            </div>
            </div>           
          </div>
        </div>
      </div>
  );
};

export default Products;
