import React, { useState, useEffect } from "react";
import { posts } from "../../data/Data";

const PriceCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تحديث الصورة كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="post-align">
      <div className="content flex">
        <div className="slide-post">
          <img
            className="center-image"
            src={process.env.PUBLIC_URL + posts[currentImageIndex].img}
            alt={posts[currentImageIndex].alt}
            srcSet={posts[currentImageIndex].srcSet}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
