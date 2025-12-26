import React from 'react';
import ReactMarkdown from 'react-markdown';

const ChefRecipe = (props) => {
  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ChefRecipe;
