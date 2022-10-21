import React from "react";
import "./Feed.css";
import Post from "../post/Post";

export default function Feed(props: any) {
  return (
    <div className="feed-container">
      <h3 className="feed-title">Da Feed</h3>
      <Post />
    </div>
  );
}
