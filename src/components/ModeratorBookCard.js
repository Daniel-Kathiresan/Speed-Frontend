import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ModeratorBookCard = (props) => {
    const book  = props.book;

    return(
        <div className="card-container">
            <Link to={`/moderator-details/${book._id}`}>
            <div className="desc">
                <h2>
                      { book.title }

                </h2>
                <hr class="divbreak"></hr>
                <h3>{book.authors}</h3>
                <p>{book.content}</p>
            </div>
            </Link>
        </div>
    )
};

export default ModeratorBookCard;