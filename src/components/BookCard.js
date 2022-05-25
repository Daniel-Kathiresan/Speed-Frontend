import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
<<<<<<< HEAD
            <Link to={`/show-book/${book._id}`}>
=======
>>>>>>> 14bb618 (Removed the default image)
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

export default BookCard;