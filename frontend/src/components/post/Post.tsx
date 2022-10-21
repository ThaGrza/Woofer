import React from "react";
import "./Post.css";
import Harley from "../../placeholderData/Harlow.jpeg";

export default function Post(props: any) {
  return (
    <div className="post-container">
      <img className="post-image" src={Harley} alt={props.username} />

      <div className="post-user-container">
        <p className="post-user">Andrew Griswold</p>
      </div>
      <div className="post-desc-container">
        <p className="post-desc">
          Having a great time playing at Barton Springs!
        </p>
      </div>
    </div>
  );
}

// actual code for production

// <div className="post-container">
// <img className="post-image" src={props.image} alt={props.username} />
// <p className="post-user">{props.username}</p>
// <p className="post-desc">{props.description}</p>
// </div>
