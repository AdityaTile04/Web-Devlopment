import React from "react";
import { useState } from "react";

function LikeButton() {
  let [isLiked, setisLiked] = useState(false);
  let [click, setClick] = useState(0);

  function toggleLike() {
    setisLiked(!isLiked);
    setClick((click += 1));
  }

  let styles = { color: "red" };

  return (
    <div onClick={toggleLike}>
      <p>Click : {click}</p>
      {isLiked ? (
        <i className="fa-solid fa-heart" style={styles}></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </div>
  );
}

export default LikeButton;
