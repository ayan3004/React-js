import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Recipie() {
  const [recipes, setRecipes] = useState([])
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' })

  
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || []
    setRecipes(savedRecipes)
  }, [])

  
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe({ ...newRecipe, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRecipes([...recipes, newRecipe])
    setNewRecipe({ title: '', ingredients: '', instructions: '' })
  }

  return (
    <center>
        <div>
      <h1>Food Recipe App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Dish Name<br/>
          <input type="text" name="title" value={newRecipe.title} onChange={handleChange} />
        </label><br/>
        <label>
          Ingredients<br/>
         <input type="text" name="ingredients" value={newRecipe.ingredients} onChange={handleChange} />
        </label><br/>
        <label>
          Instructions<br/>
          <input type="text"  name="instructions" value={newRecipe.instructions} onChange={handleChange} />
        </label><br/>
        <br/>
        <button type="submit">Add Recipe</button>
      </form>
      <h2>Recipes</h2>
      <div className='main'>
      <table border={3}>
        <thead>
          
          <tr>
           <th>Dish name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
                <td><h3>{recipe.title}</h3></td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </center>
  )
}

export default Recipie;
