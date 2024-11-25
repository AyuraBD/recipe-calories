import React from 'react'
import ayub from '../../assets/recipe_banner.png'

const Banner = () => {
  return (
    <div className='lg:mb-20 sm:mb-8 max-sm:mb-4 lg:px-20 md:px-12 sm:px-8 max-sm:px-4'>
        <div style={{backgroundImage: `url(${ayub})`}} className='lg:h-[600px] md:h-[500px] sm:h-[400px] max-sm:h-[300px] w-full bg-cover bg-no-repeat bg-center rounded-lg'>
            <div className='flex flex-col justify-center items-center lg:gap-4 max-sm:gap-2 h-full lg:w-2/3 m-auto max-sm:p-4'>
                <h1 className='lg:text-4xl sm:text-2xl max-sm:text-2xl text-white font-bold text-center'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-[15px] text-white text-center max-sm:text-[14px]'>Welcome to your go-to food recipes hub, where taste meets wellness. Find easy-to-follow recipes with calorie insights and tips to create delightful meals for any occasion.</p>
                <div className='flex justify-center items-center gap-6'>
                    <button className='bg-[#0BE58A] px-6 max-sm:px-3 lg:py-3 max-sm:py-1 max-sm:text-[13px] rounded-full font-semibold border-[#0BE58A] border-2'>Explore Now</button>
                    <button className='bg-transparent px-6 max-sm:px-3 lg:py-3 max-sm:py-1 max-sm:text-[13px] rounded-full text-white font-semibold border-white border-2'>Our Feedback</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner