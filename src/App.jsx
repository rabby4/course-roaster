
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts';

function App() {

  const [carts, setCart] = useState([]);
  const [creditHr, setCreditHr] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const cartHandler = (course) =>{
    const newCart = [...carts, course];
    setCart(newCart);
  }

  const creditTime = time => {
    const newTime = (creditHr + time);
    if(newTime > 20){
      alert('you can not add more then 20')
    }else{
      setCreditHr(newTime);
    }
    
  }

  const remainingTime = time => {
    const newRemaining = (remainingCredit - time);
    if(newRemaining < 0){
      alert('You can not watch any more')
    }else{
      setRemainingCredit(newRemaining)
    }
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='my-8'>
          <h1 className='text-4xl text-center font-bold'>Course Registration</h1>
        </div>
        <div className='flex gap-10'>
          <Courses cartHandler={cartHandler} creditTime={creditTime} remainingTime={remainingTime}></Courses>
          <Carts carts={carts} creditHr={creditHr} remainingCredit={remainingCredit}></Carts>
        </div>
      </div>
      
      
    </>
  )
}

export default App
