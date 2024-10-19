import React, { useState } from "react";

export default function Comment({ addComment }) {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 5,
  });

  const handleChange = (e) => {
    setFormData((cd) => {
      return { ...cd, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addComment(formData)

    setFormData({
      username: "",
      comment: "",
      rating: "",
    });
  };

  return (
    <div>
      <h1>Give a comment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="comment">Comment Here : </label>
        <textarea
          id="comment"
          name="comment"
          cols={22}
          rows={3}
          placeholder="comment here"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating : </label>
        <input
          id="rating"
          type="number"
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
