import React, { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../components/context/StoreContext";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { gold_list, removeToCartItems, cartItems, getTotalCartAmount } =
    useContext(storeContext);

  const navigate = useNavigate();

  // Calculate Subtotal

  // Delivery fee is fixed for now
  const deliveryFee = 2;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {gold_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button onClick={() => removeToCartItems(item._id)}>
                    <CloseIcon />
                  </button>
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>

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
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button onClick={() => alert("Promo code applied!")}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
