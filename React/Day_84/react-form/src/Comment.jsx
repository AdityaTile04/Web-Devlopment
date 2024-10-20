import React, { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty";
  }
  if (!values.comment) {
    errors.comment = "comment cannot be empty";
  }
  if (!values.rating) {
    errors.rating = "Rating cannot be empty";
  }

  return errors;
};

export default function Comment({ addComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   comment: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      comment: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const handleChange = (e) => {
  //   setFormData((cd) => {
  //     return { ...cd, [e.target.name]: e.target.value };
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   addComment(formData);

  //   setFormData({
  //     username: "",
  //     comment: "",
  //     rating: "",
  //   });
  // };

  return (
    <div>
      <h1>Give a comment</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />{" "}
        {formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}
        <br />
        <br />
        <label htmlFor="comment">Comment Here : </label>
        <textarea
          id="comment"
          name="comment"
          cols={22}
          rows={3}
          placeholder="comment here"
          value={formik.values.comment}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.comment ? (
          <div style={{ color: "red" }}>{formik.errors.comment}</div>
        ) : null}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        {formik.errors.rating ? (
          <div style={{ color: "red" }}>{formik.errors.rating}</div>
        ) : null}
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
