import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ClickRate from "./ClickRate";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <Link to={`/show-book/${book._id}`}>
        <div className="desc">
          <h2>
            {book.title}
            <button type="button" className="counterbutton" ></button>
          </h2>
          <hr class="divbreak"></hr>
          <h3>{book.authors}</h3>
          <p>{book.content}</p>
          <ClickRate/>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
