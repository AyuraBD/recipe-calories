import React from 'react'
import ayub from '../../assets/recipe_banner.png'

const Banner = () => {
  return (
    <div className='px-20 mb-20'>
        <div style={{backgroundImage: `url(${ayub})`}} className='h-[600px] w-full bg-cover bg-no-repeat bg-center rounded-lg'>
            <div className='flex flex-col justify-center items-center gap-4 h-full w-2/3 m-auto'>
                <h1 className='text-4xl text-white font-bold text-center'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-[15px] text-white text-center'>Welcome to your go-to food recipes hub, where taste meets wellness. Find easy-to-follow recipes with calorie insights and tips to create delightful meals for any occasion.</p>
                <div className='flex justify-center items-center gap-6'>
                    <button className='bg-[#0BE58A] px-6 py-3 rounded-full font-semibold border-[#0BE58A] border-2'>Explore Now</button>
                    <button className='bg-transparent px-6 py-3 rounded-full text-white font-semibold border-white border-2'>Our Feedback</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner