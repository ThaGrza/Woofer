import React from "react";
import "./Post.css";

export default function Post(props: any) {
  return (
    <div className="post-container">
      <img className="post-image" src={props.image} alt={props.username} />
      <p className="post-user">{props.username}</p>
      <p className="post-desc">{props.description}</p>
    </div>
  );
}
