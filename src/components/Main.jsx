import React, { useState } from 'react';
import IngredientsList from './IngredientsList';
import ChefRecipe from './ChefRecipe';
import { getRecipeFromMistral } from '../../ai';

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState('');

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <>
      <main>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            name="ingredient"
            aria-label="Add Ingredient"
            placeholder="e.g. oregano"
          />
          <button>Add Ingredient</button>
        </form>

        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
        )}
        {recipe && <ChefRecipe recipe={recipe} />}
      </main>
    </>
  );
};

export default Main;
