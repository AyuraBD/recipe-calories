import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <main className='px-20'>
        <div className='w-3/4 text-center m-auto mb-10'>
          <h1 className='text-2xl font-bold mb-3'>Our Recipes</h1>
          <p className='text-gray-500 text-[15px]'>Discover a wide selection of mouthwatering recipes, complete with detailed instructions, ingredients, and calorie information to inspire your next meal!</p>
        </div>
        <div className='flex'>
          <Recipes></Recipes>
        </div>
      </main>      
    </>
  )
}

export default App
