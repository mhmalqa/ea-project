import React, { useState } from "react";
import { list } from "../../data/Data"; // استبدل "yourListFile" بمسار ملف القائمة الخاص بك

const RecentCard = ({ language }) => {
  // حالة لتخزين العناصر العشوائية
  const [randomItems, setRandomItems] = useState([]);

  // تحديث العناصر العشوائية عند كل تحديث
  useState(() => {
    const randomItemsArray = [];
    while (randomItemsArray.length < 6) {
      const randomIndex = Math.floor(Math.random() * list.length);
      if (!randomItemsArray.includes(randomIndex)) {
        randomItemsArray.push(randomIndex);
      }
    }
    setRandomItems(randomItemsArray);
  }, []);

  return (
    <>
      <div className="content grid3 mtop">
        {randomItems.map((index) => {
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
          } = list[index];
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
                  <button className="btn2">SAR {price}</button>
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
