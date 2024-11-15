import React from "react";
import { assets } from "../../assets/assets";
import "../FoodItem/FoodItem.css";

const FoodItem = ({ id, name, price, image, description }) => {
  return (
    <div className="food_item">
      <div className="food-item-img-container ">
        <img src={image} alt="" srcset="" width="100%" height="100%" />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>

          <img src={assets.rating_starts} alt="" />
        </div>

        <p>{description}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
