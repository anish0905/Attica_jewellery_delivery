import React, { useContext } from "react";
import "./FoodDisplay.css";
import { storeContext } from "../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { gold_list } = useContext(storeContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food_items-container ">
        {gold_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
