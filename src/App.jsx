import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import Modal from './components/Modal/Modal'
function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = (recipe)=>{
    const isWantToCookAlreadyAdded = wantToCook.some(
      newRecipe => newRecipe.id === recipe.id
    );
    if(!isWantToCookAlreadyAdded){
      const previous = [...wantToCook, recipe];
      setWantToCook(previous);
    }else{
      document.getElementById('my_modal_2').showModal();
    }   
    
  }  

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <main className='px-20'>
        <div className='w-3/4 text-center m-auto mb-10'>
          <h1 className='text-2xl font-bold mb-3'>Our Recipes</h1>
          <p className='text-gray-500 text-[15px]'>Discover a wide selection of mouthwatering recipes, complete with detailed instructions, ingredients, and calorie information to inspire your next meal!</p>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col gap-4'>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Sidebar wantToCook={wantToCook}></Sidebar>

          {/* Already added Modal */}
          <Modal></Modal>
        </div>
      </main>      
    </>
  )
}

export default App
