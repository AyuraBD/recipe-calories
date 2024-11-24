import React, { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe';
const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 lg:w-2/3 md:w-full mb-16'>
        {
            recipes.map(recipe => <Recipe handleWantToCook={handleWantToCook} key={recipe.id} recipe={recipe}></Recipe>)
        }
    </div>
  )
}

export default Recipes