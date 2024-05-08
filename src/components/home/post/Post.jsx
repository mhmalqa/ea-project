import React from "react";
// import Heading from "../../common/Heading";
import "./post.css";
import PostCard from "./PostCard";

const Post = () => {
  return (
    <>
      <section className="price">
        <img
          className="img-back"
          src={`${process.env.PUBLIC_URL}/images/shape/h3_choose_shape02.jpg`}
          alt=""
        />
        <div className="container">
          {/* <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' /> */}
          <PostCard />
        </div>
      </section>
    </>
  );
};

export default Post;
