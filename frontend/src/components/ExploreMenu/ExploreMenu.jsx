import React, { useState } from "react";
import "./ExploreMenu.css";
import { item_list } from "../../assets/assets";
console.log(item_list);

const ExploreMenu = ({ category, setCategory }) => {
  console.log("resssss" + "" + category);

  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1> Jewelry That Speaks to Your Style</h1>
        <p className="explore-menu-text">
          Explore our range of jewelry that combines craftsmanship with
          creativity. Whether you're looking for something delicate, bold, or
          uniquely you, our collection is crafted to help you express your
          individual style with grace and sophistication.
        </p>
        <div className="explore-menu-list">
          {item_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "All" : item.name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  src={item.image}
                  alt=""
                  className={category === item.name ? "active" : ""}
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
