import React from "react";
import data from "../data";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      {data.stars.map((star) => (
        <span>
          <i
            className={` rating >= ${star.note} 
            ? ${star.icon} 
            : rating >= ${star.note2} 
            ? ${star.icon2} 
            : ${star.icon3}
            `}
          ></i>
        </span>
      ))}
      <span>{numReviews + "reviews"}</span>
    </div>
  );
}
