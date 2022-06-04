import React, { useState } from "react";
import '../App.css';
import { FaStar } from "react-icons/fa";
import axios from "axios";

// class RatingStars extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             book: {},
//             rating: ''
//         };
//     }
    

const RatingStars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    // function onRatingClick(ratingValue) 
    // {
    //     // this.book.rating = rating;
    //     // this.state.rating;
    // }
    
  return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
            <label>
                <input type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                />
                <FaStar 
                className="star" 
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={50} 
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                />
                </label>
            );
        })}
    </div>
    );
}

export default RatingStars;
