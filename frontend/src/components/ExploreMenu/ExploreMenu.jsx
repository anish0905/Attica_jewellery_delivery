import React from "react";
import "./ExploreMenu.css";
import { item_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our Jwellery</h1>
        <p className="explore-menu-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestiae
          atque quas veritatis asperiores neque iusto, voluptatibus illum!
          Corrupti, minus!
        </p>
        <div className="explore-menu-list">
          {item_list.map((item, index) => {
            return (
              <div key={index} className="explore-menu-list-item">
                <img src={item.image} alt="" srcset="" />
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
