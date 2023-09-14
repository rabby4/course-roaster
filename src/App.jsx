
import { useState } from 'react'
import './App.css'
import Cart from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'

function App() {

  const [carts, setCart] = useState([]);

  const cartHandler = (course) =>{
    const newCart = [...carts, course];
    setCart(newCart)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='my-8'>
          <h1 className='text-4xl text-center font-bold'>Course Registration</h1>
        </div>
        <div className='flex gap-10'>
          <Courses cartHandler={cartHandler}></Courses>
          <Cart carts={carts}></Cart>
        </div>
      </div>
      
      
    </>
  )
}

export default App
