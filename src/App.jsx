import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import Modal from './components/Modal/Modal'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [totalCookingTime, setTotalCookingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantToCook = (recipe)=>{
    const isWantToCookAlreadyAdded = wantToCook.some(
      newRecipe => newRecipe.id === recipe.id
    );
    if(!isWantToCookAlreadyAdded){
      const previous = [...wantToCook, recipe];
      setWantToCook(previous);
      toast.success(`${recipe.name} added successfully!`);
    }else{
      // document.getElementById('my_modal_2').showModal();
      toast.error(`${recipe.name} is already added!`)
    }   
    
  }

  const handleCooking = (toCook) =>{
    const remaining = wantToCook.filter(wantToCook => wantToCook.id !== toCook.id);
    setWantToCook(remaining);

    const isCookingAlreadyAdded = cooking.some(
      newRecipe => newRecipe.id === toCook.id
    );
    if(!isCookingAlreadyAdded){
      const addToCook = [...cooking, toCook]
      setCooking(addToCook);
    }else{
      document.getElementById('my_modal_2').showModal();
    } 

    setTotalCookingTime(totalCookingTime + toCook.preparing_time);
    setTotalCalories(totalCalories + toCook.calories);

    
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
          <Sidebar wantToCook={wantToCook} handleCooking={handleCooking} cooking={cooking} totalCookingTime={totalCookingTime} totalCalories={totalCalories}></Sidebar>

          {/* Already added Modal */}
          <Modal></Modal>
          <ToastContainer></ToastContainer>
        </div>
      </main>      
    </>
  )
}

export default App
