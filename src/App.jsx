import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [carts, setCart] = useState([]);
  const [creditHr, setCreditHr] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [prices, setPrice] = useState(0);

  const cartHandler = (course) =>{
    const doneCourse = carts.find((item) => item.id === course.id);
    if(doneCourse){
      return toast(' You already complete the course')
    }else{
      const newCart = [...carts, course];
      setCart(newCart);
    }
    
  }

  const creditTime = time => {
    const newTime = (creditHr + time);
    if(newTime > 20){
      return toast('you can not add more then 20')
    }else{
      setCreditHr(newTime);
    }
  }

  const remainingTime = time => {
    const newRemaining = (remainingCredit - time);
    if(newRemaining < 0){
      return toast('You can not watch any more')
    }else{
      setRemainingCredit(newRemaining)
    }
  }

  const coursePrice = price =>{
    const newPrice = (prices + price);
    setPrice(newPrice);
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='my-8'>
          <h1 className='text-4xl text-center font-bold'>Course Registration</h1>
        </div>
        <div className='flex gap-10'>
          <Courses 
          cartHandler={cartHandler} 
          creditTime={creditTime} 
          remainingTime={remainingTime} 
          coursePrice={coursePrice}></Courses>

          <Carts 
          carts={carts} 
          creditHr={creditHr} 
          remainingCredit={remainingCredit} 
          prices={prices}></Carts>
        </div>
      </div>
      <ToastContainer />
      
    </>
  )
}

export default App
