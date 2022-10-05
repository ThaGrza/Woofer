import React from "react";

const Feed = (props: any) => {
  return (
    <div className="feed-container">
      <div className="post">
        <h4 className="feed-title">Posts</h4>
        <img src="#" alt="dog" className="image-post" />
        <p className="user-name">Harley95</p>
        <input className="post-comment" placeholder="comments"></input>
      </div>
    </div>
  );
};
export default Feed;
