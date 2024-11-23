import React from 'react'

const Recipe = ({recipe}) => {
    const {id, name, img, calories, description, preparing_time, ingredients} = recipe;
    console.log(recipe)
  return (
    <div className='border-2 p-2 rounded-md'>
        <img src={img} alt="" />
        <h1>{name}</h1>
    </div>
  )
}

export default Recipe