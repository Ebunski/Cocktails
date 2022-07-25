import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h2>Oops! it's a dead end</h2>
        <Link to="/">
          {" "}
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
