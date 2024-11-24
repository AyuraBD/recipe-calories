import React from 'react'
import { AiOutlineFire } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';

const Recipe = ({recipe, handleWantToCook}) => {
    const {id, name, img, calories, description, preparing_time, ingredients} = recipe;
  return (
    <div className='border-2 p-3 rounded-md'>
        <img className='rounded-md mb-2' src={img} alt="" />
        <h3 className='text-xl mb-2 font-bold'>{name}</h3>
        <p className='text-[14px] pb-3 mb-3 border-b-2'>{description}</p>
        
        <h4 className='font-semibold text-[17px]'>Ingredients: {ingredients.length}</h4>
        <div className='pb-3 mb-3 border-b-2'>
        {
            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
        }
        </div>
        <div className='flex justify-between items-center mb-3'>
            <div className='flex justify-center items-center'>
                <CiClock2 className='mr-2'></CiClock2>
                <p><span>{preparing_time}</span> Minutes</p>
            </div>
            <div className='flex justify-center items-center'>
                <AiOutlineFire className='mr-2'></AiOutlineFire>
                <p><span>{calories}</span> Kcal</p>
            </div>
        </div>
        <button onClick={()=>handleWantToCook(recipe)} className='bg-[#0BE58A] px-3 py-2 rounded-full font-semibold border-[#0BE58A] border-2 text-[13px]'>Want to Cook</button>
    </div>
  )
}

export default Recipe