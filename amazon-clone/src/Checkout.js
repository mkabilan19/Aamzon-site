import React from 'react';
import './Checkout.css';


function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
        className="checkout__ad" 
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/PD21/LUP/ST2/PDS_PC.jpg"
        alt="#" 
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
        </div>
      </div>

        <div className="checkout__right">
          <Subtotal />
        </div>     
    </div>
  );
}

export default Checkout
