import React, { useState } from "react";
import "./style/Comment.css";
import Comment from "./Comment";

export default function ShowComment() {
  let [comment, setComment] = useState([
    {
      username: "@at",
      comment: "nice post",
      rating: 5,
    },
  ]);

  function addComment(comment) {
    setComment((currComment) => [...currComment, comment]);
  }

  return (
    <>
      <h3>All Comments</h3>

      {comment.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>
            <b>Username</b> : <i>{comment.username}</i>
          </span>
          &nbsp;
          <span>
            <b>Comment</b> : <i>{comment.comment}</i>
          </span>
          &nbsp;
          <span>
            <b>Rating</b> : <i>{comment.rating}</i>
          </span>
        </div>
      ))}

      <Comment addComment={addComment} />
    </>
  );
}
