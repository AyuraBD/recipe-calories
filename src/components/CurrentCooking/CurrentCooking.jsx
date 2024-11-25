import React from 'react'

const CurrentCooking = ({cooking}) => {
    const {name, preparing_time, calories} = cooking;
  return (
    <tr className="bg-slate-100 border-b-2">
        <td className="p-1 text-[14px]">{name}</td>
        <td className="p-1 text-[14px]">{preparing_time}
            <span> Minutes</span>
        </td>
        <td className="p-1 text-[14px]">{calories}
            <span> Kcal</span>
        </td>
    </tr>
  )
}

export default CurrentCooking