import React from 'react'

const SideRecipe = ({toCook,handleCooking}) => {
    const {name, preparing_time, calories} = toCook;
  return (
    <tr className="bg-slate-100 border-b-2">
        <td className="p-1 text-[14px]">{name}</td>
        <td className="p-1 text-[14px]">{preparing_time}
            <span>Minutes</span>
        </td>
        <td className="p-1 text-[14px]">{calories}
            <span>Kcal</span>
        </td>
        <td><button onClick={()=>handleCooking(toCook)} className='bg-[#0BE58A] px-2 py-1 rounded-full text-[14px]'>Preparing</button></td>
    </tr>
  )
}

export default SideRecipe