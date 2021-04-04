import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [recipesFound, setRecipesFound] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState('');

  const searchForRecipes = async (query: string): Promise<any> => {
    const result = await fetch('http://localhost:3001/?search=${query}')
    return (await result.json()).results;
  }

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch)
      if(query) {
        const resonse = await searchForRecipes(query)
        setRecipesFound(resonse)
      }
    })();
  }, [recipeSearch])

  const search = (event: any) => {
    event.preventDefault();
    const form = event.target;
    console.log(form)
    // const input = form.querySelector('#searchText')
  }

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form 
        className="searchForm"
        onSubmit={event => search(event)}
      >
        <input id="searchText" type="text"/>
        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
