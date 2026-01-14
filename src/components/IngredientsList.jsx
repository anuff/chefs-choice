import React from 'react';

const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <div className="ingredient-list-container">
        <h3>Ingredients on hand: </h3>
        <ul className="ingredient-list">{ingredientsListItems}</ul>
      </div>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
