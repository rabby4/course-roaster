
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='my-8'>
          <h1 className='text-4xl text-center font-bold'>Course Registration</h1>
        </div>
        <div className='flex gap-10'>
          <Courses></Courses>
          <Cart></Cart>
        </div>
      </div>
      
      
    </>
  )
}

export default App
