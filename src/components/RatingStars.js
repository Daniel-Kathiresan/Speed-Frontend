import React, { useState } from "react";
import '../App.css';
import { FaStar } from "react-icons/fa";
import { useForm } from 'react-hook-form';

const RatingStars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    const { handleSubmit } = useForm();
    const [ratingValue, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <p>{ratingValue}</p>
    <button className="btn btn-outline-info btn-lg btn-block">Submit Rating</button>
    </div>
    </form>
    );
}
export default RatingStars;
