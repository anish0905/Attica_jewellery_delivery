import React, { useContext } from "react";
import "./PlaceOrder.css";
import { storeContext } from "../../components/context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(storeContext);
  let deliveryFee = 2;
  return (
    <form className="placeOrder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="street" />

        <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip-code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>

      <div className="placeOrder-right">
        <div className="cart-bottom">
          <div>
            <div className="cart-total">
              <h2>Cart Totals</h2>
            </div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                $
                {getTotalCartAmount() === 0
                  ? 0
                  : (getTotalCartAmount() + deliveryFee).toFixed(2)}
              </b>
            </div>
            <button onClick={() => alert("proceed to payment ")}>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
