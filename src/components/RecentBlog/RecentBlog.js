import React from "react";
import "./RecentBlog.css"

function RecentBlog() {
  return (
    <div className="container">
      <div className="recent__blog">
        <h3 className="recent__blog__title">RecentBlog Posts</h3>
        <div className="recent__cards"></div>
      </div>
    </div>
  );
}
export default RecentBlog;
