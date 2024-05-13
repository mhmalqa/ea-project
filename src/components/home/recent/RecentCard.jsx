import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // استيراد Link
import { list } from "../../data/Data";
import "yet-another-react-lightbox/styles.css";
import "../recent/Recent";
import { ViewProperty } from "./view_properties/ViewProperty";

const RecentCard = ({ language, isHome }) => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (isHome && randomItems.length < 6) {
      const randomItemsArray = [];
      while (
        randomItemsArray.length < 6 &&
        randomItemsArray.length < list.length
      ) {
        const randomIndex = Math.floor(Math.random() * list.length);
        if (!randomItemsArray.includes(randomIndex)) {
          randomItemsArray.push(randomIndex);
        }
      }
      setRandomItems(randomItemsArray);
    }
  }, [isHome, randomItems.length]);

  const itemsToDisplay = isHome
    ? list.length < 6
      ? list
      : randomItems.map((index) => list[index])
    : list;

  return (
    <>
      <div className="content grid3 mtop">
        {itemsToDisplay.map((item, index) => {
          const {
            cover,
            category,
            location,
            name,
            price,
            type,
            name_en,
            location_en,
            category_en,
            type_en,
          } = item;
          const itemName = language === "english" ? name_en : name;
          const itemLocation = language === "english" ? location_en : location;
          const itemCategory = language === "english" ? category_en : category;
          const itemType = language === "english" ? type_en : type;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category_en === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category_en === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {itemCategory}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{itemName}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {itemLocation}
                </p>
              </div>
              <div className="button flex">
                <div>
                  {/* استخدام Link بدلاً من الزر */}
                  <Link
                    to={{
                      pathname: "/view", // المسار المستهدف
                      state: { item, language }, // البيانات المراد تمريرها
                    }}
                    
                  >
                    <button className="btn2">SAR {price}</button>
                  </Link>
                </div>
                <span>{itemType}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
