import React from "react";

const Recipe = ({ title, calories, image, ingredients, dish }) => {
  return (
    <div className="recipe">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <div>
        <p>
          <strong>Dish Type:</strong> {dish}
        </p>
        <p>
          <strong>Calories:</strong> {calories}
        </p>
      </div>
      <ul style={{ listStyleType: "square" }}>
        {ingredients.map((ingredient, i) => {
          return <li key={i}>{ingredient.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recipe;
