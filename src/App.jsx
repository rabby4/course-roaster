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
    const doneCourse = carts.find((item) => item.id == course.id);

    let intPrice = course.price;
    let intTime = course.timing;

    carts.forEach(item => {
      intTime = intTime + item.timing;
    })

    carts.forEach(item => {
      intPrice = intPrice + item.price
    })

    if(doneCourse){
      return toast(' You already complete the course')
    }else{
      
      if(intTime > 20){
        toast('You can not read anymore')
      }else{
        setCart([...carts, course]);
        setCreditHr(intTime);
        const remainingHr = 20 - intTime;
        setRemainingCredit(remainingHr);
        setPrice(intPrice);
      }

    }
  
  }

  return (
    <>
      <div className='container mx-auto my-20'>
        <div className='my-10'>
          <h1 className='text-4xl text-center font-bold'>Course Registration</h1>
        </div>
        <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-10 px-10 lg:px-0'>
          <Courses 
          cartHandler={cartHandler}></Courses>

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
