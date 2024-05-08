import React, { useState, useEffect } from "react";
import { posts } from "../../data/Data";

const PriceCard = () => {
  const [currentImageIndex_rel, setCurrentImageIndex_rel] = useState(0);
  const [currentImageIndex_sol, setCurrentImageIndex_sol] = useState(0);
  const [currentImageIndex_adm, setCurrentImageIndex_adm] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex_rel((prevIndex) =>
        prevIndex === posts.post_rel.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تحديث الصورة من post_rel كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex_sol((prevIndex) =>
        prevIndex === posts.post_sol.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تحديث الصورة من post_sol كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex_adm((prevIndex) =>
        prevIndex === posts.post_adm.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تحديث الصورة من post_adm كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="post-align">
      <div className="content flex">
        <div className="slide-post">
          <img
            className="center-image"
            src={
              process.env.PUBLIC_URL + posts.post_sol[currentImageIndex_sol].img
            }
            alt={posts.post_sol[currentImageIndex_sol].alt}
            srcSet={posts.post_sol[currentImageIndex_sol].srcSet}
          />
        </div>
        <div className="slide-post">
          <img
            className="center-image"
            src={
              process.env.PUBLIC_URL + posts.post_rel[currentImageIndex_rel].img
            }
            alt={posts.post_rel[currentImageIndex_rel].alt}
            srcSet={posts.post_rel[currentImageIndex_rel].srcSet}
          />
        </div>
        <div className="slide-post">
          <img
            className="center-image"
            src={
              process.env.PUBLIC_URL + posts.post_adm[currentImageIndex_adm].img
            }
            alt={posts.post_adm[currentImageIndex_adm].alt}
            srcSet={posts.post_adm[currentImageIndex_adm].srcSet}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
