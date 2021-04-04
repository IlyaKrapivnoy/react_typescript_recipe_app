import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipesFound, setRecipesFound] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState('');

  const searchForRecipes = async (query: string): Promise<any> => {
    const result = await fetch('http://localhost:3001/?search=${query}')
    return (await result.json()).results;
  }


  return (
     <div className="App">

     </div>
  );
}

export default App;
