import React, { useContext } from "react";
import "../FoodItem/FoodItem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { storeContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, image, description, rating }) => {
  const { addToCartItems, removeToCartItems, cartItems } =
    useContext(storeContext);
  return (
    <div className="food_item">
      <div className="food-item-img-container">
        <img src={image} alt={name} width="100%" height="100%" />
        <button style={{ color: "red", background: "black" }}>Add</button>
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img src={rating} alt="Rating" className="food-item-rating" />
        </div>

        <p className="food-item-description">{description}</p>
        <p className="food-item-price">Price: ${price}</p>

        {!cartItems[id] ? (
          <AddIcon onClick={() => addToCartItems(id)} className="add" />
        ) : (
          <div className="itemCounter">
            <AddIcon onClick={() => addToCartItems(id)} className="add" />
            <span> {cartItems[id]}</span>
            <RemoveIcon
              onClick={() => removeToCartItems(id)}
              className="minus"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
