import React from "react";
import Back from "../common/Back";
import PostCard from "../home/post/PostCard";
import img from "../images/pricing.jpg";
import "../home/post/post.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img}
        />
        <div className="price container">
          <PostCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
